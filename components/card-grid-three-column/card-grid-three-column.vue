<style scoped>
    .img-grid img {
      max-width: 100%;
      display: block;
    }

    .img-grid.container {
      column-count: 3;
    }

    .img-grid figure {
      margin: 0;
      display: grid;
      grid-template-rows: 1fr auto;
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
    <div class="container img-grid relative"
        :style="{ columnGap: block.vertical_gap + 'px' }">
      <figure v-for="image in block.images"
            :style="{ marginBottom: block.horizontal_gap + 'px' }">
        <nuxt-img quality="90" :src="image.src" :alt="image.alt" loading="lazy" />
      </figure>
    </div>
</section>
</template>

<script>
export default {
  props: ["block", "dataBinding"],
};

</script>
