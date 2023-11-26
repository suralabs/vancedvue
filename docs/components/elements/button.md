# Button

> Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Examples

Use any of the available button types to quickly create a styled button.

<SContainer2>
  <SButton/>
</SContainer2>

<<< @/.vitepress/components/button/SButton.vue

## Sizes

<SContainer>
  <SButtonSize/>
</SContainer>

<<< @/.vitepress/components/button/SButtonSize.vue

## Colors

<SContainer2>
  <SButtonColors/>
</SContainer2>

<<< @/.vitepress/components/button/SButtonColors.vue

## Gradient

<SContainer2>
  <SButtonGradient/>
</SContainer2>

<<< @/.vitepress/components/button/SButtonGradient.vue

## Icon

<SContainer2>
  <SButtonIcon/>
</SContainer2>

<<< @/.vitepress/components/button/SButtonIcon.vue

## Icon - Text

If you need a button with text and icon you can do them by adding them in the slot `prefix` or `suffix`.

<SContainer2>
  <SButtonIconText/>
</SContainer2>

<<< @/.vitepress/components/button/SButtonIconText.vue

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

