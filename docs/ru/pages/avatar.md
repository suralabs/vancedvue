<script setup>
import Basic from './demo/Avatar/Basic.vue'
import Sizes from './demo/Avatar/Sizes.vue'
import Online from './demo/Avatar/Online.vue'
import Warning from './demo/Button/Variants.vue'

import ContainerFlex from '../../.vitepress/components/ContainerFlex.vue'
import ContainerFlexCenter from '../../.vitepress/components/ContainerFlexCenter.vue'
import ContainerFlexGap from '../../.vitepress/components/ContainerFlexGap.vue'
</script>

# Avatar

Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes

## Default avatar

Use this example to create a circle and rounded avatar on an image element.

## Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/pages/demo/Avatar/Basic.vue

## Sizes

Choose from multiple sizing options for the avatar component from this example.

<ContainerFlexCenter>
  <Sizes/>
</ContainerFlexCenter>

<<< @/pages/demo/Avatar/Sizes.vue

## Dot indicator

Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).

<ContainerFlexCenter>
  <Online/>
</ContainerFlexCenter>

<<< @/pages/demo/Avatar/Online.vue
