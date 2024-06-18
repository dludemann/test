<style scoped>
    .img-grid img {
      max-width: 100%;
      display: block;
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
      <h2 class="font-bold text-[1.25rem] text-center">{{ block.title }}</h2>
      <p v-if="block.subtitle">{{ block.subtitle }}</p>
    </div>
    <div class="text-center my-12" v-if="block.heading_style === 'reviews'">
      <h2 class="font-bold text-[39px] text-center">
        {{ block.title }}
      </h2>
      <p v-if="block.subtitle">{{ block.subtitle }}</p>
    </div>
    <div class="container img-grid relative columns-1 md:columns-2 lg:columns-3 mx-auto"
        :style="{ columnGap: block.vertical_gap + 'px' }">
      <figure v-for="(image, index) in block.images"
            :style="{ marginBottom: block.horizontal_gap + 'px' }">
        <nuxt-img quality="80" 
                  :src="image.src" 
                  :alt="image.alt" 
                  loading="lazy"
                  placeholder
                  :data-cms-bind="`${image}`"
                   />
      </figure>
    </div>
</section>
</template>

<script>
export default {
  props: ["block", "dataBinding"],
};

</script>
