<template>
  <Nav></Nav>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer></Footer>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

// Check for Query Params source
if (route.query.source) {
  const source = route.query.source;

  // Set cookie
  const d = new Date();
  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  const sourceCookie = useCookie("source-cookie");
  sourceCookie.value = "source=" + source + ";" + expires + ";path=/";

  //console.log(source);

  // Reset Query Params
  router.replace({ query: null });
}

useHead(() => {
  const canonical = `${config.public.baseUrl}${route.path}`;
  return {
    link: [
      { hid: "canonical", rel: "canonical", href: canonical },
      {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
          crossorigin: true,
      },
      {
        rel: 'preload',
        as: "style",
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap',
        crossorigin: ''
      },
      {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap",
      }
    ],
  };
});
</script>
