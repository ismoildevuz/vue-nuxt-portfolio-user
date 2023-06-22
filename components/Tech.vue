<template>
  <section id="tech">
    <Container>
      <div class="my-5 py-20 relative">
        <div class="2xl:w-[40%]">
          <h2 class="font-['Roboto_Slab']">
            <span class="block font-black text-2xl">and finally,</span>
            <span class="block font-black text-9xl">tech.</span>
            <span class="block font-bold text-xl">
              In my personal journey, I already worked with some techonologies,
              and here they are:
            </span>
          </h2>

          <div v-for="(el, ind) in skills" :key="ind">
            <TagCard :el="el" />
          </div>
        </div>

        <img
          width="500"
          height="600"
          class="hidden 2xl:block w-[500px] h-[600px] object-cover absolute top-[10%] right-0 mix-blend-difference"
          src="/icons/bg-cover-4.gif"
          alt=""
        />

        <div
          class="hidden 2xl:block bg-cover-color absolute top-[15%] -right-[50%] w-full h-[60%] mix-blend-difference"
        ></div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import axios from "axios";

const skills = ref([
  {
    tag: "Web",
    skills: [
      {
        id: 1,
        icon: "html",
        name: "HTML",
        experience: "+1 month",
      },
      {
        id: 2,
        icon: "css",
        name: "CSS",
        experience: "+1 month",
      },
      {
        id: 3,
        icon: "js",
        name: "JavaScript",
        experience: "+1 month",
      },
      {
        id: 4,
        icon: "ts",
        name: "TypeScript",
        experience: "+1 month",
      },
    ],
  },
  {
    tag: "Frameworks",
    skills: [
      {
        id: 1,
        icon: "nodejs",
        name: "Node.js",
        experience: "+1 month",
      },
      {
        id: 2,
        icon: "nestjs",
        name: "Nest.js",
        experience: "+1 month",
      },
      {
        id: 3,
        icon: "vuejs",
        name: "Vue.js",
        experience: "+1 month",
      },
      {
        id: 4,
        icon: "nuxtjs",
        name: "Nuxt.js",
        experience: "+1 month",
      },
    ],
  },
  {
    tag: "Libraries",
    skills: [
      {
        id: 1,
        icon: "tailwindcss",
        name: "TailwindCSS",
        experience: "+1 month",
      },
      {
        id: 2,
        icon: "bootstrap",
        name: "Bootstrap",
        experience: "+1 month",
      },
    ],
  },
  {
    tag: "Data",
    skills: [
      {
        id: 1,
        icon: "pg",
        name: "PostgreSQL",
        experience: "+1 month",
      },
      {
        id: 2,
        icon: "mongodb",
        name: "MongoDB",
        experience: "+1 month",
      },
    ],
  },
]);

const data = reactive({
  list: [],
  current: 0,
});
</script>

<style lang="scss" scoped>
.bg-cover-color {
  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(74, 25, 112, 0.35) 71.35%,
    rgba(104, 35, 157, 0) 100%
  );
  transform: rotate(79deg);
}
</style>
