<template>
  <div class="text-center py-60 mix-blend-difference text-white">
    <h1
      class="font-['Inter'] font-medium text-4xl 2xl:text-[110px] 2xl:leading-[115px]"
    >
      <span>404 Not Found</span>
    </h1>

    <h2 class="text-sm 2xl:text-[16px] 2xl:leading-[24px] py-5 mb-10 2xl:mb-20">
      <span>{{ name }} not found. You may go to {{ name }} page.</span>
    </h2>

    <router-link
      :to="`/${path}`"
      class="bg-white px-10 py-3 text-black rounded-md"
    >
      <span>Back to {{ name }} page</span>
    </router-link>
  </div>
</template>

<script setup>
defineProps(["name", "path"]);
</script>

<style lang="scss" scoped></style>
