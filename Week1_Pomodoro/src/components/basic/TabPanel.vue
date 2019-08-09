<template>
  <div class="tab-panel">
    <div class="tabs">
      <div v-for="tab in tabs" :key="tab.key"
          class="tab" :class="{active: tab.key === currentTab.key}"
          @click="setCurrentTab(tab)">
        {{ tab.text }}
      </div>
    </div>
    <div class="tab-content">
      <component :is="currentTabContent"></component>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      currentTab: undefined,
    };
  },

  computed: {
    currentTabContent() {
      return this.currentTab.component;
    },
  },

  methods: {
    setCurrentTab(tab) {
      this.currentTab = tab;
    },
  },

  beforeMount() {
    this.currentTab = this.tabs[0];
  },
};
</script>
<style lang="scss" scoped>
$inactive-background: #606060;
$inactive-color: $color-lightgray;
$active-background: $color-red;
$active-color: $color-white;

.tab-panel {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tabs {
  flex: 0 0 auto;
  display: flex;

  .tab {
    border-radius: 8px 8px 0px 0px;
    background: $inactive-background;
    color: $inactive-color;

    padding: 5px 20px;
    font-size: 12px;
    line-height: 15px;
    font-weight: $font-black;
    letter-spacing: 1px;

    cursor: pointer;

    &.active {
      background: $active-background;
      color: $active-color;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}

.tab-content {
  flex: 1;
  height: 100%;
  overflow-y: scroll;
}
</style>
