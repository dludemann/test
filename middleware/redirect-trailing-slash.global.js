export default defineNuxtRouteMiddleware((to, from) => {
  console.log("trigger middleware");

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
