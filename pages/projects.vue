<script setup lang='ts'>
/**
  强制一种颜色模式，必须在父级页面， 
  不能够像colorMode.preference一样立即改变当前页面颜色，需要刷新
  ⚠️不推荐使用
*/
// 
// definePageMeta({
//   colorMode: 'light'
// })


/* 

The `<ContentDoc>` component is a powerful feature in Nuxt Content that allows you to easily fetch and render content documents. Here's a brief overview of its key aspects:

1. Purpose: It's designed to query and display a single document from your content directory [Components](https://content.nuxt.com/components/content-doc/).

2. Default behavior: If no path is specified, it uses `$route.path` to fetch the corresponding document [Usage Part 1](https://content.nuxt.com/usage/render/).

3. Usage: You can use it in a catch-all route to render content pages. Here's a basic example:

```vue
<template>
  <main>
    <ContentDoc />
  </main>
</template>
```
[Get-started > Render pages](https://content.nuxt.com/get-started/installation/#render-pages)

4. Props: It accepts several props, including `tag`, `path`, `excerpt`, `query`, and `head` [Components](https://content.nuxt.com/components/content-doc/).

5. Slots: It provides slots for customization, including `default`, `not-found`, and `empty` [Components](https://content.nuxt.com/components/content-doc/).

6. Head management: By default, it handles head management using `useContentHead()` [Components](https://content.nuxt.com/components/content-doc/).

7. Underlying components: It uses `<ContentRenderer>` and `<ContentQuery>` under the hood [Components](https://content.nuxt.com/components/content-doc/).

`<ContentDoc>` is a convenient way to render your content, especially when your route path matches your content file structure. It simplifies the process of fetching and displaying content in your Nuxt application.

*/

useSeoMeta({
  title: 'Github Projects'
})
</script>

<template>
  <article class="prose dark:prose-invert">
    <ContentDoc path="/projects" />
  </article>
</template>

<style scoped></style>
