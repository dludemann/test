<style>
    .img-grid img {
      max-width: 100%;
      display: block;
    }

    .img-grid.container {
      column-count: 3;
      column-gap: 10px;
    }

    .img-grid figure {
      margin: 0;
      display: grid;
      grid-template-rows: 1fr auto;
      margin-bottom: 10px;
      break-inside: avoid;
    }

    .img-grid figure > img {
      grid-row: 1 / -1;
      grid-column: 1;
    }
</style>

<template>
  <section
    class="w-100 mx-auto font-display"
    :data-cms-bind="dataBinding"
    :style="{ maxWidth: block.max_width + 'px' }">
    <div class="mx-2 mb-8 mt-6" v-if="block.heading_style === 'portfolio'">
      <h2 class="font-bold text-[1.25rem]">{{ block.title }}</h2>
      <p v-if="block.subtitle">{{ block.subtitle }}</p>
    </div>
    <div class="text-center my-12" v-if="block.heading_style === 'reviews'">
      <h2 class="font-bold text-[39px]">
        {{ block.title }}
      </h2>
      <p v-if="block.subtitle">{{ block.subtitle }}</p>
    </div>
    <div class="loading w-100 mx-auto text-center py-8">Loading...</div>
    <div class="container img-grid hidden relative">
      <figure v-for="image in block.images">
        <nuxt-img :src="image.src" :alt="image.alt" />
      </figure>
    </div>
</section>
</template>

<script>
export default {
  props: ["block", "dataBinding"],
  mounted() {
  document.onreadystatechange = () => { 
    if (document.readyState == "complete") { 
        document.querySelector(".img-grid").classList.remove("hidden");
        document.querySelector(".loading").remove();
    } 
  }
}
};

</script>
