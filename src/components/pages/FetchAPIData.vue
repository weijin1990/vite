<template>·
  <p>{{ amplifyRes }}</p>
</template>

<script>
export default {
  name: 'API',
  data() {
    return {
        amplifyRes: '',
    }
  },
  async mounted() {
    this.amplifyRes = await this.$store.dispatch('fetchAmplifyData');
  },
  methods: {
    actionBtn(ev) {
      this.$router.push({ path: '/home' });
    },
  }
}
</script>

<style>
  .full-screen {
    width: 800px;
  }
</style>
