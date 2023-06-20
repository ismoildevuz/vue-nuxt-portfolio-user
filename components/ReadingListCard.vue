<template>
  <nuxt-link :to="`/blog/${el.id}`">
    <div
      class="group border border-white hover:bg-white bg-black hover:text-black text-white rounded-xl p-5"
    >
      <div class="flex gap-5">
        <h3 class="text-2xl h-[120px] overflow-hidden relative">
          <span>{{ el.title }}</span>

          <div
            class="absolute w-full h-[120px] top-0 bg-gradient-to-t group-hover:from-white from-black to-[45%] to-transparent"
          ></div>
        </h3>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex gap-5">
          <h4 class="font-['Roboto'] flex items-center gap-2">
            <Icons
              class="group-hover:hidden block"
              name="calendar"
              color="white"
            />
            <Icons
              class="group-hover:block hidden"
              name="calendar"
              color="black"
            />

            <span>{{ moment(el.createdAt).format("DD/MM/YYYY") }}</span>
          </h4>
        </div>

        <h4 class="font-['Roboto'] flex items-center gap-2">
          <Icons class="group-hover:hidden block" name="views" color="white" />
          <Icons class="group-hover:block hidden" name="views" color="black" />

          <span>{{ el.views }}</span>
        </h4>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
import moment from "moment";

defineProps(["el"]);
</script>

<style lang="scss" scoped></style>
