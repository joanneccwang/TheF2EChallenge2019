import * as type from './mutations_type';

export const state = {
  isPanelShown: false,
  currentPanel: 'addTask',


  /** Tasks */
  todoTasks: [{
    name: 'My First Task',
    tomatoes: 3,
  }, {
    name: 'My Second Task',
    tomatoes: 2,
  }],
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

  [type.ADD_TASK]: (_state, task) => {
    _state.todoTasks.push(task);
  },
};

