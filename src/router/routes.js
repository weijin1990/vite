import HelloWorld from '@/components/pages/HelloWorld.vue'
import Login from '@/components/pages/Login.vue';
import FetchAPIData from '@/components/pages/FetchAPIData.vue';

export default [
  { path: '/', component: Login, meta: { title: 'ログイン|Fics' }},
  { path: '/home', component: HelloWorld, meta: { title: 'ホーム|Fics' }},
  { path: '/fetch', component: FetchAPIData, meta: { title: 'APIテスト|Fics' } },
];