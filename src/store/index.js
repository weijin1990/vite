import { createStore } from "vuex";
import httpClient from "@/api/client";
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
        console.log('res:' + await res.data);
        state.commit('setTestData', res.data);
      } catch (error) {
        console.error('Error fetching Test data:', error)
      }
    }
  },
  getters: {
    getTestData(state) {
      return state.root.app.testData;
    }
  }
}

export default createStore(store);