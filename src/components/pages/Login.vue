<template>

    <v-card
      class="mx-auto px-6 py-8"
      max-width="448"
      :rounded="lg"
    >

    <div class="text-subtitle-1 text-medium-emphasis text-left">ユーザ名</div>
    <v-text-field
      density="compact"
      placeholder=""
      prepend-icon=""
      variant="outlined"
    ></v-text-field>

    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
      パスワード
      <a
      class="text-caption text-descration-none text-blue"
      href="#"
      rel="noopener noreferrer"
      target="_blank">パスワードをお忘れですか？</a>
    </div>
    <v-text-field
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      placeholder=""
      prepend-icon=""
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>

    <v-btn
      block
      class="mb-8"
      color="blue"
      size="large"
      variant="tonal"
      @click="actionBtn"
    >ログイン</v-btn>

    <v-btn
      block
      class="mb-8"
      color="green"
      size="large"
      variant="tonal"
      @click="fetchBtn"
    >API(TEST PAGE)</v-btn>

    <v-card-text class="text-center">
      <a
        class="text-blue text-decoration-none"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        新規アカウント作成<v-icon icon="mdi-chevron-right"></v-icon>
      </a>
    </v-card-text>
 
    </v-card>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      visible: false,
    }
  },
  methods: {
    actionBtn(ev) {
      this.$router.push({ path: '/home' });
    },
    fetchBtn(ev) {
      this.$router.push({ path: '/fetch' });
    }
  }
}
</script>

<style>
</style>
