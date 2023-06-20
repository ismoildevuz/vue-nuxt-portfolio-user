<template>
  <section v-if="data.list.length" id="projects">
    <Container>
      <div class="my-5 py-20">
        <h2
          class="text-center text-3xl font-black font-['Roboto_Slab'] border-b-2 border-black dark:border-white w-min mx-auto p-2"
        >
          Projects
        </h2>

        <div class="my-10 2xl:px-20 relative">
          <div
            class="hidden dark:block bg-cover-color -left-0 absolute w-full h-full bg-transparent"
          ></div>

          <div class="carousel overflow-hidden relative">
            <div
              class="carousel-inner flex duration-300 transition-transform ease-in-out"
            >
              <div
                v-for="(el, ind) in data.list"
                :key="ind"
                class="carousel-item flex-0 flex-shrink-0 w-full"
              >
                <ProjectCard :el="el" />
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-center gap-10 mix-blend-difference"
        >
          <button
            @click="prev"
            class="carousel-prev rounded-full hover:bg-white hover:bg-opacity-20"
          >
            <Icons name="arrow_left" />
          </button>

          <div class="flex items-center justify-center gap-2">
            <div
              v-for="(el, ind) in data.list"
              :key="ind"
              :class="`w-2 h-2 bg-white ${
                ind == data.current ? 'opacity-100' : 'opacity-70'
              } rounded-full`"
            ></div>
          </div>

          <button
            @click="next"
            class="carousel-next rounded-full hover:bg-white hover:bg-opacity-20"
          >
            <Icons name="arrow_right" />
          </button>
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

const prev = () => {
  if (data.current > 0) {
    data.current--;
    document.querySelector(`.carousel-inner`).style.transform = `translateX(-${
      data.current * 100
    }%)`;
  }
};

const next = () => {
  const totalItems = data.list.length;
  if (data.current < totalItems - 1) {
    data.current++;
    document.querySelector(`.carousel-inner`).style.transform = `translateX(-${
      data.current * 100
    }%)`;
  }
};

onMounted(() => {
  axios
    .get(`http://192.168.100.48:3001/api/project`)
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
@media (min-width: 1536px) {
  .bg-cover-color {
    background: linear-gradient(
      90deg,
      rgba(52, 98, 89, 0.65) 0%,
      rgba(52, 98, 89, 0.25) 20%,
      rgba(52, 98, 89, 0) 100%
    );
  }
}
</style>
