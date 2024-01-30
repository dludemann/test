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
      <h1 class="font-bold text-[39px]">
        {{ block.title }}
      </h1>
      <p v-if="block.subtitle">{{ block.subtitle }}</p>
    </div>
    <div class="grid grid-cols-3" :style="{ gap: block.horizontal_gap + 'px' }">
      <div class="flex flex-col" :style="{ gap: block.vertical_gap + 'px' }">
        <div v-for="image in block.column_one">
          <nuxt-img :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <div class="flex flex-col" :style="{ gap: block.vertical_gap + 'px' }">
        <div v-for="image in block.column_two">
          <nuxt-img :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <div class="flex flex-col" :style="{ gap: block.vertical_gap + 'px' }">
        <div v-for="image in block.column_three">
          <nuxt-img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>
