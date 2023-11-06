<script setup>
import Basic from './demo/Pagination/Basic.vue'
import Avesome from './demo/Pagination/Avesome.vue'
import Length from './demo/Pagination/Length.vue'
import Layout from './demo/Pagination/Layout.vue'
import Table from './demo/Pagination/Table.vue'
import Custom from './demo/Pagination/Custom.vue'
</script>

# Pagination

Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows

## Default pagination

<DemoContainer>
  <Basic></Basic>
</DemoContainer>

<<< @/pages/demo/Pagination/Basic.vue

<DemoContainer>
  <Avesome></Avesome>
</DemoContainer>

<<< @/pages/demo/Pagination/Avesome.vue

## Default with custom length

You can use your own pages count in the row by passing props: `slice-length` This prop means left side and right side pages row slicing. In the example it has value `4`. So row length will be 4 + 1 + 4 pages - 9 pages.

<DemoContainer>
  <Length/>
</DemoContainer>

<<< @/pages/demo/Pagination/Length.vue

## Pagination with table layout

To use that layout you have to pass required props:

- `perPage`: it's items count displayed on each page.
- `totalItems`: it's the total items count.

And there you don't need to use `totalPages` prop.

<DemoContainer>
  <Table/>
</DemoContainer>

<<< @/pages/demo/Pagination/Table.vue

## Pagination with custom labels

<DemoContainer>
  <Custom/>
</DemoContainer>

<<< @/pages/demo/Pagination/Custom.vue

## Properties

| Name        | Type     | Default  | Description     |
| ----------- | -------- | -------- | --------------- |
|modelValue|Number|1||
|totalPages|Number|1||
|perPage|Number|1||
|totalItems|Number|1||
|layout|String|'pagination'|'navigation', 'pagination', 'table'|
|showIcons|Boolean|false||
|sliceLength|Number|2||
|previousLabel|String|'Previous'||
|nextLabel|String|'Next'||