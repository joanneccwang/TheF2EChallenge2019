<template>
  <div class="todo-tasks">
    <task-item v-for="(task) in todoTasks" :key="task.id"
      :task="task" :ongoing="task.id === ongoingTask.id">
    </task-item>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TaskItem from './TaskItem';

export default {
  components: {
    TaskItem,
  },

  computed: {
    ...mapGetters([
      'todoTasks',
      'ongoingTask',
    ]),
  },

  mounted() {

  },

};
</script>
<style lang="scss" scoped>

</style>
