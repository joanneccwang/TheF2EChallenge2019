<template>
  <div class="main-screen">
    <div class="main-container">
      <initial-screen></initial-screen>
    </div>
    <div class="footer">PODOMORO</div>
  </div>
</template>
<script>
import InitialScreen from './mainScreen/InitialScreen';

export default {
  components: {
    InitialScreen,
  },
};
</script>
<style lang="scss" scoped>
$background-color: #EAEAEA;

.main-screen {
  background: $background-color;
  display: flex;
  flex-direction: column;
  padding: 53px 0px;
}

.main-container {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.footer {
  flex: 0 0 auto;
  color: $color-black;
  justify-content: center;
  text-align: center;
}
</style>

