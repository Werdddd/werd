# Handoff: Portfolio Website — "Industry" Direction

## Overview
A personal portfolio site for Andrew Emmanuel Robles, Software Engineer & UI/UX Designer. Single scrolling page: nav, hero, about, 5 project case studies, skills/tools, work experience timeline, testimonials, writing/blog list, contact form, footer. This handoff covers the **Industry** visual direction (one of three explored) — a technical, blueprint/wireframe aesthetic.

## About the Design Files
The files here are **design references built in HTML/CSS** (a prototyping tool's component format, opened directly in a browser) — not production code to copy verbatim. Recreate this design in your actual codebase's stack (React, Vue, Next.js, plain HTML, whatever the project already uses), using its existing component patterns, build tooling, and asset pipeline. Treat `Portfolio-Industry.dc.html` and `styles.css` as the visual and structural spec, and `portfolio-data.js` as the content model to port into whatever data layer you use (props, CMS, JSON, etc).

## Fidelity
**High-fidelity.** Colors, type, spacing and component styling are final — reproduce them pixel-for-pixel. Copy (headings, body text, project descriptions, testimonials) is placeholder content the user will swap in; keep the same structure/length when placing real content.

## Visual Direction — "Industry"
Steel-blue technical wireframe aesthetic: light paper-grey ground, condensed headings, a strict modular grid, and every card/figure/primary button drawn as a "blueprint" object — square corners, hairline border, small "+" registration marks at all four corners. Cards and images stay transparent line drawings (no fill); the primary button is the one solid, filled object on the page. Photography is duotoned into the steel accent.

**Do:** keep the grid visible (equal-width cells, strong rhythm), condense headings, duotone every photo, corner-mark every framed card/button/figure.
**Don't:** round any corner, fill a card/figure with a surface color, use thick icon strokes, add any color beyond the one steel accent.

## Design Tokens
- **Colors:** background `#f2f2f3`, surface `#e9e9ea`, text `#1d1f20`, accent (steel blue) `#5980a6`. Full 100–900 tonal ramps for neutral/accent are in `styles.css` `:root` — use the ramp step, never hand-pick a shade. Light steps (100–300) for tints/hovers, 500 = base, 700–900 for text-on-tint and pressed states.
- **Typography:** headings in **Barlow Condensed** (weight 600), body in **Barlow** (400/500/700), loaded from Google Fonts. Scale: h1 42px, h2 32px, h3 25px, h4 20px, h5 16px, h6 13px (uppercase, letter-spacing 0.08em). Body 15px/1.55.
- **Spacing scale** (0.85× density): `--space-1` 3.4px … `--space-8` 27.2px (see `styles.css`).
- **Radius:** 4px base (`--radius-md`), but the blueprint frame system overrides cards/buttons/inputs back to **0 (square)** — see `.blueprint` and the "blueprint frame" override block at the bottom of `styles.css`.
- **Shadows:** `--shadow-sm/md/lg`, used sparingly (this system prefers line-drawn borders over elevation).
- **Icons:** Lucide, stroke-width 1.5.
- **Focus/hover:** `:focus-visible` = 2px solid accent outline, 2px offset. Buttons/inputs get accent-ramp hover/active tints (see `styles.css`, no browser defaults).

## Key Component Patterns
- **`.blueprint`** + four `<i class="corner tl|tr|bl|br">` children: the wireframe frame. Apply to every card, framed image and the primary button. Draws a hairline border plus a small "+" mark at each corner (CSS-only, no images).
- **`.duotone`**: wraps any `<img>`/image placeholder; overlays a `color-mix` accent wash in `mix-blend-mode: color` for the steel-tinted photo treatment.
- **`.card` / `.card-kicker` / `.card-title` / `.card-body` / `.card-meta`**: content card internals (paired with `.blueprint` for the frame — cards have no fill/background of their own in this system).
- **`.btn .btn-primary`** (solid accent fill — the one filled object on the page), **`.btn-secondary`** (bordered), **`.btn-ghost`** (text-only, accent color).
- **`.tag .tag-accent / .tag-outline / .tag-neutral`**: small pill labels for skills/stack tags.
- **`.field`, `.input`**: form fields (contact form) — native elements, no JS required for styling.
- **`.nav`, `.nav-brand`**: header bar.
Full class reference and states are documented in `styles.css` comments; view `Portfolio-Industry.dc.html` for markup usage of each.

## Screens / Sections (single scrolling page)
1. **Nav** — flush brand mark left ("Andrew Robles"), inline text links (Work / About / Skills / Experience / Writing), one `.btn-primary` "Contact" pinned right.
2. **Hero** — 2-column grid (≈55/45 split). Left: eyebrow (h6, accent), large h1 tagline (max ~11 characters per line), body paragraph (max 52ch), two buttons (primary "View work", secondary "Get in touch"). Right: a large blueprint-framed, duotoned portrait/workspace photo (4:5 aspect).
3. **About** — 2-column: left is eyebrow + h2 + bio paragraph; right is a blueprint-framed fact sheet (label/value rows: Based in, Focus, Currently, Stack) with hairline dividers between rows.
4. **Selected Work** — eyebrow + h2, then a 2-column grid of 5 project cards. Each card: blueprint frame, a duotoned 16:10 project screenshot on top (also blueprint-framed), kicker ("01 — case study"), h3 title, body blurb, row of 3 outline tags (tech stack).
5. **Skills & Tools** — eyebrow + h2, 4-column grid of blueprint-framed groups (Frontend / Backend / Design / Tooling), each a heading + one line of comma-separated skills.
6. **Experience** — eyebrow + h2, vertical stack of blueprint-framed rows; each row is a 2-column grid (180px date column + flexible role/org/description column).
7. **Testimonials** — eyebrow + h2, 3-column grid of blueprint-framed quote cards (quote text, name, role).
8. **Writing** — eyebrow + h2, stacked list of post links; each is a 2-column row (120px date + title/excerpt), separated by a hairline top border (no boxes here — deliberately lighter than the framed sections above).
9. **Contact** — 2-column: left is a blueprint-framed form (Name, Email, Message fields + full-width primary "Send message" button); right is a heading, supporting copy, and 3 secondary-button links (Email / LinkedIn / GitHub).
10. **Footer** — nav-style bar: copyright left, small "Built with…" note right, hairline top border.

## Interactions & Behavior
- Nav links are in-page anchor scrolls to each section's `id` (`#work`, `#about`, `#skills`, `#experience`, `#writing`, `#contact`).
- Buttons/inputs/links use only the themed hover/active/focus states defined in `styles.css` — no custom JS interactions beyond a working contact form (client should wire the form to your backend/email service of choice).
- No animation was specified for this direction beyond standard hover/focus transitions; motion can be layered in later (e.g. fade/slide-in on scroll) without changing the visual system.

## State Management
Static content page. The only state is the contact form's field values and submit status (idle/submitting/success/error) — implement per your stack's form-handling convention.

## Assets
All imagery is placeholder (drag-and-drop placeholder slots in the prototype, captioned e.g. "Project screenshot", "Portrait or workspace photo"). Replace with real photography/screenshots, then apply the `.duotone` treatment (or your framework's equivalent CSS filter) to match the steel-accent wash.

## Content Model
See `portfolio-data.js` for the full placeholder content: `name`, `role`, `tagline`, `bio`, `facts[]`, `projects[]` (5 items: num, title, blurb, tags[3]), `skills[]` (4 groups: name, items string), `experience[]`, `testimonials[]`, `posts[]`. Port this shape into your data layer; all copy is placeholder for the user to replace.

## Files
- `Portfolio-Industry.dc.html` — the full page markup/structure (view source for exact class usage per section).
- `styles.css` — the complete Industry design system: tokens (`:root` variables) + component classes.
- `portfolio-data.js` — placeholder content model (JS module, `export default {...}`).
- `image-slot.js` — the prototype's drag-and-drop image placeholder component (reference only — not needed in production; replace with your own `<img>`/asset pipeline).
