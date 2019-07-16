import * as type from './mutations_type';

export const state = {
  isPanelShown: false,
  temp: undefined,
};

export const mutations = {
  [type.SHOW_PANEL]: (_state) => {
    _state.isPanelShown = true;
  },
  [type.CLOSE_PANEL]: (_state) => {
    _state.isPanelShown = false;
  },
};

