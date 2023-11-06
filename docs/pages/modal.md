<script setup>
import Basic from './demo/Modal/Basic.vue'
import Size from './demo/Modal/Size.vue'

import ContainerFlexGap from '../.vitepress/components/ContainerFlexGap.vue'
</script>

# Modal

Use the modal component to show interactive dialogs and notifications to your website users available in multiple sizes, colors, and styles

## Usage

<DemoContainer>
  <Basic></Basic>
</DemoContainer>

<<< @/pages/demo/Modal/Basic.vue

## Size

You can use four different modal sizing options starting from small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.

`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`

The default value is: `2xl`

Demo:

<ContainerFlexGap>
  <Size></Size>
</ContainerFlexGap>

<<< @/pages/demo/Modal/Size.vue
