import { ruConfig } from './ru'

const path = require('path')
function buildSidebar() {
  return [
    {
      items: [
        { text: 'Home', link: '/' },
        { text: 'Getting Started', link: '/pages/getting-started' },
      ],
    },
    {
      text: 'Components',
      collapsible: true,
      items: getComponents(),
    },
    // {
    //   text: 'Form',
    //   collapsible: true,
    //   items: [...getFormComponents()],
    // },
    // {
    //   text: 'Utils',
    //   collapsible: true,
    //   items: [...getUtils()],
    // },
  ]
}

function getComponents() {
  return [
    { text: 'Alert', link: '/pages/alert' },
    { text: 'Avatar', link: '/pages/avatar' },
    { text: 'Badge', link: '/pages/badge' },
    { text: 'Button', link: '/pages/button' },
    { text: 'Card', link: '/pages/card' },
    { text: 'Dropdown', link: '/pages/dropdown' },
    { text: 'Footer', link: '/pages/footer' },
    { text: 'Modal', link: '/pages/modal' },
    { text: 'Navbar', link: '/pages/navbar' },
    { text: 'Pagination', link: '/pages/pagination' },
    { text: 'Progress', link: '/pages/progress' },
    { text: 'Toast', link: '/pages/toast' },
    { text: 'Toltip', link: '/pages/tooltipe' },
  ]
}

// const require = createRequire(import.meta.url)
// const pkg = require('@/package.json')

module.exports = {
  title: 'Fire UI',
  description: 'Just playing around.',
  themeConfig: {
    repo: 'https://github.com/suralabs/vancedvue',
    logo: '/assets/logo.svg',
    sidebar: buildSidebar(),
    editLink: {
      pattern: 'https://github.com/suralabs/vancedvue/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/suralabs/vancedvue' },
    ],    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Fire UI',
    },    
    // sidebar: [
    //   {
    //     text: 'Introduction',
    //     children: [
    //       { text: 'What is Fire UI?', link: '/' },
    //       { text: 'Getting Started', link: '/guide/' },
    //     ],
    //   }, {
    //     text: 'UI COMPONENTS',
    //     children: [
    //       { text: 'Alert', link: '/pages/alert' },
    //       { text: 'Avatar', link: '/pages/avatar' },
    //       { text: 'Badge', link: '/pages/badge' },
    //       { text: 'Button', link: '/pages/button' },
    //       { text: 'Card', link: '/pages/card' },
    //       { text: 'Dropdown', link: '/pages/dropdown' },
    //       { text: 'Footer', link: '/pages/footer' },
    //       { text: 'Modal', link: '/pages/modal' },
    //       { text: 'Navbar', link: '/pages/navbar' },
    //       { text: 'Pagination', link: '/pages/pagination' },
    //       { text: 'Progress', link: '/pages/progress' },
    //       { text: 'Toast', link: '/pages/toast' },
    //       { text: 'Toltip', link: '/pages/toltip' },

    //     ],
    //   },      
    //   {
    //     text: 'Other',
    //     children: [
    //       { text: 'Component A', link: '/components/component-a' },
    //       { text: 'Component B', link: '/components/component-b' },
    //     ],
    //   }
    // ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/'
    },
    ru: {
      label: 'Russian',
      lang: 'ru', // optional, will be added  as `lang` attribute on `html` tag
      link: '/ru/', // default /fr/ -- shows on navbar translations menu, can be external
      ...ruConfig
      // other locale specific properties...
    }
  },  
  vite: {
    resolve: {
      alias: {
        'vancedvue': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue', /vancedvue\/.+/], // avoid error when using dependencies that also use Vue
    }
  },
  
}
