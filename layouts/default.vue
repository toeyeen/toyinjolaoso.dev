<!-- <template>
  <div class="global">
    <div class="global-wrapper">
      <TheHeader />
      <slot />
      <TheFooter />
    </div>
  </div>
</template> -->


<!-- <template>
  <div class="wrapper">
    <ClientOnly>
      <Plum />
    </ClientOnly>
    <ThemeSwitcher />

    <div class="t-fixed">
      <div class="t-fixed-container">
        <TheFixed />
      </div>
    </div>
    <div class="main">
      <div class="main-container">
        <slot />
      </div>
    </div>
  </div>
</template> -->


<template></template>

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

  &-wrapper {}
}
</style>
