<script>
export default {
  props: ["block", "dataBinding"],
};
</script>

<template>
  <section
    class="py-[96px] font-body"
    :data-cms-bind="dataBinding"
    :style="{
      'background-color': block.background_color,
      color: block.text_color,
    }"
  >
    <div
      class="max-w-[1200px] mx-auto rounded-[8px] py-10 px-6 lg:px-[64px] flex flex-col lg:flex-row justify-between gap-8 md:gap-24"
      :style="{
        'background-color': block.quote.background_color,
        color: block.quote.text_color,
      }"
    >
      <div
        class="flex flex-col gap-8 md:gap-0 md:flex-row md:w-[500px] mx-auto flex-shrink-0 items-end space-x-10"
      >
        <!-- Before -->
        <div class="md:max-w-[190px] w-full relative">
          <tma-image
            class="h-[400px] md:h-[270px] w-full object-cover self-center rounded-sm"
            :src="block.image.src"
            :alt="block.image.alt"
          />
          <div
            class="bg-black text-white text-center py-2 mt-2 font-bold absolute px-2 text-sm top-0 md:top-auto left-0 md:bottom-[10px] md:-left-4"
          >
            BEFORE
          </div>
        </div>
        <!-- After -->
        <div class="md:max-w-[300px] w-full relative">
          <tma-image
            class="h-[400px] md:h-[400px] w-full object-cover self-center rounded-sm"
            :src="block.image2.src"
            :alt="block.image2.alt"
          />
          <div
            class="bg-black text-white text-center py-2 mt-2 font-bold absolute px-2 text-sm top-0 md:top-auto left-0 md:bottom-[10px] md:-left-4"
          >
            AFTER
          </div>
        </div>
      </div>

      <div>
        <p class="text-primary-500 font-bold mb-0">
          DATING PHOTOGRAPHY IN {{ block.location.city.toUpperCase() }}
          {{
            block.location?.state && `,${block.location?.state?.toUpperCase()}`
          }}
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
            <tma-image
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
