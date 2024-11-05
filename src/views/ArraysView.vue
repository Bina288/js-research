<template>
  <ul>
    <li v-for="(value, key) in displayResultObj" :key="key">
      Result of <b style="font-weight: bold">"{{ key }}"</b>: {{ value }}
    </li>
  </ul>
</template>
<script setup>
import { computed } from 'vue'
import arrayMethods from '@/features/arrayMethods'
const displayResultObj = computed(() => {
  return arrayMethods.result
})
</script>
