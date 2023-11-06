<script setup>
import ContainerFlexGap from '../../.vitepress/components/ContainerFlexGap.vue'
import BadgeIcon from './demo/Badge/Icon.vue'
</script>

# Badge

Badge is used to showcase information related to other element, such as missed notifications near the user's avatar.

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made. Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a span element.

## Usage

<DemoContainer>
  <Badge variant="default">Example</Badge>
</DemoContainer>

<<< @/pages/demo/Badge/Basic.vue

## Variants

Fire UI includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.

<ContainerFlexGap>
  <Badge variant="default">Default</Badge>
  <Badge variant="indigo">Indigo</Badge>
  <Badge variant="dark">Dark</Badge>
  <Badge variant="green">Green</Badge>
  <Badge variant="red">Red</Badge>
  <Badge variant="yellow">Yellow</Badge>
  <Badge variant="purple">Purple</Badge>
  <Badge variant="pink">Pink</Badge>
</ContainerFlexGap>

<<< @/pages/demo/Badge/Variants.vue

### Properties

| Name            | Type     | Default  | Description     |
| -----------     | -------- | -------- | --------------- |
| variant | String | null | Named preset combination of component props. |

## Badges with icon

<ContainerFlexGap>
  <BadgeIcon/>
</ContainerFlexGap>

<<< @/pages/demo/Badge/Icon.vue