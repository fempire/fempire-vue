import Vue from 'vue';
import Router from 'vue-router';
import SpeakerList from '@/components/SpeakerList';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SpeakerList',
      component: SpeakerList,
    },
  ],
});
