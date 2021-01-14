<template>
  <v-btn x-small fab color="error" @click="onClick">
    <v-icon>mdi-delete</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonDelete',
  props: {
    onClick: {
      required: true,
      type: Function
    }
  }
};
</script>

<style></style>
