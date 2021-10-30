import Vuex, { Store } from 'vuex';
import Vue from 'vue';
import authModule from './auth';
import { AuthState } from './auth/state';

Vue.use(Vuex);

export interface RootState {
  auth: AuthState;
}

export const store = new Store({
  modules: {
    auth: authModule,
  },
});
