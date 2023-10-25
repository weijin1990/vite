import HomePage from '@/components/pages/HomePage.vue'
import LoginPage from '@/components/pages/LoginPage.vue';
import CustomerSearch from '@/components/pages/CustomerSearch.vue';

export default [

  { path: '/', component: LoginPage, meta: { title: 'ログインページ|Fics' }},
  { path: '/login', component: LoginPage, meta: { title: 'ログインページ|Fics' }},
  { path: '/home', component: HomePage, meta: { title: 'ホーム | Fics', requiresAuth: true }},
  { path: '/customer', component: CustomerSearch, meta: { title: '顧客検索|Fics', requiresAuth: true } },
];