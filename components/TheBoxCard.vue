<template>
  <div class="personal-card card-box">
    <div class="personal-card__title">{{ work.title }}</div>
    <ul class="personal-card__items">
      <li v-for="(tag, index) in work.tags" :key="index">{{ tag }}</li>
    </ul>
    <div class="personal-card__description">
      {{ work.description }}
    </div>
    <div class="personal-card__icon">
      <span class="personal-card__icon-items">
        <span>
          <IMdiEye class="inline w-6 h-6 mr-2 grayscale" />
          <a target="_blank" :href="work.liveUrl">Live</a>
        </span>

        <span>
          <IMdiSourceBranch class="inline w-6 h-6 mr-2 grayscale" />
          <a target="_blank" :href="work.repoUrl">Code</a>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Work } from '../types/index'

defineProps<{ work: Work }>()
</script>

<style lang="scss" scoped>
.personal {
  &-card {
    &:nth-child(even) {
      transform: translateY(10px);
    }
    &:hover {
      transform: scale(1.1);
    }
    padding: 3rem 3.2rem;
    &__title {
      font-size: 2.4rem;
    }

    &__description {
      margin-top: 1.6rem;
      margin-bottom: 3.8rem;
      font-size: 1.6rem;
      color: #777778;
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
    &__icon {
      &-items {
        display: flex;
        column-gap: 1rem;
        align-items: center;

        & > span {
          cursor: pointer;
        }
      }
    }
  }
}

.card-box {
  padding: 2rem 3.2rem;
  background-color: #1b1b1d;
  color: white;
  flex: 1 1 0%;
  transition: transform 0.2s ease-in;
  border-radius: 6px;
  margin-bottom: 1.6rem;
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
