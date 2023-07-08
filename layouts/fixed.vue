<template>
  <div>
    <div class="wrapper ">
      <div class="t-fixed">
        <ClientOnly>
          <Plum />
        </ClientOnly>
        <div class="t-fixed-container h-screen">
          <TheFixed class="lg:flex lg:flex-col h-full hidden" />
        </div>
        <div class="main lg:hidden">
          <ThemeSwitcher />
          <div class="main-container">
            <slot />
          </div>
        </div>
        <div class=" mobile-wrapper">
          <div class="t-fixed-mobile h-full lg:hidden ">
            <div class="mobile-wrapper h-full flex flex-col">
              <header class="mb-auto">
                <div class="header-wrapper relative flex justify-between items-center z-99 p-3vw">
                  <div class="logo uppercase text-base text-base-lg">
                    Marksman
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
                  class="bg-primary-light fixed top-0 h-full w-full flex flex-col items-center py-20% px-10% z-2 slide-in gap-y-10">
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
              <main class="mb-auto  mx-auto text-center p-3vw">
                <slot />
              </main>
              <footer class="flex justify-center items-center">
                <TheSocials />
              </footer>
            </div>
          </div>
        </div>
      </div>
      <!-- 
      <div class="overflow-y-scroll py-5vw px-3vw">
        <slot />
      </div> -->


    </div>

  </div>
</template>

<script setup lang="ts">

const open = ref(false)

const router = useRouter()


function goTo(link: string) {
  open.value = false
  router.push('/' + link)
}

</script>

<style lang="scss">
.wrapper {

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    overflow: hidden;
    position: absolute;
  }
}

.t-fixed {

  @media only screen and (min-width: 102px) {
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  &-container {
    @media only screen and (min-width: 1024px) {
      padding: 3vw;
      height: 100vh;
    }
  }
}

.main {

  @media only screen and (max-width: 1024px) {
    display: none;
  }

  &-container {
    padding: 10% 8% 10% 5%;
  }
}

.typing {
  &-cursor {
    display: inline-block;
    width: 2px;
    height: 40px;
    background-color: #fff;
    margin-left: 6px;
    margin-bottom: -2px;
    animation: blinker 0.6s linear infinite alternate;
  }
}

.floating {
  animation: floating 6s ease-in-out infinite;
}

.slide-in {
  animation: slide .3s linear;
}

@keyframes blinker {
  0% {
    opacity: 1;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}


@keyframes floating {
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(-20px);
  }

  0% {
    transform: translateY(0%);
  }
}

@keyframes slide {

  0% {
    opacity: 0;
    transform: translateY(-50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }

}
</style>
