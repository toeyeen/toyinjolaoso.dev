<template>
  <div class="flex flex-col justify-between h-full">
    <div>
      <div class="h-24 typing text-7xl typing-item">
        <p>
          <span>Hello, I'm </span>
          <span ref="typing"></span>
          <span class="typing-cursor"></span>
        </p>
      </div>
      <p class="mt-6"></p>
    </div>

    <TheNavigation />

    <div>
      <TheSocials />
      <span class="text-2xl">
        I love building things for the web and learning about new ideas and
        techniques for productivity and workflows.
      </span>
    </div>
  </div>
  <!-- <div class="uppercase -rotate-90 check text-9xl">
    <p>{{ routeName }}</p>
  </div> -->
</template>

<script setup lang="ts">
const { name: routeName } = useRoute()

const typing = ref(null)

const carouselText = [
  { text: 'a frontend developer.' },
  { text: 'an avid gamer.' },
  { text: 'a petroleum engineer.' },
]

async function typeSentence(sentence: any, eleRef, delay = 100) {
  const letters = sentence.split('')
  let i = 0

  for (i = 0; i < letters.length; i++) {
    await waitForMs(delay)
    eleRef?.value?.insertAdjacentText('beforeend', letters[i])
  }
  return
}

// typeSentence('Jolaoso toyin', typing)

async function deleteSentence(eleRef) {
  const sentence = eleRef?.value?.textContent
  const letters = sentence?.split('')
  for (let i = letters?.length; i > 0; i--) {
    await waitForMs(200)
    letters.pop()
    const newText = letters.join('')
    eleRef.value.textContent = newText
  }
  return
}

async function carousel(carouselList, eleRef) {
  var i = 0
  while (true) {
    await typeSentence(carouselList[i].text, eleRef)
    await waitForMs(1500)
    await deleteSentence(eleRef)
    await waitForMs(500)
    i++
    if (i >= carouselList.length) {
      i = 0
    }
  }
}

carousel(carouselText, typing)

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
</script>

<style lang="scss" scoped>
@import '../assets/style/scss/main.scss';

.check {
  position: absolute;
  top: 40%;
  left: 0%;
  transform: translate(20%, 50%);
}
</style>
