<template>
  <div class="flex items-center my-4 gap-x-4">
    <div class="rounded-full">
      <img class="h-20" src="../assets/images/toyin's Bitemoji.webp" />
    </div>

    <ul class="socials">
      <li class="socials-icon">
        <IMdiGithub class="inline w-10 h-10 text-gray-600 fill-current" />
        <span>Github</span>
      </li>
      <li class="socials-icon">
        <IMdiTwitter class="inline w-10 h-10 text-blue-500 fill-current" />
        <span>Twitter</span>
      </li>
      <li class="socials-icon">
        <IMdiYoutube class="inline w-10 h-10 text-red-500 fill-current" />
        <span>Youtube</span>
      </li>
      <li class="socials-icon">
        <IMdiAt class="inline w-10 h-10 text-pink-500 fill-current" />
        <span>Mail</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.socials {
  flex: 1 1 0%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.2rem;

  &-icon {
    cursor: pointer;
    border: 1px solid #777778;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 0.5rem;
    width: 100%;
    transition: all 0.5s ease;

    & > span {
      display: none;
      text-transform: uppercase;
      font-family: 'air-semibold';
      font-size: 1.3rem;
    }

    & > svg {
      filter: grayscale(1);
    }

    &:hover > svg {
      filter: grayscale(0);
    }

    &:hover {
      background: #fff;
    }

    &:hover > span {
      display: inline;
      color: #777778;
      white-space: nowrap;
      margin-left: 0.3rem;
      transition: all 0.3s ease;
    }
  }
}

@keyframes left {
  0% {
    left: 0;
  }
  // 50%{ left : 100%;}
  100% {
    left: 100%;
  }
}
</style>
