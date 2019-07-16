<template>
  <div class="toggle-button" @click="togglePanel()">
    <icon icon-type="tomato_small_color" :size="25"></icon>
    <icon icon-type="arrow" :size="20"></icon>
  </div>
</template>

<script>
export default {
  methods: {
    togglePanel() {

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

