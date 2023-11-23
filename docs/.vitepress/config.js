const path = require('path');

module.exports = {
  title: 'VancedVue',
  description: 'uo components implemented by Vue.',
  base: '/',
  themeConfig: {
    search: {
      provider: 'local',
    },
    repo: 'semyon492/vancedvue',
    nav: navbar(),
    sidebar: {
      '/usage/': usageSidebar(),
      '/components/': componentSidebar(),
    },
  },
  vite: {
    resolve: {
      alias: {
        vancedvue: path.resolve(__dirname, '../../src/index.js'),
      },
    },
  },
};

function navbar() {
  return [
    {
      text: 'Usage',
      link: '/usage/getting-started',
      activeMatch: '^/usage/',
    },
    {
      text: 'Components',
      link: '/components/components',
      activeMatch: '^/components/',
    },
    { text: 'Funding', link: '/funding/' },
    {
      text: 'Versions',
      items: [
        { text: '1.x', link: 'https://github.com/suralabs/vancedvue' },
        { text: '0.x', link: 'https://github.com/suralabs/vancedvue' },
      ],
    },
    {
      text: 'Changelog',
      link: 'https://github.com/suralabs/vancedvue/releases',
    },
  ];
}

function usageSidebar() {
  return [
    {
      text: 'Guide',
      items: [{ text: 'Getting Started', link: '/usage/getting-started' }],
    },
  ];
}

function componentSidebar() {
  return [
    {
      text: 'Elements',
      items: [
        { text: 'Button', link: '/components/elements/button' },
        { text: 'Alert', link: '/components/elements/alert' },
        { text: 'Avatar', link: '/components/elements/avatar' },
        { text: 'Badge', link: '/components/elements/badge' },
        { text: 'Icon', link: '/components/elements/icon' },
        { text: 'Dropdown', link: '/components/elements/dropdown' },
        { text: 'Pagination', link: '/components/elements/pagination' },
        // { text: 'Collapse', link: '/components/collapse' },
      ],
    },
    // {
    //   text: 'Popup',
    //   items: [
    //     { text: 'Dropdown', link: '/components/dropdown' },
    //     { text: 'Modal', link: '/components/modal' },
    //     { text: 'Tooltip', link: '/components/tooltip' },
    //     { text: 'Popover', link: '/components/popover' },
    //   ],
    // },
    {
      text: 'Forms',
      items: [
        { text: 'Input', link: '/components/forms/input' },
        // { text: 'Typeahead', link: '/components/typeahead' },
        // { text: 'Date Picker', link: '/components/date-picker' },
        // { text: 'Time Picker', link: '/components/time-picker' },
      ],
    },
    {
      text: 'Overlays',
      items: [
        { text: 'Modal', link: '/components/overlays/modal' },
        { text: 'Notification', link: '/components/overlays/notification' },
        // { text: 'Messagebox', link: '/components/overlays/messagebox' },
        // { text: 'Typeahead', link: '/components/typeahead' },
        // { text: 'Date Picker', link: '/components/date-picker' },
        // { text: 'Time Picker', link: '/components/time-picker' },
      ],
    },

    // {
    //   text: 'Notice',
    //   items: [
    //     { text: 'Alert', link: '/components/alert' },
    //     { text: 'Notification', link: '/components/notification' },
    //     { text: 'Message Box', link: '/components/message-box' },
    //   ],
    // },
    // {
    //   text: 'Navigation',
    //   items: [
    //     { text: 'Navbar', link: '/components/navbar' },
    //     { text: 'Tabs', link: '/components/tabs' },
    //     { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
    //   ],
    // },
    // {
    //   text: 'Indicator',
    //   items: [
    //     { text: 'Pagination', link: '/components/pagination' },
    //     { text: 'Progress Bar', link: '/components/progress-bar' },
    //   ],
    // },
    // {
    //   text: 'Others',
    //   items: [
    //     { text: 'Carousel', link: '/components/carousel' },
    //     { text: 'Affix', link: '/components/affix' },
    //     { text: 'Scroll Spy', link: '/components/scroll-spy' },
    //   ],
    // },
  ];
}
