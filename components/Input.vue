<template>
  <form
    @submit.prevent
    class="bg-white rounded-3xl sm:rounded-full overflow-hidden border border-black p-2 mt-10 mb-24 sm:flex sm:justify-between w-full"
  >
    <input
      type="email"
      placeholder="Enter your e-mail here"
      class="ml-4 focus:outline-none text-black flex-grow my-3"
    />

    <button
      type="submit"
      class="bg-black px-4 py-2 rounded-full ml-4 text-white"
    >
      <span>Contact</span>
    </button>
  </form>
</template>

<script setup></script>

<style lang="scss" scoped></style>
