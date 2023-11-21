<template>
  <div class="demo-container">
    <div class="flex flex-wrap gap-2">
      <slot></slot>
    </div>    
  </div>
</template>

<style scoped>
.gap-2 {
    gap: 0.5rem;
}
.flex-wrap {
    flex-wrap: wrap;
}
</style>