/**
 * WS Redmine Theme — Dark Mode Detection & Toggle
 *
 * Auto-detects system color scheme preference and provides a manual
 * toggle button in Redmine's top-right account menu (#account-nav).
 *
 * localStorage key: 'ws-theme-mode' ('light' | 'dark' | 'auto')
 * Body classes: 'theme-ws-light' or 'theme-ws-dark'
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'ws-theme-mode';
  var CLASS_LIGHT = 'theme-ws-light';
  var CLASS_DARK = 'theme-ws-dark';
  var TRANSITION_CLASS = 'theme-transition';
  var TRANSITION_MS = 300;

  // Inline SVG icons (Feather-style, 16x16)
  var SUN_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" ' +
    'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>' +
    '<line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>' +
    '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>' +
    '<line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>' +
    '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  var MOON_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" ' +
    'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  /** Read stored preference, defaulting to 'auto'. */
  function getStoredMode() {
    try {
      var val = localStorage.getItem(STORAGE_KEY);
      if (val === 'light' || val === 'dark' || val === 'auto') return val;
    } catch (e) { /* localStorage unavailable */ }
    return 'auto';
  }

  /** Persist the user's preference. */
  function setStoredMode(mode) {
    try { localStorage.setItem(STORAGE_KEY, mode); } catch (e) { /* noop */ }
  }

  /** Return true if the system prefers dark mode. */
  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /** Determine the effective theme ('light' or 'dark'). */
  function resolveTheme(mode) {
    if (mode === 'dark') return 'dark';
    if (mode === 'light') return 'light';
    return systemPrefersDark() ? 'dark' : 'light';
  }

  /** Apply the resolved theme to <body>. */
  function applyTheme(theme, animate) {
    var body = document.body;
    if (!body) return;
    if (animate) {
      body.classList.add(TRANSITION_CLASS);
      setTimeout(function () { body.classList.remove(TRANSITION_CLASS); }, TRANSITION_MS);
    }
    body.classList.remove(CLASS_LIGHT, CLASS_DARK);
    body.classList.add(theme === 'dark' ? CLASS_DARK : CLASS_LIGHT);
    updateToggleIcon(theme);
  }

  var toggleLink = null;

  /** Parse an SVG string into a DOM element via DOMParser. */
  function parseSvg(svgString) {
    var doc = new DOMParser().parseFromString(svgString, 'image/svg+xml');
    return document.adoptNode(doc.documentElement);
  }

  /** Update the icon inside the toggle to match current theme. */
  function updateToggleIcon(theme) {
    if (!toggleLink) return;
    while (toggleLink.firstChild) toggleLink.removeChild(toggleLink.firstChild);
    // Sun shown in dark mode (click to go light), moon in light mode (click to go dark)
    toggleLink.appendChild(parseSvg(theme === 'dark' ? SUN_SVG : MOON_SVG));
    toggleLink.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  /** Cycle through modes: auto -> dark -> light -> auto. */
  function cycleMode() {
    var current = getStoredMode();
    var next = current === 'auto' ? 'dark' : current === 'dark' ? 'light' : 'auto';
    setStoredMode(next);
    applyTheme(resolveTheme(next), true);
  }

  /** Create and insert the toggle <li> into #account-nav ul. */
  function createToggle() {
    var nav = document.querySelector('#account-nav ul');
    if (!nav) return;

    var li = document.createElement('li');
    li.id = 'ws-theme-toggle';

    var a = document.createElement('a');
    a.href = '#';
    a.title = 'Toggle theme';
    a.style.cssText =
      'display:inline-flex;align-items:center;justify-content:center;' +
      'vertical-align:middle;opacity:0.7;transition:opacity 0.15s ease;';
    a.addEventListener('mouseenter', function () { a.style.opacity = '1'; });
    a.addEventListener('mouseleave', function () { a.style.opacity = '0.7'; });
    a.addEventListener('click', function (e) {
      e.preventDefault();
      cycleMode();
    });

    toggleLink = a;
    li.appendChild(a);
    nav.insertBefore(li, nav.firstChild);
  }

  /** Re-apply theme when the OS preference changes (only in 'auto' mode). */
  function listenForSystemChanges() {
    if (!window.matchMedia) return;
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var handler = function () {
      if (getStoredMode() === 'auto') applyTheme(resolveTheme('auto'), true);
    };
    if (mql.addEventListener) mql.addEventListener('change', handler);
    else if (mql.addListener) mql.addListener(handler); // Safari < 14
  }

  function init() {
    var mode = getStoredMode();
    applyTheme(resolveTheme(mode), false);
    createToggle();
    updateToggleIcon(resolveTheme(mode));
    listenForSystemChanges();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
