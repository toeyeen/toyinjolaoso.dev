<template>
  <div class="beta__button-group">
    <button
      class="
        beta__button-group--main
        px-[16px]
        py-[8px]
        border border-yellow-500
        text-yellow-500
        w-full
        rounded-lg
        font-bold
        text-[16px]
        outline-none
      "
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
export interface ButtonProps {
  type?: 'ghost' | 'primary' | 'default'
  shape: 'large' | 'normal' | 'small'
  loading: boolean
  disabled: boolean
}

const { type } = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  shape: 'normal',
  loading: false,
  disabled: false,
})

const style = computed(() => {
  type
})
// const props =defineProps<>({
//   variant: 'ghost'| 'plain' |
// })
</script>

<style lang="scss" scoped>
.beta {
  &__button {
    &-group {
      width: 100%;
      &--main {
        padding: 8px 16px;
        font-size: 16px;
        @apply border-yellow-500 text-yellow-500 rounded-lg font-bold outline-none;
      }
    }
  }
}
</style>
