<template>
  <div class="my-20">
    <Tag :text="el.tag" />

    <div class="grid grid-cols-2 gap-8 my-10">
      <TagItem v-for="(el, ind) in el.skills" :key="ind" :el="el" />
    </div>
  </div>
</template>

<script setup>
defineProps(["el"]);
</script>

<style lang="scss" scoped></style>
