<template>
  <div class="panel-template todo-list-panel">
    <div class="panel-header">
      TASK LISTS
    </div>

    <div class="panel-block">
      <tab-panel :tabs="tabs"></tab-panel>
    </div>
  </div>
</template>
<script>
import TabPanel from '@/components/basic/TabPanel';
import TodoTasksPanel from './TodoList/TodoTasks';
import DoneTasksPanel from './TodoList/DoneTasks';

export default {
  components: {
    TabPanel,
  },

  data() {
    return {
      tabs: [
        {
          key: 'todo',
          text: 'TO DO',
          component: TodoTasksPanel,
        },
        {
          key: 'done',
          text: 'DONE',
          component: DoneTasksPanel,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>

.todo-list-panel {
  height: 100%;
  display: flex;
  flex-direction: column;

  .panel-header {
    flex: 0 0 auto;
  }
  .panel-block {
    flex: 1;
  }
}
</style>
