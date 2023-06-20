<template>
  <div class="w-full">
    <div class="border border-white rounded-xl p-5">
      <div class="flex justify-between gap-2">
        <button
          class="flex items-center justify-center py-2 bg-white rounded-xl flex-grow"
        >
          <Icons name="bookmark" color="black" />
        </button>

        <button
          class="flex items-center justify-center py-2 bg-white rounded-xl flex-grow"
        >
          <Icons name="like" />
        </button>
      </div>

      <button
        class="flex items-center justify-center gap-3 py-2 bg-white rounded-xl w-full mt-3"
      >
        <Icons name="share" />

        <span class="font-medium text-black">Share</span>
      </button>
    </div>

    <div class="border border-white rounded-xl p-5 mt-5">
      <h2><span>Your reading list</span></h2>

      <div class="grid gap-5 mt-5">
        <div v-for="(el, ind) in data" :key="ind">
          <ReadingListCard :el="el" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["data"]);
</script>

<style lang="scss" scoped></style>
