<p align="center">
<img src="https://github.com/suralabs/vancedvue/blob/v1.0.0/docs/public/assets/image/logo.png?raw=true" alt="vancedvue-logo.png">
</p>

<p align="center">
<a href="https://github.com/suralabs/vancedvue"><img src="https://github.com/suralabs/vancedvue/workflows/CI/badge.svg" alt="Build Status"></a>
<a href="https://coveralls.io/github/suralabs/vancedvue?branch=dev"> <img src="https://coveralls.io/repos/github/suralabs/vancedvue/badge.svg?branch=dev" alt="Coverage Status"></a>
<a href="https://www.npmjs.com/package/vancedvue"><img src="https://badgen.net/npm/dm/vancedvue" alt="NPM Downloads"></a>
<a href="https://www.npmjs.com/package/vancedvue"><img src="https://badgen.net/npm/v/vancedvue" alt="NPM Version"></a>
<a href="https://github.com/suralabs/vancedvue"><img src="https://badgen.net/github/license/suralabs/vancedvue" alt="License"></a>
</p>


## Introduction

**vancedvue** is a Bootstrap 3 component lib implemented by Vue.

* **Lightweight**
  * All components **~20KB** Gziped.
  * No extra CSS file.
  * Individually import supported.
* Vue 3 supported.
* **SSR** (server-side rendering) supported.

If this project has helped you out, please support it with a star :star2:.

## Versions

| vancedvue version | Vue.js version | document                                                                                           |
|-------------|----------------|----------------------------------------------------------------------------------------------------------|
| 1.x         | 3.x            | [https://github.com/semyon492/vancedvue/tree/v1.0.0](https://github.com/semyon492/vancedvue/tree/v1.0.0) |

## Quick start

```bash
$ npm i vancedvue --save
```

```javascript
// main.js
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import * as vancedvue from 'vancedvue'

const app = createApp({ ... })

app.use(vancedvue)

app.mount(...)
```

For more information, pls visit [https://github.com/semyon492/vancedvue/usage/getting-started.html](https://github.com/semyon492/vancedvue/usage/getting-started.html)

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/suralabs/vancedvue/releases).

## Special thanks

<p>
<a href="https://code.visualstudio.com/?from=vancedvue"><img width="250" src="https://code.visualstudio.com/assets/images/code-stable.png" alt="vc-logo.png"></a>
</p>

## License

MIT
