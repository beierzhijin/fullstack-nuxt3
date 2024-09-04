<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/content#render-content -->
  <!-- https://content.nuxt.com/components/content-doc -->
  <!-- https://tailwindcss.com/docs/plugins#typography -->
  <!-- https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#element-modifiers -->
  <article
    class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
    <ContentDoc />
  </article>
</template>

<script setup lang='ts'>
/**
 * 如果 markdown 文件需要在 vue 文件中作为内容输出, 
 * 1. <ContentDoc />
 * 2. content 目录结构要与 page下对应的目录结构一致
 * pages/blog/[...slug].vue ➡️ content/blog/xxx.md
 * 路由对应 /blog ，/blog/first，/blog/second，/blog/2023/first
 */
const route = useRoute()
// console.log(route.params.slug)
</script>

<style scoped></style>
