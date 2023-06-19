<template>
  <section id="home">
    <Container>
      <div class="bg-black mb-5 pt-24 p-5 relative">
        <img
          width="600"
          class="absolute -left-[22%]"
          src="/icons/bg-cover-1.svg"
          alt=""
        />

        <img
          width="150"
          class="absolute top-[55%] left-[5%]"
          src="/icons/bg-cover-2.svg"
          alt=""
        />

        <img
          width="500"
          class="absolute -right-[12%]"
          src="/icons/bg-cover-3.svg"
          alt=""
        />

        <div class="mx-auto text-center py-12">
          <h1 class="font-['SugarpunchDemo']">
            <span class="block text-2xl">HI, I'M</span>
            <span class="block text-7xl my-5">Ismoil </span>
            <span class="block text-7xl my-5">Abdurahmonov</span>
          </h1>

          <h2 class="text-2xl">
            <span>Ongoing fullstack web developer</span>
          </h2>

          <div
            class="w-min mx-auto my-5 border-2 px-8 p-2 rounded duration-200 text-black bg-white border-white hover:bg-black hover:text-white"
          >
            <a class="font-['Inter'] font-semibold" href="#contact">Contact</a>
          </div>

          <div
            class="w-min mx-auto flex items-center justify-center gap-5 py-5"
          >
            <a target="_blank" href="#" class="">
              <Icons name="email" />
            </a>

            <a target="_blank" href="#" class="">
              <Icons name="whatsapp" />
            </a>

            <a target="_blank" href="#" class="">
              <Icons name="instagram" />
            </a>
          </div>

          <div class="w-min mx-auto mt-14">
            <div class="mb-5">
              <Icons name="mouse" />
            </div>

            <div class="">
              <Icons name="arrow_down" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
