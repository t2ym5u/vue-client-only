<script setup lang="ts">
// import { ClientOnly } from "../src/index.ts";

import { ClientOnly } from "../dist/vue-client-only.es.js";
</script>

<template>
  <ClientOnly>
    <template #fallback>
      <div>Loading...</div>
    </template>
    Loaded content!
  </ClientOnly>
</template>
