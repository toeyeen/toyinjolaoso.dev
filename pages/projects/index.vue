<template>
  <div>
    <div class="featured">
      <h1 class="featured-title">{{ featured[0].type }}</h1>
      <TheBoxCard
        v-for="(feature, index) in featured"
        :key="index"
        :work="feature"
      />
    </div>

    <div class="personal">
      <h1 class="personal-title">{{ personal[0].type }}</h1>
      <div class="personal-wrapper">
        <TheBoxCard v-for="work in personal" :key="work.id" :work="work" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IMdiEye from '~icons/mdi/briefcase'
import IMdiSourceBranch from '~icons/mdi/briefcase'

import type { Work } from '../../types/index'
const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects').findOne()
)

const works = projects.value.body
// const works: Work[] = [
//   {
//     id: '1',
//     title: 'Guild Protocol',
//     tags: ['Nuxtjs', 'Typescript', 'Gsap'],
//     description: 'Landing Page for a play to earn crypto DAO',
//     liveUrl: 'https://google.com',
//     repoUrl: 'https://github.com/toeyeen/toyinjolaoso.dev',
//     type: 'featured',
//   },
//   {
//     id: '2',
//     title: 'Guild Protocol',
//     tags: ['Nuxtjs', 'Typescript', 'Gsap'],
//     description: 'Landing Page for a play to earn crypto DAO',
//     liveUrl: 'https://google.com',
//     repoUrl: 'https://github.com/toeyeen/toyinjolaoso.dev',
//     type: 'featured',
//   },

//   {
//     id: '3',
//     title: 'Guild Protocol',
//     tags: ['Nuxtjs', 'Typescript', 'Gsap'],
//     description: 'Landing Page for a play to earn crypto DAO',
//     liveUrl: 'https://google.com',
//     repoUrl: 'https://github.com/toeyeen/toyinjolaoso.dev',
//     type: 'personal',
//   },
//   {
//     id: '4',
//     title: 'Guild Protocol',
//     tags: ['Nuxtjs', 'Typescript', 'Gsap'],
//     description: 'Landing Page for a play to earn crypto DAO',
//     liveUrl: 'https://google.com',
//     repoUrl: 'https://github.com/toeyeen/toyinjolaoso.dev',
//     type: 'personal',
//   },
//   {
//     id: '5',
//     title: 'Guild Protocol',
//     tags: ['Nuxtjs', 'Typescript', 'Gsap'],
//     description: 'Landing Page for a play to earn crypto DAO',
//     liveUrl: 'https://google.com',
//     repoUrl: 'https://github.com/toeyeen/toyinjolaoso.dev',
//     type: 'personal',
//   },
//   {
//     id: '6',
//     title: 'Guild Protocol',
//     tags: ['Nuxtjs', 'Typescript', 'Gsap'],
//     description: 'Landing Page for a play to earn crypto DAO',
//     liveUrl: 'https://google.com',
//     repoUrl: 'https://github.com/toeyeen/toyinjolaoso.dev',
//     type: 'personal',
//   },
// ]

const featured = computed(() => {
  return works.filter((work) => work.type !== 'personal')
})
const personal = computed(() => {
  return works.filter((work) => work.type !== 'featured')
})

definePageMeta({
  layout: 'fixed',
})
</script>

<!-- <script setup lang="ts"></script> -->

<style lang="scss" scoped>
.card-box {
  padding: 2rem 3.2rem;
  background-color: #1b1b1d;
  color: white;
  flex: 1 1 0%;
  transition: transform 0.2s ease-in;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 1.6rem;
  width: 100%;
  &:hover {
    transform: scale(1.1);
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

      & > li:not(:last-child)::after {
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
