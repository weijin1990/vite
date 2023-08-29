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
  <header>App Header</header>
  <router-view></router-view>
  <footer>App Footer</footer>
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
    }
};
</script>

<style scoped>
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
