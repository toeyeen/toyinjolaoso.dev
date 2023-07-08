<template>
  <client-only>
    <div class="h-full w-full px-4 py-6 bg-primary-light card list-none cursor-pointer flex flex-col">
      <header class="hover:text-sec mb-auto ">
        <div class="flex justify-between items-center">
          <span class="inline-flex text-sec">
            {{ formatPublishDate }}
          </span>

        </div>
        <div class="font-semibold mt-2 text-base-lg">
          {{ blog.title }}
        </div>
      </header>

      <main>
        <div class="blog-card__bottom-base">
          <span class="flex items-center">
            <span class="i-carbon:alarm w-4 h-4 mr-2 inline-block fill-current"> </span>
            <span class="text-xs font-RedHatMono">{{ timeToRead }} {{ timeToRead > 1 ? 'Mins' : 'Min' }} read
            </span>
          </span>
          <div class="flex-1">
            <nuxt-link :to="blog._path" class="prose"> Read More </nuxt-link>
          </div>
        </div>
      </main>

      <footer class="tools mt-4 mb-auto flex">
        <ul class="flex gap-x-2 font-light font-RedHatMono text-sm">
          <li v-for="tag, index in blog.tags" :key="index">{{ tag }}</li>
        </ul>
      </footer>
    </div>
  </client-only>
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
    // transform: scale(1.05);
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
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1.3;

        &>li:not(:last-child):after {
          content: ' , ';
        }
      }

      &-created {
        font-size: 1rem;
        margin-top: 1rem;
        color: #777778;
      }
    }

    &__bottom {
      &-title {
        font-size: 2rem;
      }

      &-base {
        display: flex;
        justify-content: space-between;
        column-gap: 4rem;
        align-items: center;
        margin: 1.2rem 0 1rem 0;
        font-size: 1rem;
        color: #777778;

        &>div {
          text-transform: uppercase;
          flex: auto;
          letter-spacing: 1.1px;
          border: 1px solid var(--c-secondary);
          color: var(--c-secondary);
          cursor: pointer;
          font-size: 14px;
          padding: 0.35rem 0.5rem;
          display: flex;
          justify-content: center;
          border-radius: 3px;
          transition: var(--transition);

          &:hover {
            box-shadow: 4px 4px 0 0 var(--c-secondary);
            transform: translate(-5px, -5px);
          }
        }
      }
    }
  }
}
</style>
