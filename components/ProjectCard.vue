<template>
  <div class="2xl:h-[400px] 2xl:flex 2xl:justify-between">
    <div class="font-['Roboto_Slab'] my-5 mr-5">
      <p class="flex gap-2 mb-5">
        <span><Icons name="finished" /></span>

        <span><Icons name="stick" /></span>

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
          class="font-['DM_Sans'] font-bold py-3 px-10 bg-[#346259] rounded-lg"
        >
          VISIT APP WEBSITE
        </a>

        <a
          target="_blank"
          :href="el.link_github"
          class="bg-white w-10 h-10 flex items-center justify-center rounded-full overflow-hidden"
        >
          <Icons name="github" />
        </a>
      </div>
    </div>

    <img
      class="rounded-lg w-[360px] h-[240px] 2xl:w-[600px] 2xl:h-[400px] object-cover select-none"
      height="400"
      width="600"
      :src="`http://192.168.100.48:3001/api/image/file/${el.image?.file_name}`"
      onerror="this.src='/images/project-1.png'"
      alt=""
    />
  </div>
</template>

<script setup>
defineProps(["el"]);
</script>

<style lang="scss" scoped></style>
