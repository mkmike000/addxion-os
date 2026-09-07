#!/usr/bin/env bun
/**
 * Design-Sync: UI-Änderung ohne Wiki-Entscheidung blockiert das Turn-Ende.
 * Config: Consumer `.cursor/hooks/design-sync.json`
 * Aufruf: design-sync.mjs session-start | after-edit | stop
 */
import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const mode = process.argv[2] ?? "stop";

function readStdin() {
	return new Promise((resolve) => {
		const chunks = [];
		process.stdin.on("data", (c) => chunks.push(c));
		process.stdin.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
		process.stdin.on("error", () => resolve(""));
	});
}

function out(obj) {
	process.stdout.write(JSON.stringify(obj));
}

function failOpen() {
	out({});
}

function loadConfig(cwd) {
	const p = path.join(cwd, ".cursor/hooks/design-sync.json");
	if (!fs.existsSync(p)) return null;
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function relPosix(from, abs) {
	return path.relative(from, abs).split(path.sep).join("/");
}

function isWatched(rel, cfg) {
	const prefixes = cfg.watchPrefixes ?? [];
	const ext = cfg.watchExt ?? [".css", ".astro", ".tsx"];
	if (!ext.some((e) => rel.endsWith(e))) return false;
	return prefixes.some((pre) => rel === pre.replace(/\/$/, "") || rel.startsWith(pre));
}

function isWikiFile(abs, wikiRoot, wikiFiles) {
	const rel = relPosix(wikiRoot, abs);
	return wikiFiles.includes(rel);
}

function hashes(wikiRoot, wikiFiles) {
	const outH = {};
	for (const f of wikiFiles) {
		const fp = path.join(wikiRoot, f);
		try {
			outH[f] = createHash("sha256").update(fs.readFileSync(fp)).digest("hex");
		} catch {
			outH[f] = null;
		}
	}
	return outH;
}

function stateDir(cwd) {
	return path.join(cwd, ".cursor/hooks/state");
}

function statePath(cwd, id) {
	return path.join(stateDir(cwd), `${id}.json`);
}

function loadState(cwd, id) {
	const p = statePath(cwd, id);
	try {
		return JSON.parse(fs.readFileSync(p, "utf8"));
	} catch {
		return { ui: [], wiki: [], snapshot: null, dirty: null };
	}
}

function saveState(cwd, id, state) {
	const dir = stateDir(cwd);
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(statePath(cwd, id), JSON.stringify(state));
}

function conversationId(payload) {
	return payload.conversation_id || payload.session_id || "default";
}

function hashesChanged(a, b) {
	if (!a || !b) return false;
	for (const k of Object.keys({ ...a, ...b })) {
		if (a[k] !== b[k]) return true;
	}
	return false;
}

function watchedDirtyMap(cwd, cfg) {
	let names = "";
	try {
		names = `${execSync("git diff --name-only HEAD", {
			cwd,
			encoding: "utf8",
			stdio: ["ignore", "pipe", "ignore"],
		})}\n${execSync("git ls-files --others --exclude-standard", {
			cwd,
			encoding: "utf8",
			stdio: ["ignore", "pipe", "ignore"],
		})}`;
	} catch {
		return {};
	}
	const map = {};
	for (const rel of names.split("\n").map((s) => s.trim()).filter(Boolean)) {
		if (!isWatched(rel, cfg)) continue;
		try {
			map[rel] = createHash("sha256")
				.update(fs.readFileSync(path.join(cwd, rel)))
				.digest("hex");
		} catch {
			map[rel] = null;
		}
	}
	return map;
}

function instanzPath(cwd, id) {
	return path.join(stateDir(cwd), `${id}.instanz`);
}

const cwd = process.cwd();
const cfg = loadConfig(cwd);
if (!cfg) {
	failOpen();
	process.exit(0);
}

const wikiRoot = path.resolve(cwd, cfg.wikiRoot ?? "../addxion-os");
const wikiFiles = cfg.wikiFiles ?? ["wiki/design.md"];
const raw = await readStdin();
let payload = {};
try {
	payload = raw.trim() ? JSON.parse(raw) : {};
} catch {
	failOpen();
	process.exit(0);
}

const id = conversationId(payload);

if (mode === "session-start") {
	const state = {
		ui: [],
		wiki: [],
		snapshot: hashes(wikiRoot, wikiFiles),
		dirty: watchedDirtyMap(cwd, cfg),
	};
	saveState(cwd, id, state);
	failOpen();
	process.exit(0);
}

if (mode === "after-edit") {
	const abs = payload.file_path;
	if (typeof abs !== "string") {
		failOpen();
		process.exit(0);
	}
	const state = loadState(cwd, id);
	if (!state.snapshot) state.snapshot = hashes(wikiRoot, wikiFiles);
	if (abs.startsWith(wikiRoot) && isWikiFile(abs, wikiRoot, wikiFiles)) {
		const rel = relPosix(wikiRoot, abs);
		if (!state.wiki.includes(rel)) state.wiki.push(rel);
	} else {
		const rel = relPosix(cwd, abs);
		if (isWatched(rel, cfg) && !state.ui.includes(rel)) state.ui.push(rel);
	}
	saveState(cwd, id, state);
	failOpen();
	process.exit(0);
}

if (mode === "stop") {
	if (payload.status && payload.status !== "completed") {
		failOpen();
		process.exit(0);
	}
	const state = loadState(cwd, id);
	const gitDirtyThisSession =
		state.dirty != null && hashesChanged(state.dirty, watchedDirtyMap(cwd, cfg));

	const uiTouched = (state.ui?.length ?? 0) > 0 || gitDirtyThisSession;
	const wikiTouched =
		(state.wiki?.length ?? 0) > 0 || hashesChanged(state.snapshot, hashes(wikiRoot, wikiFiles));
	const instanz = fs.existsSync(instanzPath(cwd, id));

	if (!uiTouched || wikiTouched || instanz) {
		failOpen();
		process.exit(0);
	}

	const loop = Number(payload.loop_count ?? 0);
	if (loop >= 2) {
		failOpen();
		process.exit(0);
	}

	const files = (state.ui ?? []).join(", ") || "UI/CSS (git, diese Session)";
	out({
		followup_message: [
			`Design-Sync: UI geändert (${files}), Wiki unverändert.`,
			`Grammatik/Hairline/Rail/CTA/Look gekippt → im gleichen Zug ../addxion-os/${wikiFiles.join(" oder ")} anpassen.`,
			`Nur Instanz (Abstand, Copy, Bugfix): schreibe .cursor/hooks/state/${id}.instanz mit einer Zeile: instanz: <warum Grammatik unverändert>.`,
			`Nicht überspringen. Der nächste Chat liest nur das Wiki.`,
		].join(" "),
	});
	process.exit(0);
}

failOpen();
