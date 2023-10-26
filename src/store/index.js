import { createStore } from 'vuex';
import httpClient from '@/api/client';
import { Auth, API } from 'aws-amplify';
// import { actions } from "./actions";
// import { getters } from "./getters";
// import { mutations } from "./mutations";

const defaultState = {
  root: {
    app: {
      testData: null,
      signInFlg: false,
    },
  },
};

const state = JSON.parse(JSON.stringify(defaultState));

let store = {
  state: state,
  mutations: {
    setTestData(state, data) {
      state.root.app.testData = data;
    },
    setSignInFlg(state, boolean) {
      state.root.app.signInFlg = boolean;
    }
  },
  actions: {
    saveSignInFlg(state, flg) {
      state.commit('setSignInFlg', flg);
    },
    async callFetchSocialInfoList(state) {
      try {
        const requestData = {
          // TODO 検索条件編集
          firstName: 'Foo',
          lastName: 'Bar'
        };
        const res = await API.post('api3197c32d', '/ec2', {
          body: requestData,
          headers: {
            'Authorization': `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`
          }
        });
    
        return res;
      } catch (error) {
        console.error('API ERROR:', error);
      }
    },

  },
  getters: {
    getTestData(state) {
      return state.root.app.testData;
    },
    getSignInFlg(state) {
      return state.root.app.signInFlg;
    }
  }
}

export default createStore(store);