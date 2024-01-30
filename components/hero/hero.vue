<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section :data-cms-bind="dataBinding" class="font-display">
    <div class="py-[120px] relative overflow-hidden">
      <nuxt-img
        :src="block.background_image"
        alt=""
        class="absolute bottom-0 left-0 right-0 w-full h-full object-cover"
        :style="{
          filter:
            'brightness(' +
            block.background_filters.brightness +
            ') blur(' +
            block.background_filters.blur +
            'px)',
          backgroundColor: block.background_color,
        }"
      />
      <p
        class="text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white"
        v-if="block.pre_title"
        :style="{
          'padding-top': block.pre_title.top_spacing + 'px',
          'padding-bottom': block.pre_title.bottom_spacing + 'px',
          color: block.pre_title.text_color,
        }"
      >
        {{ block.pre_title.text }}
      </p>
      <h1
        v-if="block.title.heading_style === 'h1'"
        class="z-10 relative text-[50px] lg:text-[96px] lg:leading-[96px] text-center text-white max-w-[50rem] mx-auto"
        :style="{
          'text-wrap': 'balance',
          'padding-top': block.title.top_spacing + 'px',
          'padding-bottom': block.title.bottom_spacing + 'px',
          color: block.title.text_color,
        }"
      >
        {{ block.title.text }}
      </h1>
      <h2
        v-if="block.title.heading_style === 'h2'"
        class="z-10 relative text-[50px] lg:text-[96px] lg:leading-[96px] text-center text-white max-w-[50rem] mx-auto"
        :style="{
          'text-wrap': 'balance',
          'padding-top': block.title.top_spacing + 'px',
          'padding-bottom': block.title.bottom_spacing + 'px',
          color: block.title.text_color,
        }"
      >
        {{ block.title.text }}
      </h2>
      <p
        class="text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white"
        v-if="block.post_title"
        :style="{
          'padding-top': block.post_title.top_spacing + 'px',
          'padding-bottom': block.post_title.bottom_spacing + 'px',
          color: block.post_title.text_color,
        }"
      >
        {{ block.post_title.text }}
      </p>
      <div
        class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0"
      />
    </div>
  </section>
</template>
