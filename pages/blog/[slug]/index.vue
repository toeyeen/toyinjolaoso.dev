<template>
  <div v-if="!pending" class="post-content mt-10 md:mt-0">
    <div class="go-back" @click="goBack">
      <svg width="50" height="26" viewBox="0 0 155 46" fill="none" class="mb-4 text-white cursor-pointer"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.87868 20.8787C-0.292893 22.0502 -0.292893 23.9497 0.878679 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02943C25.3848 4.85785 25.3848 2.95836 24.2132 1.78679C23.0416 0.615212 21.1421 0.615212 19.9706 1.78678L0.87868 20.8787ZM155 20L3 20L3 26L155 26L155 20Z"
          fill="#77777e" />
      </svg>
    </div>
    <div class="post-content__date">
      <span>
        <i class="i-carbon:calendar-heat-map text-2xl mr-2" />
        <span> {{ formatPublishDate }} </span>
      </span>
      <span>
        <i class="i-carbon:alarm text-2xl mr-1" />
        <span>{{ timeToRead }} {{ timeToRead > 1 ? 'Mins' : 'Min' }} read</span>
      </span>
    </div>
    <h1>
      {{ data.title }}
    </h1>

    <div class="post-content__tags font-RedHatMono">
      <div v-for="(tag, index) in data.tags" :key="index">{{ tag }}</div>
    </div>

    <ContentDoc ref="contentRef" />
    <ThePagination />

  </div>
</template>

<script setup lang="ts">
import { formatDate } from '../../../utility/index'
import { useRoute } from 'vue-router'

import { useTimeToRead } from '~~/composables/useTimeToRead'


const route = useRoute()


const router = useRouter()


const goBack = () => {
  router.push({ path: '/blog' })
}



const { data, pending, error } = await useAsyncData(`path-${route.path}`, () => {
  return queryContent().where({ _path: route.path }).findOne()
})

const timeToRead = useTimeToRead(data.value)



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
      font-size: 2.4rem;
      margin-bottom: 1.6rem;
      font-weight: bold;

      @media only screen and (min-width: 425px) {
        font-size: 2.6rem;
      }

      @media only screen and (min-width: 768px) {
        font-size: 4rem;
      }
    }

    & h2 {

      font-weight: 600;
      font-size: 32px;

      @media only screen and (min-width: 425px) {
        font-size: 2.6rem;
      }

      @media only screen and (min-width: 768px) {
        font-size: 3.6rem;
        // margin-top: 55px;
      }
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
      font-size: 1rem;
      display: flex;
      align-items: center;
      column-gap: 2rem;
      color: #777778;


      @media only screen and (min-width: 768px) {
        font-size: 1.4rem;

      }

      &>span {
        display: inline-flex;
        align-items: center;

        &>svg {
          display: inline-flex;
          margin-right: 0.75rem;
        }
      }
    }

    &__tags {
      margin-left: 0rem;
      display: flex;
      column-gap: 0.5rem;
      font-size: 1rem;
      text-transform: uppercase;
      // letter-spacing: 1.3;
      color: #bebebe;

      &>div:not(:last-child):after {
        content: ' , ';
      }

      &>div {
        list-style: none;
        margin-bottom: 1rem;
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

.post-content p,
.post-content ul,
.post-content ol,
.post-content div {
  color: var(--bg-tertiary);
  font-weight: 300;
}

.ys-login__wrapper {
  display: flex;
  flex-direction: column-reverse;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  background: #262626;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    min-height: 500px;
  }

  &-left {
    padding: 32px 24px;
    width: 100%;

    @media screen and (min-width: 768px) {
      padding: 32px 0px;
      flex-direction: column;
      max-width: 60%;
      margin-top: 40px;
    }
  }

  &-right {
    @media only screen and (min-width: 768px) {
      margin-top: 0px;
      height: 100%;
      display: flex;
      flex-direction: column;
      max-width: 60%;
    }

    flex: 1 1 auto;
    border-radius: 8px;
    position: relative;
    height: 200px;
    margin-top: 40px;

    &>.banner {
      height: 100%;
      width: 100%;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      object-fit: cover;
    }

    &>.cta {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 40px;

      &>p:nth-child(1) {
        font-size: 24px;
        font-weight: bolder;
      }

      &>p:nth-child(2) {
        font-size: 12px;
        font-weight: 800;
      }

      &:last-child {
        margin-top: 16px;
        width: 100%;
      }
    }
  }
}
</style>
