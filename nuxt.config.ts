export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    'nuxt-og-image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  pinia: {
    storesDirs: ['./stores'],
  },
  srcDir: 'app/',
  css: [
    '~/assets/css/tailwind.css',
  ],
  app: {
    head: {
      title: 'Teknikoz University',
      titleTemplate: '%s - Teknikoz University',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ],
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:3000",
      baseUrlApi:
        process.env.NUXT_PUBLIC_BASE_URL_API || "http://localhost:8001/api",
    },
  },
});