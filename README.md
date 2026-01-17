# Real-Time Monitoring Dashboard

**Описание**

Real-Time Monitoring Dashboard — это система мониторинга событий в реальном времени, построенная на Node.js и React. Проект демонстрирует работу с потоковыми данными, event-driven архитектуру и доставку событий клиентам через WebSocket.

Backend генерирует события, хранит ограниченную историю и публикует их клиентам. Frontend отображает поток событий, а также агрегированные статистики в реальном времени. Авторизация и бизнес-логика пользователей сознательно исключены, чтобы сфокусироваться на инфраструктурных задачах: real-time, WebSocket, управление состоянием и производительность.

**Технический стек**

**Backend:**
- Node.js
- Express
- WebSocket (ws)
- Event-driven architecture
- In-memory store (лимит истории событий)

**Frontend:**
- React
- TypeScript
- WebSocket client
- Centralized state management

**Ключевые инженерные решения**

- EventService реализует publish/subscribe модель для доставки событий.
- WebSocket используется исключительно как транспорт, без привязки к бизнес-логике.
- История событий ограничена по размеру для контроля потребления памяти.
- Четко отделены генерация, хранение и доставка событий.
- Проект легко расширяется под реальные источники данных (логи, метрики, сервисы).

**Структура проекта**

server/ # Backend
├─ events/ # Сервис генерации и хранения событий
├─ websocket/ # WebSocket сервер
├─ http/ # REST API для истории и health-check
└─ app.ts # Точка входа

client/ # Frontend
├─ widgets/ # Компоненты для отображения событий и статистики
├─ websocket/ # Хук useWebSocket
├─ store/ # eventStore на Zustand
└─ app/  # App.tsx Главный компонент

**Запуск проекта**

1. Установить зависимости:
```bash
cd server
npm install
cd ../client
npm install
2. Запустить серевер:
cd server
npm run dev
3. Запустить frontend (React + Vite):
cd client
npm run dev
4. Открыть браузер:
http://localhost:5173


## Применение

Проект демонстрирует подходы, применимые для:

- Мониторинга сервисов и логов
- Real-time dashboard’ов
- Внутренних инструментов для отображения метрик и алертов

## Репозиторий

[GitHub: Real-Time Monitoring Dashboard](https://github.com/umer134/Real-Time-Monitoring-Dashboard)

