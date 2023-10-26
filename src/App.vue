<template>
  <v-app>
    <template v-if="login">
      <v-toolbar class="fixed-toolbar">
        <v-app-bar-nav-icon />

        <v-toolbar-title>FiCS</v-toolbar-title>

        <v-spacer />

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template #extension>
          <v-tabs
            v-model="activeTab"
            align-tabs="title"
          >
            <v-tab
              v-for="item in paths"
              :key="item.name"
              :to="{ path: item.path }"
              :value="item.name"
            >
              {{ item.name }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-main>
        <v-container
          class="main-container"
          fluid
        >
          <router-view />
        </v-container>
      </v-main>
    </template>
    <template v-else>
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </template>
  </v-app>
</template>

<script>
import { RouterView } from 'vue-router';
import { Auth } from 'aws-amplify';

export default {
  name: 'App',
  components: { RouterView },
  mixins: [Auth],
  data: () => ({
    drawer: true,
    activeTab: null,
    paths: [
      { name: 'ホーム', path: '/home' }, 
      { name: '顧客一覧', path: '/customer' }, 
    ],
  }),
  computed: {
    login() {
      console.log('current path:', this.$route.path);
      console.log('current login:', this.$route.path !== '/' && this.$route.path !== '/login');
      return this.$route.path !== '/' && this.$route.path !== '/login';
    },

  },
  watch: {
    '$route' (to, from) {
      if (to.meta.title !== void 0) {
        document.title = to.meta.title;
      }
    }
  },
  activeTab(newTab) {
    this.$router.push({ path: newTab.path });
  },
  methods: {
    async handleSignOut() {
      try {
        await Auth.signOut();
        this.$router.push({ path: '/login' });
        console.log('Sign out successful');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    },
  }
};
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.v-main {
  flex: 1;
  overflow-y: auto;
  padding-left: 0 !important;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.fixed-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #FFFFFF; 
}
.main-container {
  padding-top: 132px;
  background-image: url("@/assets/img/lbg.png");
  background-size: contain;
  background-color: #B0C4DF
}
.v-main {
  background-color: #F4F6F9 !important;
}
</style>

<style>
/* Vuetify css override */
.v-toolbar__content {
  /* background-image: url("@/assets/img/toolbar-bg.jpg");
  background-size: cover; */
  background: repeating-linear-gradient(45deg, rgb(84,105,141), rgb(84,105,141) 20px, rgba(84,105,141,.97) 20px, rgba(84,105,141,.97) 40px);
}
</style>
