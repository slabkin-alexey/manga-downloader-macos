# Manga Downloader 1.2

## English

### New UX Features
- Added manual update check action in footer (`Check updates`).
- Added "no updates available" alert for manual checks.
- Added Download History UI (popover) for both services.
- History now shows manga title, source URL, and timestamp of download.
- History entries are clickable and open the source page in browser.

### Kindle Mode and Performance Profile
- Added persistent Kindle Mode toggle (enabled by default).
- Added persistent Turbo Mode toggle.
- Both toggle states are saved across app restarts (`UserDefaults`).
- Improved toggle alerts so warnings/info are shown only on user-triggered changes (not on initial view load).

### Download and Conversion Pipeline
- Unified behavior for both services based on Kindle Mode state.
- If Kindle Mode is ON: keeps full optimization flow (B/W conversion, resolution optimization, HEIC optimization).
- If Kindle Mode is OFF:
  - skips Kindle optimization flow
  - keeps original downloaded image formats
  - builds CBZ/EPUB without B/W and HEIC optimization steps
  - preserves cover image in original format
- Page-level progress bar is hidden when Kindle optimization is disabled.

### Input and UI Improvements
- Refined multi-link input sizing behavior:
  - queue input grows to a limited height (2 visible link rows)
  - then scrolls instead of over-expanding
- Kept UI controls aligned between MangaInUa and Com-X flows.

### Localization Updates
- Added/updated localization keys for supported locales.
- Included new strings for update checks, Kindle mode alerts, and history UI.

### Tests
- Expanded automated coverage with new/updated tests for:
  - first-launch Telegram reporting
  - app update checker behavior
  - toggle alert decision logic
  - Kindle optimization behavior in downloader
  - performance profile persistence
  - shared utility and UI smoke scenarios
