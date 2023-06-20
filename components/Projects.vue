<template>
  <section v-if="data.list.length" id="projects">
    <Container>
      <div class="bg-black my-5 py-20">
        <h2
          class="text-center text-white text-3xl font-black font-['Roboto_Slab'] border-b-2 w-min mx-auto p-2"
        >
          Projects
        </h2>

        <div class="project-item my-10 px-20">
          <div class="carousel overflow-hidden">
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

        <div class="flex items-center justify-center gap-10">
          <button
            @click="prev"
            class="carousel-prev rounded-full hover:bg-slate-800"
          >
            <Icons name="arrow_left" />
          </button>

          <div class="flex items-center justify-center gap-2">
            <div
              v-for="(el, ind) in data.list"
              :key="ind"
              :class="`w-2 h-2 bg-white opacity-${
                ind == data.current ? '100' : '70'
              } rounded-full`"
            ></div>
          </div>

          <button
            @click="next"
            class="carousel-next rounded-full hover:bg-slate-800"
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
    .get(`http://localhost:3001/api/project`)
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
.project-item {
  background: linear-gradient(
    90deg,
    rgba(52, 98, 89, 0.65) 0%,
    rgba(52, 98, 89, 0.25) 20%,
    rgba(52, 98, 89, 0) 100%
  );
}
</style>
