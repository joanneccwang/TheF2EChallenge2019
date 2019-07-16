<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '@/assets/style/reset.scss';
@import '@/assets/style/main.scss';

#app {
  height: 100%;
}
</style>
