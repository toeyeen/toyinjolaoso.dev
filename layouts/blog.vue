<template>
  <div class="centered">
    <ClientOnly>
      <Plum />
    </ClientOnly>
    <MobileHeader v-if="isMobile" />
    <!-- <ThemeSwitcher /> -->
    <slot />
  </div>
</template>

<script setup lang="ts">

import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind)


const isMobile = breakpoints.smaller('lg')


</script>


<style lang="scss" scoped>
@import '../assets/style/scss/main.scss';

.centered {
  height: 100%;
  padding: 5%;
  font-size: 1.6rem;


  @include respond (phone) {
    margin: 0 2rem;
  }

  @include respond(tab-port) {
    max-width: 720px;
    margin: 0 auto;
    padding: 5% 0px;

  }

  @include respond(tab-land) {
    max-width: 900px;
    margin: 0 auto;
  }
}
</style>
