<template>
  <div class="h-screen flex justify-center pt-12% pl-8% pr-4% pb-6%">
    <div class="flex flex-col justify-between h-full">
      <div>
        <div class="h-24 typing text-5xl text-base-lg typing-item font-900">
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
        <div class="text-sm">
          I love building things for the web and learning about new ideas and
          techniques for productivity and workflows.
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

const typing = ref(null)

const carouselText = [
  { text: 'a Frontend Engineer.' },
  { text: 'an avid gamer.' },
  { text: 'an open source enthusiast ' },

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

    if (eleRef.value)
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
