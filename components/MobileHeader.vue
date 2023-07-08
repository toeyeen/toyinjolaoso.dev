<template>
  <header class="mb-auto">
    <div class="header-wrapper relative flex justify-between items-center z-99">
      <div class="logo uppercase text-base md:text-2xl text-base-lg">
        <nuxt-link to="/">
          {{ appOwner }}
        </nuxt-link>
      </div>
      <div class="hamburger cursor-pointer" @click="open = !open">
        <button class="hamburger-wrapper relative flex flex-col justify-center items-end ">
          <span class="block bg-white h-0.5"
            :class="[open ? ' transition-all ease-linear duration-200 -rotate-45 translate-y-1 w-25px' : 'w-35px ']"></span>
          <span class="block bg-white w-25px h-0.5 "
            :class="[open ? ' transition-all rotate-45 absolute top-4px ease-linear duration-200' : 'mt-2']"></span>
        </button>
      </div>
    </div>
    <nav v-show="open"
      class="bg-primary-light fixed left-0 top-0 h-full w-full flex flex-col items-center py-20% px-10% z-90 slide-in gap-y-10">
      <ul class="flex flex-col gap-y-8 items-center cusr">
        <nuxt-link class="navigation-item__link cursor-pointer" @click="goTo('')">
          Home
        </nuxt-link>
        <nuxt-link class="navigation-item__link cursor-pointer" @click="goTo('learn')">
          Work
        </nuxt-link>
        <nuxt-link @click="goTo('resume')" class="navigation-item__link cursor-pointer">
          Resume
        </nuxt-link>
        <nuxt-link @click="goTo('blog')" class="navigation-item__link cursor-pointer">
          Blogs
        </nuxt-link>
      </ul>


      <div class="text-center">
        <span class="text-xl font-light text-sec">Connect with me</span>
        <TheSocials />
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>

import { appOwner } from '../constants/index'
const open = ref(false)

const router = useRouter()


function goTo(link: string) {
  open.value = false
  router.push('/' + link)
}
</script>

<style lang="scss" scoped>
</style>
