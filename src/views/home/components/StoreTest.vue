<script setup lang="ts">
import { useCounterStore } from '@/store/modules/counter.js';

const counterStore = useCounterStore()

</script>

<template>
  <div class="flex flex-col items-center gap-20 bg-base-100 py-20">
    <p class="text-4xl font-bold uppercase">
      {{ counterStore.count }}
    </p>
    <button type="button" class="btn-primary btn" @click="counterStore.increment()">
      increment
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>
