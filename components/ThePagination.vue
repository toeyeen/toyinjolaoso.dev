<template>
  <div class="flex justify-between items-center">
    <span class="cursor-pointer">
      <NuxtLink :to="showPath.prev._path" v-if="showPath.prev" class="navigation-link">
        <span class="block capitalize text-xl navigation ">
          <IMdiArrowLeft class="inline-flex" />
          Prev Post
        </span>
        <span class="underline text-2xl">
          {{ showPath.prev.title }}
        </span>
      </NuxtLink>
    </span>
    <span class="cursor-pointer">
      <NuxtLink :to="showPath.next._path" v-if="showPath.next" class="navigation-link">
        <span class="block capitalize text-xl navigation">
          Next Post
          <IMdiArrowRight class="inline-flex" />
        </span>

        <span class="underline text-2xl">
          {{ showPath.next.title }}
        </span>

      </NuxtLink>
    </span>
  </div>
</template>

<script setup lang="ts">

import IMdiArrowLeft from '~icons/carbon/arrow-left'
import IMdiArrowRight from '~icons/carbon/arrow-right'

// TODO: Create Pagination logic
const { data: blogPosts } = await useAsyncData(`blog`, () => {
  return queryContent('/blog').find()
})
const { path } = useRoute()




// function showPath() {

//   console.log(path)
//   const index = blogPosts.value.findIndex(item => item._path == path)

//   console.log(index, 'of current')

//   // If it is at the last item 
//   if(index > 0 ) {

//     return {
//       next: blogPosts.value[index + 1]._path,
//       prev: blogPosts.value[index - 1]._path
//     }
//   }


//   // If it is at the last item 
//   if(index == blogPosts.value.length - 1) {
//     return {
//       next: null,
//       prev: blogPosts.value[index - 1]._path
//     }
//   }

//   if( index == 0) {
//     return {
//       next: blogPosts.value[index + 1]._path,
//       prev: null
//     }
//   }
//   if( index < 0) {
//     return {
//       next: null,
//       prev: null
//     }
//   }




// }


const showPath = computed(() => {
  const index = blogPosts.value.findIndex(item => item._path == path)




  // If it is at the last item 

  console.log(index == blogPosts.value.length - 1);
  if (index == blogPosts.value.length - 1) {
    console.log('last')
    return {
      next: null,
      prev: blogPosts.value[index - 1]
    }
  }

  if (index == 0) {
    return {
      next: blogPosts.value[index + 1],
      prev: null
    }
  }
  if (index < 0) {
    return {
      next: null,
      prev: null
    }
  }

  // If it is at the last item 
  if (index > 0) {

    return {
      next: blogPosts.value[index + 1],
      prev: blogPosts.value[index - 1]
    }
  }
})





onMounted(() => {
  console.log(blogPosts.value, 'blogPosts')
  console.log(path);

})


</script>

<style lang="scss" scoped>
.navigation {
  color: var(--text-main);
}

.navigation-link {
  color: var(--text-tertiary);

}
</style>
