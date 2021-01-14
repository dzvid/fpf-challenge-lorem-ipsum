<template>
  <header class="d-flex flex-row justify-space-between">
    <h1 class="black-lighten-1--text text-h5">
      <slot></slot>
    </h1>
    <ButtonAddProject />
  </header>
</template>

<script>
import ButtonAddProject from '@/components/buttons/ButtonAddProject.vue';

export default {
  components: { ButtonAddProject }
};
</script>

<style></style>
