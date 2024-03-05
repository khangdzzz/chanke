import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // using ssr: false will not face with this issue https://github.com/nuxt/framework/issues/8825
  ssr: false,
  app: {
    head: {
      title: 'Home - Chẵn lẻ bank',
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'chanlebank',
            name: 'Home',
            description: 'Your site description',
            url: 'https://chanlebank.page',
          }),
        },
      ],
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'keywords', name: 'keywords', content: 'Hệ thống chẵn lẻ bank MB Bank, Vietcombank (VCB), Techcombank (TCB), Vietinbank (VTB), BIDV tự động chỉ trong 3 giây' },
        { hid: 'description', name: 'description', content: 'Chẵn lẻ bank, uy tín hàng đầu !' },
        { hid: 'author', name: 'author', content: 'ChanLeBank' },
        { hid: 'og:title', property: 'og:title', content: 'Home' },
        { hid: 'og:description', property: 'og:description', content: 'Your site description' },
        { hid: 'og:url', property: 'og:url', content: 'https://chanlebank.page' },
        { hid: 'og:image', property: 'og:image', content: 'https://chanlebank.page/your-image.jpg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://chanlebank.page' },
        { rel: 'icon', type: 'image/x-icon', href: '/CLB.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap',
        },
      ],
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        config.plugins?.push(
          vuetify({
            styles: {
              configFile: './assets/scss/vuetify.settings.scss',
            },
          })
        )
      })
    },
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore',
        ],
      },
    ],
  ],
  imports: {
    dirs: ['stores'],
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/scss/app.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/utils/index.scss";',
        },
      },
    },
  },
  build: {
    // No transpile vuetify for now
    // transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.VITE_API_BASE_URL,
    },
  },
  typescript: {
    typeCheck: true,
  },
})
