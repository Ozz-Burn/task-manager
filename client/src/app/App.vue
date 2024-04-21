<script setup lang="ts">
import { RouterView } from 'vue-router'
import { TheHeader } from '@/widgets/TheHeader'
</script>

<template>
  <div class="container m-auto grid gap-3">
    <header>
      <TheHeader />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
