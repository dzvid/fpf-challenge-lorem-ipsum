<template>
  <v-btn x-small color="primary" class="py-4 mr-2" @click="onClick">
    <v-icon left>mdi-calculator-variant</v-icon>
    <span
      >Simular <br />
      investimento</span
    >
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonSimulateInvestiment',
  props: {
    onClick: {
      required: true,
      type: Function
    }
  }
};
</script>

<style></style>
