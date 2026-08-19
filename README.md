# SI PEI — Interactive Operations World

An editorial, interactive portfolio exploring the progression from operations to systems to AI.

## What is included

- Responsive editorial layout and navigation
- Lightweight Three.js digital-persona placeholder
- Cursor-following head/eyes, click greeting, and scroll-aware character states
- Content-driven About, Career, Projects, Thinking, Interests, and Contact sections
- Detailed Amazon and Returns case studies
- Interactive inventory exception investigation
- Simulated AI 3PL Operations Copilot interface
- Mobile and reduced-motion fallbacks

## Content updates

Professional content lives in `/content`. Replace or verify all values marked `TODO_CONTENT`, `EDITABLE CONTENT`, or `DEMO` before public use.

## Replacing the character

The current character is a procedural placeholder. A custom GLB can replace `components/avatar/SiAvatar.tsx` later while preserving the existing `AvatarState`, canvas, and controller interfaces.

## Local development

```bash
npm install
npm run dev
npm run build
```
