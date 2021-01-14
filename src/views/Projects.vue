<template>
  <PageWrapper>
    <PageHeader> Projetos </PageHeader>
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
                <v-layout row wrap class="pa-3">
                  <v-flex xs6 sm4 md6>
                    <div class="caption grey--text">Data de início</div>
                    <div>{{ project.start_date }}</div>
                  </v-flex>

                  <v-flex xs6 sm4 md6>
                    <div class="caption grey--text">Data de término</div>
                    <div>{{ project.end_date }}</div>
                  </v-flex>

                  <v-flex xs12 md6>
                    <div class="caption grey--text">Valor do projeto</div>
                    <div>{{ project.value }}</div>
                  </v-flex>
                  <v-flex xs12 md6>
                    <div class="caption grey--text">Risco</div>
                    <div>{{ riskLabel(project.risk) }}</div>
                  </v-flex>

                  <v-flex xs12 md6>
                    <div class="caption grey--text">Participantes</div>
                    <div
                      v-for="person in parsedParticipants(project.participants)"
                      :key="person.name"
                    >
                      {{ person.name }}
                    </div>
                  </v-flex>
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
import PageWrapper from '@/components/page/PageWrapper.vue';
import PageHeader from '@/components/page/PageHeader.vue';
import PageContent from '@/components/page/PageContent.vue';
import EmptyListMessage from '@/components/EmptyListMessage.vue';
export default {
  name: 'Projects',
  components: { PageWrapper, PageHeader, PageContent, EmptyListMessage },
  data() {
    return {
      projects: [
        {
          id: 'ashasdlk',
          name: 'Foo',
          start_date: '12/01/2021',
          end_date: '13/01/2021',
          participants:
            '[{"name":"Heloisa"}, {"name":"Clarisse"}, {"name":"Maria Eduarda"}]',
          risk: 0,
          value: 25000.5
        },
        {
          id: 'asadsads',
          name: 'Foo',
          start_date: '12/01/2021',
          end_date: '13/01/2021',
          participants:
            '[{"name":"Heloisa"}, {"name":"Clarisse"}, {"name":"Maria Eduarda"}]',
          risk: 0,
          value: 25000.5
        }
      ],
      riskLevels: { 0: 'Baixo', 1: 'Médio', 2: 'Alto' }
    };
  },
  methods: {
    riskLabel(risk) {
      return this.riskLevels[risk];
    },
    parsedParticipants(participants) {
      return JSON.parse(participants);
    }
  }
};
</script>
