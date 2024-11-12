<template>
  <view-component :result="promises.result">Classes:</view-component>
</template>
<script setup>
import promises from '@/features/promises'
import ViewComponent from '../components/ViewComponent.vue'
</script>
