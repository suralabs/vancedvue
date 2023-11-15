<template>
  <img :class="classes2" :src="src" :alt="alt">
</template>

<script lang="ts">
// import { keyable } from './types/global';
import shaped from "./mixins/shaped";
import sizeable from "./mixins/sizeable";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "ava",
    },    
  },
  mixins: [shaped, sizeable],
  data() {
    return {};
  },

  computed: {
    classes(): Array<string | any> {
      return [
        `${this.sizes[this.size]}`,
        `${this.size}`,
        this.shapes[this.shape],
        "relative",
      ];
    },
    classes2(): Array<string | any> {
      return [
        `${this.sizes[this.size]}`,
        `${this.size}`,
        this.shapes[this.shape],
        // "relative",
      ];
    },    
  },
});
</script>

<style>
/* .w-6 {width: 1.5rem;} */
/* .h-6 {height: 1.5rem;} */
/* .w-8 {width: 2rem;} */
/* .h-8 {height: 2rem;} */
.w-10 {width: 2.5rem;}
.h-10 {height: 2.5rem;}
.w-36 {width: 9rem;}
.h-36 {height: 9rem;}
</style>