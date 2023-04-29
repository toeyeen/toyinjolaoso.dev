<template>
  <div class="error">
    <div class="error-wrapper">

      <h1>404</h1>
      <p>Seems like you got lost</p>

      <a href="/">
        <button>
          Go Home
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// const props = defineProps({
//   error: Object
// })
</script>

<style lang="scss" scoped>
.error {
  background-color: var(--bg);

  &-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 200px;

    & h1 {
      margin-top: -8rem;
      font-size: 16rem;
    }

    & p {
      margin-top: -4rem;
      margin-bottom: 2rem;
    }

    &>a {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      height: 40px;
      background: var(--bg-secondary);
      width: 100%;

      &:hover {
        border: 1px solid var(--text-tertiary);
      }
    }
  }

}
</style>
