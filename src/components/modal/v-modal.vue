<template>
  <Transition :size="size">
    <div v-if="show">
      <div
        class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
      ></div>
      <div
        class="modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        @click.self="closeModal"
        @keydown.esc="$emit('onDismissed')"
        @keup.esc="$emit('onDismissed')"
      >
        <div :class="modalSize()">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div
              class="p-4 rounded-t flex justify-between items-center border-b border-gray-200 dark:border-gray-600"
            >
              <slot name="header">
                <div class="flex items-center text-lg">{{ title }}</div>
                <button
                  aria-label="close"
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="closeModal()"
                >
                  <v-icon name="close" />
                </button>
              </slot>
            </div>
            <div class="p-6">
              <slot name="body">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  Lorem ipsum
                </div>
              </slot>
            </div>
            <div
              class="p-6 rounded-b border-gray-200 border-t dark:border-gray-600"
            >
              <slot name="footer">
                <div class="flex justify-between">
                  <v-button @click="closeModal()">{{ close }}</v-button>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import vIcon from '../icon/v-icon.vue';
import vButton from '../button/v-button.vue';

export default {
  name: 'Modal',
  components: {
    vIcon,
    vButton,
  },
  props: {
    show: Boolean,
    title: { type: String, default: 'Title' },
    size: { type: String, default: 'md' },
    notEscapable: { type: Boolean, default: false },
    persistent: { type: Boolean, default: false },
    close: {
      type: String,
      default: 'Close',
    },
  },
  emits: ['onDismissed'],
  data() {
    return {
      open: false,
    };
  },
  watch: {
    show() {
      const body = document.querySelector('body');
      if (this.show === false) {
        body.style.overflow = '';
        window.removeEventListener('keydown', this.closeWithEsc);
      } else {
        body.style.overflow = 'hidden';
        window.addEventListener('keydown', this.closeWithEsc);
      }
    },
  },
  mounted() {},
  methods: {
    closeModal() {
      this.$emit('onDismissed');
    },
    closeWithEsc(e) {
      if (this.show && e.key === 'Escape') {
        if (!this.notEscapable && !this.persistent) this.closeModal();
      }
    },
    modalSize() {
      let sizes = {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
      };
      return [sizes[this.size], `relative p-4 w-full h-full`];
    },
  },
};
</script>
