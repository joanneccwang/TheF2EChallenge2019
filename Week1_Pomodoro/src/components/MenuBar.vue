<template>
  <div class="menu-bar">
    <toggle-button></toggle-button>
  </div>
</template>
<script>
import ToggleButton from './menuBar/ToggleButton';

export default {
  components: {
    ToggleButton,
  },
};
</script>
<style lang="scss" scoped>

$background-color: $color-black;

.menu-bar {
  background: $background-color;

  position: relative;
}
</style>
