<template>
  <div class="navbar">
    <ul class="navbar-first">
      <li class="navbar-third--items">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="navbar-third--items">
        <nuxt-link to="/schedule">Schedule</nuxt-link>
      </li>
      <li class="navbar-third--items">
        <nuxt-link to="/learn">Learn</nuxt-link>
      </li>
    </ul>
    <div class="navbar-second">
      <div class="navbar-second--items">{{ site.title }}</div>
    </div>
    <ul class="navbar-third">
      <li class="navbar-third--items">
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      <li class="navbar-third--items">
        <nuxt-link to="/resume">Resume</nuxt-link>
      </li>
      <li class="navbar-third--items">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>

    <div class="hamburger" @click.native="openMenu = !openMenu">
      <span
        class="bar"
        :class="openMenu ? 'absolute rotate-45 animate' : ''"
      ></span>
      <span
        class="bar"
        :class="openMenu ? 'absolute -rotate-45 animate' : ''"
      ></span>
      <span class="bar" :class="openMenu ? 'invisible' : ''"></span>

      <nav class="floating-nav dropdown-animate" v-if="openMenu">
        <li class="navbar-third--items">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="navbar-third--items">
          <nuxt-link to="/schedule">Schedule</nuxt-link>
        </li>
        <li class="navbar-third--items">
          <nuxt-link to="/learn">Learn</nuxt-link>
        </li>
        <li class="navbar-third--items">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li class="navbar-third--items">
          <nuxt-link to="/uses">Uses</nuxt-link>
        </li>
        <li class="navbar-third--items">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const openMenu = ref(false)

const site = reactive({
  title: 'Jolaoso Toyin',
  link: 'jolaosotoyin.dev',
})
</script>

<style lang="scss" scoped>
@import '../assets/style/scss/main.scss';
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  height: 8rem;
  border: 1px solid green;

  &-second {
    font-size: 3.2rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  &-first,
  &-third {
    display: flex;
    gap: 2rem;
  }

  .menu-button {
    z-index: 99;
    overflow: visible;
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 5px;
    cursor: pointer;
    opacity: 1;
    border: none;
    outline: 0;
    background-color: transparent;
  }

  .animate {
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s,
      top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .floating-nav {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    background-color: #4f565e;
    color: white;
    right: 0;
    max-width: 300px;
    width: 200px;
    list-style: none;
    top: 40px;
    display: block;
    padding: 2rem 1.4rem;
  }

  .dropdown-animate {
    animation: growOut 300ms ease-in-out forwards;
    transform-origin: top center;
  }

  @keyframes growOut {
    0% {
      transform: scale(0);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @include respond(tab-port) {
    &-second {
      font-size: 2.8rem;
    }

    &-first,
    &-third {
      font-size: 1.6rem;
      gap: 1.6rem;
    }
  }

  @include respond(phone) {
    &-second {
      order: 1;
      font-size: 2.4rem;
    }
    &-first,
    &-third {
      display: none;
    }

    &-menu {
      display: block;
      order: 2;
    }

    .hamburger {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      order: 2;
      width: 25px;
      height: 25px;
      cursor: pointer;
      gap: 0.5rem;

      & > .bar {
        border: 1px solid white;
        display: flex;
        // position: absolute;
        width: 100%;

        // content: '';
        // height: 4px;
        // transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        //   top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
        // border-radius: 100px;
        // background-color: #fff;
      }
    }
  }
}

#menu-toggle {
  display: none;
}

.hamburger {
  display: none;
}

.navbar-menu {
  width: 25px;
}
</style>
