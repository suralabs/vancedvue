<script setup>
import Basic from './demo/Alert/Basic.vue'
import Type from './demo/Alert/Type.vue'

import ContainerFlexCol from '../../.vitepress/components/ContainerFlexCol.vue'
</script>

# Alert

Отображает короткое важное сообщение для привлечения внимания пользователя.

## When To Use

1. When you need to show an important message to users.

2. When you need a static container with some important information which is closable by user actions.

## Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/pages/demo/Alert/Basic.vue

## Types

<ContainerFlexCol>
<Type/>
</ContainerFlexCol>

<<< @/pages/demo/Alert/Type.vue

### Properties

| Name            | Type     | Default  | Description     |
| -----------     | -------- | -------- | --------------- |
| type | String | null | Named preset combination of component props. |
