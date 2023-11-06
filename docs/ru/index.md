---
layout: home

title: Fire Ui
titleTemplate: Fire Ui

hero:
  name: Fire Ui
  text: Библиотека компонентов Vue, основанная на Tailwind CSS
  tagline: Начните с самой популярной библиотеки интерактивных компонентов пользовательского интерфейса с открытым исходным кодом, созданной с использованием служебных классов из Tailwind CSS
  image:
    src: /assets/logo.svg
    alt: Fire Ui
  actions:
    - theme: brand
      text: Начать
      link: /ru/pages/getting-started
    - theme: alt
      text: Смотреть на GitHub
      link: https://github.com/themesberg/Fire Ui-vue

features:
  - title: Компоненты Vue 3 🧱
    details: Используйте сотни компонентов с открытым исходным кодом, таких как навигационные панели, модалы и выпадающие списки, основанные на Vue 3 и Tailwind CSS.
  - title: Основан на Tailwind CSS 💨
    details: Компоненты основаны на служебных классах из Tailwind CSS, и вы можете использовать их для дальнейшей настройки интерфейса.
  - title: Работает на Fire Ui 🚀
    details: Библиотека Fire Ui Vue основана на оригинальной библиотеке компонентов Fire Ui с использованием vanilla JavaScript.
  - title: Сообщество с открытым исходным кодом ❤️
    details: Тысячи разработчиков активно используют компоненты Fire Ui Vue для использования в своих приложений.
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>