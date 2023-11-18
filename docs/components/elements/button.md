# Button

> Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Examples

Use any of the available button types to quickly create a styled button.

<DemoContainer>
  <v-button variant="default">Default</v-button>
  <v-button variant="alternative">alternative</v-button>
  <v-button variant="dark">dark</v-button>
  <v-button variant="green">green</v-button>
  <v-button variant="red">red</v-button>
  <v-button variant="yellow">yellow</v-button>
  <v-button variant="purple">purple</v-button>
  <v-button variant="pink">pink</v-button>
</DemoContainer>

<<< @/components/demo/button/Basic.vue

## Links

## Sizes

## Active state

## Disabled state

## Checkbox / Radio

### Checkbox example

### Radio example

## API Reference

### [Btn](https://github.com/suralabs/vancedvue/blob/1.x/src/components/button/Btn.js)


#### Props

| Name          | Type             | Default | Required | Description                                                                                                                   |
|---------------|------------------|---------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| `variant`     | String           | default |          | Supported: `default`, `alternative`, `dark`, `light`, `green`, `red`, `link`.                                                 | 
| `type`        | String           | button  |          | Native button type. Supported: `button`, `submit`, `reset`.                                                                   |
| `class`       | String           |         |          | Native button type. Supported: `button`, `submit`, `reset`.                                                                   |
| `label`       |                  |         |          |              |
| `disabled`    |                  |         |          |            |

#### Slots

| Name      | Description      |
|-----------|------------------|
| `default` | The button body. |

#### Events

| Name    | Params | Description                   |
|---------|--------|-------------------------------|
| `click` |        | Click event of button / link. |

