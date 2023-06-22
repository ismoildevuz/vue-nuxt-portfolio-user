<template>
  <div
    class="h-[800px] 2xl:h-[400px] flex flex-col 2xl:flex-row items-center justify-between"
  >
    <div class="font-['Roboto_Slab'] my-5 mr-5">
      <p class="flex gap-2 mb-5">
        <span class="dark:block hidden"
          ><Icons name="finished" color="white"
        /></span>
        <span class="dark:hidden block"
          ><Icons name="finished" color="black"
        /></span>

        <span class="dark:block hidden"
          ><Icons name="stick" color="white"
        /></span>
        <span class="dark:hidden block"
          ><Icons name="stick" color="black"
        /></span>

        <span>Finished</span>
      </p>

      <h3 class="text-4xl font-black mb-5">
        <span>{{ el.name }} </span>
      </h3>

      <h4 class="text-xl mb-8">
        <span>
          {{ el.description }}
        </span>
      </h4>

      <div class="flex gap-10 items-center">
        <a
          target="_blank"
          :href="el.link_project"
          class="font-['DM_Sans'] font-bold py-3 px-10 bg-[#346259] rounded-lg text-white"
        >
          VISIT APP WEBSITE
        </a>

        <a
          target="_blank"
          :href="el.link_github"
          class="bg-white w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border border-black"
        >
          <Icons name="github" />
        </a>
      </div>
    </div>

    <img
      class="rounded-lg w-[340px] h-[200px] 2xl:w-[600px] 2xl:h-[400px] object-cover select-none pointer-events-none"
      :src="`https://nest-portfolio-xy2i.onrender.com/api/image/file/${el.image?.file_name}`"
      onerror="this.src='/images/project-1.png'"
      alt=""
    />
  </div>
</template>

<script setup>
defineProps(["el"]);
</script>

<style lang="scss" scoped></style>
