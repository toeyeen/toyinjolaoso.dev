<template>
  <div class="absolute right-10 top-10 cursor-pointer">
    <IMdiDark @click="toggleDark()" v-if="isDark" />
    <IMdiLight @click="toggleDark()" v-else />
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import IMdiLight from '~icons/carbon/sun'
import IMdiDark from '~icons/carbon/moon'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped>
</style>
