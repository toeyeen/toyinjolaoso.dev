<template>
  <div class="absolute right-10 top-10 cursor-pointer">
    <i class="i-carbon:moon" @click="toggleDark()" v-if="isDark" />
    <i class="i-carbon:sun" @click="toggleDark()" v-else />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped>
</style>
