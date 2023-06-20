<template>
  <section v-if="data.loaded && data.item" id="blog">
    <Container>
      <div class="bg-black my-5 py-20">
        <h1
          class="font-['Roboto_Slab'] text-center text-3xl border-b-2 w-min mx-auto py-2 font-black"
        >
          <span>Blog</span>
        </h1>

        <nuxt-link to="/blog" class="mt-10 flex items-center gap-3">
          <Icons name="to_back" />
          <span>Back to Blog page</span>
        </nuxt-link>

        <div class="2xl:flex 2xl:justify-between 2xl:gap-10 mt-5">
          <div class="flex-grow border border-white rounded-xl overflow-hidden">
            <div class="p-10 border-b border-white bg-cover-color">
              <div class="flex gap-3">
                <h4 class="font-['Roboto'] flex items-center gap-2">
                  <Icons name="calendar" color="white" />

                  <span>
                    {{ moment(data.item.createdAt).format("DD/MM/YYYY") }}
                  </span>
                </h4>

                <Icons name="stick" />

                <h4 class="font-['Roboto'] flex items-center gap-2">
                  <Icons name="views" color="white" />

                  <span>{{ data.item.views }}</span>
                </h4>
              </div>

              <h2
                class="font-['Roboto_Slab'] font-black text-3xl 2xl:text-6xl leading-snug 2xl:w-[75%] mt-5"
              >
                <span>{{ data.item.title }}</span>
              </h2>
            </div>

            <div class="p-10">
              <h5>
                <span
                  v-html="data.item.body"
                  class="font-['Roboto_Serif']"
                ></span>
              </h5>
            </div>
          </div>

          <div class="2xl:w-[300px]">
            <RightSide :data="data.list" />
          </div>
        </div>
      </div>
    </Container>
  </section>

  <div v-else-if="data.loaded">
    <Error name="Blog" path="blog" />
  </div>
</template>

<script setup>
import axios from "axios";
import moment from "moment";

const { id } = useRoute().params;

const data = reactive({
  list: [],
  item: null,
  loaded: false,
});

onMounted(() => {
  axios
    .get(`http://192.168.100.48:3001/api/blog/${id}`)
    .then((res) => {
      data.item = res.data;
      data.loaded = true;
    })
    .catch((error) => {
      const message = error?.response?.data?.message;
      data.loaded = true;

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

  axios
    .get(`http://192.168.100.48:3001/api/blog`)
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

<style lang="scss" scoped>
.bg-cover-color {
  background: linear-gradient(
    180deg,
    #000000 -8.29%,
    rgba(15, 5, 23, 0.65) 75.18%,
    rgba(74, 25, 112, 0.55) 100%
  );
}

@media (min-width: 1536px) {
  .bg-cover-color {
    background: linear-gradient(
      90deg,
      #000000 0%,
      rgba(15, 5, 23, 0.65) 77.08%,
      rgba(74, 25, 112, 0.25) 100%
    );
  }
}
</style>
