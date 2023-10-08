import { createStore } from "vuex";
import httpClient from "@/api/client";
import { API } from 'aws-amplify';
// import { actions } from "./actions";
// import { getters } from "./getters";
// import { mutations } from "./mutations";

const defaultState = {
  root: {
    app: {
      testData: null,
    },
  },
};

const state = JSON.parse(JSON.stringify(defaultState));

let store = {
  state: state,
  mutations: {
    setTestData(state, data) {
      state.root.app.testData = data;
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
    async fetchAmplifyData(state) {
      try {
        const requestData = {
          firstName: 'John',
          lastName: 'Doe'
        };
        const res = await API.post('FicsPocApi', '/poc/items', {
          body: requestData,
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        return res.data;
        console.log('API响应：', apiResponse);
      } catch (error) {
        console.error('发生错误：', error);
      }
    },

  },
  getters: {
    getTestData(state) {
      return state.root.app.testData;
    }
  }
}

export default createStore(store);