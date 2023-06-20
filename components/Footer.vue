<template>
  <footer class="bg-black relative">
    <Container>
      <div class="py-16 2xl:py-5 2xl:flex 2xl:items-center 2xl:justify-between">
        <div class="font-['Roboto_Slab'] text-sm">
          <h6 class="text-center"><span>© 2023 Ismoil Abdurahmonov</span></h6>
        </div>

        <div class="2xl:flex 2xl:items-center gap-10">
          <div
            class="w-min mx-auto flex items-center justify-center gap-5 py-10 2xl:py-5"
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

          <div
            class="w-min mx-auto 2xl:my-5 border-2 px-8 p-2 rounded duration-200 text-black bg-white border-white hover:bg-black hover:text-white"
          >
            <a class="font-['Inter'] font-semibold" href="/#contact">Contact</a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
