import * as type from './mutations_type';

export const state = {
  isPanelShown: false,
  currentPanel: 'addTask',
};

export const mutations = {
  [type.SHOW_PANEL]: (_state) => {
    _state.isPanelShown = true;
  },
  [type.CLOSE_PANEL]: (_state) => {
    _state.isPanelShown = false;
  },

  [type.SET_CURRENT_PANEL]: (_state, panel) => {
    _state.currentPanel = panel;
  },
};

