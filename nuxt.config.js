export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja',
    },
    title: 'Intel World Open Tokyo 特集｜ロケットリーグ 日本コミュニティ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '大会情報、オフラインイベントなどや、アップデート、初心者向けTipsなどなどロケットリーグについての様々な情報を発信していくコミュニティWebサイトです。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Intel World Open Tokyo 特集｜ロケットリーグ 日本コミュニティ',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://iwo-tokyo.rl-japan.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Intel World Open Tokyo 特集｜ロケットリーグ 日本コミュニティ',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '大会情報、オフラインイベントなどや、アップデート、初心者向けTipsなどなどロケットリーグについての様々な情報を発信していくコミュニティWebサイトです。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://iwo-tokyo.rl-japan.com/images/ogp.png',
      },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@RL_Japan' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://iwo-tokyo.rl-japan.com/favicon.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-lazy-load',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
