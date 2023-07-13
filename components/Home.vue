<template>
  <section id="home">
    <Container>
      <div class="mb-5 pt-24 p-5 relative">
        <div class="mx-auto text-center py-12">
          <h1 class="font-['SugarpunchDemo']">
            <span class="block text-xl sm:text-2xl">HI, I'M</span>
            <div class="my-5 sm:my-0">
              <span class="block text-4xl sm:text-7xl my-2 sm:my-5"
                >Ismoil
              </span>
              <span class="block text-4xl sm:text-7xl my-2 sm:my-5"
                >Abdurahmonov</span
              >
            </div>
          </h1>

          <h2 class="text-base sm:text-2xl mb-16 sm:mb-0">
            <span>Ongoing fullstack web developer</span>
          </h2>

          <div class="mix-blend-difference w-min mx-auto my-7">
            <a
              class="font-['Inter'] font-semibold border-2 px-8 p-2 rounded duration-200 text-black bg-white border-white hover:bg-black hover:text-white"
              href="#contact"
              >Contact</a
            >
          </div>

          <SocialMedia />

          <div
            class="w-min mx-auto mt-14 hidden sm:block mix-blend-difference"
          >
            <div class="mb-5">
              <Icons name="mouse" />
            </div>

            <div class="">
              <Icons name="arrow_down" />
            </div>
          </div>
        </div>

        <img
          width="600"
          class="relative sm:absolute scale-150 mt-32 sm:mt-0 sm:scale-100 top-10 -left-40 sm:top-[12%] sm:-left-[22%] mix-blend-difference"
          src="/icons/bg-cover-1.svg"
          alt=""
        />

        <img
          width="150"
          class="hidden sm:block sm:absolute top-[55%] left-[5%]"
          src="/icons/bg-cover-2.svg"
          alt=""
        />

        <img
          width="500"
          class="relative sm:absolute scale-150 sm:scale-100 -right-48 sm:top-[12%] sm:-right-[12%] mix-blend-difference"
          src="/icons/bg-cover-3.svg"
          alt=""
        />
      </div>
    </Container>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
