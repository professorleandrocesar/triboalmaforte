export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  telemetry: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tribo Alma Forte',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Espiritismo para as gerações X, Y e Z' },
      { hid: 'keywords', name: 'description', content: 'Espiritismo, Espítita, Jesus' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ffe0cc' },
      { name: 'theme-color', content: '#ffe0cc' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo.svg' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/logo.svg' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/logo.png' },
      { rel: 'icon', type:'image/png', size: '32x32', href: '/img/logo.png' },
      { rel: 'icon', type:'image/png', size: '16x16', href: '/img/logo.png' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/img/logo.png' },
      { rel: 'manifest', href: '/img/logo.png' },
      { rel: 'mask-icon', href: '/img/logo.png', color: '#ffe0cc' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Philosopher&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/da2962ce7f.js'},
      { src: '/index.js'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/normalize.css',
    '@/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/preview.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
