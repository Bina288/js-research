<template>
  <ul>
    <li v-for="(value, key) in displayResultObj" :key="key">
      Result of "{{ key }}": {{ value }}
    </li>
  </ul>
</template>
<script setup>
import { computed } from 'vue'
import prototypes from '@/features/prototypes'
const displayResultObj = computed(() => {
  return prototypes.resultobj
})
</script>
