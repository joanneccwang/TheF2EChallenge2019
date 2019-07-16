<template>
  <div class="icon" :style="iconStyle">
    <div :class="`icon-${iconType}`"></div>
  </div>
</template>
<script>
export default {
  name: 'icon',
  props: {
    iconType: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 30,
    },
  },

  computed: {
    iconStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.icon {
  @mixin IconType($type) {
    .icon-#{$type} {
      background: url("../../assets/icons/#{$type}.svg") no-repeat center center;
      width: 100%;
      height: 100%;
    }
  }

  display: inline-block;

  @include IconType('tomato_small_color');
  @include IconType('tomato_small_gray');

  @include IconType('add_red');
  @include IconType('add_white');
  @include IconType('analysis_red');
  @include IconType('analysis_white');
  @include IconType('arrow');
  @include IconType('complete');
  @include IconType('list_red');
  @include IconType('list_white');
  @include IconType('pause_gray');
  @include IconType('pause_red');
  @include IconType('play_gray');
  @include IconType('play_white');
  @include IconType('reset_gray');
  @include IconType('reset_red');
  @include IconType('ringtone_red');
  @include IconType('ringtone_white');
  @include IconType('start_gray');
  @include IconType('start_red');
  @include IconType('stop_gray');
  @include IconType('stop_white');
}


</style>
