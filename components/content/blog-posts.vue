<script setup lang="ts">
/**
 * https://content.nuxt.com/usage/markdown#vue-components
 * Every Vue component created inside the components/content/ directory will be available in Markdown files.
 */

/**
 * https://content.nuxt.com/composables/query-content
 * queryContent('/') 查询到的内容是 根目录content 下的所有内容，使用MongoDB-like syntax
 * 另外MongoDB(Database,Collection,Document) NoSQL数据库，数据以文档的形式存储，每个文档都是一个BSON(Binary JSON)对象，以JSON格式CRUD，挺适合内容管理系统
 * MongoDB语法e.g. ➡️ db.students.find({}, { name: 1, age: 1 })
 */

// const posts = queryContent('/').find()
// const posts = queryContent('/blog').find()
// const posts = await queryContent('/blog').only(['_path', 'title']).find()
const { data } = await useAsyncData(
  'blog-list',
  () => queryContent('/blog')
    .where({ _path: { $ne: '/blog' } })
    .only(['_path', 'title', 'publishedAt'])
    .sort({ publishedAt: -1 })
    .find()
)
const posts = computed(() => {
  if (!data.value) {
    return []
  }

  const result = []
  let lastYear = null
  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()
    const displayYear = year !== lastYear
    // console.log(year, displayYear)
    post.displayYear = displayYear
    post.year = year
    result.push(post)
    lastYear = year
  }
  return result
})

// console.log(posts)
</script>

<template>
  <!-- https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#undoing-typography-styles -->
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div>日期</div>
      <div>标题</div>
    </div>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
          <div
            :class="{ 'text-white dark:text-gray-900': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear }">
            {{ post.year }}</div>
          <div>{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>
