<template>
  <div class="panel-template add-task-panel">
    <div class="panel-header">
      ADD NEW TASK
    </div>

    <div class="panel-block">
      <div class="panel-sub-header">
        TASK TITLE
      </div>
      <div>
        <input-bar :value="taskName" placeholder="Task Title" fill
          @input="(name) => taskName = name">
        </input-bar>
      </div>
    </div>

    <div class="panel-block">
      <div class="panel-sub-header">
        ESTIMATED TOMATO
      </div>
      <div class="tomato-list">
        <div v-for="index in 10" :key="index" class="tomato-button"
          @mouseover="setHoverIndex(index)" @mouseout="clearHoverIndex()"
          @click="setTomatoCount(index)">
          <template v-if="(index <= tomatoCount) || (hoverIndex && index <= hoverIndex)">
            <icon icon-type="tomato_small_color" :size="25"></icon>
          </template>
          <template v-else>
            <icon icon-type="tomato_small_gray" :size="25"></icon>
          </template>
        </div>
      </div>

      <div class="action-block">
        <text-button button-type="error" @click="addNewTask()">ADD TASK</text-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      hoverIndex: undefined,
      tomatoCount: 1,

      taskName: '',
    };
  },
  computed: {
    ...mapGetters([
      'todoTasks',
    ]),
  },
  methods: {
    ...mapMutations([
      'setOngoingTask',
    ]),
    ...mapActions([
      'addTask',
    ]),
    setHoverIndex(index) {
      this.hoverIndex = index;
    },
    clearHoverIndex() {
      this.hoverIndex = undefined;
    },

    setTomatoCount(index) {
      this.tomatoCount = index;
    },

    addNewTask() {
      const newTask = {
        name: this.taskName,
        tomatoes: this.tomatoCount,
      };
      this.addTask(newTask)
        .then(() => {
          this.taskName = '';
          this.tomatoCount = 1;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.tomato-list {
  display: flex;
  .tomato-button {
    cursor: pointer;
    &:not(:last-child) {
      padding-right: 22px;
    }
  }
}

.action-block {
  margin-top: 50px;
}
</style>
