<template>
  <div class="panel-template add-task-panel">
    <div class="panel-header">
      ADD NEW TASK
    </div>

    <div class="panel-block">
      <div class="panel-sub-header">
        TASK TITLE
      </div>
    </div>

    <div class="panel-block">
      <div class="panel-sub-header">
        ESTIMATED TOMATO
      </div>
      <div class="tomato-list">
        <template v-for="index in 10">
          <icon icon-type="tomato_small_gray" :key="index" :size="25"></icon>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.tomato-list {
  margin-right: 25px;
}
</style>
