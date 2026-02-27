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
- Added/updated localization keys for English, Ukrainian, and Russian.
- Included new strings for update checks, Kindle mode alerts, and history UI.

### Tests
- Expanded automated coverage with new/updated tests for:
  - first-launch Telegram reporting
  - app update checker behavior
  - toggle alert decision logic
  - Kindle optimization behavior in downloader
  - performance profile persistence
  - shared utility and UI smoke scenarios

---

## Українська

### Нові UX-можливості
- Додано ручну перевірку оновлень у футері (`Check updates`).
- Додано повідомлення "оновлень немає" для ручної перевірки.
- Додано UI історії завантажень (popover) для обох сервісів.
- Історія тепер показує назву манги, source URL і час завантаження.
- Записи історії клікабельні та відкривають сторінку джерела в браузері.

### Kindle Mode і профіль продуктивності
- Додано постійний перемикач Kindle Mode (за замовчуванням увімкнено).
- Додано постійний перемикач Turbo Mode.
- Обидва стани зберігаються між перезапусками застосунку (`UserDefaults`).
- Покращено логіку алертів перемикачів: попередження/інфо показуються лише при зміні користувачем (не на першому відкритті екрана).

### Зміни в pipeline завантаження і конвертації
- Уніфіковано поведінку обох сервісів залежно від стану Kindle Mode.
- Якщо Kindle Mode увімкнено: працює повний цикл оптимізації (B/W, оптимізація роздільності, HEIC).
- Якщо Kindle Mode вимкнено:
  - пропускається Kindle-оптимізація
  - зберігаються оригінальні формати завантажених зображень
  - CBZ/EPUB збираються без кроків B/W і HEIC-оптимізації
  - обкладинка також зберігається в оригінальному форматі
- При вимкненій Kindle-оптимізації приховується progress bar на рівні сторінок.

### Покращення вводу та UI
- Уточнено поведінку поля для кількох посилань:
  - поле зростає лише до обмеженої висоти (2 видимі рядки посилань)
  - далі вмикається скрол, без надмірного розширення
- Вирівняно контроли UI між потоками MangaInUa і Com-X.

### Оновлення локалізації
- Додано/оновлено ключі локалізації для English, Ukrainian і Russian.
- Додано нові рядки для перевірки оновлень, алертів Kindle Mode та UI історії.

### Тести
- Розширено автотести новими/оновленими сценаріями для:
  - Telegram-звіту першого запуску
  - поведінки перевірки оновлень застосунку
  - логіки показу алертів перемикачів
  - Kindle-оптимізації в downloader
  - збереження профілю продуктивності
  - спільних утиліт і UI smoke-сценаріїв

---

## Русский

### Новые UX-возможности
- Добавлена ручная проверка обновлений в футере (`Check updates`).
- Добавлено уведомление "обновлений нет" для ручной проверки.
- Добавлен UI истории загрузок (popover) для обоих сервисов.
- История теперь показывает название манги, source URL и время загрузки.
- Записи истории кликабельны и открывают страницу источника в браузере.

### Kindle Mode и профиль производительности
- Добавлен постоянный переключатель Kindle Mode (по умолчанию включен).
- Добавлен постоянный переключатель Turbo Mode.
- Оба состояния сохраняются между перезапусками приложения (`UserDefaults`).
- Улучшена логика алертов переключателей: предупреждения/инфо показываются только при изменениях пользователем (не при первом открытии экрана).

### Изменения в pipeline загрузки и конвертации
- Унифицировано поведение обоих сервисов в зависимости от состояния Kindle Mode.
- Если Kindle Mode включен: используется полный цикл оптимизации (B/W, оптимизация разрешения, HEIC).
- Если Kindle Mode выключен:
  - пропускается Kindle-оптимизация
  - сохраняются оригинальные форматы загруженных изображений
  - CBZ/EPUB собираются без шагов B/W и HEIC-оптимизации
  - обложка также сохраняется в оригинальном формате
- При выключенной Kindle-оптимизации скрывается progress bar на уровне страниц.

### Улучшения ввода и UI
- Уточнено поведение поля для нескольких ссылок:
  - поле растет только до ограниченной высоты (2 видимые строки ссылок)
  - затем включается скролл, без чрезмерного расширения
- Выравнены UI-контролы между потоками MangaInUa и Com-X.

### Обновления локализации
- Добавлены/обновлены ключи локализации для English, Ukrainian и Russian.
- Добавлены новые строки для проверок обновлений, алертов Kindle Mode и UI истории.

### Тесты
- Расширено автопокрытие новыми/обновленными тестами для:
  - Telegram-отчета первого запуска
  - поведения app update checker
  - логики показа алертов переключателей
  - поведения Kindle-оптимизации в downloader
  - сохранения профиля производительности
  - общих утилит и UI smoke-сценариев
