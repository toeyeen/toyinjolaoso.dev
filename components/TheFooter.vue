<template>
  <div class="footer">
    <hr class="opacity-10" />
    <p class="footer-text">
      &copy; Jolaoso Toyin {{ currentYear }}. Made with Nuxt JS 💚
    </p>
  </div>
</template>

<script setup lang="ts">
let checked = ref(false)
const number = ref(0)

const currentYear = new Date().getFullYear()

const onChange = () => {
  checked.value = !checked.value
  number.value++
}
</script>

<style lang="scss" scoped>
.footer {
  &-text {
    margin: 2rem 0;
    letter-spacing: 0.1rem;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    align-items: center;
  }
}
</style>
