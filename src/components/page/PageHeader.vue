<template>
  <header class="d-flex flex-row justify-space-between">
    <h1 class="black-lighten-1--text text-h5">
      <slot name="title"></slot>
    </h1>
    <slot name="button"> </slot>
  </header>
</template>

<script>
export default {
  components: {}
};
</script>

<style></style>
