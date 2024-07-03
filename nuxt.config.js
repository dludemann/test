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
        {
          hid: "facebook-pixel",
          innerHTML: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2783252915148719');
          fbq('track', 'PageView');
        `,
          type: "text/javascript",
          charset: "utf-8",
          body: true,
        },
        {
          hid: "linkedin-partner",
          innerHTML: `
          _linkedin_partner_id = "6338732";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
          `,
          type: "text/javascript",
          charset: "utf-8",
          body: true,
        },
        {
          hid: "drip",
          innerHTML: `
          var _dcq = _dcq || [];
            var _dcs = _dcs || {};
            _dcs.account = '4489721';
            (function() {
              var dc = document.createElement('script');
              dc.type = 'text/javascript'; dc.async = true;
              dc.src = '//tag.getdrip.com/4489721.js';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(dc, s);
            })();
          `,
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
      noscript: [
        {
          hid: "linkedin-partner-noscript",
          innerHTML: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=6338732&fmt=gif" />`,
        },
        {
          hid: "facebook-pixel-noscript",
          innerHTML: `<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=2783252915148719&ev=PageView&noscript=1" />`,
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "facebook-pixel": ["innerHTML"],
        "facebook-pixel-noscript": ["innerHTML"],
      },
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
  ],
  nitro: {
    prerender: {
      failOnError: false,
    },
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
  tailwindcss: {
    viewer: false,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style/main.scss", "@/assets/css/editor.css"],
  telemetry: false,
});
