<template>
  <div id="pomodoro">
    <main-screen id="layout-main"></main-screen>
    <slide-panel id="layout-panel" :style="slideStyle"></slide-panel>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import MainScreen from '@/components/MainScreen';
import SlidePanel from '@/components/SlidePanel';

export default {
  components: {
    MainScreen,
    SlidePanel,
  },

  computed: {
    ...mapGetters([
      'isPanelShown',
    ]),
    slideStyle() {
      if (this.isPanelShown) {
        return {
          flex: '0 0 80px',
        };
      }
      return {
        flex: '1 0 80px',
      };
    },
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
    flex: 0 0 80px;
    transition: flex .5s ease-in-out;
  }
}
</style>
