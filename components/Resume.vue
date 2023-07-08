<template>
  <div class="mt-6">


    <header class="text-base flex flex-col items-center justify-center" v-if="isSmall">
      <p class="text-3xl font-bold text-base-lg"> {{ resume?.owner }} </p>
      <p class="font-thin mt-2"> {{ resume?.role }} </p>


      <a :href="`mailto:${resume?.email}`" class="my-3 text-sm"> {{ resume?.email }} </a>

      <ul class="flex justify-between items-center text-white gap-x-4">
        <li class="cursor-pointer">
          <i class="i-carbon:logo-github inline-flex  h-4 w-4 text-white fill-current" />
        </li>
        <li class="cursor-pointer">
          <i class="i-carbon:logo-twitter inline-flex  h-4 w-4 text-white fill-current" />
        </li>
        <li class="cursor-pointer">
          <i class="i-carbon:logo-linkedin inline-flex  h-4 w-4 text-white fill-current" />
        </li>
        <li class="cursor-pointer">
          <i class="i-carbon:logo-instagram inline-flex  h-4 w-4 text-white fill-current" />
        </li>
        <li class="cursor-pointer">
          <i class="i-carbon:user-avatar-filled inline-flex  h-4 w-4 text-white fill-current" />
        </li>
      </ul>
    </header>


    <main class="text-base text-left">
      <div id="about" class="mb-6">
        <div class="title">About</div>
        <span v-html="formattedAbout" class="mt-4 block" />
      </div>


      <div id="projects" class="mb-6">
        <div class="title">
          Projects
        </div>
        <ul class="mt-4 projects__details flex flex-col gap-y-4">
          <li v-for="project, idx in projects.body" :key="idx">
            <div class="projects__heading flex items-center gap-x-1.5">
              <span class="font-semibold text-base-lg">
                {{ project.title }}
              </span>

              <a target="_blank" :href="project.repoUrl" class="i-carbon:logo-github inline-flex h-4 w-4" />
              <a target="_blank" :href="project.liveUrl" class="i-carbon:arrow-up-right inline-fle4 h-4 w-4" />
            </div>

            <div class="project__description text-sm">
              {{ project.shortDescription }}
            </div>

            <div v-if="project.gitStar" class="project__footer mt-1 flex items-center text-sm">
              <span class="i-carbon:star-filled inline-flex w-4 h-4 mr-1" />
              {{ project.gitStar }}
            </div>
          </li>
        </ul>

      </div>


      <div id="work-experience" class="mb-6">

        <div class="title">
          {{ resume?.experience?.title }}
        </div>
        <ul class="mt-4">
          <li class="work-details" v-for="timeline, idx in resume?.experience?.timelines" :key="idx">
            <div class="work-details__heading">
              <div>
                <a href="#" target="_blank" class="work-details__place text-base-lg font-semibold "> {{ timeline.employer
                }} </a>
                <span class="work-details__role ml-1 "> {{ timeline.role }} </span>
              </div>

              <div class=" text-sm mt-.5 mb-1">
                <span class="work-details__date"> {{ dayjs(timeline.startDate).format("MMM YYYY") }} - {{
                  dayjs(timeline.endDate).isValid() ? dayjs(timeline.endDate).format("MMM YYYY") :
                  timeline.endDate }}</span>

                <span> | </span>

                <span class="work-details__location"> {{ timeline.location.state }} {{ timeline.location.country }}
                </span>
              </div>

              <div class="work-details__excerpt">

                {{ timeline.jobDescription }}
              </div>

            </div>

            <ul class="work-details__achievement my-2">
              <li v-for="duties in timeline.jobDuties"> {{ duties.description }} </li>
            </ul>
          </li>


        </ul>
      </div>


      <div id="stacks" class="mb-6">

        <div class="title">
          Stacks
        </div>


        <ul class="mt-4 flex flex-col gap-y-4">
          <li class="flex justify-center gap-x-4" v-for="skill in resume?.competencies.skills">
            <span class="text-base-lg w-80px justify-end flex font-semibold text-right">
              {{ skill.title }}
            </span>

            <span class="font-thin flex-1">
              <span v-for="item, idx in skill.skillsets" :key="idx">
                {{ item + ',' }}
                <!-- Typescript, Javascript, Vue, Nuxt, Vite, Vue, Nuxt, Vite -->
              </span>
            </span>

          </li>
        </ul>

      </div>


      <div id="education" class="mb-6">
        <div class="title">
          Education
        </div>
        <div class="mt-4">

          <div>
            <span class="education__course font-semibold text-base-lg">
              {{ resume?.education.degree }}
            </span>

            <div>
              <span class="education__university ">
                {{ resume?.education.school }},
              </span>

              <span class="education__country">
                {{ resume?.education.location.state }}, {{ resume?.education.location.country }}
              </span>
            </div>

          </div>


          <span class="education__country font-thin">
            {{ dayjs(resume?.education.startDate).format("MMM YYYY") }} - {{
              dayjs(resume?.education.endDate).format("MMM YYYY") }}
          </span>
        </div>

      </div>


      <div id="talks" class="mb-6">
        <div class="title">
          Talks
        </div>
        <ul class="mt-4">
          <li v-for="talk in resume?.talks.data" class="justify-center my-6">
            <div class="publications__heading">
              <a href="#" class="publications__title text-base-lg">
                {{ talk.title }}
              </a>
              <span>, </span>
              <span class="publications__event">
                {{ talk.organizer }}
              </span>
            </div>

            <div class="publications__date">
              <span class="publications__date text-sm">
                {{ dayjs(talk.date).format("MMM DD, YYYY") }}
              </span>
              <span class="publications__link text-sm">
                <a :href="talk.link" target="_blank"> Slides </a>
              </span>
            </div>

            <div class="publications__excerpt">
              {{ talk.excerpt }}
            </div>
          </li>
        </ul>
      </div>


      <div id="certifications" class="mb-6">
        <div class="title">
          Certifications
        </div>
        <ul class="mt-4">
          <li class="certifications__details my-4" v-for="award, idx in resume?.awards.timelines" :key="idx">
            <div class="certifications__title text-base-lg">
              {{ award.description }}
            </div>
            <div class="certifications__awarder">
              {{ award.awardee }}
            </div>
            <div class="certifications__date text-sm">
              {{ dayjs(award.date).format("MMMM YYYY") }}
            </div>
          </li>
        </ul>

      </div>


      <div id="languages" class="mb-6">
        <div class="title">
          Languages
        </div>
        <ul class="mt-4">
          <li v-for="language in resume?.languages.data" class="inline">
            <strong class="text-base-lg">
              {{ language.title }}
            </strong>
            ({{ ratingCategory(language.rating) }})
          </li>

        </ul>
      </div>
    </main>

    <footer>
      <a href="#" class="text-sm">
        PDF Version
      </a>
    </footer>

  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"


const breakpoints = useBreakpoints(breakpointsTailwind)


const isSmall = breakpoints.smaller('lg')



const props = withDefaults(defineProps<{
  resume: any,
  projects: any,
  standAlone?: boolean
}>(), {
  standAlone: false
})


function ratingCategory(rating: string) {

  const ratingValue = +rating

  switch (ratingValue) {
    case 5:
      return 'Expert'

    case 4:
      return 'Skilled'

    case 3:
      return 'Competent'

    case 2:
      return 'Developing'

    default:
      return 'Novice';
  }


}

const formattedAbout = computed(() => {
  return props?.resume?.about?.replace(/\n/g, '<br /> <br />')
})
</script>

<style lang="scss" scoped>
a {
  border-bottom: 1px dashed var(--c-text-base);
}

.work-details {

  ul {
    padding-left: 25px;

    li {
      list-style-type: circle;
    }
  }


}
</style>
