<template>
  <div class="toggle-button" @click="togglePanel()">
    <icon icon-type="tomato_small_color" :size="25"></icon>
    <icon icon-type="arrow" :size="20" :style="arrowIconStyle"></icon>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'isPanelShown',
    ]),
    arrowIconStyle() {
      if (this.isPanelShown) {
        return {
          transform: 'rotate(180deg)',
        };
      }
      return {
        transform: 'rotate(0deg)',
      };
    },
  },
  methods: {
    ...mapMutations([
      'closePanel',
      'showPanel',
    ]),
    togglePanel() {
      if (this.isPanelShown) {
        this.closePanel();
      } else {
        this.showPanel();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$background-color: $color-white;

.toggle-button {
  height: 50px;
  width: 90px;
  border-radius: 25px 5px 5px 25px;

  background: $background-color;

  position: absolute; // absolute to MenuBar
  bottom: 34px;
  right: 15px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 12px;
}
</style>

