import { GetterTree } from 'vuex/types';
import { AuthState } from './state';
import { RootState } from '~/store';

export type Getters = {
  getAuth(state: AuthState): boolean;
};

export const getters: GetterTree<AuthState, RootState> & Getters = {
  getAuth: (state) => state.auth,
};
