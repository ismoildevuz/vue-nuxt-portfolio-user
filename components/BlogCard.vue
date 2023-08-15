<template>
  <nuxt-link :to="`/blog/${el.id}`">
    <div
      class="group border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded p-5"
    >
      <div class="flex gap-5">
        <img
          width="100"
          height="100"
          class="w-[100px] h-[100px] object-cover rounded"
          :src="`https://nest-portfolio-xy2i.onrender.com/api/image/${el.image_name}`"
          onerror="this.src='/images/no-image-blog.png'"
        />

        <h3
          class="text-2xl sm:text-3xl sm:w-[70%] h-[150px] overflow-hidden relative"
        >
          <span>{{ el.title }}</span>

          <div
            class="absolute w-full h-[150px] top-0 bg-gradient-to-t group-hover:from-black from-white dark:group-hover:from-white dark:from-black to-[25%] to-transparent"
          ></div>
        </h3>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex gap-5">
          <h4 class="font-['Roboto'] flex items-center gap-2">
            <Icons
              class="group-hover:block hidden dark:group-hover:hidden dark:block"
              name="calendar"
              color="white"
            />
            <Icons
              class="group-hover:hidden block dark:group-hover:block dark:hidden"
              name="calendar"
              color="black"
            />

            <span>{{ moment(el.createdAt).format("DD/MM/YYYY") }}</span>
          </h4>

          <h4 class="font-['Roboto'] flex items-center gap-2">
            <Icons
              class="group-hover:block hidden dark:group-hover:hidden dark:block"
              name="views"
              color="white"
            />
            <Icons
              class="group-hover:hidden block dark:group-hover:block dark:hidden"
              name="views"
              color="black"
            />

            <span>{{ el.views }}</span>
          </h4>
        </div>

        <button>
          <Icons
            class="group-hover:block hidden dark:group-hover:hidden dark:block"
            name="bookmark"
            color="white"
          />
          <Icons
            class="group-hover:hidden block dark:group-hover:block dark:hidden"
            name="bookmark"
            color="black"
          />
        </button>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
import moment from "moment";

defineProps(["el"]);
</script>

<style lang="scss" scoped></style>
