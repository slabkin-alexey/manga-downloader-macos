# Manga Downloader 2.1.3

## English

This update improves Turbo downloads, adds stricter packaging validation, and ships as an Apple Silicon only build.

### What's new
- Turbo mode now uses more concurrent download slots and higher-priority networking.
- Manga.in.ua page downloads now run concurrently while preserving page order in the archive.
- Packaging now stops if any expected page file is missing before CBZ/EPUB creation.
- Release builds are signed with hardened runtime and without debug entitlements.
- The installer package is notarized and stapled by Apple.

### Validation
- Before packaging a chapter or volume, the app checks that downloaded page files match the pages reported by the source.
- Before per-volume EPUB generation, the app validates chapter and page counts.
- Before merged EPUB generation, the app validates volume, chapter, and page counts.
- After per-volume EPUB generation, the app validates that produced EPUB volume count matches the expected volume count.

### Packaging for this release
- Version: `2.1.3`
- Build: `04.06.2026.17.27.53`
- Architecture: Apple Silicon only (`arm64`)
- Installer package: `Manga-Downloader-macOS-2.1.3.pkg`
- Notarization: accepted and stapled
