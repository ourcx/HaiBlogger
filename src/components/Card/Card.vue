<template>

  <n-card :title="props.title" embedded :bordered="false">
  {{ content }}
  </n-card>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui';
const props = defineProps({
  title:{
    type:String,
    default:'为什么写博客'
  },
  content:{
    type:String,
    default:''
  }
})


</script>
<style scoped lang="scss">
.n-card {
  max-width: 300px;
}
</style>
