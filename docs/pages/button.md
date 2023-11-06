<script setup>
import Basic from './demo/Button/Basic.vue'
import Variants from './demo/Button/Variants.vue'

import ContainerFlexGap from '../.vitepress/components/ContainerFlexGap.vue'
</script>

# Button

Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

## Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/pages/demo/Button/Basic.vue

## Variants

Fire UI includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.

<ContainerFlexGap>
<Variants/>
</ContainerFlexGap>

<<< @/pages/demo/Button/Variants.vue

### Properties

| Name            | Type     | Default  | Description     |
| -----------     | -------- | -------- | --------------- |
| variant | String | null | Named preset combination of component props. |
