<template>
  <div class="blog-wrapper">
    <ThePostCard v-for="blog in blogPosts" :key="blog.id" :blog="blog" />
  </div>
</template>

<script setup lang="ts">
import type { Blog } from '~~/types'

const blogPosts: Blog[] = [
  {
    id: '1',
    tags: ['Javascript', 'Animation'],
    author: 'Jolaoso toyin',
    createdAt: '2021-07-08',
    slug: '123',
    data: {
      id: '1',
      title: '2022 - Happier Than Ever',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At porro ut dolore esse natus vero tempore saepe ea repudiandae neque veritatis sint, magni, ad doloremque id excepturi quae architecto ipsa? Optio ullam vitae numquam quo nobis. Modi quas saepe maxime placeat incidunt autem? Quod dolorem ab cumque odio rem vero corporis dolorum quo laboriosam atque odit, porro error itaque sit blanditiis voluptatem est enim ipsum, excepturi hic consequatur? Exercitationem, voluptas? Minima soluta, tempora consequuntur necessitatibus quas id sint perferendis fuga eius est vero possimus quasi neque iure incidunt, saepe error quibusdam minus quae consequatur harum, ratione provident numquam. Quo, vel.',
    },
  },
  {
    id: '2',
    tags: ['Javascript', 'Animation'],
    author: 'Jolaoso toyin',
    createdAt: '2021-07-08',
    slug: '123',
    data: {
      id: '1',
      title:
        'Randoms on request Animation Timeframe, Linear Interpolation and CSS transitions',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At porro ut dolore esse natus vero tempore saepe ea repudiandae neque veritatis sint, magni, ad doloremque id excepturi quae architecto ipsa? Optio ullam vitae numquam quo nobis. Modi quas saepe maxime placeat incidunt autem? Quod dolorem ab cumque odio rem vero corporis dolorum quo laboriosam atque odit, porro error itaque sit blanditiis voluptatem est enim ipsum, excepturi hic consequatur? Exercitationem, voluptas? Minima soluta, tempora consequuntur necessitatibus quas id sint perferendis fuga eius est vero possimus quasi neque iure incidunt, saepe error quibusdam minus quae consequatur harum, ratione provident numquam. Quo, vel.',
    },
  },
  {
    id: '3',
    tags: ['Javascript', 'Animation'],
    author: 'Jolaoso toyin',
    createdAt: '2021-07-08',
    slug: '123',
    data: {
      id: '1',
      title:
        'Randoms on request Animation Timeframe, Linear Interpolation and CSS transitions',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At porro ut dolore esse natus vero tempore saepe ea repudiandae neque veritatis sint, magni, ad doloremque id excepturi quae architecto ipsa? Optio ullam vitae numquam quo nobis. Modi quas saepe maxime placeat incidunt autem? Quod dolorem ab cumque odio rem vero corporis dolorum quo laboriosam atque odit, porro error itaque sit blanditiis voluptatem est enim ipsum, excepturi hic consequatur? Exercitationem, voluptas? Minima soluta, tempora consequuntur necessitatibus quas id sint perferendis fuga eius est vero possimus quasi neque iure incidunt, saepe error quibusdam minus quae consequatur harum, ratione provident numquam. Quo, vel.',
    },
  },
]

definePageMeta({
  layout: 'fixed',
})
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  & > :nth-child(even) {
    transform: translateY(20px);
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
