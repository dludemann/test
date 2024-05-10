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

  console.log(source);

  // Reset Query Params
  router.replace({ query: null });
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
    link: [{ hid: "canonical", rel: "canonical", href: canonical }],
  };
});
</script>
