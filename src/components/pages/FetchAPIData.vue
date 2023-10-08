<template>
  <h2>{{ amplifyRes }}</h2>
</template>

<script>
export default {
  name: 'API',
  data() {
    return {
      // desserts: [
      //     {
      //       name: 'Frozen Yogurt',
      //       calories: 159,
      //     },
      //     {
      //       name: 'Ice cream sandwich',
      //       calories: 237,
      //     },
      //     {
      //       name: 'Eclair',
      //       calories: 262,
      //     },
      //     {
      //       name: 'Cupcake',
      //       calories: 305,
      //     },
      //     {
      //       name: 'Gingerbread',
      //       calories: 356,
      //     },
      //     {
      //       name: 'Jelly bean',
      //       calories: 375,
      //     },
      //     {
      //       name: 'Lollipop',
      //       calories: 392,
      //     },
      //     {
      //       name: 'Honeycomb',
      //       calories: 408,
      //     },
      //     {
      //       name: 'Donut',
      //       calories: 452,
      //     },
      //     {
      //       name: 'KitKat',
      //       calories: 518,
      //     },
      //   ],
      //   svcres: [],
        amplifyRes: '',
    }
  },
  async mounted() {
    this.amplifyRes = await this.$store.dispatch('fetchAmplifyData');
    // this.amplifyRes = await this.$store.getters['getTestData'];
  },
  methods: {
    actionBtn(ev) {
      this.$router.push({ path: '/home' });
    },
    async fetchData() {
      try {
        const response = await API.get('YourApiName', '/path'); // 替换为你的API名称和路径
        this.data = response.data;
      } catch (error) {
        console.error('获取数据时出错：', error);
      }
    },
  }
}
</script>

<style>
  .full-screen {
    width: 800px;
  }
</style>
