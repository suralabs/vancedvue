<template>
  <div v-if="visible" :class="newWrapperClasses()">
    <div class="p-4">
      <div class="flex items-start justify-between">
        <div class="shrink-0">
          <slot v-if="icon !== undefined || $slots.icon" name="icon">
            <v-icon :name="type" size="24" />
          </slot>
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="font-semibold">
            {{ title || type }}
          </p>
          <p class="text-sm font-semibold">
            <slot name="default" :on-close-click="onCloseClick" />
          </p>
        </div>
        <div class="flex ml-4 shrink-0">
          <slot name="close-icon" :on-close-click="onCloseClick">
            <button
              v-if="closable != undefined"
              type="button"
              class="inline-flex text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              @click="onCloseClick"
            >
              <span class="sr-only">Close</span>
              <v-icon name="close" />
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vIcon from '../icon/v-icon.vue';

export default {
  props: {
    type: info,
    title: null,
    closable: false,
    icon: false,
    border: false,
    duration: { type: Number, default: 0 },
  },
  components: { vIcon },
  data() {
    return {
      visible: true,
      timeout: 0,
    };
  },
  mounted() {
    this.startTimer();
  },
  unmounted() {
    clearTimeout(this.timeout);
  },
  methods: {
    startTimer() {
      if (this.duration > 0) {
        this.timeout = setTimeout(this.onCloseClick, this.duration);
      }
    },
    onCloseClick() {
      clearTimeout(this.timeout);
      this.$emit('close');
      this.visible = false;
    },

    newWrapperClasses() {
      let textColors = {
        danger: 'text-red-800 dark:text-red-400',
        dark: 'text-gray-800 dark:text-gray-300',
        info: 'text-blue-800 dark:text-blue-400',
        success: 'text-green-800 dark:text-green-400',
        warning: 'text-yellow-800 dark:text-yellow-300',
      };
      return [
        'bg-white dark:bg-gray-800 ring-black',
        textColors[this.type],
        'w-full max-w-sm mt-4 overflow-hidden rounded-lg shadow-lg pointer-events-auto ring-1 ring-opacity-5',
      ];
    },
    //     warning: [alertTextClasses.warning, alertTypeClasses.warning].join(' '),
  },
};
</script>

<style>
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
