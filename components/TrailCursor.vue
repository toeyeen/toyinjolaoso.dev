<template>
  <div ref="cursorEl" class="custom-cursor">

  </div>
</template>

<script setup lang="ts">


const cursorEl = ref<HTMLElement>(null)



const removeMouse = () => {
  cursorEl.value.setAttribute("style", `display: none`);
};

// trailing cursor function
const trail = (ev: MouseEvent) => {

  cursorEl.value.setAttribute(
    "style",
    `transform: translate3d(${ev.pageX - 3}px, ${ev.pageY - 3}px, 0px)`
  );
};

onMounted(() => {

  document.addEventListener("mousemove", trail);
  document.addEventListener("mouseleave", removeMouse);

  document.removeEventListener("mousemove", trail);
  document.removeEventListener("mouseleave", removeMouse);
})
</script>

<style scoped>
.custom-cursor-ii {
  width: 6px;
  height: 6px;
  background-color: #bebebe;
  border-radius: 100%;
  pointer-events: none;
  z-index: 10000000;
  position: absolute;
  mix-blend-mode: exclusion;

  transition: all 0.1s ease-out;
}

@media screen and (max-width: 750px) {

  .custom-cursor,
  .custom-cursor-ii {
    display: none;
  }
}
</style>
