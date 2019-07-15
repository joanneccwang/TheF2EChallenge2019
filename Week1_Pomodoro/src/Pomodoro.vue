<template>
  <div id="pomodoro">
    <main-screen id="layout-main"></main-screen>
    <menu-bar id="layout-bar"></menu-bar>
    <slide-panel id="layout-panel"></slide-panel>
  </div>
</template>
<script>
import MainScreen from '@/components/MainScreen';
import MenuBar from '@/components/MenuBar';
import SlidePanel from '@/components/SlidePanel';

export default {
  components: {
    MainScreen,
    MenuBar,
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
  #layout-bar {
    flex: 0 0 80px;
  }
  #layout-panel {
    flex: 1 1 0px;
  }
}
</style>
