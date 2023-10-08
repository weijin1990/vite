import HelloWorld from '@/components/pages/HelloWorld.vue'
import Login from '@/components/pages/Login.vue';
import FetchAPIData from '@/components/pages/FetchAPIData.vue';
import Dashboard from '@/components/pages/Dashboard.vue';

export default [
  // { path: '/', component: Login, meta: { title: 'ログイン|Fics' }},
  // { path: '/home', component: HelloWorld, meta: { title: 'ホーム|Fics' }},
  
  { path: '/', component: Dashboard, meta: { title: 'Homeページ|Fics' } },
  { path: '/fetch', component: FetchAPIData, meta: { title: 'APIテスト|Fics' } },
  { path: '/dashboard', component: Dashboard, meta: { title: 'Dashboard|Fics' } },
];