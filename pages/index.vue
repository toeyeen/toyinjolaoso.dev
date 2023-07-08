<template>
  <div>
    <ClientOnly>
      <Mobile v-if="isMobile" />
      <TheProject v-if="!isMobile" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind)


const isMobile = breakpoints.smaller('lg')

definePageMeta({
  layout: 'latest'
})
</script>

<style scoped>
</style>
