<template>
  <div>
    <div class="featured">
      <h1 class="featured-title">{{ featured[0].type }}</h1>
      <TheBoxCard v-for="(feature, index) in featured" :key="index" :work="feature" />
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
import type { Work } from '../../types/index'

definePageMeta({
  layout: 'fixed',
})

const works: Work[] = [
  {
    "id": "1",
    "title": "Admin Backoffice",
    "tags": [
      "Nuxt 2",
      "Javascript",
      "Ant Design",
      "Tailwindcss",
      "RESTFULL API"
    ],
    "description": "Backoffice for a betting company, the project is a full fledge production ready. Credentials: Username: LA-APA-0001, Password: 1234567",
    "liveUrl": "https://staging-yangasport-backoffice.betasportwallet.com/",
    "repoUrl": "https://gitlab.com/drtobbyas/yangasport-backoffice",
    "type": "featured"
  },
  {
    "id": "2",
    "title": "Pool BAS",
    "tags": [
      "Nuxt 3",
      "Typescript",
      "UnoCss"
    ],
    "description": "A sportbook website where you can book a bet, place bets, check transactions and many more exciting features. Credentials: Username: LA-APA-0001, Password: 1234567",
    "liveUrl": "https://staging-sportbook.betasportwallet.com/",
    "repoUrl": "https://github.com/toeyeen/yanga-poolbet",
    "type": "personal"
  },
  {
    "id": "3",
    "title": "30 Days Challenge",
    "tags": [
      "Nuxt 3",
      "Typescript",
      "UnoCSS"
    ],
    "description": "30 days challenge to building exciting projects",
    "liveUrl": "https://30-toeyeen.vercel.app",
    "repoUrl": "https://github.com/toeyeen/30",
    "type": "personal"
  },
  {
    "id": "4",
    "title": "Dona Todo",
    "tags": [
      "Vue 3",
      "Typescript",
      "Tailwindcss",
      "Composition API"
    ],
    "description": "Building the DONA Todo app with Nuxt Js",
    "liveUrl": "https://dona-todo.vercel.app/",
    "repoUrl": "https://github.com/toeyeen/Dona-Todo",
    "type": "personal"
  },
  {
    "id": "5",
    "title": "Betawave Website",
    "tags": [
      "Vue",
      "Javascript"
    ],
    "description": "Official website for betawave ltd,  a sportbook company in Africa",
    "liveUrl": "https://about.betawave.io",
    "repoUrl": "https://github.com/toeyeen/Betawave-io",
    "type": "personal"
  },
  {
    "id": "6",
    "title": "Vue Africa",
    "tags": [
      "Nuxt 2",
      "Javascript"
    ],
    "description": "Replicated the Vue Nation website",
    "liveUrl": "https://www.vuejsafrica.com/",
    "repoUrl": "https://gitlab.com/toeyeen/vue-africa",
    "type": "personal"
  }
]

const featured = computed(() => {
  return works.filter((work) => work.type !== 'personal')
})
const personal = computed(() => {
  return works.filter((work) => work.type !== 'featured')
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
    transform: scale(1.05);
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
