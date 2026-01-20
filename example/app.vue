<script setup lang="ts">
// import { ClientOnly } from "../src/index.ts";

import { ClientOnly } from "../dist/vue-client-only.es.js";
</script>

<template>
  <ClientOnly>
    <template #placeholder>
      <div>Loading...</div>
    </template>
    Loaded content!
  </ClientOnly>
</template>
