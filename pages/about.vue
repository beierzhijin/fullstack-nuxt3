<script setup lang="ts">
function enableCustomLayout() {
  setPageLayout('another')
}

/* 不定义时为 default layout */

// definePageMeta({
//   layout: false
// });
</script>

<template>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>

<style scoped></style>
