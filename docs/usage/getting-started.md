# VancedVue - Quickstart

Get started with VancedVue by including it into your project using NPM

> VancedVue is a library of components built on top of the utility-classes from Tailwind CSS and it also includes a JavaScript file that makes interactive elements works, such as modals, dropdowns, and more. Learn how to get started by following this quickstart guide.

<!-- * **Lightweight** -->
  <!-- * All components **~20KB** Gziped. -->
  <!-- * No extra CSS file. -->
  * Individually import supported.
* **Vue 3** supported.
* **SSR** (server-side rendering) supported.
* All env supported:
  * UMD build `vancedvue.umd.js` can be used in all environments (including browser)
  * ES Module build `vancedvue.es.js` is for modern bundlers like [webpack 2](https://webpack.js.org) or [rollup](https://rollupjs.org)
  * CommonJS build `vancedvue.cjs.js` is for older bundlers like [browserify](http://browserify.org) or [webpack 1](https://webpack.github.io).

## Versions

| vancedvue version | Vue.js version | document                                               |
|-------------|----------------|--------------------------------------------------------|
| 1.x         | 2.x            | [https://github.com/suralabs/vancedvue](https://github.com/suralabs/vancedvue) |

## Install

If you are using module bundlers such as Webpack, you can directly include package into your project via:

```bash
$ npm i vancedvue --save
```

Then register vancedvue components and directives all at once in your app's entry:

```javascript
// main.js
import { createApp } from 'vue'
import * as vancedvue from 'vancedvue'

const app = createApp({ ... })

app.use(vancedvue)

app.mount(...)
```

That's it. Happy coding!

<!-- ::: warning
The vancedvue lib is meant to be a replacement of bootstrap js files. Therefore, include the css file of bootstrap, but not js files, such as the `bootstrap.min.js`, which should not be included. Otherwise, you might encounter some unexpected issues.
::: -->

### No conflict

All components & directives will be installed with no prefix by default, you can add any prefix to them to avoid conflicts with other libs if needed.

For example:

```javascript
Vue.use(vancedvue, {prefix: 'vancedvue'})
```

Results in:

* Components such as `<alert>` becomes `<vancedvue-alert>`
* Directives such as `v-tooltip` becomes `v-vancedvue-tooltip`
* Global methods such as `$alert` becomes `$vancedvue_alert`

## Import individually

If you don't want all of the components for some reason (e.g. to save the bundle size), you can also import them individually.

### Example

```javascript
import { Alert } from 'vancedvue'
// or
// import Alert from 'vancedvue/dist/Alert'

export default {
  components: {
    Alert
  },
  ...
}
```

::: tip
Import from `vancedvue/dist/something` can ensure bundle size saving, others might not (depend on bundler's tree-shaking).
:::

## Browsers

You can load & install vancedvue package directly in browsers. For example:

```html
<!-- Remember to import Vue and Bootstrap CSS file before this! -->
<script src="//unpkg.com/vancedvue"></script>
```

This will simply load the latest version of `vancedvue.umd.js` into your page. For detail usages (e.g. load specify version, IMPORTANT in production mode) and different CDN providers, you can visit:

* [https://unpkg.com](https://unpkg.com)
* [https://www.jsdelivr.com](https://www.jsdelivr.com/)
* [https://cdnjs.com/libraries/vancedvue](https://cdnjs.com/libraries/vancedvue)

## Browser compatibility

All browsers supported by [Vue](https://github.com/vuejs/vue-next) and [Tailwind CSS](https://tailwindcss.com) are supposed to be also supported by this lib.
