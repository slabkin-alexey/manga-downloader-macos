# Manga Downloader (macOS)

Manga Downloader - это удобное приложение для macOS, которое помогает загружать мангу с поддерживаемых сайтов и конвертировать ее в EPUB, оптимизированный для e-ink чтения.
Поисковые фразы: `manga downloader macOS`, `EPUB manga converter`, `manga.in.ua downloader`, `com-x.life downloader`.

Поддерживаемые сервисы:
- `manga/in/ua` (`manga.in.ua`)
- `com-x.life` (`com-x.life`)

Языки интерфейса:
- Украинский
- English
- Русский

## Документация

GitHub Pages:
- Main: https://slabkin-alexey.github.io/manga-downloader-macos/
- English: https://slabkin-alexey.github.io/manga-downloader-macos/en/
- Ukrainian: https://slabkin-alexey.github.io/manga-downloader-macos/uk/
- Russian: https://slabkin-alexey.github.io/manga-downloader-macos/ru/

## Скриншоты

1. Экран выбора сервиса

![Screenshot 1](docs/assets/images/screenshot-1-v13.png)

2. Интерфейс открытого выбранного сервиса

![Screenshot 2](docs/assets/images/screenshot-2-v13.png)

3. Активная работа выбранного сервиса

![Screenshot 3](docs/assets/images/screenshot-3-v13.png)

## Что умеет приложение

- Выбор одного из двух источников (`manga/in/ua`, `com-x.life`)
- Ввод одного URL или очереди URL
- Режим поиска `manga/in/ua` и режим загрузки по URL
- Фильтрация глав/томов синтаксисом диапазонов (`1-2,4,10-12`)
- Опциональная пользовательская обложка EPUB
- Полный pipeline: download -> grayscale -> e-ink resize -> HEIC -> CBZ -> EPUB
- Отдельный EPUB для каждого тома
- Auth-поток `com-x.life` (in-app WebView login, cookies, retry, reset login)
- Локализованные логи, кликабельные ссылки и многоуровневый прогресс
- Start/Stop с корректной отменой и очисткой
- Turbo-режим для более высокой производительности (с предупреждением)
- Уведомление о завершении в приложении и в macOS

## Быстрый старт

1. Запустите приложение и выберите сервис.
2. Вставьте URL(ы) или введите текст для поиска (`manga/in/ua`).
3. При необходимости задайте фильтры глав/томов и обложку.
4. Нажмите Start.
5. Для каждого набора страниц выполняется:
   - download original image/archive
   - grayscale conversion (B/W)
   - e-ink resize (max 1080px height, no upscaling)
   - HEIC conversion
   - metadata cleanup where possible
   - packaging to CBZ and EPUB (per volume)

## Release Assets (2.0.1)

Страница релиза 2.0.1:
- https://github.com/slabkin-alexey/manga-downloader-macos/releases/tag/2.0.1

Файлы:
- `Manga-Downloader-macOS-2.0.1.zip`
- `RELEASE_NOTES_2.0.1.md`
- `SHA256SUMS.txt`

Проверка целостности:

```bash
shasum -a 256 -c SHA256SUMS.txt
```

## FAQ / Устранение проблем

- Ввод отклоняется: проверьте формат URL и обязательные поля.
- Ошибки фильтра: используйте только числа и диапазоны через запятую.
- `com-x.life` просит авторизацию: войдите через WebView или сбросьте cookies.
- Конвертация медленная/низкого качества: установите `magick` (ImageMagick).
- Высокая нагрузка CPU/температура: отключите Turbo-режим.

## Вопросы и предложения

Если у вас есть вопросы или предложения, напишите нам:
- borunov.alexey.work@gmail.com

## Конфиденциальность и юридическая информация

- Приложение обрабатывает URL/контент, предоставленные пользователем.
- Cookies `com-x.life` сохраняются для авторизованного retry-потока и могут быть сброшены пользователем.
- Пользователь несет ответственность за соблюдение условий сервисов и применимого авторского права.
