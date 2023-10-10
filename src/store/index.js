import { createStore } from "vuex";
import httpClient from "@/api/client";
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
    async fetchTestData(state) {
      try {
        const res = await httpClient.get('https://run.googleapis.com/$discovery/', 'rest', 'version=v2');
        state.commit('setTestData', res.data);
      } catch (error) {
        console.error('Error fetching Test data:', error)
      }
    },
    saveSignInFlg(state, flg) {
      state.commit('setSignInFlg', flg);
    },
    async fetchAmplifyData(state) {
      try {
        const requestData = {
          firstName: 'John',
          lastName: 'Doe'
        };
        const res = await API.post('api133340e8', '/test', {
          body: requestData,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`
            }
        });
    
        return res.data;
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