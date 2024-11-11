<template>
  <view-component :result="objects.result">Objects usage:</view-component>
  <view-component :result="objectMethods.result"
    >Usage of objects methods:</view-component
  >
</template>
<script setup>
import objects from '@/features/objects'
import objectMethods from '@/features/objectMethods'
import ViewComponent from '../components/ViewComponent.vue'
</script>
