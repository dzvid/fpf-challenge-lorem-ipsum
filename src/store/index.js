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
    },

    ADD_PROJECT(state, payload) {
      state.projects.push(payload);
    }
  },
  actions: {
    async fetchProjects() {
      // const projectsList = [
      //   {
      //     id: 'asdads',
      //     name: 'Foo',
      //     start_date: '12/01/2021',
      //     end_date: '13/01/2021',
      //     participants:
      //       '[{"name":"Heloisa"}, {"name":"Clarisse"}, {"name":"Maria Eduarda"}]',
      //     risk: 0,
      //     value: 25000.5
      //   },
      //   {
      //     id: 'asdads12',
      //     name: 'YO',
      //     start_date: '12/01/2021',
      //     end_date: '13/01/2021',
      //     participants:
      //       '[{"name":"Heloisa"}, {"name":"Clarisse"}, {"name":"Maria Eduarda"}]',
      //     risk: 0,
      //     value: 25000.5
      //   },
      //   {
      //     id: 'asdads13',
      //     name: 'QWERTY',
      //     start_date: '12/01/2021',
      //     end_date: '13/01/2021',
      //     participants:
      //       '[{"name":"Heloisa"}, {"name":"Clarisse"}, {"name":"Maria Eduarda"}]',
      //     risk: 0,
      //     value: 25000.5
      //   }
      // ];
      // const projects = projectsList.map((project) => ({
      //   ...project,
      //   participants: JSON.parse(project.participants)
      // }));
      // context.commit('SET_PROJECTS', projects);
    },
    async createProject(context, payload) {
      context.commit('ADD_PROJECT', payload);
    },
    async editProject(context, payload) {
      const projectIndex = context.state.projects.findIndex(
        (project) => project.id === payload.id
      );

      let listWithUpdatedProject = context.state.projects;
      if (projectIndex !== -1) {
        listWithUpdatedProject[projectIndex] = { ...payload };
        context.commit('SET_PROJECTS', listWithUpdatedProject);
      } else {
        console.warn('Project not found!');
      }
    },
    async deleteProjectById(context, payload) {
      const updateProjectList = context.state.projects.filter(
        (project) => project.id !== payload
      );

      context.commit('SET_PROJECTS', updateProjectList);
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
