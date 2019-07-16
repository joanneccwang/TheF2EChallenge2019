<template>
  <div id="pomodoro">
    <main-screen id="layout-main"></main-screen>
    <slide-panel id="layout-panel"></slide-panel>
  </div>
</template>
<script>
import MainScreen from '@/components/MainScreen';
import SlidePanel from '@/components/SlidePanel';

export default {
  components: {
    MainScreen,
    SlidePanel,
  },
};
</script>
<style lang="scss" scoped>
#pomodoro {
  height: 100%;
  display: flex;

  #layout-main {
    flex: 1 0 0px;
  }
  #layout-panel {
    flex: 1 1 auto;
  }
}
</style>
