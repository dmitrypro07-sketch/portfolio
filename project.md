# Portfolio — Дмитрий Прокофьев

## Что это
Персональный сайт-портфолио специалиста по автоматизации бизнеса и ИИ. Одностраничный лендинг с визиткой, услугами, кейсами и контактами.

## Для кого
Потенциальные клиенты из малого и среднего бизнеса, которым нужна автоматизация процессов, чат-боты или разработка веб-инструментов.

## Что реализовано

| Файл | Назначение |
|------|-----------|
| `app/page.tsx` | Главная страница — собирает все секции |
| `app/layout.tsx` | Layout с метатегами и подключением шрифтов |
| `app/globals.css` | Глобальные стили, CSS-переменные (цвета, шрифты) |
| `components/Hero.tsx` | Hero-секция с заголовком, оффером и статистикой |
| `components/LogosStrip.tsx` | Бегущая строка с инструментами |
| `components/Services.tsx` | Секция услуг с буллетами и гарантиями (по системе Хормози) |
| `components/HowItWorks.tsx` | Процесс работы — 3 шага |
| `components/Cases.tsx` | Кейсы с цифрами |
| `components/Contact.tsx` | Секция контактов на тёмном фоне |
| `components/Footer.tsx` | Подвал сайта |

## Планируется
См. [PLAN.md](PLAN.md)

## Технический стек
- **Framework:** Next.js 16 (App Router)
- **Styles:** Tailwind CSS + CSS переменные
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Cormorant Garamond + DM Sans (Google Fonts)
- **Hosting:** Vercel
- **Repo:** github.com/dmitrypro07-sketch/portfolio

## Настройка и запуск
```bash
cd C:/Code/VSCode/portfolio
npm install
npm run dev       # http://localhost:3000
npm run build     # продакшн сборка
```

## Деплой
Автоматически через Vercel при пуше в `main`.
Сайт: https://portfolio-tau-rosy-69.vercel.app/

## Известные проблемы
- Нет мобильного меню (навигации пока нет)
- Один кейс — нужно добавить новые по мере накопления

## Структура проекта
```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── LogosStrip.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── Cases.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── project.md
├── CLAUDE.md
└── PLAN.md
```
