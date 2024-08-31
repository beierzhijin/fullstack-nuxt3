<script setup lang="ts">
/**
 * https://content.nuxt.com/composables/query-content
 * queryContent('/') 查询到的内容是 content 目录下的所有内容，使用MongoDB-like syntax
 * 另外MongoDB(Database,Collection,Document) NoSQL数据库，数据以文档的形式存储，每个文档都是一个BSON(Binary JSON)对象，以JSON格式CRUD，挺适合内容管理系统
 * MongoDB语法e.g. ➡️ db.students.find({}, { name: 1, age: 1 })
 */

// const posts = queryContent('/').find()
// const posts = queryContent('/blog').find()
const posts = queryContent('/blog').only(['_path', 'title']).find()
console.log(posts)
</script>

<template>
  <section>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
