<template>
  <div>
    welcome to the main page
  </div>
</template>

<script setup lang="ts">
// server side rendering
useSeoMeta({
  title: '我的主页',
  description: '这里是主页的描述',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  // https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards
  twitterTitle: 'Main Page',
  twitterDescription: 'This is my main page',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

// server side rendering
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>
