# WS Redmine Theme — Linear.app-Inspired Design

## Overview
A complete Redmine theme that transforms Redmine's UI into a modern, clean interface
inspired by Linear.app. Supports both light and dark modes.

## Linear.app Design Language

### Core Principles
1. **Minimal & Clean** — remove visual clutter, generous whitespace
2. **Typography-first** — Inter font, clear hierarchy, readable text
3. **Subtle depth** — very light shadows, thin borders, not flat but not skeuomorphic
4. **Fast & focused** — no unnecessary decoration, every element has purpose
5. **Smooth** — subtle transitions on hover/focus, nothing jarring

### Color Palette

#### Light Mode
```
--bg-primary: #FFFFFF           (main background)
--bg-secondary: #F9F9FB         (sidebar, secondary areas)
--bg-tertiary: #F3F3F6          (hover states, code blocks)
--bg-accent: #5E6AD2            (primary accent — Linear's purple/indigo)
--bg-accent-hover: #4E5BBD      (accent hover)
--bg-accent-subtle: #EEF0FF     (subtle accent bg for badges)

--text-primary: #1B1B1F         (main text — near black)
--text-secondary: #6B6F76       (labels, hints, meta)
--text-tertiary: #9CA0A8        (disabled, placeholder)
--text-on-accent: #FFFFFF       (text on accent bg)

--border-primary: #E8E8EC       (main borders)
--border-secondary: #F0F0F3     (subtle borders)
--border-focus: #5E6AD2         (focus ring)

--status-green: #4CAF50
--status-yellow: #F59E0B
--status-red: #EF4444
--status-blue: #3B82F6
--status-orange: #F97316

--priority-urgent: #EF4444      (red)
--priority-high: #F97316        (orange)
--priority-normal: #6B6F76      (grey)
--priority-low: #9CA0A8         (light grey)
```

#### Dark Mode
```
--bg-primary: #1C1C1E           (main background — very dark, NOT pure black)
--bg-secondary: #151517         (sidebar — slightly darker)
--bg-tertiary: #242428          (hover, code blocks)
--bg-accent: #5E6AD2            (same purple)
--bg-accent-hover: #6E7AE2
--bg-accent-subtle: #252640     (subtle accent)

--text-primary: #EDEDEF         (main text)
--text-secondary: #8A8F98       (labels, meta)
--text-tertiary: #5A5E66        (disabled)
--text-on-accent: #FFFFFF

--border-primary: #2E2E32       (main borders)
--border-secondary: #232326     (subtle borders)
--border-focus: #5E6AD2

(same status/priority colors, slightly adjusted for dark bg)
```

### Typography
```
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;

--font-size-xs: 11px;
--font-size-sm: 12px;
--font-size-base: 13px;        (Linear uses 13px base!)
--font-size-md: 14px;
--font-size-lg: 16px;
--font-size-xl: 20px;
--font-size-2xl: 24px;

--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;

--line-height-tight: 1.3;
--line-height-normal: 1.5;
--line-height-relaxed: 1.7;

--letter-spacing: -0.01em;     (Linear uses slightly tight tracking)
```

### Spacing
```
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
```

### Border Radius
```
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
```

### Shadows
```
/* Linear uses very subtle shadows */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
--shadow-lg: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
/* Dark mode: slightly stronger */
--shadow-sm-dark: 0 1px 2px rgba(0,0,0,0.2);
--shadow-md-dark: 0 2px 4px rgba(0,0,0,0.3);
```

## Redmine Theme Structure

A Redmine theme lives in `public/themes/<name>/` with:
```
ws-theme/
├── stylesheets/
│   └── application.css          (THE main file — Redmine loads this automatically)
├── javascripts/
│   └── theme.js                 (optional — loaded automatically by Redmine)
├── favicon/
│   └── favicon.ico              (optional)
└── README.md                    (not loaded by Redmine, for GitHub)
```

**IMPORTANT:** Redmine loads `stylesheets/application.css` AFTER its own CSS.
This means we OVERRIDE Redmine's default styles. We don't replace them.
All selectors must be specific enough to override Redmine's defaults.

## What To Style (COMPREHENSIVE)

### 1. Layout & Structure
- `#wrapper` — main container
- `#header` — top bar
- `#main` — content area
- `#sidebar` — right sidebar
- `#content` — main content
- `#footer` — footer
- `#top-menu` — top navigation links (logged in as, sign out, etc.)
- `#account-nav` — user menu

