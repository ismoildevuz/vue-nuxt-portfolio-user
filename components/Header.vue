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
  {
    name: "Blog",
    path: "blog",
  },
]);
</script>
