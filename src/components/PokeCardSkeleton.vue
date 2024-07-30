<template>
  <div class="poke-skeleton"></div>
</template>

<style scoped>
.poke-skeleton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 250px;
  padding: 50px 15px;
  border-radius: 8px;
  height: 349px;
  background-color: rgb(197, 197, 197);
  animation: pulse 1s infinite;
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
