<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const layout = 'fixed'
</script>

<style lang="scss">
@import './assets/style/scss/main.scss';
</style>
