<template>
  <div class="initial-screen">
    <div class="clock-container">
      <icon icon-type="tomato_small_color" :size="300"></icon>
      <div class="logo">POMODORO</div>
    </div>
    <div class="text-container">
      <div>You don't have any task now.</div>
      <div>please add task first!</div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>

.initial-screen {
  margin: auto 0px;
  .clock-container {
    margin-bottom: 50px;
    position: relative;
    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $color-white;
      font-weight: $font-light;
      font-size: 24px;
      letter-spacing: 5px;
      line-height: 29px;
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 14px;
    letter-spacing: 2px;
    line-height: 20px;
  }
}
</style>
