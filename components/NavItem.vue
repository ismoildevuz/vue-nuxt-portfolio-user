<template>
  <li class="border-2 px-2 p-1 rounded duration-200 border-black">
    <a
      :class="path"
      :href="`/#${path}`"
      @click="(e) => navigateToSection(e, `#${path}`)"
    >
      {{ name }}
    </a>
  </li>
</template>

<script setup>
defineProps(["name", "path"]);

const navigateToSection = (e, sectionId) => {
  document.querySelector(".active")?.classList.remove("active");
  e.target.classList.add("active");
  document
    .querySelector(`.${useRoute().hash.split("/#")[1]}`)
    ?.classList.add("active");
  const sectionElement = document.querySelector(sectionId);
  if (sectionElement) {
    const headerHeight = 80;
    const sectionTopOffset = sectionElement.offsetTop - headerHeight;
    window.scrollTo(0, sectionTopOffset);
  }
};

onMounted(() => {
  document.querySelector(".active")?.classList.remove("active");
  document
    .querySelector(`.${useRoute().hash.split("/#")[1]}`)
    ?.classList.add("active");
});
</script>

<style lang="scss" scoped>
.active {
  position: relative;
  color: #ffffff !important;
  display: flex;
  justify-content: center;
}
.active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  display: block;
  width: 80%;
  height: 2px;
  border-radius: 2px;
  background-color: #ffffff;
}
</style>
