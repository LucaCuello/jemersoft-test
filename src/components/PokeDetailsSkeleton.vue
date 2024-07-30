<template>
  <div class="poke-skeleton"></div>
</template>

<style scoped>
.poke-skeleton {
  display: flex;
  border-radius: 10px;
  padding: 20px;
  animation: pulse 1s infinite;
  height: 80vh;
}

@keyframes pulse {
  0% {
    background-color: rgb(197, 197, 197);
  }
  50% {
    background-color: rgb(230, 230, 230);
  }
  100% {
    background-color: rgb(197, 197, 197);
  }
}
</style>
