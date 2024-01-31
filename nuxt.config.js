export default defineNuxtConfig({
  app: {
    head: {
      title: 'The Match Artist',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap',
        },
      ],
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-swiper',
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  content: {
    documentDriven: true,
  },
  generate: {
    routes: [
      '/tinder/are-tinder-dates-just-for-hookups',
      '/tinder/best-first-text-tinder',
      '/tinder/do-girls-get-more-matches-tinder',
      '/tinder/how-to-get-more-matches-tinder',
      '/tinder/how-to-use-tinder',
      '/tinder/resetting-tinder-swipes',
      '/tinder/unwritten-rules-of-tinder',
      '/tinder/what-photos-attract-girls-tinder',
      '/tinder/what-should-you-not-do-tinder',
      '/tinder/why-do-guys-not-message-first-on-tinder',
    ],
  },
  tailwindcss: {
    viewer: false,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/style/main.scss', '@/assets/css/editor.css'],
});
