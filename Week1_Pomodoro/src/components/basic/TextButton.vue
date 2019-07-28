<template>
  <div class="text-button" :class="buttonType" @click="click">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    buttonType: {
      type: String,
      validator: type => ['error', 'normal'].indexOf(type) !== -1,
      default: 'normal',
    },
  },

  methods: {
    click($event) {
      this.$emit('click', $event);
    },
  },
};
</script>
<style lang="scss" scoped>
.text-button {
  border-radius: 30px;
  padding: 16px 45px;

  color:$color-ivory;
  font-weight: $font-black;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;

  text-align: center;

  cursor: pointer;
  transition: background-color ease-in 0.1s;

  &.normal {
    background-color: #606060;
    &:hover {
      background-color: darken(#606060, 3%);
    }
  }
  &.error {
    background-color: $color-red;
    &:hover {
      background-color: darken($color-red, 3%);
    }
  }
}
</style>
