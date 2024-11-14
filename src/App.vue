/* eslint-disable no-unused-vars*/
<script setup>
import { ref } from "vue";
import GameBar from "./components/GameBar.vue";
import TheHeader from "./components/Comp.vue";
import PlayButton from "./components/PlayButton.vue";
const showGameBar = ref(false);
function showBar() {
  showGameBar.value = !showGameBar.value;
}
</script>

<template>
  <TheHeader />
  <PlayButton :showGameBar="showGameBar" :showBar="showBar" />
  <GameBar :showGameBar="showGameBar" :showBar="showBar" />
</template>

<style>
body {
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
  font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}
</style>
