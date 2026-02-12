# CLAUDE.md — ws-redmine-theme

## CRITICAL DISCOVERY (2026-02-12)
Redmine themes DO NOT replace the default CSS. They OVERRIDE it!
Built-in themes (alternate, classic) use `@import url(/application.css);` at the top
to include Redmine's 2587-line default CSS, then add only ~60-95 lines of overrides.

Our previous approach (writing a complete 7500+ line CSS) was WRONG and broke everything.

**CORRECT APPROACH:**
1. Start with `@import url(/application.css);` to include Redmine's defaults
2. Add ONLY visual overrides (colors, fonts, shadows, border-radius)
3. Keep it small — 200-400 lines max
4. NEVER redefine layout, structure, or element sizing
5. Reference: `docs/redmine-default.css` is the full Redmine 6.1 default CSS (2587 lines)

## Project
Modern Linear.app-inspired theme for Redmine with light and dark mode.
Open source, MIT license. https://github.com/wsagency/ws-redmine-theme

## How Redmine Themes Work

Themes live in `public/themes/<name>/`. Redmine automatically loads:
- `stylesheets/application.css` — AFTER Redmine's own CSS (overrides)
- `javascripts/theme.js` — loaded automatically
- `favicon/favicon.ico` — optional

**We do NOT modify any Redmine core files. Only CSS overrides.**

Users activate the theme in: Administration → Settings → Display → Theme

## Theme Structure
```
stylesheets/
  application.css              — main CSS (ALL overrides in one file)
javascripts/
  theme.js                     — dark mode detection + toggle
```

## Design Reference
See `docs/SPEC.md` for complete design specification including:
- Color palette (light + dark)
- Typography (Inter font, 13px base)
- Spacing, shadows, border radius
- Every Redmine element that needs styling

## Key Design Principles (Linear.app)
1. **13px base font** — Inter font, tight letter-spacing (-0.01em)
2. **Purple accent** (#5E6AD2) — buttons, links, focus states
3. **Minimal borders** — 1px, very light, not everywhere
4. **Subtle shadows** — barely there, just enough depth
5. **Generous whitespace** — don't cram elements
6. **Dark mode** — #1C1C1E bg, NOT pure black

## Important CSS Selectors (Redmine)
```css
/* Layout */
#wrapper, #header, #main, #sidebar, #content, #footer
#top-menu, #account-nav, #main-menu, #project-menu

/* Issues */
table.issues, table.list, tr.issue
td.subject, td.status, td.priority, td.assigned_to
.issue .subject h3, .issue .details

/* Forms */
input[type="text"], select, textarea, input[type="submit"]
.tabular label, .tabular p

/* Buttons */
input[type="submit"], a.button, .contextual a

/* Flash */
#flash_notice, #flash_error, #flash_warning

/* Wiki */
div.wiki, .wiki h1-h6, .wiki pre, .wiki code

/* Context menu */
#context-menu

/* My page */
.mypage-box, #block-container

/* Gantt */
.gantt_hdr, .gantt_subjects

/* Calendar */
table.cal

/* Login */
#login-form
```

## Critical Rules
1. **Specificity** — selectors must override Redmine defaults without !important if possible
2. **No layout breakage** — sidebar should stay right, main menu should stay working
3. **Backward compatible** — must work with Redmine 5.x and 6.x
4. **Plugin compatible** — must not break common plugins (our kanban plugin, wiki-acl, etc.)
5. **Performance** — one CSS file, minimize @imports, optimize font loading
