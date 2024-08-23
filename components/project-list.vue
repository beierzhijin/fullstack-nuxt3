<script setup lang='ts'>
// https://nuxt.com/docs/getting-started/data-fetching#fetch
// 只使用 $fetch 会在客户端也调用一次请求，服务端调用一次，客户端调用一次
// console.log(await $fetch('https://api.github.com/users/beierzhijin/repos'))

// https://nuxt.com/docs/api/composables/use-fetch
// 不会看到 Loading 状态，因为请求发生在server端
const { error, status, data } = await useFetch('https://api.github.com/users/beierzhijin/repos')
</script>

<template>
  <div>Projects</div>

  <section v-if="status === 'pending'">Loading...</section>
  <section v-else-if="error">Something went wrong... Try again!</section>
  <section v-else="error">repos</section>
</template>
<style scoped></style>
