<template>
  <div class="w-full mt-5 2xl:mt-0">
    <div class="border border-black dark:border-white rounded-xl p-5">
      <div class="flex justify-between gap-2 mix-blend-difference">
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
        @click="share"
        class="flex items-center justify-center gap-3 py-2 bg-white rounded-xl w-full mt-3 mix-blend-difference"
      >
        <Icons name="share" />

        <span class="font-medium text-black">Share</span>
      </button>
    </div>

    <div class="border border-black dark:border-white rounded-xl p-5 mt-5">
      <h2 class="text-white mix-blend-difference">
        <span>Your reading list</span>
      </h2>

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

const share = () => {
  const baseUrl = "https://vue-nuxt-portfolio-user.vercel.app";
  const fullPath = useRoute().fullPath;
  const res = baseUrl + fullPath;

  if (document.queryCommandSupported("copy")) {
    const tempInput = document.createElement("input");
    tempInput.style.position = "fixed";
    tempInput.style.opacity = 0;
    tempInput.value = res;
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    ElMessage({
      message: "Link copied",
      grouping: true,
      type: "success",
    });
  } else {
    console.log("Copying to clipboard is not supported in this browser.");
  }
};
</script>

<style lang="scss" scoped></style>
