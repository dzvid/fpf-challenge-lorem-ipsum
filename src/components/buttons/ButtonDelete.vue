<template>
  <v-dialog v-model="visible" persistent max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn x-small fab color="error" v-bind="attrs" v-on="on">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h6"
        >Deseja realmente excluir o projeto?
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="visible = false"> Cancelar </v-btn>
        <v-btn color="primary" text @click="handleDelete"> Excluir </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ButtonDelete',
  props: {
    onClick: {
      required: true,
      type: Function
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleDelete() {
      this.onClick();
      this.dialog = false;
    }
  }
};
</script>

<style></style>
