<template>
  <div class="blog-card card-box">
    <div class="blog-card__wrapper">
      <div class="blog-card__top">
        <ul class="blog-card__top-tags">
          <li class="inline" v-for="tag in blog.tags">
            {{ tag }}
          </li>
        </ul>

        <div class="blog-card__top-created">
          {{ formatPublishDate }}
        </div>
      </div>

      <div class="blog-card__bottom">
        <div class="blog-card__bottom-title">
          {{ blog.title }}
        </div>

        <div class="blog-card__bottom-base">
          <span class="flex items-center">
            <!-- <IMdiClock class="mr-2 inline-block fill-current" /> -->
            <span class="i-carbon:alarm w-6 h-6 mr-2 inline-block fill-current"> </span>
            <span>{{ timeToRead }} {{ timeToRead > 1 ? 'Mins' : 'Min' }} read
            </span>
          </span>
          <div>
            <nuxt-link :to="blog._path" class="prose"> Read More </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '~~/utility'
import type { Blog } from '../types/index'
const props = defineProps<{ blog: Blog }>()
import { useTimeToRead } from '~~/composables/useTimeToRead'


const formatPublishDate = computed(() => {
  return formatDate(props.blog.createdAt)
})

// const { path } = useRoute()


// const { data } = await useAsyncData(`path-${path}`, () => {
//   return queryContent().where({ _path: path }).findOne()

// })

const timeToRead = useTimeToRead(props.blog)

</script>

<style lang="scss" scoped>
.card-box {
  cursor: pointer;
  padding: 2rem 3.2rem;
  background-color: var(--bg-secondary);
  color: var(--text-main);
  flex: 1 1 0%;
  transition: transform 0.25s ease-out;
  border-radius: 6px;
  min-height: 300px;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }
}

.blog {
  &-card {
    &__wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-content: space-between;
      justify-content: space-between;
    }

    &__top {
      &-tags {
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 1.3;

        &>li:not(:last-child):after {
          content: ' , ';
        }
      }

      &-created {
        font-size: 1.3rem;
        margin-top: 1rem;
        color: #777778;
      }
    }

    &__bottom {
      &-title {
        font-size: 2.2rem;
      }

      &-base {
        display: flex;
        justify-content: space-between;
        column-gap: 4rem;
        align-items: center;
        margin: 1.2rem 0 1rem 0;
        font-size: 1.4rem;
        color: #777778;

        &>div {
          text-transform: uppercase;
          letter-spacing: 1.2;
          border: 1px solid #446ad4;
          color: #446ad4;
          // margin-right: rem;
          cursor: pointer;
          font-size: 1.2rem;
          padding: 0.35rem 0.75rem;
          width: 90px;
          display: flex;
          justify-content: center;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
