---
type: Data
title: Kumo Design Skill
description: Rohaufnahme des Cloudflare kumo-design Agent-Skills. Keine Folgerung.
status: draft
sources:
  - id: kumo-skill-page
    resource: https://kumo-ui.com/skill/
    title: Design skill — Kumo
  - id: kumo-skill-md
    resource: https://github.com/cloudflare/kumo/blob/main/skills/kumo-design/SKILL.md
    title: skills/kumo-design/SKILL.md
---

Datum der Aufnahme: 2026-08-27

Install: `npx skills add cloudflare/kumo@kumo-design`. Lokal: `~/.agents/skills/kumo-design`.

Kein „deshalb“. Aussage nach Verdichtung in `wiki/design.md`.

---

name: kumo-design
description: Cloudflare product design guidance. Use when designing, implementing, or reviewing Cloudflare dashboard interfaces, Kumo UI, responsive styling, dialogs, or frontend tests.

# Cloudflare Design

Apply these rules when designing, implementing, or reviewing Cloudflare product interfaces. Follow recommended examples and avoid patterns marked as examples to avoid.

## Rules

### `content-text-size` Use 14px for content text

All content text—body, buttons, data, other interactables—must be 14px in size. 16px and above are restricted to headings and subheadings.

### `heading-case` Always sentence case headings

Never capitalize or uppercase headings. Product names must be title-cased.

### `font-tracking` Never change the font's tracking

Do not use the `tracking-*` classes to change the spacing between characters.

### `font-weight` Never use `font-bold`

Use `font-semibold` for headings and `font-medium` for bold inline text.

### `related-text-spacing` Put related text closer together

Related text should have smaller spacing around it than the content it belongs to.

### `text-spacing` Optically align spacing around text

Spacing around text should take into account its line height. Typically this means vertical spacing should be slightly smaller than horizontal.

### `hover-color-transitions` Never transition colors for hover states

Color changes on hover must be immediate. Transitions on fast interactions make the UI feel sluggish.

### `shadow-borders` Never use borders with drop shadows

Use `ring ring-kumo-line` to create a transparent border that maintains sharp edges.

### `concentric-border-radius` Use concentric border radii

When borders or rings are 8px or less apart, their corner radii must be mathematically concentric: outer radius = inner radius + padding.

### `icon-alignment` Align icons with the first line of text

Inline icons must be optically the same size as and be center-aligned with text. Use `h-lh flex items-center` for multi-line alignment.

### `inline-monospace-size` Reduce the font size of inline monospaced text

Monospaced text should have a slightly smaller font size (~0.9em) when mixed with regular text.

### `sticky-borders` Use `border` to separate sticky elements from the content

### `collapse-content-size` Maintain content size during collapse animations

Collapsible content must maintain its content size while closing to avoid its content shifting during animations.

### `layer-card-nesting` Never stack `LayerCard` on top of one another

### `dialog-rendering` Never conditionally render dialogs

Conditionally rendering dialogs disables their open/close animation. Use the `open` prop to determine if a dialog should be visible or not.
