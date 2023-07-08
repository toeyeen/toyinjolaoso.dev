<template>
  <div class="project-card text-base">
    <aside class="flex-1 aside-1">
      <a href="" class="lg:max-w-500px w-full inline-block h-full">
        <img :src="featured.image" alt="">
      </a>
    </aside>
    <aside class="z-10 flex-1 aside-2 flex text-right flex-col justify-between py-6 px-4 lg:justify-start lg:p-0 ">
      <header>
        <p class="text-3xl text-base-lg">
          {{ featured.title }}
        </p>
      </header>

      <main class="md:bg-pry-lg md:p-6 md:my-4 rounded-md">
        <p class="text-sm md:text-base">
          {{ featured.description }}
        </p>
      </main>

      <footer>
        <ul class="flex gap-x-4 justify-end text-sm font-RedHatMono">
          <li v-for="tag, idx in featured.tags" :key="idx">{{ tag }}</li>
        </ul>

        <div class="flex justify-end gap-x-2 my-6">
          <a target="_blank" :href="featured.repoUrl" class="i-carbon:logo-github inline-flex w-6 h-6" />
          <a target="_blank" :href="featured.liveUrl" class="i-carbon:launch inline-flex w-6 h-6" />
        </div>
      </footer>
    </aside>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  featured: Object
})

</script>

<style lang="scss" scoped>
.project-card {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  grid-template-rows: 350px;

  @media only screen and (min-width: 1024px) {
    grid-template-rows: 1fr;
  }

  @media only screen and (min-width: 768px) {
    grid-template-rows: 400px;
  }



}

.aside-1 {
  grid-column: 1 / -1;

  grid-row: 1;

  @media only screen and (min-width: 1024px) {

    grid-column: 1 / 8;
    /** This lets the grid children stack on each other  */
    grid-row: 1 / -1;
  }

  & img {
    background-repeat: no-repeat;
    background-size: auto;
    transition: var(--transition);
    filter: grayscale(100%);
    object-fit: cover;
    height: 100%;


    @media only screen and (min-width: 1024px) {
      max-height: 280px;
    }

  }




  & a:hover {
    & img {
      filter: none;
    }
  }

}

.aside-2 {
  grid-column: 6 / -1;

  grid-row: 1;

  &::before {
    content: '';
    background: none;
  }



  @media only screen and (max-width: 768px) {
    text-align: right;
    // display: relative;
    /** This lets the grid children stack on each other  */
    grid-row: 1 / -1;
    grid-column: 1 / -1;


    &::before {
      content: '';
      background: rgba(100, 255, 218, 0.2);
      height: 100%;
      width: 100%;
      top: 0;
      position: absolute;
      left: 0;
      display: block;
      z-index: -1;
    }
  }



}
</style>
