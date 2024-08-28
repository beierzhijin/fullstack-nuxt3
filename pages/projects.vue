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
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold mb-10">Projects</h2>
    <ProjectList />
  </div>
</template>
<style scoped></style>
