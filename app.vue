<template>
  <!-- <Nav /> -->
  <!-- <NuxtLayout> -->
  <NuxtPage />
  <!-- </NuxtLayout> -->
  <!-- <Footer></Footer> -->
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

if (route.query.source) {
  console.log("redirecting", route);
  const source = route.query.source;

  // Set cookie
  const d = new Date();
  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  const sourceCookie = useCookie("source-cookie");
  sourceCookie.value = "source=" + source + ";" + expires + ";path=/";

  console.log("route", route);
  // Reset Query Params
  router.push({ path: route.path });
}
onMounted(() => {
  let plausible = document.createElement("script");
  plausible.setAttribute("src", "https://plausible.io/js/script.js");
  plausible.setAttribute("defer", "defer");
  plausible.setAttribute("data-domain", "thematchartist.com");
  document.head.appendChild(plausible);
  let exec = document.createElement("script");
  exec.innerHTML =
    "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }";
  document.head.appendChild(exec);
});

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
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap",
        crossorigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Montserrat:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap",
      },
    ],
  };
});
</script>
