// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
    "@pinia/nuxt",
    "nuxt-og-image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
  pinia: {
    storesDirs: ["./stores"],
  },
  srcDir: "app/",
  css: ["~/assets/css/tailwind.css"],

  app: {
    head: {
      title: "Teknikoz University",
      titleTemplate: "%s",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css2?family=Karla:wght@300;400;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl:
        process.env.NUXT_PUBLIC_BASE_URL ||
        "https://e-learning.teknikoz.com",
      baseUrlApi:
        process.env.NUXT_PUBLIC_BASE_URL_API ||
        "https://teknikoz-univ-backend.onrender.com",
    },
  },
});
