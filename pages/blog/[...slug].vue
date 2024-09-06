<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/content#render-content -->
  <!-- https://content.nuxt.com/components/content-doc -->
  <!-- https://tailwindcss.com/docs/plugins#typography -->
  <!-- https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#element-modifiers -->
  <!-- 
    https://cn.vuejs.org/guide/components/slots#render-scope
    在父组件中，vue中插槽是不能访问子组件数据的，但是在这里通过v-slot指令是可以的
  -->
  <article
    class="prose dark:prose-invert max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">
    <ContentDoc v-slot="{ doc }">
      <div class="grid grid-cols-6 gap-16">
        <div :class="{ 'col-span-4': doc.toc, 'col-span-6': !doc.toc }">
          <ContentRenderer :value="doc" />
        </div>
        <div class="col-span-2 not-prose" v-if="doc.toc">
          <aside class="sticky top-8">
            <div class="font-semibold mb-2">
              目录
            </div>
            <nav>
              <TocLinks :links="doc.body?.toc?.links" />
            </nav>
          </aside>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>

<script setup lang='ts'>
import TocLinks from '~/components/content/toc-links.vue';

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
