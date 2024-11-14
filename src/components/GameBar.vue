/* eslint-disable no-unused-vars*/
<script setup>
import { ref } from "vue";
const board = ref(Array(9).fill(null));
const move = ref("X");
const error = ref("");
const winner = ref("");
const restart = () => {
  move.value = "X";
  error.value = "";
  winner.value = "";
  board.value = Array(9).fill(null);
};
const placeImg = (index) => {
  if (winner.value != "") {
    return;
  }
  if (board.value[index]) {
    error.value = "Ячейка уже занята";
    return;
  }
  error.value = "";
  board.value[index] =
    move.value === "X"
      ? "https://s.iimg.su/s/13/qIZuQn6BieovEbbFhP0gi3BaMMk5UJxEwvmuGJxX.png"
      : "https://moocit.de/images/9/96/Kreis-Symbol-MOOCit.png";
  move.value = move.value === "X" ? "O" : "X";
  const checkWinner = () => {
    const winStrategy = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    for (const [a, b, c] of winStrategy) {
      if (
        board.value[a] == board.value[b] &&
        board.value[a] == board.value[c] &&
        board.value[a] != null
      ) {
        winner.value =
          move.value == "X" ? "Нолики победили" : "Крестики победили";
        return;
      } else if (board.value.includes(null) == false && winner.value == "") {
        winner.value = "Ничья";
      }
    }
  };
  checkWinner();
};
defineProps({
  showGameBar: Boolean,
  showBar: Function,
});
</script>

<template>
  <div v-show="showGameBar" class="Bar">
    <div
      v-for="(cell, index) in board"
      :key="index"
      @click="placeImg(index)"
      class="field"
    >
      <img v-if="cell" :src="cell" />
    </div>
  </div>
  <div v-show="showGameBar" class="error">
    <h2 v-show="error != ''">{{ error }}</h2>
    <h3 v-show="winner == ''">Текущий ход: {{ move }}</h3>
    <h1>{{ winner }}</h1>
    <button
      @click="
        showBar();
        restart();
      "
      v-show="winner != ''"
    >
      Играть заново
    </button>
  </div>
</template>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.error h2 {
  color: #c27878;
}
.error button {
  width: 200px;
  height: 60px;
  outline: none;
  color: #000;
  border-radius: 6px;
  border: 2px solid white;
  background-color: #e8c4f5;
  font-size: 20px;
}
.Bar {
  display: grid;
  justify-content: center;
  width: 100%;
  align-content: end;
  height: 40vh;
  gap: 2px;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
}
.Bar h2 {
  width: 100%;
}
.field img {
  width: 85px;
  height: 85px;
}
.field {
  border-radius: 2px;
  border: 4px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 728px) {
  .Bar {
    margin-top: 60px;
  }
}
</style>
