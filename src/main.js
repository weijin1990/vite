import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router';
import store from '@/store';
import vuetify from './plugins/vuetify.js';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app');
