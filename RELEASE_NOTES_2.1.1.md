# Manga Downloader 2.1.1

## English

This update focuses on stability, cleaner output, and a smoother overall experience.

### What's new
- Improved app responsiveness during long operations like downloading, packaging, and conversion.
- Better background task handling to reduce UI slowdowns while the app is busy.
- Refined progress and logging behavior so the app feels more consistent during large downloads.
- Updated in-app update flow with direct installer download support.
- Improved tutorial and guidance screens for first-time use.
- Cleaner release documentation and installation flow.

### Downloading and output
- The current workflow is now more streamlined and focused on the actual output path used in the app.
- EPUB generation flow was cleaned up to remove outdated processing steps that were no longer part of the active behavior.
- Intermediate release artifacts and packaging behavior were updated for a more reliable final installer build.

### Stability and maintenance
- Removed obsolete internal processing code that was no longer used.
- Cleaned up old paths and legacy logic to reduce complexity and improve reliability.
- Updated and aligned tests around the current app behavior.
- Full test suite was re-run successfully before release.

### Installer
- The macOS installer package for version 2.1.1 is signed and notarized.
- Installation should now work cleanly on supported Macs without the usual unknown developer warnings.

### Supported services
- Manga.in.ua
- Com-X.Life

### System requirements
- macOS 15.0 or later

### Packaging for this release
- Version: `2.1.1`
- Installer package: `Manga-Downloader-macOS-2.1.1.pkg`
