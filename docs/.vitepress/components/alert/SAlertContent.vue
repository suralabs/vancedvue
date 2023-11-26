<template>
  <v-alert icon type="info" closable>
    <template #title>
      <h3 class="text-lg font-medium">This is a info alert</h3>
    </template>
    <template #default="{ onCloseClick }">
      <div class="mt-2 mb-4 text-sm">
        More info about this info alert goes here. This example text is going to
        run a bit longer so that you can see how spacing within an alert works
        with this kind of content.
      </div>
      <div class="flex">
        <v-button><v-icon name="view" />View more</v-button>
        <v-button @click="onCloseClick">Dismiss</v-button>
      </div>
    </template>
  </v-alert>
</template>
