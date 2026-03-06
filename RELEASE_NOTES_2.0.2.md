# Manga Downloader 2.0.2

## English

### What's new today
- New installer format: the app is now distributed as a signed and notarized `.pkg` installer for smoother installation on macOS.
- ZIP package replaced: release artifacts now use `.pkg` instead of `.zip`.

### Download and conversion flow updates
- Simplified output workflow: downloads now follow a cleaner path to final output, focused on stable EPUB generation.
- Kindle optimization toggle removed from UI: the previous Kindle-specific optimization switch is no longer shown.
- Page progress is always visible in logs: conversion/download progress is now consistently shown in the output panel.

### Better reliability
- Unified book conversion logic across services (`Manga.in.ua` and `Com-X Life`) for more consistent behavior.
- Smarter converter handling: if Calibre tools are available, they can be used; otherwise the app falls back to the built-in EPUB conversion path.
- Improved final conversion stage handling for volume output and cleaner completion behavior.

### Com-X Life improvements
- Clearer error reporting when a chapter fails.
- More informative failure message if no volume could be completed, so issues are easier to understand.

### UI responsiveness improvements
- Heavy operations were moved away from the UI thread in key places (file/process checks and related background work), improving app responsiveness during long tasks.

### Log and text polish
- Friendlier and more consistent conversion/progress wording in logs.
- Localization strings updated (EN/RU/UKR) for clearer conversion-stage messages and output naming.

### Quality and tests
- Added/updated tests for:
  - conversion service behavior
  - EPUB output flow
  - output format handling
  - image processing path checks
  - engine flow consistency

### Packaging for this release
- Version: `2.0.2`
- Installer package: `Manga-Downloader-macOS-2.0.2.pkg`
