<template>
  <div class="overflow-hidden">
    <ClientOnly>
      <Plum />
    </ClientOnly>

    <div class="mobile-container overflow-scroll  p-5%">
      <div class="mobile-wrapper h-full flex flex-col">
        <MobileHeader />
        <main class="mb-auto text-center mt-10 md:mt-16">
          <slot />
        </main>
        <footer class="flex justify-center items-center">
          <TheSocials />
        </footer>
      </div>
    </div>
    <div class="laptop-container">
      <TheFixed />
      <div class="overflow-y-scroll">
        <div class="main-container">
          <slot />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">



</script>

<style lang="scss" scoped>
.laptop-container {

  display: none;

  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: 45% 1fr;
    // display: flex;
    height: 100vh;
  }
}

.mobile-container {
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;
    height: 100vh;
  }
}
</style>
