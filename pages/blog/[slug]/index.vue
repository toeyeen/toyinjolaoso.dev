<template>
  <div class="post-content">
    <div class="go-back">
      <svg
        @click="goBack"
        width="50"
        height="26"
        viewBox="0 0 155 46"
        fill="none"
        class="mb-4 text-white cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.87868 20.8787C-0.292893 22.0502 -0.292893 23.9497 0.878679 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02943C25.3848 4.85785 25.3848 2.95836 24.2132 1.78679C23.0416 0.615212 21.1421 0.615212 19.9706 1.78678L0.87868 20.8787ZM155 20L3 20L3 26L155 26L155 20Z"
          fill="#77777e"
        />
      </svg>
    </div>
    <div class="post-content__date">
      <span>
        <IMdiCalendar />
        <span> {{ formatPublishDate }} </span>
      </span>
      <span>
        <IMdiClock />
        <span>19 Mins read</span>
      </span>
    </div>

    <h1>
      {{ data.title }}
    </h1>

    <div class="post-content__tags">
      <div v-for="(tag, index) in data.tags" :key="index">{{ tag }}</div>
    </div>

    <ContentDoc :path="path" />
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '../../../utility/index'
import { useRoute } from 'vue-router'

const { path } = useRoute()

const router = useRouter()

const goBack = () => {
  router.push({ path: '/blog' })
}

const { data } = await useAsyncData(`path-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

console.log(data)

const formatPublishDate = computed(() => {
  return formatDate(data.value.createdAt)
})

definePageMeta({
  layout: 'blog',
})
</script>

<style lang="scss">
.post {
  &-content {
    font-size: 18px;

    & h1 {
      font-size: 5.5rem;
      margin-bottom: 1.6rem;
      font-family: 'air-bold';
    }
    & h2 {
      font-family: 'air-semibold';
      font-size: 41px;
      margin-top: 55px;
    }

    & p {
      line-height: 1.65;
      position: relative;
    }

    & a {
      color: #fff;
    }

    & ol {
      padding-left: 20px;
      list-style: decimal;
    }

    & ul {
      list-style: disc outside;
      padding-left: 15px;
    }

    & ol,
    & ul {
      margin-right: 0;
      margin-left: 15px;
    }

    & ol,
    & ul,
    p {
      margin-bottom: 40px;
      color: #b3b3b3;
    }

    &__date {
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      column-gap: 2rem;
      color: #777778;

      & > span {
        display: inline-flex;
        align-items: center;

        & > svg {
          display: inline-flex;
          margin-right: 0.75rem;
        }
      }
    }

    &__tags {
      margin-left: 0rem;
      display: flex;
      column-gap: 0.5rem;
      font-size: 1.6rem;
      text-transform: uppercase;
      letter-spacing: 1.3;
      color: #bebebe;
      & > div:not(:last-child):after {
        content: ' , ';
      }

      & > div {
        list-style: none;
        margin-bottom: 3rem;
      }
    }
  }
}

.post-content ol,
.post-content ol li ol {
  list-style: decimal outside;
}
.post-content ol {
  padding-left: 20px;
}

.post-content ol,
.post-content ul {
  margin-right: 0;
  margin-left: 15px;
}
</style>
