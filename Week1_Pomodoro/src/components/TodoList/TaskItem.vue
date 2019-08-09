<template>
  <div class="task-item">
    <div class="icon-block">
      <icon v-if="ongoing" icon-type="tomato_small_color" :size="13"></icon>
    </div>
    <div class="task-info">
      <div class="task-name">
        {{ task.name }}
      </div>
      <div class="task-tomatoes">
        <div v-for="cnt in task.tomatoes" class="tomato-circle" :key="cnt"></div>
      </div>
    </div>

    <div class="collapse-button"></div>
  </div>
</template>
<script>

export default {
  props: {
    task: {
      type: Object,
      default() {
        return {
          name: '',
          tomatoes: 0,
        };
      },
      required: true,
    },
    ongoing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.task-item {
  background-color: $color-darkgray;
  display: flex;
  .icon-block {
    flex: 0 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .task-info {
    padding: 10px 0px;
    flex: 1;
    display: flex;
    flex-direction: column;
    .task-name {
      color: $color-ivory;
      letter-spacing: 0.8px;
      line-height: 19px;
      font-size: 16px;
    }
    .task-tomatoes {
      display: flex;
      margin-top: 5px;
      .tomato-circle {
        border: 2px solid $color-red;
        border-radius: 100%;
        height: 8px;
        width: 8px;
        &:not(:last-child) {
          margin-right: 6px;
        }
      }
    }
  }
  .collapse-button {
    flex: 0 0 40px;
  }
}
</style>
