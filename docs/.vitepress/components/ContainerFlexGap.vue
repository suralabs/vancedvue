<template>
  <div class="demo-container inline-flex align-center gap-2 flex-wrap">
    <slot></slot>
  </div>
</template>
<style>
.gap-2 {
    gap: .5rem;
}
.flex-wrap {
    flex-wrap: wrap;
}
.inline-flex {
    display: inline-flex;
}
</style>