Тестовое задание для ITSolutions

Приложение развернуто на vercel ([https://business-card-yockymais-projects.vercel.app/graphql](https://business-card-psi-umber.vercel.app/graphql))

Для локального запуска требуется установить NodeJS 20+ и DockerEngine

Запуск:

1. установите pnpm если его нет (`npm install -g pnpm`)
2. устновка зависимостей (`pnpm install`)
3. переименуйте файл `.env.example` -> `.env`
4. запустите докер (`pnpm docker:up`)
5. запустить сидирование базы данных (`pnpm db:seed`)
6. запустить приложение (`pnpm start:dev`)
7. Apollo Sandbox доступен по пути http://localhost:3000/graphql

PS: при запуске докера, убедитесь что порты для БД свободны
