<template>
  <section id="blog">
    <Container>
      <div class="bg-black my-5 py-20">
        <div class="flex justify-between items-center">
          <h1 class="font-['Roboto_Slab'] font-black text-8xl">
            <span>Blog</span>
          </h1>

          <div class="w-[220px]">
            <h2 class="text-xs text-right">
              <span
                >Want to save articles to read later? Add them to your reading
                list.
              </span>
            </h2>

            <div>
              <button
                class="w-full flex justify-center items-center my-5 py-1 bg-white rounded"
              >
                <span class="text-black font-semibold text-sm">Login</span>
              </button>
            </div>

            <div class="flex justify-end">
              <button class="border border-white rounded py-3 px-5 flex gap-5">
                <Icons name="bookmark" color="white" />

                <span class="">My reading list</span>
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-10 my-20">
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
    .get(`http://localhost:3001/api/blog`)
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
