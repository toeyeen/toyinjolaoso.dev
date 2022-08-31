<template>
  <div class="post-content">
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
import { useRoute } from 'vue-router'

const { path } = useRoute()

const { data } = await useAsyncData(`path-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

console.log(data)

const formatPublishDate = computed(() => {
  const dateFormat = new Date(data.value.date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return dateFormat.toLocaleDateString('en-US', options)
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
