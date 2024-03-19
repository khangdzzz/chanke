import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // using ssr: false will not face with this issue https://github.com/nuxt/framework/issues/8825
  ssr: true,
  app: {
    head: {
      title: 'CHẴN LẺ BANK UY TÍN - CLMM',
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'chanlebank',
            name: 'Home',
            url: 'https://chanlebank.page',
          }),
        },
        {
          hid: 'gtag',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-KPELED6F1W',
          async: true
        },
        {
          hid: 'gtag-inline',
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KPELED6F1W');
        `,
          type: 'text/javascript'
        }
      ],
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'keywords', name: 'keywords', content: 'chẵn lẻ bank, chan le bank, bank chẵn lẻ, chẵn lẻ bank tự động, tài xỉu bank, chẵn lẻ bank uy tín, bank chẵn lẻ uy tín, chẵn lẻ banking, clmm, chan le momo, clmm uy tín, chanlebank' },
        { hid: 'description', name: 'description', content: 'CLMM - Chẵn lẻ Bank - Chẵn lẻ MoMo - Hệ thống mini game giải trí Chẵn lẻ bank thanh toán tự động 24/7 Uy tín, trả thưởng chỉ trong 10s.' },
        { hid: 'author', name: 'author', content: 'ChanLeBank' },
        { hid: 'og:title', property: 'og:title', content: 'Home' },
        { hid: 'og:description', property: 'og:description', content: 'CLMM - Chẵn lẻ Bank - Chẵn lẻ MoMo - Hệ thống mini game giải trí Chẵn lẻ bank thanh toán tự động 24/7 Uy tín, trả thưởng chỉ trong 10s.' },
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
