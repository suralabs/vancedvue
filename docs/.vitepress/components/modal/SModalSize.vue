<!-- eslint-disable vue/v-on-event-hyphenation -->
<template>
  <v-button @click="size1 = true">SM Modal</v-button>
  <v-button @click="size2 = true">MD Modal</v-button>
  <v-button @click="size3 = true">XL Modal</v-button>
  <v-button @click="size4 = true">5XL Modal</v-button>
  <Teleport to="body">
    <v-modal
      size="sm"
      :show="size1"
      title="Lorem ipsum"
      @onDismissed="size1 = false"
    >
    </v-modal>
  </Teleport>
  <Teleport to="body">
    <v-modal
      size="md"
      :show="size2"
      title="Lorem ipsum"
      @onDismissed="size2 = false"
    >
    </v-modal>
  </Teleport>
  <Teleport to="body">
    <v-modal
      size="xl"
      :show="size3"
      title="Lorem ipsum"
      @onDismissed="size3 = false"
    >
    </v-modal>
  </Teleport>
  <Teleport to="body">
    <v-modal
      size="5xl"
      :show="size4"
      title="Lorem ipsum"
      @onDismissed="size4 = false"
    >
    </v-modal>
  </Teleport>
</template>

<script>
export default {
  data() {
    return {
      size1: false,
      size2: false,
      size3: false,
      size4: false,
    };
  },
};
</script>
