<template>
  <div :id="anchor"></div>
  <div>
    <div class="flex items-center mt-5 md:mt-10 group">
      <v-icon v-if="anchor" name="anchor" class="opacity-0 group-hover:opacity-100 group-hover:mx-2 duration-200" />
      <h3 v-if="name" class="py-1 md:py-3 text-lg md:text-2xl font-semibold">{{ name }}</h3>
    </div>
    <p v-if="description" class="text-xs md:text-sm pl-4 pb-2 md:pb-4">{{ description }}</p>
    <div class="rounded-xl bg-white bg-opacity-8 dark:bg-gray-700 py-6 md:py-10 px-4 md:px-6 flex justify-center z-0 undefined bg-no-repeat bg-cover">
      <div class="undefined">
        <div class="flex flex-wrap items-center">
          <slot /> 
        </div>
      </div>
    </div>    
  </div>

</template>

<script>
export default {
  props: {
    anchor: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },  
  },   
};
</script>
