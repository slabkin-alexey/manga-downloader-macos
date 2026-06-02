# Manga Downloader 2.1.2

## English

This update focuses on EPUB output control and stronger validation before packaging.

### What's new
- Removed automatic EPUB splitting by file size. EPUB files are no longer split even when they are larger than 190 MB.
- Added the `Merge manga into 1 file` option near Turbo mode.
- When merging is enabled, all downloaded volumes for a manga are packaged into one large EPUB.
- EPUB pages now render manga images without margins while preserving aspect ratio.

### Validation
- Before EPUB packaging, the app validates downloaded chapters and page counts against the source data.
- After volume EPUB generation, the app validates that the number of produced EPUB files matches the expected downloaded volume count.
- Before merged EPUB generation, the app validates that the files being merged match the expected volume count.
- Packaging stops with a clear error when counts do not match.

### Stability and maintenance
- Fixed the in-app update sheet layout so release information stays readable and action buttons remain visible.
- Release notes shown inside the app are cleaned up from raw Markdown syntax.
- Updated tests for no-split EPUB behavior, merged EPUB output, source-count validation, and full-page EPUB layout.
- Fixed Swift 6 sendability issues in the manga engine service protocols and test mocks.
- Full test suite was re-run successfully before release.

### Installer
- The macOS installer package for version 2.1.2 is signed with Developer ID Installer.

### Supported services
- Manga.in.ua
- Com-X.Life

### System requirements
- macOS 15.0 or later

### Packaging for this release
- Version: `2.1.2`
- Installer package: `Manga-Downloader-macOS-2.1.2.pkg`
