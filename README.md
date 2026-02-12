# WS Redmine Theme

A modern, clean Redmine theme inspired by [Linear.app](https://linear.app) -- with full light and dark mode support.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Redmine 5.x](https://img.shields.io/badge/Redmine-5.x-green.svg)](https://www.redmine.org/)
[![Redmine 6.x](https://img.shields.io/badge/Redmine-6.x-green.svg)](https://www.redmine.org/)

---

## Features

- **Linear.app-inspired design** -- minimal, typography-first interface with generous whitespace
- **Light and dark mode** -- auto-detects your system preference via `prefers-color-scheme`
- **Manual toggle** -- sun/moon icon in the top-right menu for on-demand switching
- **Inter font** -- clean 13px base typography with tight letter-spacing
- **Purple accent color** (#5E6AD2) -- buttons, links, focus rings, and active states
- **Minimal borders and subtle shadows** -- clean depth without visual clutter
- **Comprehensive styling** -- covers all Redmine pages: issues, wiki, forums, Gantt, calendar, admin, login, and more
- **Responsive design** -- works across desktop and smaller screens
- **No core modifications** -- pure CSS overrides and a small JS file; no Redmine files are touched
- **Plugin compatible** -- tested with popular plugins including Kanban and Wiki ACL

## Screenshots

<!-- TODO: Add screenshots -->
<!-- Recommended screenshots to include:
  - Issues list (light mode)
  - Issue detail view
  - Wiki page
  - Dark mode overview
  - Login page
-->

*Screenshots coming soon.*

## Installation

### Option 1: Git Clone

```bash
cd /path/to/redmine/public/themes
git clone https://github.com/wsagency/ws-redmine-theme.git ws-theme
```

### Option 2: Manual Download

1. Download the [latest release](https://github.com/wsagency/ws-redmine-theme/releases) or clone this repository.
2. Copy the theme folder into your Redmine installation:

   ```
   /path/to/redmine/public/themes/ws-theme/
   ```

3. Ensure the directory structure looks like this:

   ```
   public/themes/ws-theme/
   ├── stylesheets/
   │   └── application.css
   ├── javascripts/
   │   └── theme.js
   ├── README.md
   └── LICENSE
   ```

### Activate the Theme

1. Restart Redmine (or simply refresh the page if running in development mode).
2. Navigate to **Administration > Settings > Display > Theme**.
3. Select **WS Theme** from the dropdown.
4. Click **Save**.

## Configuration

### Dark Mode

The theme automatically detects your operating system's color scheme preference. No configuration is needed -- if your OS is set to dark mode, the theme follows.

### Manual Toggle

A sun/moon toggle icon appears in the top-right account menu area. Click it to switch between light and dark mode manually. Your preference is stored in the browser's `localStorage` and will persist across sessions.

### CSS Variables

The theme uses CSS custom properties (variables) for all colors, spacing, and typography. To customize, override the variables in `:root`:

```css
:root {
  --bg-accent: #5E6AD2;        /* Primary accent color */
  --bg-accent-hover: #4E5BBD;  /* Accent hover state */
  --font-size-base: 13px;      /* Base font size */
  --radius-md: 6px;            /* Default border radius */
}
```

Dark mode variables are defined inside `@media (prefers-color-scheme: dark)` and on the `body.theme-ws-dark` class. Override them in the same selectors to customize the dark palette.

## Theme Structure

```
ws-theme/
├── stylesheets/
│   └── application.css    # All theme styles (loaded automatically by Redmine)
├── javascripts/
│   └── theme.js           # Dark mode detection and manual toggle
├── docs/
│   └── SPEC.md            # Full design specification
├── README.md
└── LICENSE
```

Redmine automatically loads `stylesheets/application.css` after its own CSS, so all styles work as overrides. The `javascripts/theme.js` file is also loaded automatically by Redmine's theme engine.

## Compatibility

| Requirement | Supported |
|---|---|
| Redmine 5.0+ | Yes |
| Redmine 6.0+ | Yes |
| Chrome (latest) | Yes |
| Firefox (latest) | Yes |
| Safari (latest) | Yes |
| Edge (latest) | Yes |

### Plugin Compatibility

The theme is designed to be non-intrusive and works alongside popular Redmine plugins, including:

- Kanban board plugins
- Wiki ACL
- Other plugins that use standard Redmine markup

If you encounter a plugin compatibility issue, please [open an issue](https://github.com/wsagency/ws-redmine-theme/issues).

## Customization

### Changing the Accent Color

To replace the default purple accent with your brand color, update these variables at the top of `application.css`:

```css
:root {
  --bg-accent: #YOUR_COLOR;
  --bg-accent-hover: #YOUR_DARKER_COLOR;
  --bg-accent-subtle: #YOUR_VERY_LIGHT_COLOR;
  --border-focus: #YOUR_COLOR;
}
```

Make sure to update both the light and dark mode sections.

### Changing Typography

The theme defaults to Inter loaded from Google Fonts. To use a different font:

1. Replace the `@import` URL in `application.css` with your preferred font.
2. Update the `--font-family` variable.

### Disabling Dark Mode

To lock the theme to light mode only, remove or comment out the `@media (prefers-color-scheme: dark)` block in `application.css` and the toggle logic in `theme.js`.

## Contributing

Contributions are welcome. To get started:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-improvement`
3. Make your changes to `stylesheets/application.css` or `javascripts/theme.js`.
4. Test against a running Redmine instance (both light and dark modes).
5. Commit your changes: `git commit -m "Add my improvement"`
6. Push to your branch: `git push origin feature/my-improvement`
7. Open a Pull Request.

### Guidelines

- Keep all styles in the single `application.css` file.
- Avoid `!important` unless absolutely necessary to override Redmine defaults.
- Test with both Redmine 5.x and 6.x if possible.
- Ensure changes do not break existing plugin compatibility.
- Verify both light and dark modes render correctly.

## License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2026 [WS Agency](https://ws.agency)

## Credits

- Design inspired by [Linear.app](https://linear.app)
- [Inter](https://rsms.me/inter/) typeface by Rasmus Andersson
- Built by [WS Agency](https://ws.agency)
