import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from '@/views/Projects.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/projects/create',
    name: 'projects.post',
    component: () =>
      import(
        /* webpackChunkName: "create project" */ '../views/CreateProject.vue'
      )
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
