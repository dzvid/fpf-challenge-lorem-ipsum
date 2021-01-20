<template>
  <v-dialog v-model="visible" persistent max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn x-small color="primary" fab v-bind="attrs" v-on="on">
        <v-icon>mdi-calculator-variant</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h6"> Simular investimento </v-card-title>
      <v-card-subtitle>
        Realize aqui o cálculo de retorno de investimento do projeto.
      </v-card-subtitle>
      <v-card-text>
        <v-form id="form" ref="form">
          <v-text-field
            v-model="investiment"
            type="number"
            :rules="[rules.investment.validateInvestmentValue(project.value)]"
            label="Valor a investir"
            prepend-icon="mdi-cash-usd"
            prefix="R$"
          ></v-text-field>
        </v-form>

        <v-card v-if="investimentReturn" class="secondary mt-4">
          <v-card-subtitle class="white--text">
            Retorno do investimento:
          </v-card-subtitle>
          <v-card-text class="headline white--text">
            {{ `R$ ${investimentReturn}` }}
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="visible = false"> Cancelar </v-btn>
        <v-btn
          color="primary"
          form="form"
          type="submit"
          @click.prevent="handleSimulation"
        >
          Simular
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import rules from '@/rules';
import { mapGetters } from 'vuex';
import cloneDeep from 'lodash.clonedeep';

export default {
  name: 'ButtonSimulateInvestiment',
  props: {
    projectId: {
      required: true
    }
  },
  created() {
    if (this.projectId) {
      const project = this.getProjectById(this.projectId);
      this.project = cloneDeep(project);
    }
  },
  data() {
    return {
      visible: false,
      investiment: null,
      project: {
        name: null,
        start_date: null,
        end_date: null,
        value: null,
        risk: null,
        participants: []
      },
      investimentReturn: null,
      rules
    };
  },
  computed: {
    ...mapGetters(['getProjectById'])
  },
  methods: {
    handleSimulation() {
      if (this.$refs.form.validate()) {
        this.investimentReturn = this.calculateInvestmentReturn(
          this.investiment
        );
      }
    },

    calculateInvestmentReturn(investment) {
      switch (this.project.risk) {
        case 0:
          return investment * 0.05;
        case 1:
          return investment * 0.1;
        case 2:
          return investment * 0.2;
      }
    }
  }
};
</script>

<style></style>
