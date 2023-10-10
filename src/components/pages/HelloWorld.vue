<script setup>
  import { Authenticator, translations } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";
  import { Amplify, Auth, Hub, Logger, I18n } from 'aws-amplify';
  import awsconfig from '@/aws-exports';

  I18n.putVocabularies(translations);
  I18n.setLanguage('ja');
  I18n.putVocabularies({
    ja: {
      'Create Account': "新規登録",
      'Username': 'ログインID',
      'Enter your Username': 'ログインID',
      'Enter your Password': 'パスワード',
      'Configuration error (see console) – please contact the administrator': 'ログインエラー',
    },
  });

  Amplify.configure(awsconfig);

  const services = {
    async handleSignUp(formData) {
      let { username, password, attributes } = formData;
      // custom username
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

<template>
  <authenticator :services="services">
    <template v-slot="{ user, signOut }">
      <h1>ログイン成功！</h1>
      <p>ログインID： {{ user.username }}</p>
      <button @click="signOut">ログアウト</button>
    </template>
  </authenticator>
</template>


<script>
  import { Hub, Logger } from 'aws-amplify';

  export default {
    name: 'Login',

    data() {
      return {}
    },
    mounted() {
      const logger = new Logger('My-Logger');

const listener = (data) => {
  switch (data?.payload?.event) {
    case 'configured':
      logger.info('the Auth module is configured');
      break;
    case 'signIn':
      logger.info('user signed in');
      this.$store.dispatch('saveSignInFlg', true);
      break;
    case 'signIn_failure':
      logger.error('user sign in failed');
      break;
    case 'signUp':
      logger.info('user signed up');
      break;
    case 'signUp_failure':
      logger.error('user sign up failed');
      break;
    case 'confirmSignUp':
      logger.info('user confirmation successful');
      break;
    case 'completeNewPassword_failure':
      logger.error('user did not complete new password flow');
      break;
    case 'autoSignIn':
      logger.info('auto sign in successful');
      break;
    case 'autoSignIn_failure':
      logger.error('auto sign in failed');
      break;
    case 'forgotPassword':
      logger.info('password recovery initiated');
      break;
    case 'forgotPassword_failure':
      logger.error('password recovery failed');
      break;
    case 'forgotPasswordSubmit':
      logger.info('password confirmation successful');
      break;
    case 'forgotPasswordSubmit_failure':
      logger.error('password confirmation failed');
      break;
    case 'verify':
      logger.info('TOTP token verification successful');
      break;
    case 'tokenRefresh':
      logger.info('token refresh succeeded');
      break;
    case 'tokenRefresh_failure':
      logger.error('token refresh failed');
      break;
    case 'cognitoHostedUI':
      logger.info('Cognito Hosted UI sign in successful');
      break;
    case 'cognitoHostedUI_failure':
      logger.error('Cognito Hosted UI sign in failed');
      break;
    case 'customOAuthState':
      logger.info('custom state returned from CognitoHosted UI');
      break;
    case 'customState_failure':
      logger.error('custom state failure');
      break;
    case 'parsingCallbackUrl':
      logger.info('Cognito Hosted UI OAuth url parsing initiated');
      break;
    case 'userDeleted':
      logger.info('user deletion successful');
      break;
    case 'updateUserAttributes':
      logger.info('user attributes update successful');
      break;
    case 'updateUserAttributes_failure':
      logger.info('user attributes update failed');
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