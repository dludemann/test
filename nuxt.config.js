export default defineNuxtConfig({
  app: {
    head: {
      title: "The Match Artist",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          src: "//js.hs-scripts.com/41513910.js",
          defer: true,
          async: true,
          id: "hs-script-loader",
          type: "text/javascript",
          body: true,
        },
      ],
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap",
        },
      ],
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-swiper",
    "@nuxtjs/robots",
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    preload:true
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },
  generate: {
    routes: [
      "/tinder/are-tinder-dates-just-for-hookups",
      "/tinder/best-first-text-tinder",
      "/tinder/do-girls-get-more-matches-tinder",
      "/tinder/how-to-get-more-matches-tinder",
      "/tinder/how-to-use-tinder",
      "/tinder/resetting-tinder-swipes",
      "/tinder/unwritten-rules-of-tinder",
      "/tinder/what-photos-attract-girls-tinder",
      "/tinder/what-should-you-not-do-tinder",
      "/tinder/why-do-guys-not-message-first-on-tinder",
      "/dil-mil/best-photos-dil-mil",
      "/dil-mil/dil-mil-conversation-starters",
      "/dil-mil/dil-mil-for-guys",
      "/dil-mil/dil-mil-pick-up-lines",
      "/dil-mil/dil-mil-premium-features",
      "/dil-mil/dil-mil-reviews",
      "/dil-mil/dil-mil-vip-elite",
      "/dil-mil/ghosting-dil-mil",
      "/dil-mil/how-does-dil-mil-work",
      "/dil-mil/how-to-get-more-matches-dil-mil",
      "/dil-mil/is-dil-mil-just-for-asians",
      "/dil-mil/is-dil-mil-safe",
      "/dil-mil/male-female-ratio-dil-mil",
      "/bumble/bumble-conversation-starters",
      "/bumble/bumble-fake-profiles",
      "/bumble/bumble-for-guys",
      "/bumble/bumble-hookups-or-dating",
      "/bumble/bumble-premium",
      "/bumble/bumble-screenshots",
      "/bumble/bumble-search",
      "/bumble/ghosting-on-bumble",
      "/bumble/how-to-backtrack-on-bumble",
      "/bumble/how-to-chang-age-range-on-bumble",
      "/bumble/how-to-respond-on-bumble",
      "/bumble/moderated-on-bumble",
      "/bumble/no-matches-on-bumble",
      "/hinge/best-hinge-prompts",
      "/hinge/hinge-hometown-vs-location",
      "/hinge/hinge-profile-tips",
      "/hinge/hinge-standouts",
      "/hinge/how-does-hinge-choose-who-to-show-you",
      "/hinge/how-many-likes-on-hinge",
      "/hinge/how-to-get-unbanned-from-hinge",
      "/hinge/how-to-hack-hinge-algorithm",
      "/hinge/how-to-use-hinge",
      "/hinge/selfies-for-hinge",
      "/hinge/what-is-a-rose-on-hinge",
      "/hinge/what-is-male-female-ratio-hinge",
      "/hinge/why-am-i-not-getting-matches-hinge",
    ],
  },
  tailwindcss: {
    viewer: false,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style/main.scss", "@/assets/css/editor.css"],
  telemetry: false
});
