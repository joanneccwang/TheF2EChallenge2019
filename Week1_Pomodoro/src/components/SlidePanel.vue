<template>
  <div class="slide-panel">
    <div class="panel">
      <component :is="panelComponent"></component>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PanelType from '@/mixins/panelType';
import AddTaskPanel from './AddTaskPanel';
import TodoListPanel from './TodoListPanel';
import AnalysisPanel from './AnalysisPanel';
import RingtonePanel from './RingtonePanel';

export default {
  mixins: [PanelType],

  data() {
    return {
      panelComponent: AddTaskPanel,
    };
  },
  computed: {
    ...mapGetters([
      'currentPanel',
      'isPanelShown',
    ]),
  },

  watch: {
    currentPanel(type) {
      if (type === this.PANEL_TYPE.ADD_TASK) {
        this.panelComponent = AddTaskPanel;
      } else if (type === this.PANEL_TYPE.TODO_LIST) {
        this.panelComponent = TodoListPanel;
      } else if (type === this.PANEL_TYPE.ANALYSIS) {
        this.panelComponent = AnalysisPanel;
      } else { // RINGTONE
        this.panelComponent = RingtonePanel;
      }
    },
  },
};
</script>
<style lang="scss" scoped>

$background-color: $color-black;
$border-color: $color-border;

.slide-panel {
  width: 0px;
  display: flex;
}

.panel {
  flex: 1 0 auto;
  background: $background-color;
  border-left: 1px solid $border-color;
}
</style>
