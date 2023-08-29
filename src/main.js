import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from "@/router";
import store from "@/store";
import vuetify from "./plugins/vuetify.js";

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app');
