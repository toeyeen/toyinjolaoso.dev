<template>
  <div class="blog-wrapper">
    <ThePostCard v-for="blog, idx in blogPosts" :key="idx" :blog="blog" />
  </div>
</template>

<script setup lang="ts">

const { data } = await useAsyncData(`blog`, () => {
  return queryContent('/blog').find()
})

const blogPosts = computed(() => {
  return data.value?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})



definePageMeta({
  layout: 'latest',
})
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin: 1rem 0;

  @media only screen and (min-width: 618px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;

  }

  &> :nth-child(even) {

    @media only screen and (min-width: 618px) {
      transform: translateY(20px);
    }


    &:hover {
      // transform: scale(1.05);
    }
  }
}
</style>
