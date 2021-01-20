<template>
  <PageWrapper>
    <PageHeader>
      <template v-slot:title> Projetos </template>
      <template v-slot:button>
        <ButtonAddProject />
      </template>
    </PageHeader>
    <PageContent>
      <template v-if="projects.length === 0">
        <EmptyListMessage />
      </template>

      <template v-if="projects.length > 0">
        <v-container class="my-5">
          <v-expansion-panels>
            <v-expansion-panel v-for="project in projects" :key="project.id">
              <v-expansion-panel-header class="headline">{{
                project.name
              }}</v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-container>
                  <v-row wrap align-sm="center" justify-sm="center">
                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="project.start_date"
                        label="Data de início"
                        prepend-icon="mdi-calendar-start"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="project.end_date"
                        label="Data de término"
                        prepend-icon="mdi-calendar-end"
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row align-sm="center" justify-sm="center">
                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="project.value"
                        type="number"
                        label="Valor do projeto"
                        prepend-icon="mdi-cash-usd"
                        prefix="R$"
                        required
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        :value="riskLabel(project.risk)"
                        prepend-icon="mdi-alert"
                        label="Risco"
                        required
                        readonly
                      ></v-text-field>
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
                        >
                          <v-icon left> mdi-account </v-icon>
                          <span class="text-truncate">
                            {{ person.name }}
                          </span>
                        </v-chip>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>

                <v-layout
                  row
                  wrap
                  class="pa-4"
                  justify-center
                  justify-sm-end
                  align-center
                >
                  <div class="mr-2">
                    <ButtonSimulateInvestment :projectId="project.id" />
                  </div>
                  <ButtonEdit
                    :onClick="() => navigateToEditProject(project.id)"
                    class="mr-2"
                  />
                  <ButtonDelete :projectId="project.id" />
                </v-layout>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </template>
    </PageContent>
  </PageWrapper>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import PageWrapper from '@/components/page/PageWrapper.vue';
import PageHeader from '@/components/page/PageHeader.vue';
import PageContent from '@/components/page/PageContent.vue';
import EmptyListMessage from '@/components/EmptyListMessage.vue';
import ButtonAddProject from '@/components/buttons/ButtonAddProject.vue';
import ButtonEdit from '@/components/buttons/ButtonEdit.vue';
import ButtonSimulateInvestment from '@/components/buttons/ButtonSimulateInvestment.vue';
import ButtonDelete from '@/components/buttons/ButtonDelete.vue';

export default {
  name: 'Projects',
  components: {
    PageWrapper,
    PageHeader,
    PageContent,
    EmptyListMessage,
    ButtonAddProject,
    ButtonSimulateInvestment,
    ButtonEdit,
    ButtonDelete
  },
  async created() {
    await this.fetchProjects();
  },
  data() {
    return {
      riskLevels: { 0: 'Baixo', 1: 'Médio', 2: 'Alto' }
    };
  },
  computed: {
    ...mapState({
      projects: (state) => state.projects
    })
  },
  methods: {
    ...mapActions(['fetchProjects']),
    riskLabel(risk) {
      return this.riskLevels[risk];
    },
    navigateToEditProject(projectId) {
      this.$router.push({
        name: 'projects.put',
        params: { editableProjectId: projectId }
      });
    }
  }
};
</script>
