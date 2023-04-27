<template>
  <ul class="navigation">
    <li class="navigation-item" :class="isActiveRoute == 'learn' ? 'navigation-item-active' : ''">
      <nuxt-link class="navigation-item__link" to="/learn">
        <span>00</span>
        <span class="s-divider"></span>
        <span> Work </span>
      </nuxt-link>
    </li>
    <li class="navigation-item" :class="isActiveRoute == 'resume' ? 'navigation-item-active' : ''">
      <nuxt-link class="navigation-item__link" to="/resume">
        <span>01</span>
        <span class="s-divider"></span>
        <span> Resume </span>
      </nuxt-link>
    </li>
    <li class="navigation-item" :class="isActiveRoute == 'blog' ? 'navigation-item-active' : ''">
      <nuxt-link class="navigation-item__link" to="/blog">
        <span>02</span>
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
  border-bottom: 1px solid #777778;
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
    margin: 1.4rem 0;
    color: #777778;
    transition: all ease-in 0.2s;

    &:hover {
      color: var(--text-main);
    }

    &-active {
      color: var(--text-main);

      & .s-divider {
        width: 80px;
        border-color: var(--text-main);
      }
    }

    &:hover .s-divider {
      width: 80px;
      border-color: var(--text-main);
    }

    &__link {
      display: flex;
      align-items: center;
    }
  }
}
</style>
