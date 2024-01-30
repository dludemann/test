<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section
    class="w-full relative font-display"
    :data-cms-bind="dataBinding"
    :style="{ 'background-color': block.background_color }"
  >
    <nuxt-img
      v-if="block.background_image"
      :src="block.background_image"
      alt=""
      class="absolute z-0 bottom-0 left-0 right-0 w-full h-full object-cover"
      :style="{
        filter:
          'brightness(' +
          block.background_filters.brightness +
          ') blur(' +
          block.background_filters.blur +
          'px)',
      }"
    />
    <div class="container mx-auto px-8 relative z-10">
      <div
        class="text-center justify-center flex flex-col"
        :style="{
          'padding-top': block.top_spacing + 'px',
          'padding-bottom': block.bottom_spacing + 'px',
          color: block.text_color,
        }"
      >
        <h1
          v-if="block.title.text"
          class="text-[39px] font-bold"
          :style="{
            'padding-top': block.title.top_spacing + 'px',
            'padding-bottom': block.title.bottom_spacing + 'px',
            color: block.title.text_color,
          }"
        >
          {{ block.title.text }}
        </h1>
        <ul
          class="flex flex-col lg:flex-row mx-auto gap-8 justify-center flex-wrap"
        >
          <li
            class="list-none flex items-center gap-5 max-w-min"
            v-for="stat in block.stats"
          >
            <span
              class="text-white font-bold text-[2.5rem] lg:text-[4rem] lg:leading-[120%] whitespace-nowrap"
              >{{ stat.stat }}</span
            >
            <p class="mb-0 align-left text-[0.75rem] text-[1.375rem]">
              {{ stat.text }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
