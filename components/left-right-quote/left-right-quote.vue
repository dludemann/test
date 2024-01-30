<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section
    class="py-[96px] font-display"
    :data-cms-bind="dataBinding"
    :style="{
      'background-color': block.background_color,
      color: block.text_color,
    }"
  >
    <div
      class="max-w-[1200px] mx-auto rounded-[8px] py-10 px-6 lg:px-[64px] flex flex-col lg:flex-row justify-between gap-8"
      :style="{
        'background-color': block.quote.background_color,
        color: block.quote.text_color,
      }"
    >
      <nuxt-img
        class="h-full w-full lg:w-1/2 object-contain self-center rounded-sm"
        :src="block.image.src"
        :alt="block.image.alt"
      />
      <div>
        <p class="text-primary-500 font-bold mb-0">
          DATING PHOTOGRAPHY IN {{ block.location.city.toUpperCase() }},
          {{ block.location.state.toUpperCase() }}
        </p>
        <h2 class="text-[3rem] tracking-[-1.32px] leading-[3.5rem] font-bold">
          {{ block.title }}
        </h2>
        <div class="bg-primary-500 w-[120px] h-[10px] my-8"></div>
        <p class="text-[1.5rem]">"{{ block.quote.text }}"</p>
        <p class="font-bold mt-4">- {{ block.quote.person }}.</p>
      </div>
    </div>
    <div
      class="flex justify-between items-center container mx-auto max-w-[1200px] mt-20 flex-col lg:flex-row px-4"
    >
      <div
        class="max-w-[475px] mb-6 lg:mb-0 flex flex-col items-center lg:items-start px-4"
      >
        <p
          class="text-white font-bold text-[32px] leading-[38.4px] font-display text-center lg:text-left"
        >
          {{ block.cta.title }}
        </p>
        <a :href="block.button.path">
          <button
            class="flex bg-primary-500 w-fit py-[12px] px-[24px] text-white mt-5"
          >
            {{ block.button.text }}
            <img
              src="/icons/arrow-right.svg"
              class="w-[24px] h-[24px] ml-2"
              alt=""
            />
          </button>
        </a>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <div
          class="text-white flex items-center gap-2 max-w-[30% ]"
          v-for="stat in block.cta.stats"
        >
          <p class="font-bold text-[38px] font-display">{{ stat.number }}+</p>
          <p class="text-[12px]">
            {{ stat.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
