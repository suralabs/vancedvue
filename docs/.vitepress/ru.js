export const META_URL = 'https://pinia.vuejs.org'
export const META_TITLE = 'Fire UI'
export const META_DESCRIPTION = 'Vue component library based on Tailwind CSS'

export const ruConfig = {
  description: META_DESCRIPTION,
  head: [
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/suralabs/fire-ui/tree/main/docs/:path',
      text: 'Предлагайте изменения на этой странице',
    },

    nav: [
      // { text: 'Config', link: '/config/' },
      // { text: 'Plugins', link: '/plugins/' },
    //   {text: 'Guide',link: '/core-concepts/',activeMatch: '^/core-concepts/'},
    //   { text: 'API', link: '/api/', activeMatch: '^/api/' },
    //   {
        // text: 'Links',
        // items: [
        //   {
            // text: 'Discussions',
            // link: 'https://github.com/vuejs/pinia/discussions',
        //   },
        //   {
        //     text: 'Changelog',
        //     link: 'https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md',
        //   },
        // ],
    //   },
    ],

    sidebar: {
      '/api/': [
        {
          text: 'packages',
          items: [
            { text: 'pinia', link: '/api/modules/pinia.html' },
            { text: '@pinia/nuxt', link: '/api/modules/pinia_nuxt.html' },
            {
              text: '@pinia/testing',
              link: '/api/modules/pinia_testing.html',
            },
          ],
        },
      ],
      // catch-all fallback
      '/': [
        {
          text: 'Начало работы',
          items: [
            {
              text: 'Главная',
              link: '/ru/',
            },
            {
              text: 'Приступая к работе',
              link: '/ru/pages/getting-started',
            },
          ],
        },
        {
          text: 'Компоненты',
          collapsed: false,
          items: [
            { text: 'Уведомление', link: '/ru/pages/alert' },
            { text: 'Аватар', link: '/ru/pages/avatar' },
            { text: 'Значок', link: '/ru/pages/badge' },
            { text: 'Кнопка', link: '/ru/pages/button' },
            { text: 'Карточка', link: '/ru/pages/card' },
            { text: 'Выподающий список', link: '/ru/pages/dropdown' },
            { text: 'Нижний колонтитул', link: '/ru/pages/footer' },
            { text: 'Модальное окно', link: '/ru/pages/modal' },
            { text: 'Навигационное меню', link: '/ru/pages/navbar' },
            { text: 'Нумерация страниц', link: '/ru/pages/pagination' },
            { text: 'Прогрессбар', link: '/ru/pages/progress' },
            { text: 'Toast', link: '/ru/pages/toast' },
            { text: ' подсказка', link: '/ru/pages/toltip' },
          ],
        },
      ],
    },
  },
}