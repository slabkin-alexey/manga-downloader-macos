# Manga Downloader 2.1.4

## English

This update focuses on macOS 26 compatibility, safer packaging checks, and a cleaner download interface.

### What's new
- The app now requires macOS 26 and is built Apple Silicon only (`arm64`).
- Main panels and log surfaces were adapted for the macOS 26 Liquid Glass look.
- Turbo mode and "merge manga into one file" controls now use checkbox-style UI.
- The support button was removed from the main screen.
- Downloaded page recovery was improved: missing page images are retried before packaging.
- Volume progress tracking was corrected for multi-volume downloads.
- EPUB pages are packaged without margins while preserving image aspect ratio.

### Validation
- Before packaging, the app validates expected chapters and page files against source metadata.
- If an expected image is missing after downloading a volume, the app retries that page before EPUB creation.
- Per-volume EPUB generation validates the produced volume count against the requested volume list.
- Merged EPUB generation validates source volume count and local volume files before creating one large EPUB.

### Packaging for this release
- Version: `2.1.4`
- Build: `04.06.2026.22.51.10`
- Architecture: Apple Silicon only (`arm64`)
- Installer package: `Manga-Downloader-macOS-2.1.4.pkg`
- Signing: Developer ID Application and Developer ID Installer
