<template>
  <div class="error">
    <div class="error-wrapper">

      <h1>{{ error.statusCode }}</h1>
      <p>Seems like you got lost <span> {{ error.message }} </span> </p>
      <a href="/">
        <button>
          GO HOME
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})
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
      // margin-top: -8rem;
      font-size: 10rem;
    }

    & p {
      margin-top: -2rem;
      margin-bottom: 2rem;
      font-size: 18px;
    }

    &>a {
      display: inline-block;
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
