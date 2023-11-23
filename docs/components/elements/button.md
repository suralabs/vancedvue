# Button

> Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Examples

Use any of the available button types to quickly create a styled button.

<DemoContainer2>
  <v-button color="default">Default</v-button>
  <v-button color="alternative">Alternative</v-button>
  <v-button color="dark">Dark</v-button>
  <v-button color="green">Green</v-button>
  <v-button color="red">Red</v-button>
  <v-button color="yellow">Yellow</v-button>
  <v-button color="purple">Purple</v-button>
  <v-button color="pink">Pink</v-button>
</DemoContainer2>

<<< @/components/demo/button/Basic.vue

## Links

## Sizes
<DemoContainer>
  <v-button size="xs">Default</v-button>
  <v-button size="sm">Default</v-button>
  <v-button size="md">Default</v-button>
  <v-button size="lg">Default</v-button>
  <v-button size="xl">Default</v-button>
</DemoContainer>

## Colors

<DemoContainer2>
  <v-button color="default" pill>Default</v-button>
  <v-button color="alternative" pill>Alternative</v-button>
  <v-button color="dark" pill>Dark</v-button>
  <v-button color="green" pill>Green</v-button>
  <v-button color="red" pill>Red</v-button>
  <v-button color="yellow" pill>Yellow</v-button>
  <v-button color="purple" pill>Purple</v-button>
  <v-button color="pink" pill>Pink</v-button>
</DemoContainer2>

<DemoContainer2>
  <v-button color="cyan-blue">cyan-blue</v-button>
  <v-button color="green-blue">green-blue</v-button>
  <v-button color="pink-orange">pink-orange</v-button>
  <v-button color="purple-blue">purple-blue</v-button>
  <v-button color="purple-pink">purple-pink</v-button>
  <v-button color="red-yellow">red-yellow</v-button>
  <v-button color="teal-lime">teal-lime</v-button>
</DemoContainer2>

<DemoContainer2>
  <v-button color="cyan-blue">
    <v-icon name="video" />
  </v-button>
  <v-button color="green-blue">
    <v-icon name="edit" />
  </v-button>
  <v-button color="pink-orange">
    <v-icon name="verify" />
  </v-button>
  <v-button color="purple-blue">
    <v-icon name="comment" />
  </v-button>
  <v-button color="purple-pink">
    <v-icon name="send" />
  </v-button>
  <v-button color="red-yellow">
    <v-icon name="friends" />
  </v-button>
  <v-button color="teal-lime">
    <v-icon name="analytics" />
  </v-button>
</DemoContainer2>

<DemoContainer2>
  <v-button class="flex" color="cyan-blue">
    <template #prefix>
      <v-icon name="video" /> 
    </template>    
      Video
  </v-button>
    <v-button class="flex" color="purple-pink">
      Comments
    <template #suffix>
      <v-icon name="comment" /> 
    </template>          
  </v-button>
</DemoContainer2>

## Active state

## Disabled state

## Checkbox / Radio

### Checkbox example

### Radio example

## API Reference

### [Btn](https://github.com/suralabs/vancedvue/blob/1.x/src/components/button/v-button.js)


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

