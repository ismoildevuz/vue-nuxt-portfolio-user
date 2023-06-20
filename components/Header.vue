<template>
  <header class="fixed top-0 z-10 bg-black w-full h-20">
    <Container class="h-full">
      <nav class="flex justify-between py-5 items-center h-full">
        <nuxt-link to="/" class="font-bold">
          <span>{{ logoName }}</span>
        </nuxt-link>

        <ul class="flex gap-10">
          <NavItem
            v-for="(el, ind) in navLinks"
            :key="ind"
            :name="el.name"
            :path="el.path"
          />

          <li
            class="border-2 px-2 p-1 rounded duration-200 border-black hover:border-white"
          >
            <nuxt-link to="blog" @click="(e) => toggleClass(e)">
              Blog
            </nuxt-link>
          </li>
        </ul>

        <div class="flex gap-5">
          <div>
            <Icons name="light" />
          </div>
        </div>
      </nav>
    </Container>
  </header>
</template>

<script setup>
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

const toggleClass = (e) => {
  document.querySelector(".active")?.classList.remove("active");
};

onMounted(() => {
  document.querySelector(".active")?.classList.remove("active");
});
</script>

<style lang="scss" scoped></style>
