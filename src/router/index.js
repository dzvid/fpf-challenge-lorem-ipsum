import Vue from 'vue';
import VueRouter from 'vue-router';
import Projects from '@/views/Projects.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'projects' }
  },
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
        /* webpackChunkName: "create project" */ '../views/ProjectForm.vue'
      )
  },
  {
    path: '/projects/edit/:editableProjectId',
    name: 'projects.put',
    component: () =>
      import(/* webpackChunkName: "edit project" */ '../views/ProjectForm.vue'),
    props: true
  },
  {
    path: '*',
    redirect: { name: 'projects' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
