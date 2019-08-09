export const isPanelShown = s => s.isPanelShown;
export const currentPanel = s => s.currentPanel;

export const todoTasks = s => s.todoTasks;
export const ongoingTask = s => s.todoTasks.find(task => task.id === s.ongoingTask);
