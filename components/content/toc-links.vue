<script setup lang='ts'>
interface Link {
  id: number,
  text: string,
  children: Link[]
}

defineProps({
  links: Array<Link>,
  level: {
    type: Number,
    default: 0
  }
})

const route = useRoute()
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink :to="{ path: route.path, hash: `#${link.id}` }" :class="{ 'ml-4': level }">
        {{ link.text }}
      </NuxtLink>
      <TocLinks :links="link.children" :level="level + 1" />
    </li>
  </ul>
</template>

<style scoped></style>
