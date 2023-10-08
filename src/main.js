import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from "@/router";
import store from "@/store";
import vuetify from "./plugins/vuetify.js";
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_RMc6tCG2P',
    userPoolWebClientId: '7nprqieg29dnn2deam47120v08',
    identityPoolId: 'ap-northeast-1:aa08de5e-7e47-4330-baeb-5c718fa164fc',
  },
  API: {
    endpoints: [
      {
        name: 'FicsPocApi',
        endpoint: 'https://5fy74raqxg.execute-api.ap-northeast-1.amazonaws.com/staging',
        custom_header: async () => {
          const session = await Auth.currentSession();
          const token = session.getIdToken().getJwtToken();
          return {
            Authorization: `Bearer ${token}`
          };
        }
      }
    ]
  }
});

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app');
