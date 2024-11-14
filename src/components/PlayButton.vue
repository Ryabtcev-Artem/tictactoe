/* eslint-disable no-unused-vars*/
<script setup>
defineProps({
  showBar: Function,
  showGameBar: Boolean,
});
</script>

<template>
  <div v-show="!showGameBar" class="PlayButton">
    <button class="asd" @click="showBar">Играть</button>
  </div>
</template>
<style>
.PlayButton {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.PlayButton button {
  width: 250px;
  height: 80px;
  font-size: 28px;
}
</style>
