<template>
  <li
    class="border-2 px-2 p-1 rounded border-white dark:border-black list-none"
  >
    <nuxt-link :to="`/#${path}`">
      {{ name }}
    </nuxt-link>
  </li>
</template>

<script setup>
defineProps(["name", "path"]);
</script>

<style lang="scss" scoped></style>
