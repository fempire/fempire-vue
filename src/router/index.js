import Vue from 'vue';
import Router from 'vue-router';
import Fempire from '@/components/Fempire';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Fempire',
      component: Fempire,
    },
  ],
});
