<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppNavigator from '@/components/AppNavigator.vue'
</script>
<template>
  <div class="app-wrapper">
    <header>
      <AppNavigator />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
}
</style>


