<template>
  <div>
    <div class="featured">
      <h1 class="featured-title">Featured</h1>
      <div class="featured-card card-box">
        <h1 class="featured-card__title">Guild Protocol</h1>
        <ul class="featured-card__items">
          <li>Nuxt Js</li>
          <li>Typescrip</li>
          <li>GSAP</li>
        </ul>
        <div class="featured-card__desc">
          Landing Page for a play team for cryppto
        </div>

        <div class="featured-card__icon">
          <span class="flex items-center gap-4">
            <span> <BaseEye class="inline mr-2" /> Live </span>

            <span> <BaseFork class="inline mr-2" /> Code </span>
          </span>
        </div>
      </div>
      <div class="featured-card card-box">
        <h1 class="featured-card__title">Guild Protocol</h1>
        <ul class="featured-card__items">
          <li>Nuxt Js</li>
          <li>Typescript</li>
          <li>GSAP</li>
        </ul>
        <div class="featured-card__desc">
          Landing Page for a play team for cryppto
        </div>

        <div class="featured-card__icon">
          <BaseEye class="inline" /> Live <BaseFork class="inline" /> Code

          <!-- <font-awesome-icon :icon="['fas', 'lock']" /> -->
        </div>
      </div>
    </div>

    <div class="personal">
      <h1 class="personal-title">Personal</h1>

      <div class="personal-wrapper">
        <div class="personal-card card-box">
          <div class="personal-card__title">Klic.gg</div>
          <ul class="personal-card__items">
            <li>Nuxt Js</li>
            <li>Typescrip</li>
            <li>GSAP</li>
          </ul>
          <div class="personal-card__description">
            Esports/VOD livestreaming platform with multiview experience
          </div>
          <div class="personal-card__icon">
            <span class="inline">
              <BaseEye class="inline" /> Live <BaseFork class="inline" /> Code
            </span>
          </div>
        </div>
        <div class="personal-card card-box">
          <div class="personal-card__title">Klic.gg</div>
          <ul class="personal-card__items">
            <li>Nuxt Js</li>
            <li>Typescrip</li>
            <li>GSAP</li>
          </ul>
          <div class="personal-card__description">
            Esports/VOD livestreaming platform with multiview experience
          </div>
          <div class="personal-card__icon">
            <span class="inline">
              <BaseEye class="inline" /> Live <BaseFork class="inline" /> Code
            </span>
          </div>
        </div>
        <div class="personal-card card-box">
          <div class="personal-card__title">Klic.gg</div>
          <ul class="personal-card__items">
            <li>Nuxt Js</li>
            <li>Typescrip</li>
            <li>GSAP</li>
          </ul>
          <div class="personal-card__description">
            Esports/VOD livestreaming platform with multiview experience
          </div>
          <div class="personal-card__icon">
            <span class="inline">
              <BaseEye class="inline" /> Live <BaseFork class="inline" /> Code
            </span>
          </div>
        </div>
        <div class="personal-card card-box">
          <div class="personal-card__title">Klic.gg</div>
          <ul class="personal-card__items">
            <li>Nuxt Js</li>
            <li>Typescrip</li>
            <li>GSAP</li>
          </ul>
          <div class="personal-card__description">
            Esports/VOD livestreaming platform with multiview experience
          </div>
          <div class="personal-card__icon">
            <span class="inline">
              <BaseEye class="inline" /> Live <BaseFork class="inline" /> Code
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseEye from '~icons/mdi/briefcase'
import BaseFork from '~icons/mdi/briefcase'

definePageMeta({
  layout: 'fixed',
})
</script>

<!-- <script setup lang="ts"></script> -->

<style lang="scss">
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
    column-gap: 2rem;
  }

  &-title {
    margin: 3.2rem 0 2.4rem;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
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
    &__link {
    }
  }
}
</style>
