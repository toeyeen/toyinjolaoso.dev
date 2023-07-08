<template>
  <TheProject />
</template>

<script lang="ts" setup>

definePageMeta({
  layout: 'latest',
})

</script>

<!-- <script setup lang="ts"></script> -->

<style lang="scss" scoped>
.card-box {
  padding: 2rem 3.2rem;
  background-color: var(--bg-secondary);
  color: var(--text-main);
  flex: 1 1 0%;
  transition: transform 0.2s ease-in;
  border-radius: 6px;
  margin-bottom: 1.6rem;
  width: 100%;

  &:hover {
    // transform: scale(1.05);
  }
}

.featured {
  &-title {
    margin: 1.6rem 0;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  &-card {
    &__title {
      font-size: 3rem;
      font-weight: 400;
    }

    &__items {
      text-transform: uppercase;
      color: #bebebe;
      font-size: 1.2rem;
      font-weight: 100;
      display: inline-flex;

      &>li:not(:last-child)::after {
        content: '+';
        padding: 0 0.35rem;
      }
    }

    &__desc {
      margin: 2rem 0;
      color: #777778;
    }
  }
}

.personal {
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.75rem;
  }

  &-title {
    margin: 3.2rem 0 2.4rem;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
}
</style>
