<template>
  <div class="text-center py-60">
    <h1 class="font-['Inter'] font-medium text-[110px] leading-[115px]">
      <span>404 Not Found</span>
    </h1>

    <h2 class="text-[16px] leading-[24px] py-5 mb-20">
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
