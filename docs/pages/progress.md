<script setup>
import Basic from './demo/Button/Basic.vue'
import Warning from './demo/Button/Variants.vue'

import ContainerFlexGap from '../.vitepress/components/ContainerFlexGap.vue'
</script>

# Button

Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

<!-- * CSS from [PrimeIcons](https://www.primefaces.org/showcase/icons.xhtml) and [PrimeFlex](https://www.primefaces.org/primeflex/) -->

## Usage

<DemoContainer>
  <Button>Example</Button>
</DemoContainer>

<<< @/pages/demo/Button/Basic.vue

## Variants

Fire UI includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.

<ContainerFlexGap>
  <Button variant="default">Default</Button>
  <Button variant="alternative">Alternative</Button>
  <Button variant="dark">Dark</Button>
  <Button variant="light">Light</Button>
  <Button variant="green">Green</Button>
  <Button variant="red">Red</Button>
  <Button variant="yellow">Yellow</Button>
  <Button variant="purple">Purple</Button>
  <Button variant="pink">Pink</Button>
</ContainerFlexGap>

<<< @/pages/demo/Button/Variants.vue

### Properties

| Name            | Type     | Default  | Description     |
| -----------     | -------- | -------- | --------------- |
| variant | String | null | Named preset combination of component props. |