### 2. Top Header/Navigation
Linear-style: clean top bar, minimal, project name prominent
- Background: solid color (light: white, dark: #1C1C1E)
- Navigation links: clean, no heavy borders
- Active state: subtle bg highlight
- Project menu: horizontal tabs, clean underline active indicator

### 3. Sidebar
Linear-style: clean left sidebar feel (but Redmine has right sidebar)
- Background: slightly different from main content
- Headings: uppercase, small, grey, letter-spaced
- Links: clean, no underline, hover highlight
- Active filters: subtle accent color

### 4. Issues List (THE most important page)
Linear-style: clean table with minimal borders
- Row hover: subtle bg change
- Status: colored dot or pill badge
- Priority: icon or colored indicator
- Assignee: avatar or initials
- Tracker: subtle badge
- Clean column headers
- Alternating row colors: VERY subtle or none

### 5. Issue Detail
Linear-style: clean detail view
- Title: large, bold
- Fields: clean grid, labels left, values right
- Status/Priority/Assignee: badges/pills
- Description: clean typography, good code block styling
- Activity/Comments: timeline style, clean

### 6. Forms & Inputs
- Clean, rounded inputs
- Focus: accent-colored border/ring
- Labels: small, grey, above input
- Select dropdowns: styled
- Buttons: primary (accent), secondary (subtle), destructive (red)
- Button hover: smooth transition

### 7. Tables
- Clean, minimal borders (or no row borders, just bottom separator)
- Header: slightly bolder, no heavy bg
- Hover: subtle highlight
- Pagination: clean, small

### 8. Wiki
- Clean typography
- Code blocks: styled with mono font, subtle bg
- Headers: clear hierarchy
- Links: accent colored

### 9. Buttons & Actions
```css
/* Primary */
background: var(--bg-accent);
color: white;
border-radius: var(--radius-md);
padding: 6px 12px;
font-weight: 500;
font-size: 13px;
transition: all 0.15s ease;

/* Secondary */
background: var(--bg-tertiary);
color: var(--text-primary);
border: 1px solid var(--border-primary);

/* Hover: slightly darker/lighter */
```

### 10. Flash Messages/Notifications
- Clean, full-width, subtle bg color
- Success: green bg, green text
- Error: red bg, red text
- Warning: yellow bg
- Smooth slide-in or fade

### 11. My Page / Overview
- Clean card-based layout
- Dashboard widgets with subtle borders
- Activity feed: timeline style

### 12. Admin Pages
- Clean settings forms
- Tab navigation: Linear-style tabs

### 13. Login Page
- Centered card
- Clean input fields
- Accent-colored submit button
- Minimal, professional

### 14. Context Menus
- Right-click menu: clean, rounded, shadow
- Dropdown menus: same style

### 15. Gantt Chart & Calendar
- Clean colors
- Grid lines: very subtle

### 16. Modal/Dialog
- Clean overlay
- Rounded card
- Subtle shadow

## Dark Mode Implementation

### Strategy
Use `prefers-color-scheme: dark` media query AND a `.theme-dark` body class.

```css
:root {
  /* Light mode variables */
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode variables */
  }
}

/* Also support manual class toggle */
body.theme-ws-dark {
  /* Dark mode variables */
}
```

### Auto-Detection
The theme.js can:
1. Check `prefers-color-scheme`
2. Add `theme-ws-dark` or `theme-ws-light` class to body
3. Optionally add a toggle button in the header

## Font Loading

### Inter Font
Load via Google Fonts in application.css:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

Or for better performance, use `@font-face` with self-hosted files.

## Quality Checklist
- [ ] ALL Redmine pages styled (issues, wiki, forums, files, settings, admin, gantt, calendar)
- [ ] Light mode looks complete and polished
- [ ] Dark mode looks complete and polished
- [ ] All form elements styled (inputs, selects, checkboxes, radio, textareas)
- [ ] All buttons consistent
- [ ] Tables clean and readable
- [ ] Flash messages styled
- [ ] Login page styled
- [ ] Context menus styled
- [ ] No Redmine default blue/grey leaking through
- [ ] Responsive (works on smaller screens)
- [ ] Smooth transitions on interactive elements
- [ ] Code blocks in wiki properly styled
- [ ] Gravatar/avatar styling consistent
