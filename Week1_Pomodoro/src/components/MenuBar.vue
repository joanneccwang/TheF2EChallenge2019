<template>
  <div class="menu-bar">
    <div class="menu-buttons">
      <div class="menu-button" @click="changePanel(PANEL_TYPE.ADD_TASK)">
        <icon v-if="currentPanel === PANEL_TYPE.ADD_TASK"
              icon-type="add_red" :size="80"></icon>
        <icon v-else icon-type="add_white" :size="80"></icon>
      </div>
      <div class="menu-button" @click="changePanel(PANEL_TYPE.TODO_LIST)">
        <icon v-if="currentPanel === PANEL_TYPE.TODO_LIST"
              icon-type="list_red" :size="80"></icon>
        <icon v-else icon-type="list_white" :size="80"></icon>
      </div>
      <div class="menu-button" @click="changePanel(PANEL_TYPE.ANALYSIS)">
        <icon v-if="currentPanel === PANEL_TYPE.ANALYSIS"
              icon-type="analysis_red" :size="80"></icon>
        <icon v-else icon-type="analysis_white" :size="80"></icon>
      </div>
      <div class="menu-button" @click="changePanel(PANEL_TYPE.RINGTONE)">
        <icon v-if="currentPanel === PANEL_TYPE.RINGTONE"
              icon-type="ringtone_red" :size="80"></icon>
        <icon v-else icon-type="ringtone_white" :size="80"></icon>
      </div>
    </div>
    <toggle-button></toggle-button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import PanelType from '@/mixins/panelType';
import ToggleButton from './menuBar/ToggleButton';


export default {
  mixins: [PanelType],

  components: {
    ToggleButton,
  },

  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'currentPanel',
    ]),
  },

  methods: {
    ...mapMutations([
      'setPanel',
      'showPanel',
    ]),

    changePanel(type) {
      this.setPanel(type);
      this.showPanel();
    },
  },

};
</script>
<style lang="scss" scoped>

$background-color: $color-black;

.menu-bar {
  background: $background-color;

  position: relative;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  .menu-button {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: $color-darkgray;
    }
  }
}
</style>
