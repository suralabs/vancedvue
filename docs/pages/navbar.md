<script setup>
import Basic from './demo/Navbar/Basic.vue'
import Collapse from './demo/Navbar/Collapse.vue'
import Action from './demo/Navbar/Action.vue'
import Icon from './demo/Navbar/Icon.vue'

import DemoContainer from '../.vitepress/components/DemoContainer.vue'
</script>

# Navbar

The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns

## Usage

<DemoContainer>
  <Basic></Basic>
</DemoContainer>

<<< @/pages/demo/Navbar/Basic.vue

## Collapse

<DemoContainer>
  <Collapse></Collapse>
</DemoContainer>

<<< @/pages/demo/Navbar/Collapse.vue

## Navbar with action button

<DemoContainer>
  <Action></Action>
</DemoContainer>

<<< @/pages/demo/Navbar/Action.vue

## Navbar with custom mobile icon

<DemoContainer>
  <Icon></Icon>
</DemoContainer>

<<< @/pages/demo/Navbar/Icon.vue
