<template>
  <div class="input-bar">
    <input type="text" v-model="inputVal" :placeholder="placeholder" :style="inputStyle"/>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    fill: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputVal: '',
    };
  },
  computed: {
    inputStyle() {
      const style = {};
      if (this.fill) {
        style.width = '100%';
      }

      return style;
    },
  },

  watch: {
    value() {
      this.inputVal = this.value;
    },
    inputVal() {
      this.$emit('input', this.inputVal);
    },
  },

  mounted() {
    this.inputVal = this.value;
  },
};
</script>
<style lang="scss" scoped>
$input-color: $color-black;
$border-color-focus: $color-red;
$border-radius: 5px;

.input-bar {
  input {
    box-sizing: border-box;
    height: 50px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1px;

    padding: 15px;
    color: $input-color;
    border-radius: $border-radius;

    &:focus {
      border-color: $border-color-focus;

      // remove browser default input style;
      outline: none;
    }
  }
}
</style>
