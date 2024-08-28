<script setup lang='ts'>
const showNextModeLabel = ref(false)

const colorMode = useColorMode()

const modes = [
  'system', // 0
  'light', // 1
  'dark' // 2
]

const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

// <'system' | 'light' | 'dark'> 指定 computed 函数返回值的类型
const nextMode = computed<'system' | 'light' | 'dark'>(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference)
  let nextModeIndex = null

  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0
  } else {
    nextModeIndex = currentModeIndex + 1
  }

  return modes[nextModeIndex] as 'system' | 'light' | 'dark'
})

/* 
  ① typeof nextModeIcons: 

  {
    system: string;
    light: string;
    dark: string;
  }

  ② keyof typeof nextModeIcons: 

  'system' | 'light' | 'dark'
*/

const nextModeIcon = computed(() => nextModeIcons[nextMode.value as keyof typeof nextModeIcons])
// const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => colorMode.preference = nextMode.value
</script>

<template>
  <div class="flex items-center space-x-2">
    <div class="text-gray-500 text-xs" v-if="showNextModeLabel">Change to {{ nextMode }}</div>
    <button @click="toggleMode" @mouseenter="showNextModeLabel = true" @mouseleave="showNextModeLabel = false"
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500">
      {{ nextModeIcon }}
    </button>
  </div>
</template>
<style scoped></style>
