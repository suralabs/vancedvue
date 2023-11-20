<script>
  export default {
    data() {
      return {
        icon: true,
        closable: true,
      }
    }
  }
</script>
# Alert

> Display an alert element to draw attention.

## Examples

Use any of the available button types to quickly create a styled button.

<DemoContainer>
  <v-alert type="info" closable>Info</v-alert>
  <v-alert type="danger" closable>Danger</v-alert>
  <v-alert type="dark" closable>Dark</v-alert>
  <v-alert type="success" closable>Success</v-alert>
  <v-alert closable>Default</v-alert>
  <v-alert type="warning" closable>Warning</v-alert>
</DemoContainer>

<<< @/components/demo/alert/Basic.vue

<DemoContainer2>
  <v-alert  type="danger">New</v-alert>

  <v-alert closable icon type="info">
    Info
  </v-alert>

  <v-alert type="info">
    <template #icon>
      <v-icon name='info'/>
      <span class="sr-only">Info</span>
    </template>
    <template #title>
      <h3 class="text-lg font-medium">
        This is a info alert
      </h3>
    </template>
    <template #default="{ onCloseClick }">
      <div class="mt-2 mb-4 text-sm">
        More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <v-button><v-icon name="view"/>View more</v-button>
        <v-button @click="onCloseClick">Dismiss</v-button>
      </div>
    </template>
  </v-alert>

  <v-alert border closable type="info">
      Info alert! Change a few things up and try submitting again.
    </v-alert>  
</DemoContainer2>
