<script setup lang='ts'>
// https://color-mode.nuxtjs.org/#force-a-color-mode
// const colorMode = useColorMode()
/* 可读可写 */
// console.log(colorMode.preference)
// system dark light
// colorMode.preference = 'system'

// https://nuxt.com/docs/getting-started/seo-meta#dynamic-title
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s - 九月',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/layouts -->
  <!-- Unlike other components, your layouts must have a single root element to allow Nuxt to apply transitions between layout changes - and this root element cannot be a <slot />. -->
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center">
      <div class="flex items-center space-x-12">
        <div>
          <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">August</NuxtLink>
        </div>

        <Menu />
      </div>

      <!-- 确保在 ClientOnly 中，否则会报 Hydration text content mismatch... -->
      <!-- ColorModeSelector部分在服务端渲染，部分在客户端渲染，服务端无法访问browser客户端的storage，就会报这个warning -->
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>

    <main class="p-2 my-10">
      <slot></slot>
    </main>
  </div>
</template>

<style>
body {
  font-family: Roboto;
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>
