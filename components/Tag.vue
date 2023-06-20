<template>
  <div
    class="flex text-black font-['Inter'] font-bold text-xl mix-blend-difference"
  >
    <div class="bg-white flex items-center px-5 rounded-l">
      <h3>
        <span>{{ text }}</span>
      </h3>
    </div>

    <div>
      <Icons name="tag_end" />
    </div>
  </div>
</template>

<script setup>
defineProps(["text"]);
</script>

<style lang="scss" scoped></style>
