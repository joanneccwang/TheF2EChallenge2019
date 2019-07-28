<template>
  <div id="pomodoro">
    <main-screen id="layout-main"></main-screen>
    <menu-bar id="layout-menu"></menu-bar>
    <slide-panel id="layout-panel" :style="slideStyle"></slide-panel>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import MainScreen from '@/components/MainScreen';
import MenuBar from '@/components/MenuBar';
import SlidePanel from '@/components/SlidePanel';

export default {
  components: {
    MainScreen,
    MenuBar,
    SlidePanel,
  },

  computed: {
    ...mapGetters([
      'isPanelShown',
    ]),
    slideStyle() {
      if (this.isPanelShown) {
        return {
          width: '518px',
        };
      }
      return {
        width: '0px',
      };
    },
  },
};
</script>
<style lang="scss" scoped>
#pomodoro {
  height: 100%;
  display: flex;
  overflow: hidden;

  #layout-main {
    flex: 1 0 0px;
  }

  #layout-menu {
    flex: 0 0 80px;
  }
  #layout-panel {
    flex: 0 0 auto;
    transition: width .5s ease-in-out;
  }
}
</style>
