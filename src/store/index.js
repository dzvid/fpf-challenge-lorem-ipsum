import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {
    SET_PROJECTS(state, payload) {
      state.projects = payload;
    }
  },
  actions: {
    async fetchProjects(context) {
      const projectsList = [
        {
          id: 'asdads',
          name: 'Foo',
          start_date: '12/01/2021',
          end_date: '13/01/2021',
          participants:
            '[{"name":"Heloisa"}, {"name":"Clarisse"}, {"name":"Maria Eduarda"}]',
          risk: 0,
          value: 25000.5
        },
        {
          id: 'asdads12',
          name: 'YO',
          start_date: '12/01/2021',
          end_date: '13/01/2021',
          participants:
            '[{"name":"Heloisa"}, {"name":"Clarisse"}, {"name":"Maria Eduarda"}]',
          risk: 0,
          value: 25000.5
        },
        {
          id: 'asdads13',
          name: 'QWERTY',
          start_date: '12/01/2021',
          end_date: '13/01/2021',
          participants:
            '[{"name":"Heloisa"}, {"name":"Clarisse"}, {"name":"Maria Eduarda"}]',
          risk: 0,
          value: 25000.5
        }
      ];

      const projects = projectsList.map((project) => ({
        ...project,
        participants: JSON.parse(project.participants)
      }));

      console.log('JSON.parse', projects);
      context.commit('SET_PROJECTS', projects);
    },
    async saveProjects(context) {
      const parsedProjects = context.state.projects.map((project) => ({
        ...project,
        participants: JSON.stringify(project.participants)
      }));

      console.log('JSON.stringfy', parsedProjects);
    }
  },
  getters: {
    getProjectById: (state) => (projectId) =>
      state.projects.find((project) => project.id === projectId)
  },
  modules: {}
});
