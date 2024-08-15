<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/layouts -->
  <!-- Unlike other components, your layouts must have a single root element to allow Nuxt to apply transitions between layout changes - and this root element cannot be a <slot />. -->
  <div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Main</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </div>
</template>
<script setup lang='ts'>
</script>

<style scoped></style>
