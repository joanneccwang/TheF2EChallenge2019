<template>
  <div class="clock-task">
    <div class="clock-header">
      <div class="task-name">
        {{ ongoingTask.name }}
      </div>
      <div class="task-tomatoes">
        <div v-for="cnt in ongoingTask.tomatoes" class="tomato-circle" :key="cnt"></div>
      </div>
    </div>

    <div class="clock-container">
      <div class="clock-background">
        <div class="clock-center">
          <span>25:00</span>
        </div>
      </div>
    </div>

    <div class="clock-controller">
      <div id="play-btn" class="controller-button">
        <icon icon-type="play_gray" :size="50"></icon>
      </div>
      <div id="pause-btn" class="controller-button">
        <icon icon-type="pause_gray" :size="50"></icon>
      </div>
      <div id="reset-btn" class="controller-button">
        <icon icon-type="reset_gray" :size="50"></icon>
      </div>
    </div>

    <div class="task-complete">
      <icon icon-type="complete" :size="14"></icon>
      <span>TASK COMPLETE</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'ongoingTask',
    ]),
  },
};
</script>
<style lang="scss" scoped>

.clock-task {
  margin: auto 0px;

  .clock-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    .task-name {
      color: $color-black;
      letter-spacing: 1.2px;
      line-height: 29px;
      font-size: 24px;
      font-weight: $font-bold;
    }
    .task-tomatoes {
      display: flex;
      margin-top: 10px;
      .tomato-circle {
        border: 2px solid $color-red;
        border-radius: 100%;
        height: 12px;
        width: 12px;
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
  }
  .clock-container {
    margin: 50px 0px;
    .clock-background {
      height: 300px;
      width: 300px;
      background: $color-lightgray;
      border-radius: 100%;

      position: relative;

      .clock-center {
        height: 200px;
        width: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: $color-white;
        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        color: $color-black;
        letter-spacing: 4px;
        font-size: 40px;
        line-height: 48px;
        font-weight: $font-bold;
      }
    }

  }

  .clock-controller {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 50px;

    .controller-button {
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      background: $color-white;
      border-radius: 100%;
    }
  }

  .task-complete {
    letter-spacing: 1.4px;
    font-size: 14px;
    line-height: 17px;
    font-weight: $font-bold;

    display: flex;
    justify-content: center;
    span {
      margin-left: 5px;
    }
  }
}
</style>
