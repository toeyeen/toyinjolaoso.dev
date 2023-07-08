<template>
  <li class="h-full w-full px-4 py-6 bg-primary-light card list-none cursor-pointer flex flex-col">
    <header class="hover:text-sec mb-auto ">
      <div class="flex justify-between items-center">
        <span class="i-carbon:folder w-8 h-8 inline-flex text-sec"></span>

        <div class="gap-x-2 flex">
          <span class="i-carbon:logo-github text-base  hover:text-base w-5 h-5 inline-flex">
            <a target="_blank" :href="work.repoUrl">Live</a>
          </span>
          <span class="i-carbon:launch text-base  hover:text-base w-5 h-5 inline-flex">
            <a target="_blank" :href="work.liveUrl">Code</a>
          </span>

        </div>
      </div>

      <div class="font-semibold mt-2 text-base-lg">
        {{ work.title }}
      </div>

      <div class="text-base mt-3 font-light">
        {{ work.description }}
      </div>
    </header>
    <footer class="tools mt-4 flex items-end">
      <ul class="flex gap-x-2 font-light font-RedHatMono text-sm">
        <li v-for="(tag, index) in work.tags" :key="index">{{ tag }}</li>
      </ul>
    </footer>
  </li>
</template>

<script setup lang="ts">

import type { Work } from '../../types/index'

defineProps<{ work: Work }>()

</script>

<style lang="scss" scoped>
.card {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  box-shadow: 0 10px 30px -15px var(var(--c-primary-dark));
  // box-shadow: inset 0 0 0.5px 1px hsla(0, 0%,
  //     100%, 0.075),
  //   0 0 0 1px hsla(0, 0%, 0%, 0.05),
  //   0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
  //   0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
  //   0 3.5px 6px hsla(0, 0%, 0%, 0.09);

  &:hover {
    transform: translateY(-6px);
  }
}
</style>
