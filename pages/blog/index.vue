<template>
  <section id="blog">
    <Container>
      <div class="mt-5 py-20">
        <div class="sm:flex sm:justify-between sm:items-center">
          <h1 class="font-['Roboto_Slab'] font-black text-8xl">
            <span>Blog</span>
          </h1>

          <div class="sm:w-[220px]">
            <h2
              class="hidden sm:block text-xs text-right text-white mix-blend-difference"
            >
              <span>
                Want to save articles to read later? Add them to your reading
                list.
              </span>
            </h2>

            <button
              class="hidden sm:flex w-full justify-center items-center my-5 py-1 bg-white rounded mix-blend-difference"
            >
              <span class="text-black font-semibold text-sm">Login</span>
            </button>

            <div class="sm:flex sm:justify-end mt-10 sm:mt-0">
              <button
                class="border border-white rounded py-3 px-5 flex gap-5 w-full sm:w-auto mix-blend-difference"
              >
                <Icons name="bookmark" color="white" />

                <span class="text-white">My reading list</span>
              </button>
            </div>
          </div>
        </div>

        <div class="grid sm:grid-cols-3 gap-10 my-10 sm:my-20">
          <div v-for="(el, ind) in data.list" :key="ind">
            <BlogCard :el="el" />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import axios from "axios";

const data = reactive({
  list: [],
  current: 0,
});

onMounted(() => {
  axios
    .get(`https://nest-portfolio-xy2i.onrender.com/api/blog`)
    .then((res) => {
      data.list = res.data;
    })
    .catch((error) => {
      const message = error?.response?.data?.message;
      if (typeof message == "object") {
        for (let i in message) {
          setTimeout(() => {
            ElNotification({
              title: "Error",
              message: message[i],
              type: "warning",
            });
          }, i * 200);
        }
      } else {
        ElNotification({
          title: "Error",
          message: message,
          type: "warning",
        });
      }
    });
});
</script>

<style lang="scss" scoped></style>
