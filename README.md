<img src="https://github.com/suralabs/vancedvue/blob/main/art/ui-components.png?raw=true" width="100%" />

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

# What is VancedVue?

Fully styled and customizable components for Vue 3

This package has been developed by the suralabs, its goal is to provide everything related
to UI when building a Vue app. This includes components, icons, colors, dark mode but also keyboard shortcuts.

# Features

-  Built with Headless UI and Tailwind CSS
-  Dark mode support
-  Support for LTR and RTL languages
-  Keyboard shortcuts
-  Icons
-  Fully typed

## Setup

Use npm to install.

```
npm i vancedvue
```

### Full Import

If you don’t care about the bundle size so much, it’s more convenient to use full import.


```ts
// main.ts
import { createApp } from 'vue'
import VancedVue from 'vancedvue'
import 'vancedvue/dist/style.css';
import App from './App.vue'

const app = createApp(App)

app.use(VancedVue)
app.mount('#app')
```

### Manually import

Stellar UI provides out of box Tree Shaking functionalities based on ES Module.

```html
<script setup lang="ts">
  import { SButton } from 'vancedvue';
</script>

<template>
    <SButton>Submit</SButton>
</template>
```


## Documentation

Visit https://semyon492.github.io/vancedvue/ to explore the documentation.


## Credits

- [nuxtlabs/ui](https://github.com/nuxtlabs/ui)
- [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [tailwindlabs/headlessui](https://github.com/tailwindlabs/headlessui)
- [vueuse/vueuse](https://github.com/vueuse/vueuse)
- [@iconify/tailwind](https://github.com/iconify/iconify/tree/main/plugins/tailwind)


## License

Licensed under the [MIT license](https://github.com/suralabs/vancedvue/blob/main/LICENSE).


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/vancedvue/latest.svg?style=flat&colorA=18181B&colorB=6466E9
[npm-version-href]: https://npmjs.com/package/vancedvue

[npm-downloads-src]: https://img.shields.io/npm/dm/vancedvue.svg?style=flat&colorA=18181B&colorB=6466E9
[npm-downloads-href]: https://npmjs.com/package/vancedvue

[license-src]: https://img.shields.io/github/license/suralabs/vancedvue.svg?style=flat&colorA=18181B&colorB=6466E9
[license-href]: https://github.com/suralabs/vancedvue/blob/main/LICENSE
