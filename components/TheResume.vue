<template>
  <div class="resume">
    <div class="resume-header  select-none">
      <span class="resume-header__wrapper">
        <h1 class="resume-header__wrapper-owner select-none">{{ resume.owner }}</h1>
        <div class="resume-header__wrapper-download">
          <span class="flex items-center">
            <IMdiLinkedin class="inline w-6 h-6" />
            LinkedIn
          </span>

          <span class="flex items-center">
            <IMdiDownload class="inline w-6 h-6" /> Download
          </span>
        </div>
      </span>
      <div class="resume-header__role">{{ resume.role }}</div>
      <div class="resume-header__about">
        {{ resume.about }}
      </div>
    </div>

    <div v-for="(experience, index) in resume.experience" :key="index" class="resume-timeline-1">
      <div class="resume-timeline-1__line left-12"></div>

      <span class="resume-timeline-1__header">
        <span class="relative">
          <svg class="relative inline w-24 h-24 resume-timeline-1__wrapper-big-svg" width="257" height="268"
            viewBox="0 0 257 268" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M128.5 0L239.784 134.247H17.2158L128.5 0Z" fill="#D9D9D9" />
            <path d="M128.5 268L17.2157 133.753L239.784 133.753L128.5 268Z" fill="#D9D9D9" />
          </svg>

          <IMdiBriefcase class="absolute top-0 inline text-black left-[30%]" />
        </span>

        <span> {{ experience.title }} </span>
      </span>

      <div class="resume-timeline-1__items">
        <ul>
          <li v-for="item in experience.items">{{ item.skill }}</li>
        </ul>
      </div>

      <div v-if="experience.timelines" class="resume-timeline-1__sub" v-for="timeline in experience?.timelines">
        <svg class="relative inline w-10 h-10 resume-timeline-1__wrapper-big-svg" width="257" height="268"
          viewBox="0 0 257 268" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M128.5 0L239.784 134.247H17.2158L128.5 0Z" fill="#D9D9D9" />
          <path d="M128.5 268L17.2157 133.753L239.784 133.753L128.5 268Z" fill="#D9D9D9" />
        </svg>

        <div class="inline resume-timeline-1__sub-title">
          <span>
            <strong> {{ timeline.employer }} </strong> -
            <em> {{ timeline.role }} </em>
          </span>
          <span class="block">
            <em> {{ timeline.startDate }} - {{ timeline.endDate }} </em></span>
        </div>
        <div class="resume-timeline-1__sub-description">
          <p class="resume-timeline-1__sub-description__summary">
            {{ timeline.jobDescription }}
          </p>
          <ul class="resume-timeline-1__sub-description__lists">
            <li v-for="(duty, idx) in timeline.jobDuties" :key="idx">
              {{ duty.description }}
            </li>
          </ul>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: resume } = await useAsyncData('resume', () =>
  queryContent('/resume').findOne()
)
</script>

<style scoped lang="scss">
.resume {
  background-color: var(--bg-secondary);
  padding: 2.4rem 3.2rem;

  &-header {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      cursor: pointer;

      &-owner {
        font-family: 'air-semibold';
        font-size: 4rem;
        text-transform: uppercase;
      }

      &-download {
        font-size: 1.2rem;
        display: flex;
        gap: 0.5rem;
        // align-self: flex-end;
      }
    }

    &__role {
      font-size: 1.8rem;
      color: var(--text-header);
    }

    &__about {
      color: #777778;
      font-size: 1.6rem;
      font-weight: 200;
      line-height: 1.4;
      margin: 3rem 0;
    }
  }

  &-timeline {
    &-1 {
      position: relative;
      height: 100%;
      padding-bottom: 2rem;

      &__line {
        position: absolute;
        height: 100%;
        border-left: 1px solid var(--text-tertiary);
      }

      &__header {
        &>span {
          font-size: 2rem;
          margin-right: 0.5rem;
        }
      }

      &__items {
        color: #777778;
        margin-left: 7rem;

        &>ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          list-style: none;
        }
      }

      &__sub {
        padding-top: 2.4rem;

        &>svg {
          left: 18px;
        }

        &-title {
          color: var(--text-header);
          margin-left: 4.5rem;

          &>span:first-child {
            font-size: 1.8rem;
            line-height: 1.95;
            // font-style: italic;
          }

          &>span:not(:first-child) {
            font-size: 1.2rem;
            // font-style: italic;
            margin-left: 7.4rem;
          }
        }

        &-description {
          margin-left: 7rem;
          color: #777778;

          &__summary {
            font-size: 1.5rem;
            margin-top: 1.4rem;
            margin-bottom: 2rem;
          }

          &__lists {
            font-size: 1.5rem;

            &>li:not(:last-child) {
              line-height: 1.4;
              margin-bottom: 1rem;
              // letter-spacing: 1.2px;
            }

            &>li::before {
              content: '■';
              margin-right: 6px;
            }
          }
        }
      }
    }
  }
}
</style>
