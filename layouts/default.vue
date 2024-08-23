<script setup lang='ts'>
// https://nuxt.com/docs/getting-started/seo-meta#dynamic-title
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s - August',
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
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">August</NuxtLink>
      </div>

      <Menu />
    </header>

    <main class="p-2 mb-10">
      <slot></slot>
    </main>
  </div>
</template>

<style>
body {
  font-family: Roboto;
}
</style>
