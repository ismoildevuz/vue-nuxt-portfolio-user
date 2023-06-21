<template>
  <header
    class="fixed top-0 z-10 bg-white dark:bg-black text-black dark:text-white w-full h-20"
  >
    <Container class="h-full">
      <nav class="flex justify-between py-5 items-center h-full">
        <nuxt-link to="/" class="font-bold">
          <span>{{ logoName }}</span>
        </nuxt-link>

        <button
          @click="sideOpen = !sideOpen"
          class="2xl:hidden block mix-blend-difference"
        >
          <Icons name="menu" />
        </button>

        <div class="hidden 2xl:flex items-center gap-20">
          <ul class="flex gap-10">
            <NavItem
              v-for="(el, ind) in navLinks"
              :key="ind"
              :name="el.name"
              :path="el.path"
            />

            <li
              class="border-2 px-2 p-1 rounded border-white dark:border-black hover:border-black dark:hover:border-white"
            >
              <nuxt-link to="blog"> Blog </nuxt-link>
            </li>
          </ul>

          <div class="flex gap-5">
            <button
              class="dark:hidden block"
              @click="colorMode.preference = 'dark'"
            >
              <Icons name="dark" />
            </button>

            <button
              class="dark:block hidden"
              @click="colorMode.preference = 'light'"
            >
              <Icons name="light" />
            </button>
          </div>
        </div>
      </nav>
    </Container>
  </header>

  <aside
    v-if="sideOpen"
    class="top-0 left-0 h-screen w-full bg-white dark:bg-black text-black dark:text-white z-30 fixed"
  >
    <Container>
      <div class="py-5">
        <div class="flex items-center justify-between">
          <nuxt-link to="/" class="font-bold" @click="sideOpen = !sideOpen">
            <span>{{ logoName }}</span>
          </nuxt-link>

          <button
            class="bg-black rounded-full mix-blend-difference"
            @click="sideOpen = !sideOpen"
          >
            <Icons name="close" />
          </button>
        </div>

        <ul class="flex flex-col items-center text-center gap-8 text-xl mt-14">
          <NavItem
            @click="sideOpen = !sideOpen"
            v-for="(el, ind) in navLinks"
            :key="ind"
            :name="el.name"
            :path="el.path"
          />

          <li
            @click="sideOpen = !sideOpen"
            class="border-2 px-2 p-1 rounded border-white dark:border-black hover:border-black dark:hover:border-white"
          >
            <nuxt-link to="blog"> Blog </nuxt-link>
          </li>
        </ul>

        <div class="flex justify-between items-center mt-20 px-16">
          <button
            class="dark:hidden block"
            @click="colorMode.preference = 'dark'"
          >
            <Icons name="dark" />
          </button>

          <button
            class="dark:block hidden"
            @click="colorMode.preference = 'light'"
          >
            <Icons name="light" />
          </button>

          <button class="mix-blend-difference">
            <Icons name="lang" />
          </button>
        </div>

        <div
          class="flex justify-center items-center gap-10 mt-10 px-16 mix-blend-difference"
        >
          <a target="_blank" href="#" class="">
            <Icons name="email" />
          </a>

          <a target="_blank" href="#" class="">
            <Icons name="whatsapp" />
          </a>

          <a target="_blank" href="#" class="">
            <Icons name="instagram" />
          </a>
        </div>
      </div>
    </Container>
  </aside>
</template>

<script setup>
const colorMode = useColorMode();

const sideOpen = ref(false);

const logoName = ref(`<>edu.</>`);

const navLinks = ref([
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Tech",
    path: "tech",
  },
  {
    name: "Contact",
    path: "contact",
  },
]);
</script>

<style lang="scss" scoped></style>
