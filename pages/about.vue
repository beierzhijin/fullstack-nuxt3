<script setup lang="ts">
/* 不定义时为 default layout */

// definePageMeta({
//   layout: false
// })
function enableCustomLayout() {
  setPageLayout('another')
}

useHead({
  title: '关于'
})
</script>

<template>
  <div>
    <button @click="enableCustomLayout">更新布局</button>
  </div>
</template>

<style scoped></style>
