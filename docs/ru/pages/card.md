<script setup>
import Basic from './demo/Card/Basic.vue'
import Image from './demo/Card/Image.vue'
import ImageH from './demo/Card/ImageH.vue'
import Warning from './demo/Button/Variants.vue'

import ContainerFlex from '../../.vitepress/components/ContainerFlex.vue'
import ContainerFlexCenter from '../../.vitepress/components/ContainerFlexCenter.vue'
import ContainerFlexGap from '../../.vitepress/components/ContainerFlexGap.vue'
</script>

# Card

Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.

## Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/pages/demo/Card/Basic.vue

## image

<DemoContainer>
  <Image/>
</DemoContainer>

<<< @/pages/demo/Card/Image.vue

## image horizontal

<DemoContainer>
  <ImageH/>
</DemoContainer>

<<< @/pages/demo/Card/ImageH.vue
