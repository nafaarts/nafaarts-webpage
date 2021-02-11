<script>
  import router from "page";
  import Home from "./pages/Home.svelte";
  import Class from "./pages/Class.svelte";

  let page, params;

  router("/", () => (page = Home));
  router("/class", () => (page = Class));
  router("/*", () => (page = Home));

  // router(
  //   "/about",
  //   (ctx, next) => {
  //     params = ctx.params;
  //     next();
  //     console.log("about");
  //   },
  //   () => (page = Home)
  // );

  router.start();
</script>

<svelte:component this={page} {params} />

<!-- <Home {name} /> -->
