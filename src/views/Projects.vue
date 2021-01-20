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
              <v-expansion-panel-header>{{
                project.name
              }}</v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-layout row wrap>
                  <v-flex xs6 sm4 md6 class="pa-2">
                    <div class="caption grey--text">Data de início</div>
                    <div>{{ project.start_date }}</div>
                  </v-flex>

                  <v-flex xs6 sm4 md6 class="pa-2">
                    <div class="caption grey--text">Data de término</div>
                    <div>
                      {{ project.end_date }}
                    </div>
                  </v-flex>

                  <v-flex xs12 md6 class="pa-2">
                    <div class="caption grey--text">Valor do projeto</div>
                    <div>{{ project.value }}</div>
                  </v-flex>
                  <v-flex xs12 md6 class="pa-2">
                    <div class="caption grey--text">Risco</div>
                    <div>{{ riskLabel(project.risk) }}</div>
                  </v-flex>

                  <v-flex xs12 md6 class="pa-2">
                    <div class="caption grey--text">Participantes</div>
                    <div
                      v-for="person in project.participants"
                      :key="person.name"
                    >
                      <v-icon left> mdi-account-circle </v-icon>
                      <span>
                        {{ person.name }}
                      </span>
                    </div>
                  </v-flex>
                </v-layout>
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
