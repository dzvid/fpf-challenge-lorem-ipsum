import Vue from 'vue';
import Vuex from 'vuex';

import db from '@/services/api';

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
      const data = await db.collection('projects').get();
      const projects = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      context.commit('SET_PROJECTS', projects);
    },
    async createProject(context, payload) {
      db.collection('projects')
        .add(payload)
        .then(() => {
          console.log('Added: ', payload);
          context.dispatch('fetchProjects');
        });

      context.dispatch('fetchProjects');
    },
    async editProject(context, payload) {
      db.collection('projects')
        .doc(payload.id)
        .update(payload)
        .then(() => {
          console.log('Updated: ', payload);
          context.dispatch('fetchProjects');
        });
    },
    async deleteProject(context, payload) {
      db.collection('projects')
        .doc(payload.id)
        .delete()
        .then(() => {
          console.log('Deleted: ', payload);
          context.dispatch('fetchProjects');
        });
    }
  },
  getters: {
    getProjectById: (state) => (projectId) =>
      state.projects.find((project) => project.id === projectId)
  }
});
