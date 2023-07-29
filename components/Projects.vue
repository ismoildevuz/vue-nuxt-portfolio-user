<template>
  <section v-if="data.list.length" id="projects">
    <Container>
      <div class="my-5 py-20">
        <h2
          class="text-center text-3xl font-black font-['Roboto_Slab'] border-b-2 border-black dark:border-white w-min mx-auto p-2"
        >
          Projects
        </h2>

        <div class="my-10 sm:px-20 relative">
          <div
            class="hidden dark:block bg-cover-color -left-0 absolute w-full h-full bg-transparent"
          ></div>

          <div class="carousel overflow-hidden relative">
            <div
              class="carousel-inner flex duration-300 transition-transform ease-in-out select-none cursor-grab"
              @mousedown="startDrag"
              @mousemove="handleDrag"
              @mouseup="endDrag"
              @mouseleave="endDrag"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
              @touchcancel="handleTouchEnd"
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
  timer: null,
  drag: {
    startX: 0,
    currentX: 0,
    isDragging: false,
  },
});

let touchStartX = 0;
let touchMoveX = 0;

const handleTouchStart = (event) => {
  touchStartX = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  touchMoveX = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  const minSwipeDistance = 20;
  const swipeDistance = touchStartX - touchMoveX;

  if (Math.abs(swipeDistance) >= minSwipeDistance) {
    if (swipeDistance > 0) {
      next();
    } else {
      prev();
    }
  }
};

const prev = () => {
  if (data.current > 0) {
    data.current--;
    moveCarousel();
    stopAutoSwipe();
    startAutoSwipe();
  }
};

const next = () => {
  const totalItems = data.list.length;
  if (data.current < totalItems - 1) {
    data.current++;
    moveCarousel();
    stopAutoSwipe();
    startAutoSwipe();
  }
};

const moveCarousel = () => {
  const carouselInner = document.querySelector(".carousel-inner");
  if (carouselInner) {
    carouselInner.style.transform = `translateX(-${data.current * 100}%)`;
  }
};

const startAutoSwipe = () => {
  data.timer = setInterval(() => {
    const totalItems = data.list.length;
    if (data.current < totalItems - 1) {
      data.current++;
    } else {
      data.current = 0;
    }
    moveCarousel();
  }, 5000);
};

const stopAutoSwipe = () => {
  clearInterval(data.timer);
};

const startDrag = (event) => {
  data.drag.startX = event.clientX;
  data.drag.currentX = data.drag.startX;
  data.drag.isDragging = true;
  stopAutoSwipe();
};

const handleDrag = (event) => {
  if (data.drag.isDragging) {
    data.drag.currentX = event.clientX;
  }
};

const endDrag = () => {
  if (data.drag.isDragging) {
    data.drag.isDragging = false;
    const dragDistance = data.drag.currentX - data.drag.startX;
    const threshold = window.innerWidth / 25; // Adjust the threshold as needed
    const totalItems = data.list.length;

    if (dragDistance > threshold && data.current > 0) {
      data.current--;
    } else if (dragDistance < -threshold && data.current < totalItems - 1) {
      data.current++;
    }

    moveCarousel();
    startAutoSwipe();
  }
};

onUnmounted(() => {
  stopAutoSwipe();
});

onMounted(() => {
  axios
    .get(`https://nest-portfolio-voa5.onrender.com/api/project`)
    .then((res) => {
      data.list = res.data;
      startAutoSwipe();
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
@media (min-width: 640px) {
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
