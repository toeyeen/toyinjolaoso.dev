<template>
  <div class="global">
    <div class="global-wrapper">
      <TheHeader />
      <slot />
      <TheFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/style/scss/main.scss';
.global {
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include respond(tab-port) {
    padding: 0 2.4rem;
  }
  @include respond(phone) {
    padding: 0 1.6rem;
  }
  &-wrapper {
  }
}
</style>
