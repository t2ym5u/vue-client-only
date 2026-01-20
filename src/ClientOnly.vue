<script setup lang="ts">
import { onMounted, ref } from "vue";

const isMounted = ref<boolean>(false);

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <slot v-if="isMounted" />
  <slot name="placeholder" v-else />
</template>
