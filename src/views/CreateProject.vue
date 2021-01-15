<template>
  <PageWrapper>
    <PageHeader>
      <template v-slot:title> Cadastrar novo projeto </template>
    </PageHeader>
    <PageContent>
      <v-container>
        <v-form>
          <v-row>
            <v-col cols="12" sm="8">
              <v-text-field
                v-model="project.name"
                :rules="[(v) => !!v]"
                label="Nome"
                required
                prepend-icon="mdi-briefcase"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row wrap>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="project.start_date"
                label="Data de início"
                hint="DD/MM/YYYY"
                prepend-icon="mdi-calendar-start"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="project.end_date"
                label="Data de término"
                hint="DD/MM/YYYY"
                prepend-icon="mdi-calendar-end"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="project.value"
                :rules="[(v) => !!v]"
                label="Valor do projeto"
                prepend-icon="mdi-cash-usd"
                prefix="R$"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-autocomplete
                v-model="project.risk"
                :rules="[() => project.risk >= 0 || 'O campo é obrigatório']"
                :items="risks"
                item-value="level"
                item-text="label"
                label="Risco"
                placeholder="Selecione um nível"
                required
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="participant"
                label="Adicionar participante"
                append-outer-icon="mdi-plus"
              ></v-text-field>

              <v-label> Participantes </v-label>
              <div v-for="person in project.participants" :key="person.name">
                <v-icon left> mdi-account-circle </v-icon>

                <span>
                  {{ person.name }}
                </span>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-btn> Criar projeto </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <v-form> </v-form>
    </PageContent>
  </PageWrapper>
</template>

<script>
import PageWrapper from '@/components/page/PageWrapper.vue';
import PageHeader from '@/components/page/PageHeader.vue';
import PageContent from '@/components/page/PageContent.vue';

export default {
  components: {
    PageWrapper,
    PageHeader,
    PageContent
  },
  data() {
    return {
      project: {
        name: null,
        start_date: null,
        end_date: null,
        value: null,
        risk: null,
        participants: [{ name: 'Foo' }]
      },
      participant: null,
      risks: [
        { level: 0, label: 'Baixo' },
        { level: 1, label: 'Médio' },
        { level: 2, label: 'Alto' }
      ]
    };
  }
};
</script>

<style></style>
