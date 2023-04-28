<template>
  <div class="wrapper">
    <ClientOnly>
      <Plum />
    </ClientOnly>
    <div class="t-fixed">
      <div class="t-fixed-container">
        <TheFixed />
      </div>
    </div>
    <div class="main">
      <ThemeSwitcher />
      <div class="main-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">



</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  overflow: hidden;
  position: absolute;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
}

.t-fixed {
  display: flex;
  height: 100vh;
  justify-content: center;

  &-container {
    padding: 10% 20% 6% 10%;
  }
}

.main {
  overflow-y: auto;

  &-container {
    padding: 10% 8% 10% 5%;
  }
}

.typing {
  &-cursor {
    display: inline-block;
    width: 2px;
    height: 40px;
    background-color: #fff;
    margin-left: 6px;
    margin-bottom: -2px;
    animation: blinker 0.6s linear infinite alternate;
  }
}

@keyframes blinker {
  0% {
    opacity: 1;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
</style>
