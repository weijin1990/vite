<template>
  <div>
    <div class="text-left">
      <authenticator :hide-sign-up="true">
        <template #header>
          <div style="padding: var(--amplify-space-large); text-align: center;">
            <!-- <img
          class="amplify-image"
          alt="logo"
          src="@/assets/vite.svg"
        > -->
            <h1 style="color: #0070d2;">
              FiCS
            </h1>
          </div>
        </template>
      </authenticator>
    </div>
    <div id="footer">
      <a href="#">Copyright 2023 Fujitsu</a>
    </div>
  </div>
</template>

<script setup>
import { Authenticator, translations } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import { Amplify, Auth, I18n } from 'aws-amplify';
import awsconfig from '@/aws-exports';

I18n.putVocabularies(translations);
I18n.setLanguage('ja');
I18n.putVocabularies({
  ja: {
    'Create Account': '新規登録',
    // 'Username': 'ユーザー名',
    'Sign in': 'ログイン',
    'Enter your Username': ' ',
    'Enter your Password': ' ',
    'Configuration error (see console) – please contact the administrator': 'ログインエラー',
  },
});

Amplify.configure(awsconfig);

const services = {
  async handleSignUp(formData) {
    let { username, password, attributes } = formData;
    username = username.toLowerCase();
    attributes.email = attributes.email.toLowerCase();
    return Auth.signUp({
      username,
      password,
      attributes,
      autoSignIn: {
        enabled: true,
      },
    });
  },
};
</script>

<script>
import { Hub, Logger } from 'aws-amplify';

export default {
  name: 'LoginPage',

  data() {
    return {}
  },
  mounted() {
    const logger = new Logger('My-Logger');

    const listener = (data) => {
      switch (data?.payload?.event) {
      case 'signIn':
        logger.info('user signed in');
        this.$store.dispatch('saveSignInFlg', true);
        // TODO save User info
        this.$router.push({ path: '/home' });
        break;
      case 'signOut':
        logger.info('user signed out');
        this.$store.dispatch('saveSignInFlg', false);
        break;
      default:
        logger.info('unknown event type');
        break;
      }
    };

    Hub.listen('auth', listener);
  },
}
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 10px;
  text-align: center;

  & > a {
    color: #333;
  }
}
</style>

<style>
  /* Amplify UI css override */
  input.amplify-input {
    border-top-left-radius: 4px !important;
    border-bottom-left-radius: 4px !important;
  }
  .amplify-button[data-variation='primary'] {
    background-color: #0070d2;
  }
  .amplify-button[data-variation='primary']:hover, .amplify-button[data-variation='primary']:focus {
      background-color: #005fb2;
    }
</style>