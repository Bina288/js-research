<template>
  <h3><slot></slot></h3>
  <ul>
    <li v-for="(value, key) in props.result" :key="key">
      Result of <b style="font-weight: bold">"{{ key }}"</b>: {{ value }}
    </li>
  </ul>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  result: {
    type: Object,
    required: true,
  },
})
</script>
