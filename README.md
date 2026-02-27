# Manga Downloader (macOS)

Manga Downloader is a macOS desktop app that downloads manga from supported websites and converts content into EPUB optimized for e-ink reading.

Supported services:
- `manga/in/ua` (`manga.in.ua`)
- `com-x.life` (`com-x.life`)

App interface languages:
- Ukrainian
- English
- Russian

## Documentation

GitHub Pages:
- Main: https://slabkin-alexey.github.io/manga-downloader-macos/
- English: https://slabkin-alexey.github.io/manga-downloader-macos/en/
- Ukrainian: https://slabkin-alexey.github.io/manga-downloader-macos/uk/
- Russian: https://slabkin-alexey.github.io/manga-downloader-macos/ru/

## Screenshots

1. Downloader screen (ready state)

![Screenshot 1](docs/assets/images/screenshot-1.png)

2. Service selection screen

![Screenshot 2](docs/assets/images/screenshot-2.png)

3. Active download with progress and logs

![Screenshot 3](docs/assets/images/screenshot-3.png)

## Features

- Service picker with two sources (`manga/in/ua`, `com-x.life`)
- URL input (single URL or URL queue)
- `manga/in/ua` search mode and URL download mode
- Chapter/volume filtering with range syntax (`1-2,4,10-12`)
- Optional custom EPUB cover image
- Conversion pipeline: download -> grayscale -> e-ink resize -> HEIC -> CBZ -> EPUB
- One EPUB output per volume
- `com-x.life` auth flow with in-app WebView login, cookie persistence, retry, reset login
- Real-time localized logs, clickable links, multi-level progress bars
- Start/Stop process control and cancellation
- Turbo mode with persisted performance profile and warning
- Completion alert + macOS system notification

## How It Works

1. Choose source service.
2. Enter URL(s) or search text (`manga/in/ua` only).
3. Optionally set chapter/volume filters and cover image.
4. Start processing.
5. For each chapter/page set, app runs:
   - download original image/archive
   - grayscale conversion (B/W)
   - e-ink resize (max 1080px height, no upscaling)
   - HEIC conversion
   - metadata cleanup where possible
   - packaging to CBZ and EPUB (per volume)

## Release Assets (1.0)

Latest 1.0 release page:
- https://github.com/slabkin-alexey/manga-downloader-macos/releases/tag/1.0

Assets:
- `Manga-Downloader-macOS-1.0.zip`
- `SHA256SUMS.txt`

Verify integrity:

```bash
shasum -a 256 -c SHA256SUMS.txt
```

## Troubleshooting

- Invalid/empty input: check URL list format and required fields.
- Filter errors: use only numbers and ranges separated by commas.
- `com-x.life` authorization needed: complete login in WebView or reset saved cookies.
- Conversion quality/performance: install `magick` (ImageMagick) for preferred conversion path.
- High CPU/temperature: disable Turbo mode.

## Questions and Suggestions

If you have questions or suggestions, send your request to:
- borunov.alexey.work@gmail.com

## Privacy and Legal

- The app processes URLs/content provided by the user.
- `com-x.life` auth cookies are stored for authenticated retry flow and can be reset by user action.
- Users are responsible for compliance with website terms and applicable copyright laws.
