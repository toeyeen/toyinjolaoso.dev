<template>
  <div class="absolute right-10 top-10 cursor-pointer">
    <span class="i-carbon:moon fill-current inline-block text-3xl" @click="toggleDark()" v-if="isDark" />
    <span class="i-carbon:sun  inline-block text-3xl" @click="toggleDark()" v-else />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped>
</style>
