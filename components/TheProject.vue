<template>
  <div class="mt-10 md:mt-0">
    <div class="featured">
      <ClientOnly>
        <div v-if="featured" class="relative">
          <span v-if="featured[0]" class="lg:text-2em md:text-2.2em text-1.5em  color-transparent absolute left--0.2rem lg:left--2rem md:top--4rem top--3.5rem  font-bold text-stroke-2 text-stroke-hex-aaa uppercase
          op10">{{ featured[0].type }}
          </span>
        </div>
        <div v-if="featured">
          <STile :featured="featured[0]" />
        </div>
      </ClientOnly>
    </div>

    <div class="personal">
      <ClientOnly>
        <div v-if="personal" class="relative">
          <span v-if="personal[0]" class="lg:text-2em md:text-2.2em text-1.5em  color-transparent absolute left--0.2rem lg:left--2rem md:top--4rem top--3.5rem  font-bold text-stroke-2 text-stroke-hex-aaa uppercase
          op10">{{ personal[0].type }}
          </span>
        </div>
        <div class="personal-wrapper">
          <SCard v-for="work in personal" :key="work?.id" :work="work" />
        </div>
      </ClientOnly>
    </div>

  </div>
</template>

<script setup lang="ts">

const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects').findOne()
)

const works = projects?.value


const featured = computed(() => {
  return works?.body?.filter((work) => work.type !== 'personal')
})

const personal = computed(() => {
  return works?.body?.filter((work) => work.type !== 'featured')
})

</script>

<style lang="scss" scoped>
.card-box {
  padding: 2rem 3.2rem;
  background-color: var(--bg-secondary);
  color: var(--text-main);
  flex: 1 1 0%;
  transition: transform 0.2s ease-in;
  border-radius: 6px;
  margin-bottom: 1.6rem;
  width: 100%;

  &:hover {
    // transform: scale(1.05);
  }
}

.featured {
  // &-title {
  //   margin: 1.2rem 0;
  //   font-size: 1rem;
  //   text-transform: uppercase;
  // }

  &-card {
    &__title {
      font-size: 1.5rem;
      font-weight: 400;
    }

    &__items {
      text-transform: uppercase;
      color: #bebebe;
      font-size: 1rem;
      font-weight: 100;
      display: inline-flex;

      &>li:not(:last-child)::after {
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 4rem;
  }

  &-title {
    margin: 3.2rem 0 2.4rem;
    font-size: 1rem;
    text-transform: uppercase;
  }
}
</style>
