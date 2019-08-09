<template>
  <div class="main-screen">
    <div class="main-container">
      <template v-if="todoTasks.length === 0">
        <initial-screen></initial-screen>
      </template>
      <template v-else>
        <clock-task></clock-task>
      </template>

    </div>
    <div class="footer">PODOMORO</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import InitialScreen from './mainScreen/InitialScreen';
import ClockTask from './mainScreen/ClockTask';

export default {
  components: {
    InitialScreen,
    ClockTask,
  },

  computed: {
    ...mapGetters([
      'todoTasks',
    ]),
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

  font-weight: $font-light;
  letter-spacing: 2px;
  font-size: 10px;
  line-height: 12px;
}
</style>

