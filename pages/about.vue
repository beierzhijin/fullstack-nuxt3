<script setup lang="ts">
/**
  - 对于一些适合使用markdown展现的简单的页面可以直接使用md映射vue页面，路由、目录结构匹配上就行
  - https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#element-modifiers
  - https://content.nuxt.com/usage/markdown#code-highlighting
*/
</script>

<template>
  <article class="prose dark:prose-invert prose-h1:text-2xl">
    <ContentDoc path="/about" />
  </article>
</template>

<style scoped></style>
