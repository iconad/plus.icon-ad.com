export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'icon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style.css",
    "~/assets/css/fonts.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-tel-input"},
    { src: "~/plugins/vimeo-player", mode: "client" },
    { src: "~/plugins/vue-carousel", mode: "client" },
    { src: "~/plugins/vue-siema", mode: "client" },
    { src: "~/plugins/vue-scroll", mode: "client" },
    { src: "~/plugins/vue-progressive-image", mode: "client" },
    { src: "~/plugins/vue-gsap", mode: "client" },
    { src: "~/plugins/vue-smooth-scrollbar", mode: "client" },
    { src: "~/plugins/vue-masonry", mode: "client" }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    'nuxt-ssr-cache',
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    middleware: ["visit"],
  },

  axios: {
    baseURL: 'https://drupal.icon-ad.com/api', // Used as fallback if no runtime config is provided
  },

  server: {
    port: 4700 // default: 3000
  },

  loading: {
    color: '#A97DEC',
    height: '3px'
  },

  gtm: {
    id: 'GTM-MV67C85', // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },


}
