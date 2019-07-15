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

<style>
@import './assets/style/reset.css';
@import './assets/style/main.scss';

#app {
  height: 100%;
}
</style>
