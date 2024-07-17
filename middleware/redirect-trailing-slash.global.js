import { navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("trigger middleware");

  // Handle Referral Stuff
  if (to.query.source) {
    console.log("referall");

    const d = new Date();
    const source = to.query.source;
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    const sourceCookie = useCookie("source-cookie");
    sourceCookie.value = "source=" + source + ";" + expires + ";path=/";
    return navigateTo(to.path);
  }

  if (to.path !== "/" && to.path.endsWith("/")) {
    console.log("trigger if");
    const { path, query, hash } = to;
    const nextPath = path.replace(/\/+$/, "") || "/";
    const nextRoute = { path: nextPath, query, hash };
    return navigateTo(nextRoute, { redirectCode: 301 });
    return;
  }

  //   if (to.path === "/") {
  //     console.log("got here");
  //     const { query } = to;

  //     // return navigateTo({ path: "", query });
  //   }

  return;
});
