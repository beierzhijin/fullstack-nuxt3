<script setup>
// https://nuxt.com/docs/getting-started/data-fetching#fetch
// 只使用 $fetch 会在客户端也调用一次请求；服务端调用一次，客户端调用一次
// console.log(await $fetch('https://api.github.com/users/beierzhijin/repos'))

// https://nuxt.com/docs/api/composables/use-fetch
// 不会看到 Loading 状态，因为请求发生在server端
const { error, status, data } = await useFetch(
  'https://api.github.com/users/beierzhijin/repos'
)
const repos = computed(
  // () => data.value.filter(repo => repo.description)
  () => data.value.sort((a, b) => b.stargazers_count - a.stargazers_count)
)
</script>

<template>
  <div class="mb-10">我的 Github 项目</div>
  <!-- 不会看到 Loading 状态，因为请求发生在server端 -->
  <section v-if="status === 'pending'">Loading...</section>
  <section v-else-if="error">Something went wrong... Try again!</section>
  <section v-else class="grid grid-cols-1 gap-4">
    <ul>
      <li v-for="repository in repos" :key="repository.id"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono">
        <a :href="repository.html_url" target="_blank">
          <div class="flex items-center justify-between text-sm">
            <div class="font-semibold"> {{ repository.name }}</div>
            <div>{{ repository.stargazers_count }} ★</div>
          </div>
          <p class="text-sm">
            {{ repository.description }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>
<style scoped></style>
