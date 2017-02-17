<template>
  <div id="app" class="container">
    <div class="header">
      <div class="logo"></div>
    </div>
    <Game />
  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  components: {
    Game
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
