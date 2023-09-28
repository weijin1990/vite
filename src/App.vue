<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template> -->

<template>

<v-app  :style="{ 'margin-left': drawer ? '262px' : '0' }">

<v-toolbar color="#FFFFFF">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>FiCS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="activeTab"
          align-tabs="title"
        >
          <v-tab
            v-for="item in paths"
            :to="{ path: item.path }"
            :key="item.name"
            :value="item.name"
          >
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>


    <v-main>
      <v-navigation-drawer app v-model="drawer"
    class="bg-white"
    theme="dark"
    permanent
  >
    <v-list color="transparent">
      <v-list-item prepend-icon="mdi-cogs" title="設定のホーム"></v-list-item>
      <v-list-item prepend-icon="mdi-apple-keyboard-command" title="管理"></v-list-item>
      <v-list-item prepend-icon="mdi-account-box" title="ユーザ"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
          ログアウト
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

      <v-container fluid>
        <router-view></router-view>
      </v-container>
      </v-main>

  <v-footer class="bg-grey-darken-2" style="max-height: 50px;">
    <v-row justify="center" no-gutters>
      <v-col class="text-center" cols="12">
        Copyright (C) <strong>CSC</strong>. All rights reserved({{ new Date().getFullYear() }})
      </v-col>
    </v-row>
  </v-footer>

</v-app>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
    name: 'App',
    components: { RouterView },
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
    data: () => ({
      drawer: true,
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      activeTab: null,
      paths: [
        { name: '設定', path: '/dashboard' }, 
        { name: 'ホーム', path: '/home' }, 
        { name: 'TEST', path: '/fetch' }, 
        { name: 'レポート', path: '/' }, 
        { name: '顧客検索', path: '/' }, 
        { name: '顧客カルテ', path: '/' }, 
        { name: '【フラット】顧客情報', path: '/' }, 
        { name: '【信託】顧客情報', path: '/' }, 
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }),
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
</style>
