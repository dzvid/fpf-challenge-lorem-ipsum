<template>
  <PageWrapper>
    <PageHeader>
      <template v-slot:title> Cadastrar novo projeto </template>
    </PageHeader>
    <PageContent>
      <v-container>
        <v-form>
          <v-row align-sm="center" justify-sm="center">
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

          <v-row wrap align-sm="center" justify-sm="center">
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="project.start_date"
                label="Data de início"
                hint="DD/MM/YYYY"
                :rules="[(v) => !!v]"
                prepend-icon="mdi-calendar-start"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="project.end_date"
                label="Data de término"
                hint="DD/MM/YYYY"
                :rules="[(v) => !!v]"
                prepend-icon="mdi-calendar-end"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row align-sm="center" justify-sm="center">
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
                :rules="[() => project.risk || 'O campo é obrigatório']"
                :items="risks"
                item-value="level"
                item-text="label"
                prepend-icon="mdi-alert"
                label="Risco"
                placeholder="Selecione um nível"
                required
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row class="mt-4" align-sm="center" justify-sm="center">
            <v-col cols="12" sm="8">
              <v-label> Participantes </v-label>
              <div>
                <v-chip
                  v-for="person in project.participants"
                  :key="person.name"
                  class="ma-2"
                  close
                  @click:close="removeParticipant(person.name)"
                >
                  <v-icon left> mdi-account </v-icon>
                  <span> {{ person.name }} </span>
                </v-chip>
              </div>

              <v-text-field
                v-model="participant"
                label="Adicionar participante"
                prepend-icon="mdi-account-circle"
                append-outer-icon="mdi-plus"
                required
                :rules="[
                  () =>
                    project.participants.length > 0 || 'O campo é obrigatório.'
                ]"
                @click:append-outer="addParticipant(participant)"
                @keyup.enter="addParticipant(participant)"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="mt-4 d-flex justify-center align-center">
              <v-btn color="secondary" depressed small>
                Salvar novo projeto
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
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
        participants: []
        // [{ name: 'Foo' }, { name: 'Foo2' }]
      },
      participant: null,
      risks: [
        { level: 0, label: 'Baixo' },
        { level: 1, label: 'Médio' },
        { level: 2, label: 'Alto' }
      ]
    };
  },
  methods: {
    addParticipant(participant) {
      if (participant && this.participantDoesNotExists(participant)) {
        this.project.participants.push({ name: participant });
        this.clearInputParticipant();
      }
    },
    clearInputParticipant() {
      this.participant = null;
    },
    removeParticipant(name) {
      this.project.participants = this.project.participants.filter(
        (p) => p.name !== name
      );
    },
    participantDoesNotExists(participant) {
      return !this.project.participants.find((p) => p.name === participant);
    }
  }
};
</script>

<style></style>
