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
    <div class="container mx-auto max-w-[1040px] px-8 relative z-10">
      <div class="text-center justify-center flex flex-col">
        <div
          class="flex gap-2 items-center mx-auto"
          v-if="block.pre_title.text"
          :style="{
            'padding-top': block.pre_title.top_spacing + 'px',
            'padding-bottom': block.pre_title.bottom_spacing + 'px',
            color: block.pre_title.text_color,
          }"
        >
          <div class="h-px w-[10px] bg-[#171717]" />
          <p class="text-[18px] italic">{{ block.pre_title.text }}</p>
          <div class="h-px w-[10px] bg-[#171717]" />
        </div>
        <h1
          class="text-[39px] font-bold"
          :style="{
            'padding-top': block.title.top_spacing + 'px',
            'padding-bottom': block.title.bottom_spacing + 'px',
            color: block.title.text_color,
          }"
        >
          {{ block.title.text }}
        </h1>
        <p
          class="text-[#CE3E3E] text-[18px] tracking-wider leading-8 max-w-[800px] mx-auto"
          v-if="block.description.text"
          :style="{
            'padding-top': block.description.top_spacing + 'px',
            'padding-bottom': block.description.bottom_spacing + 'px',
            color: block.description.text_color,
          }"
        >
          {{ block.description.text }}
        </p>
      </div>

      <div
        class="pb-[50px] text-center flex gap-4 justify-center items-center"
        v-if="block.cta.buttons[0].button_text"
        :style="{
          'padding-top': block.cta.top_spacing + 'px',
          'padding-bottom': block.cta.bottom_spacing + 'px',
          color: block.cta.text_color,
        }"
      >
        <nuxt-link
          rel="canonical"
          :to="button.button_link"
          v-for="(button, index) in block.cta.buttons"
          class="flex"
        >
          <p class="font-bold self-center mr-4" v-if="index > 0">/</p>
          <button
            class="text-[18px] py-1 underline underline-offset-8 decoration-2"
          >
            {{ button.button_text }}
          </button>
        </nuxt-link>
      </div>
      <div
        class="text-[18px] z-10 relative text-center tracking-[1px] leading-[44px] text-white"
        v-if="block.post_text.text"
        :style="{
          'padding-top': block.post_text.top_spacing + 'px',
          'padding-bottom': block.post_text.bottom_spacing + 'px',
          color: block.post_text.text_color,
        }"
      >
        <p class="text-[18px]">{{ block.post_text.text }}</p>
      </div>
    </div>
  </section>
</template>
