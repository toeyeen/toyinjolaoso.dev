<template>
  <ul class="navigation">
    <li class="navigation-item" :class="isActiveRoute == 'learn' ? 'navigation-item-active' : ''">
      <nuxt-link class="navigation-item__link" to="/learn">
        <span class="text-sec">01</span>
        <span class="s-divider"></span>
        <span> Work </span>
      </nuxt-link>
    </li>
    <li class="navigation-item" :class="isActiveRoute == 'resume' ? 'navigation-item-active' : ''">
      <nuxt-link class="navigation-item__link" to="/resume">
        <span class="text-sec">02</span>
        <span class="s-divider"></span>
        <span> Resume </span>
      </nuxt-link>
    </li>
    <li class="navigation-item" :class="isActiveRoute == 'blog' ? 'navigation-item-active' : ''">
      <nuxt-link class="navigation-item__link" to="/blog">
        <span class="text-sec">03</span>
        <span class="s-divider"></span>
        <span> Blogs </span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
let isActiveRoute = ref(null)

const route = useRoute()

watch(
  () => route.path,
  (newPath) => {
    const mainPath = newPath.split('/')[1]
    isActiveRoute.value = mainPath
  }
)

onMounted(() => {
  isActiveRoute.value = route.path.split('/')[1]
})
</script>

<style lang="scss" scoped>
.s-divider {
  margin: 0 2rem;
  border-bottom: 1px solid var(--c-text-base);
  width: 40px;
  display: inline-block;
  transition: all ease-in 0.2s;
}

// .active a .s-divider,
// li:hover .s-divider {
//   width: 80px;
// }

.navigation {
  &-item {
    margin: 1rem 0;
    color: var(--c-text-base);
    font-size: 1rem;
    transition: all ease-in 0.2s;

    &:hover {
      color: var(--c-secondary);
    }

    &-active {
      color: var(--c-secondary);

      & .s-divider {
        width: 80px;
        border-color: var(--c-secondary);
      }
    }

    &:hover .s-divider {
      width: 80px;
      border-color: var(--c-secondary);
    }

    &__link {
      display: flex;
      align-items: center;
    }
  }
}
</style>
