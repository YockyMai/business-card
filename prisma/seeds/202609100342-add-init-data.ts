import { PrismaClient, SkillLevel } from '../../src/generated/prisma/client';

const seed = async (client: PrismaClient) => {
  const companies = await client.company.createManyAndReturn({
    data: [
      {
        name: 'UVANNA STORE',
        description: 'Магазин сантехники UVanna',
      },
      {
        name: 'UFATECH',
        description: `
          Производственная IT компания занимается разработкой программного обеспечения и микроэлектроники.
          является ведущим поставщиком IT решения, программного обеспечения и системных решений для торгового ретейла, крупных торговых центров и федеральных торговых сетей.

          Простое подключение, оптимальная цена и легкость в эксплуатации позволяет быстро внедрять решение под разнообразные точки подсчета. Опираясь на наши аппаратные средства подсчета и мощное уникальное программное обеспечение, наша компания дает владельцам инструменты и технологии, которыми они могут быстро и легко поднять прибыльность своего бизнеса.
        `,
      },
      {
        name: 'qualixdev',
        description: `
          Наша команда состоит из разработчиков, инженеров, дизайнеров и менеджеров, которые нацелены на создание программных продуктов наилучшего качества для компаний по всему миру

          Команда Qualix наиболее востребована среди компаний, которые не намерены заниматься самостоятельной разработкой программных продуктов и хотят найти долгосрочного партнера, решающего возникающие задачи
        `,
      },
      {
        name: 'ANIFOX',
        description:
          'ANIFOX - платформа для просмотра аниме на удобном для пользователя варианте ( WEB, Android ). Она призвана обеспечить безупречный и приятный опыт для любителей аниме, предлагая широкий выбор контента различных жанров.',
      },
    ],
  });

  const skills = await client.skill.createManyAndReturn({
    data: [
      {
        name: 'CSS3',
      },
      {
        name: 'HTML5',
      },
      {
        name: 'React',
      },
      {
        name: 'Redux',
      },
      {
        name: 'NextJS',
      },
      {
        name: 'SASS SCSS',
      },
      {
        name: 'Redux Toolkit',
      },
      {
        name: 'Express',
      },
      {
        name: 'Sequelize',
      },
      {
        name: 'NestJS',
      },
      {
        name: 'TypeORM',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'NoSQL',
      },
      {
        name: 'БЭМ',
      },
      {
        name: 'SOLID',
      },
      {
        name: 'Node.js',
      },
      {
        name: 'Docker',
      },
      {
        name: 'REST API',
      },
      {
        name: 'Sass',
      },
      {
        name: 'GraphQL',
      },
      {
        name: 'MobX',
      },
      {
        name: 'ES6',
      },
      {
        name: 'Effector',
      },
      {
        name: 'GitHub',
      },
    ],
  });

  const profile = await client.profile.create({
    data: {
      name: 'Григорьев Валерий',
      description: `
        MIDDLE FULLSTACK DEVELOPER
        My GitHub - https://github.com/YockyMai

        О себе:
        Я fullstack-разработчик с коммерческим опытом более 3 лет, специализируюсь на разработке frontend и backend-частей веб-приложений. Работал в крупной компании в составе команды с налаженными процессами: code review, таск-трекинг.

        Основной фокус создание поддерживаемых и масштабируемых решений. Уделяю внимание архитектуре приложения и дальнейшей поддержки.

        В последнее время активно работал с CI/CD инструментами для развёртывания и монтироинга высоконагруженных приложений.

        Мне близок инженерный подход. Я люблю продумывать архитектуру, оптимизировать решения и делать код понятным. В сложных задачах предпочитаю обсуждение и совместный поиск оптимального решения. Есть опыт наставничества и объяснения сложных технических тем.

        Личные проекты для развития технических навыков:
        - https://anifox.su (Платформа для просмотра аниме)
        - http://diplom-blush.vercel.app (Онлайн магазин, Fullstack проект, React, Mantine)
        - http://note-app-desktop.vercel.app (Онлайн заметки, NextJS)
        - https://react-pizza-slice.herokuapp.com (Учебный проект, онлайн пиццерия)
        - https://hiyocky.vercel.app (Мессенджер с использованием Socket.io)

        PS: Код каждого проекта находится в моем GitHub
      `,
    },
  });

  await client.profileSkill.createMany({
    data: skills.map((skill) => ({
      profileId: profile.id,
      skillId: skill.id,
      level:
        SkillLevel[
          Object.values(SkillLevel)[
            Math.floor(Math.random() * Object.values(SkillLevel).length)
          ]
        ],
    })),
  });

  await client.profileProject.createMany({
    data: [
      {
        profileId: profile.id,
        title: 'Anifox',
        description: 'Платформа для просмотра аниме (Только клиентская часть)',
        url: 'https://anifox.su',
        repoUrl: [
          'https://github.com/YockyMai/anifox.frontend',
          'https://github.com/YockyMai/anifox.ui',
          'https://github.com/YockyMai/anifox.store',
          'https://github.com/YockyMai/anifox.tailwind-config',
          'https://github.com/YockyMai/anifox.hooks',
        ],
      },
      {
        profileId: profile.id,
        title: 'hiyocky',
        description: 'Мессенджер с использованием Socket.io',
        url: 'https://hiyocky.vercel.app',
        repoUrl: [
          'https://github.com/YockyMai/messanger',
          'https://github.com/YockyMai/messanger-backend',
        ],
      },
      {
        profileId: profile.id,
        title: 'hiyocky',
        description: 'Мессенджер с использованием Socket.io',
        url: 'https://diplom-blush.vercel.app/',
        repoUrl: [
          'https://github.com/YockyMai/diplom',
          'https://github.com/YockyMai/diplom-api-pg-',
        ],
      },
    ],
  });

  await client.profileExperience.createMany({
    data: [
      {
        profileId: profile.id,
        companyId: companies[0].id,
        title: 'Fullstack Developer',
        description: `
          Чем занимался:

          FRONTEND:
          - Работа с NEXTJS, SEO оптимизация
          - Разработка и поддержка клиентской части веб-приложения
          - Разработка и поддержка панели администрирования
          - Интеграция платёжных систем
          - Интеграция Jivo чата для консутльтации пользователей
          - Написание программного кода
          - Рефакторинг программного кода
      `,
        // август 2022 - июнь 2023
        startDate: new Date('2022-08-01'),
        endDate: new Date('2023-06-01'),
        current: true,
      },
      {
        profileId: profile.id,
        companyId: companies[1].id,
        title: 'Fullstack Developer',
        description: `
          Чем я занимался:

          ОБЩЕЕ:
          - Менторинг и сопровождение новых разработчиков в компании

          FRONTEND
          - Конфигурация и разработка клиентских npm-модулей для основного приложения, настройка сборщика Vite
          - Написание супер оптимизированных компонентов графиков, работающих на chart.js, обрабатывающие огромное количество данных с батчингом
          - Проектирование бизнес-логики
          - Написание собственного роутера для React, позволяющего переключать режим навигации с помощью hash-роутов или роутов, хранящихся в памяти приложения

          BACKEND
          - Создание коннектора, который взаимодействует с реальным устройством и передаёт данные в real-time по сокет-каналу на клиент
          - RT COUNTERS - создал алгоритм с постоянным жизненным циклом, сбор данных и обработка с помощью самописных очередей для обучения внутренней ИИ в компании
          - omega connect: реализация протокола обмена данных между серверами компании
          - Разработка кастомных декораторов и плагинов для NestJS
          - Оптимизация алгоритмов и их разработка для уменьшения нагрузки на сервер при огромном потоке данных
          - Тонкая работа с технологией prisma и проектирование моделей таблиц
          - Написание системы, позволяющая создавать, удалять, восстанавливать бэкапы базы данных через панель администрирования
        `,
        // Июнь 2023 — Апрель 2026
        startDate: new Date('2023-06-01'),
        endDate: new Date('2026-04-01'),
      },
      {
        profileId: profile.id,
        companyId: companies[2].id,
        title: 'Frontend Developer',
        description: 'Разработка проектных работ для компании',
        // Май 2026 — сейчас
        startDate: new Date('2026-05-01'),
        current: true,
      },
      {
        profileId: profile.id,
        companyId: companies[3].id,
        title: 'Fullstack Developer',
        description: `
          Чем я занимался:

          ОБЩЕЕ:
          - Лидирование проекта

          FRONTEND:
          - Делегирование frontend-части приложения на npm-пакеты для грамотного построения архитектуры
          - Разработка собственного web-плеера и работа с видеоматериалами
          - Полноценная работа с GraphQL и связанными с ним инструментами, такими как: @graphql-codegen, @apollo/client

          BACKEND:
          - Самостоятельное проектирование инфраструктуры (backend и frontend частей)
          - Работа со сторонними сервисами для парсинга большого объёма данных
          - Оптимизация базы данных и её индексирование под большие объёмы данных
          - Разработка API-части с использованием технологий GraphQL, таких как: @apollo/server, @nestjs/graphql, @graphql-codegen
        `,
        // Февраль 2023 — сейчас
        startDate: new Date('2023-02-01'),
        current: true,
      },
    ],
  });
};

export default seed;
