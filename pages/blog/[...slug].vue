<template>
  <!-- https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#element-modifiers -->
  <article
    class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
    <ContentDoc />
  </article>
</template>

<script setup lang='ts'>
/**
  content 目录结构要与 page下对应的目录结构一致
  pages/blog/[...slug].vue ➡️ content/blog/xxx.md
  路由对应 /blog ，/blog/first，/blog/second，/blog/2023/first
*/
const route = useRoute()
console.log(route.params.slug)
</script>

<style scoped></style>
