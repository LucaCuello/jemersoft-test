<template>
  <div class="error-msg">
    <v-icon name="md-reportgmailerrorred" fill="#f15050" />
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>

<style scoped></style>
