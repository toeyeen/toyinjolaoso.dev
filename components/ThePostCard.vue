<template>
  <div class="blog-card card-box">
    <div class="blog-card__wrapper">
      <div>
        <div class="blog-card__tags" v-for="tag in blog.tags">
          {{ tag }}
        </div>

        <div class="blog-card__created">
          {{ blog.createdAt }}
        </div>
      </div>

      <div>
        <div class="blog-card__title">
          {{ blog.data.title }}
        </div>

        <div class="blog-card__base">
          <IMdiClock class="inline mr-2" />
          <span> 19 mins read </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Blog } from '../types/index'
defineProps<{ blog: Blog }>()
</script>

<style lang="scss" scoped>
.card-box {
  padding: 2rem 3.2rem;
  background-color: #1b1b1d;
  color: white;
  flex: 1 1 0%;
  transition: transform 0.2s ease-in;
  cursor: pointer;
  border-radius: 6px;
  min-height: 300px;
  width: 100%;
  &:hover {
    transform: scale(1.1);
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
  }
}
</style>
