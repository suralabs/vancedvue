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

<DemoContainer>
<v-alert>Info</v-alert>
</DemoContainer>

<<< @/components/demo/alert/Basic.vue

## Colors

<DemoContainer>
  <v-alert type="info">Info</v-alert>
  <v-alert type="danger">Danger</v-alert>
  <v-alert type="dark">Dark</v-alert>
  <v-alert type="success">Success</v-alert>
  <v-alert>Default</v-alert>
  <v-alert type="warning">Warning</v-alert>
</DemoContainer>

## Icons

<DemoContainer>
  <v-alert icon type="info">Info</v-alert>
  <v-alert icon type="success">Your account was created 👌</v-alert>
</DemoContainer>

## Custom icons

<DemoContainer>
  <v-alert icon type="info">
      <template #icon>
      <v-icon name='password' size="24"/>
      <span class="sr-only">Info</span>
    </template>
    Custom icon
  </v-alert>
</DemoContainer>

## Closable

<DemoContainer>
  <v-alert icon type="info" closable>Info</v-alert>
</DemoContainer>

## Custom title

<DemoContainer>
  <v-alert icon type="info" closable>
    <template #title>
      <h3 class="text-lg font-medium">
        This is a info alert
      </h3>
    </template>    
  </v-alert>
</DemoContainer>

<DemoContainer>
  <v-alert icon type="info" closable>
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
</DemoContainer>
