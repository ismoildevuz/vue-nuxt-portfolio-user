<template>
  <div class="flex gap-5">
    <div>
      <Icons :name="el.icon" />
    </div>

    <div>
      <h4 class="text-xl font-bold">
        <span>{{ el.name }}</span>
      </h4>
      <h4 class="text-[#FFFFFF8C]">
        <span>{{ el.experience }} experience</span>
      </h4>
    </div>
  </div>
</template>

<script setup>
defineProps(["el"]);
</script>

<style lang="scss" scoped></style>
ba
