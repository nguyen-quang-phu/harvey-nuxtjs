import { MutationTree } from 'vuex/types/index';
import { MutationTypes } from './mutation-types';
import { AuthState } from './state';

export type Mutations<S = AuthState> = {
  [MutationTypes.SET_AUTH](state: S, payload: boolean): void;
};

export const mutations: MutationTree<AuthState> & Mutations = {
  [MutationTypes.SET_AUTH](state, payload: boolean) {
    state.auth = payload;
  },
};
