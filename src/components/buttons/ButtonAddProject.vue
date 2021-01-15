<template>
  <v-btn color="secondary " small @click="navigateToCreateProject()">
    <v-icon left>mdi-plus</v-icon>
    <span>Cadastrar projeto</span>
  </v-btn>
</template>

<script>
export default {
  methods: {
    navigateToCreateProject() {
      this.$router.push({ name: 'projects.post' });
    }
  }
};
</script>

<style></style>
