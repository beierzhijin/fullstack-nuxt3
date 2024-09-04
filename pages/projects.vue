<script setup lang='ts'>
/**
  强制一种颜色模式，必须在父级页面， 
  不能够像colorMode.preference一样立即改变当前页面颜色，需要刷新
  ⚠️不推荐使用
*/
// 
// definePageMeta({
//   colorMode: 'light'
// })

useSeoMeta({
  title: 'Github Projects'
})
</script>

<template>
  <article class="prose dark:prose-invert">
    <ContentDoc path="/projects" />
  </article>
</template>

<style scoped></style>
