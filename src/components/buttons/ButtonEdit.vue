<template>
  <v-btn x-small fab color="secondary" @click="onClick">
    <v-icon>mdi-pencil</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonEdit',
  props: {
    onClick: {
      required: true,
      type: Function
    }
  }
};
</script>

<style></style>
