<!-- eslint-disable vue/v-on-event-hyphenation -->
<template>
  <v-button pill @click="showModal = true">Open</v-button>
  <Teleport to="body">
    <v-modal
      size="md"
      :show="showModal"
      title="Lorem ipsum"
      @onDismissed="showModal = false"
    >
      <template #body>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">Lorem ipsum</div>
      </template>
    </v-modal>
  </Teleport>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
