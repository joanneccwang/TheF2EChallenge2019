import * as type from './mutations_type';

function generateId() {
  const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ids = [];
  for (let i = 0; i < 16; i += 1) {
    ids.push(characters[Math.floor(Math.random() * 36)]);
  }
  return ids.join('');
}

export const state = {
  isPanelShown: false,
  currentPanel: 'addTask',


  /** Tasks */
  todoTasks: [],
  ongoingTask: '',
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

  [type.SET_ONGOING_TASK]: (_state, id) => {
    _state.ongoingTask = id;
  },

  [type.ADD_TASK]: (_state, task) => {
    _state.todoTasks.push(task);
    const isNewTaskTheOnlyTask = _state.todoTasks.length === 1;
    if (isNewTaskTheOnlyTask) {
      _state.ongoingTask = task.id;
    }
  },
};

export const actions = {
  addTask(context, task) {
    const id = generateId();
    const taskWithId = {
      id,
      ...task,
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        context.commit(type.ADD_TASK, taskWithId);
        resolve(id);
      }, 0);
    });
  },
};
