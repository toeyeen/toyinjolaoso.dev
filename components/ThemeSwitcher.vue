<template>
  <div class="absolute right-6 top-10 cursor-pointer">
    <span class="i-carbon:moon fill-current inline-block text-3xl" @click="toggleDark()" v-if="isDark" />
    <span class="i-carbon:sun  inline-block text-3xl" @click="toggleDark()" v-else />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>

<style scoped>
</style>
