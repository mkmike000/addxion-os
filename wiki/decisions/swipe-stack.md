---
type: decision
title: Swipe-Stack
description: Motion plus Embla für Gesten und Slider in com und ai. Three.js später, nicht Default.
status: decided
owner: mike
updated: 2026-09-09
tags: [decision, design, frontend]
---

# Festlegung

Eine Gesture-Quelle pro Oberfläche. Gilt für Repos `addxion-com` und `addxion-ai`.

| Schicht | Werkzeug | Wann |
| --- | --- | --- |
| Native | CSS `scroll-snap`, Overflow | Reicht für einfache horizontale Streifen |
| Slider / Slides | Embla (`embla-carousel-react`) | Testimonials, Case-Reihen, Tool-Strips, Onboarding-Steps |
| Ein Element folgt dem Finger | Motion (`motion/react`, heute `framer-motion` in beiden package.json) | Drag-to-dismiss, Karten wegwischen, Page-Transition, Press |
| Sheet / Drawer | vaul (bereits in addxion-ai) | Bottom-Sheet. Keine zweite Drawer-Lib |
| Controls | React Aria | Fokus, Keyboard. Nicht durch Gesture-Libs ersetzen |
| 3D / Canvas | Three.js (+ R3F wenn React) | Später, nur Lab oder eine Signature-Szene. Nicht Service-Cards |

Import-Ziel: eine Motion-Linie. Neue Dateien `from "motion/react"` sobald der Package-Name gezogen wird. Nicht `framer-motion` *und* `motion` parallel.

# Use-Cases

| Use-Case | Ort | Stack |
| --- | --- | --- |
| Testimonials / Case-Carousel | com | Embla, Island hydriert |
| Projekt-Masonry bleibt Raster | com `/projekte/` | kein Slider |
| Compare / Before-After | com `/neon/frames/` | Hairline-Split, kein Slider ([addxion-com](../platforms/addxion-com.md)) |
| Hero-Claim bleibt statisch | com Start | kein Swipe, 100dvh |
| Karte wegwischen, Stack | ai Onboarding / Lab | Motion `drag="x"` |
| Horizontale Tool-Strips | ai | Embla `align: start`, optional `dragFree` |
| Bottom-Sheet | ai | vaul |
| Chat-Scroll | ai | `@addxion/behavior`, kein Embla |
| Overlay / Dialog | beide | Motion Tokens 150/200/300ms, nicht Scale von 0 ([Design](../design.md#motion)) |
| Multi-Touch-Canvas (Pinch+Drag+Wheel) | nur wenn nötig | `@use-gesture/react` |
| 3D-Coverflow, virtuelle Slides | Ausnahme | Swiper — nur mit Begründung |
| WebGL / 3D-Szene | später Lab oder eine Marketing-Signature | Three.js; lazy, `prefers-reduced-motion` = Standbild |

# Three.js (Absicht, nicht jetzt)

Gewollt. Kein Default auf Leistungs- oder Produktkarten. [Design](../design.md) bleibt: keine 3D-Service-Cards.

Regeln wenn es kommt:

- Eine Szene, nicht pro Seite eine Engine.
- Dynamic Import, nicht im kritischen Pfad von com-Start.
- Tokens / Monochrom, kein Showcase-Look fremder Demos.
- Reduced Motion = statisches Frame oder CSS.
- React-Tree: `@react-three/fiber` + `@react-three/drei` nur in der Island/Route, die 3D braucht.
- Kein GSAP-Zwang nur für 3D. Timeline dort, wo Three die Uhr führt.

# Nicht tun

- Swiper als Default.
- Keen, Splide, Flickity neben Embla.
- react-spring plus use-gesture parallel zu Motion.
- Zweite Motion-Linie.
- 3D als Deko auf jeder Card.
- Gesture-Lib statt React Aria für Form Controls.

# Repos (Ist 2026-09-09)

- addxion-com: Astro 7, React-Islands, `framer-motion` ^12.23.
- addxion-ai: TanStack Start, `framer-motion` ^12.38, vaul.
- Embla noch nicht in den package.json — nachziehen wenn der erste Slider gebaut wird.
