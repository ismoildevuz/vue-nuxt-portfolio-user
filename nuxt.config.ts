// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Inter:wght@400;600;700&family=Roboto&family=Roboto+Serif:wght@400;500;600;700&family=Roboto+Slab:wght@400;500;700;900&display=swap",
        },
      ],
    },
  },
});
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Inter:wght@400;600;700&family=Roboto&family=Roboto+Serif:wght@400;500;600;700&family=Roboto+Slab:wght@400;500;700;900&display=swap" rel="stylesheet">
