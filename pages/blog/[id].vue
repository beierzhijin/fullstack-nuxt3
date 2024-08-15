<template>
  <div>
    We are inside a blog
  </div>
  <div>
    Post ID is {{ route.params.id }}
  </div>
</template>

<script setup lang='ts'>
const route = useRoute()

</script>

<style scoped>
</style>
