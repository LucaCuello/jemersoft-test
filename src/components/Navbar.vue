<template>
  <header>
    <nav>
      <router-link class="logo" :to="'/'">
        <v-icon name="md-catchingpokemon" scale="2" />
        Pokédex
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
nav {
  margin: 10px 0;
}
.logo {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--text-color);
  font-size: 32px;
  font-weight: 700;
  transition: all 150ms ease-in-out;
}

.logo svg {
  transition: all 150ms ease-in-out;
}

.logo:hover {
  opacity: 0.9;
  transition: all 150ms ease-in-out;
}

.logo:hover svg {
  color: #f15050;
  transition: all 150ms ease-in-out;
}
</style>
