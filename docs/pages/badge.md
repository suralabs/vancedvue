<script setup>
import ContainerFlexGap from '../.vitepress/components/ContainerFlexGap.vue'
import Basic from './demo/Badge/Basic.vue'
</script>

# Badge

Badge is used to showcase information related to other element, such as missed notifications near the user's avatar.

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made. Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a span element.

## Usage

<ContainerFlexGap>
  <Basic/>
</ContainerFlexGap>

<<< @/pages/demo/Badge/Basic.vue

<!-- ## Variants

Fire UI includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.

<ContainerFlexGap>
  <Variants/>
</ContainerFlexGap>

<<< @/pages/demo/Badge/Variants.vue

### Properties

| Name            | Type     | Default  | Description     |
| -----------     | -------- | -------- | --------------- |
| variant | String | null | Named preset combination of component props. |

## Badges with icon

<ContainerFlexGap>
  <Icon/>
</ContainerFlexGap>

<<< @/pages/demo/Badge/Icon.vue -->