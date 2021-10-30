import { ActionContext, ActionTree } from 'vuex/types';
import { AuthState } from './state';
import { Mutations } from './mutations';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { RootState } from '~/store';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<AuthState, RootState>, 'commit'>;

export interface Actions {
  [ActionTypes.GET_AUTH]({ commit }: AugmentedActionContext, payload: boolean): Promise<boolean>;
}

export const actions: ActionTree<AuthState, RootState> & Actions = {
  [ActionTypes.GET_AUTH]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = true;
        commit(MutationTypes.SET_AUTH, data);
        resolve(data);
      }, 500);
    });
  },
};
