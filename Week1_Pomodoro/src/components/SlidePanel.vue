<template>
  <div class="slide-panel">
    <menu-bar class="menu-bar"></menu-bar>
    <div v-if="isPanelShown" class="panel"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import MenuBar from './MenuBar';


export default {
  components: {
    MenuBar,
  },

  computed: {
    ...mapGetters([
      'isPanelShown',
    ]),
  },
};
</script>
<style lang="scss" scoped>

$background-color: $color-black;
$border-color: $color-border;

.slide-panel {
  display: flex;
}

.menu-bar {
  flex: 0 0 80px;
}
.panel {
  flex: 1 0 auto;
  background: $background-color;
  border-left: 1px solid $border-color;
}
</style>
