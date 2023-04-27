<template>
  <div class="centered">
    <ThemeSwitcher />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../assets/style/scss/main.scss';

.centered {
  height: 100%;
  margin: 0 2.2rem;
  font-size: 1.6rem;

  @include respond(tab-port) {
    max-width: 720px;
    margin: 6rem auto;
    // 900
  }

  @include respond(tab-land) {
    max-width: 900px;
    margin: 7rem auto;
    // 900
  }
}
</style>
