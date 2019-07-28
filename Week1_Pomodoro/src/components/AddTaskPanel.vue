<template>
  <div class="panel-template add-task-panel">
    <div class="panel-header">
      ADD NEW TASK
    </div>

    <div class="panel-block">
      <div class="panel-sub-header">
        TASK TITLE
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
        <text-button button-type="error">ADD TASK</text-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hoverIndex: undefined,
      tomatoCount: 1,
    };
  },

  methods: {
    setHoverIndex(index) {
      this.hoverIndex = index;
    },
    clearHoverIndex() {
      this.hoverIndex = undefined;
    },

    setTomatoCount(index) {
      this.tomatoCount = index;
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
