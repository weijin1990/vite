import HelloWorld from '@/components/pages/HelloWorld.vue'
import Login from '@/components/pages/Login.vue';
import FetchAPIData from '@/components/pages/FetchAPIData.vue';

export default [
  { path: '/', component: Login },
  { path: '/home', component: HelloWorld },
  { path: '/fetch', component: FetchAPIData },
];