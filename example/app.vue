<script setup lang="ts">
import { ClientOnly } from "vue-client-only";
</script>

<template>
  <ClientOnly>
    <template #fallback>
      <div>Loading...</div>
    </template>
    Loaded content!
  </ClientOnly>
</template>
