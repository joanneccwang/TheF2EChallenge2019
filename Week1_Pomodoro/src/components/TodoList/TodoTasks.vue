<template>
  <div class="todo-tasks">
    <task-item v-for="(task, idx) in todoTasks" :key="idx"></task-item>
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
    ]),
  },

  mounted() {

  },

};
</script>
<style lang="scss" scoped>

</style>
