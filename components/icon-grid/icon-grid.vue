<template>
  <section
    :data-cms-bind="dataBinding"
    class="container mx-auto max-w-[1040px] font-display"
  >
    <!-- Text section -->
    <div class="py-[50px] text-center justify-center flex flex-col">
      <div class="flex gap-2 items-center mx-auto">
        <div class="h-px w-[10px] bg-[#171717]" />
        <p
          class="italic"
          :style="{
            color: block.pre_title.color,
            'font-size': block.pre_title.font_size + 'rem',
            'margin-bottom': block.pre_title.margin_bottom + 'px',
            'margin-top': block.pre_title.margin_top + 'px',
          }"
        >
          {{ block.pre_title.text }}
        </p>
        <div class="h-px w-[10px] bg-[#171717]" />
      </div>
      <h1
        class="mb-[40px] font-bold"
        :style="{
          color: block.title.color,
          'font-size': block.title.font_size + 'rem',
          'margin-bottom': block.title.margin_bottom + 'px',
          'margin-top': block.title.margin_top + 'px',
        }"
      >
        {{ block.title.text }}
      </h1>
      <p
        :style="{
          color: block.post_title.color,
          'font-size': block.post_title.font_size + 'rem',
          'margin-bottom': block.post_title.margin_bottom + 'px',
          'margin-top': block.post_title.margin_top + 'px',
        }"
      >
        {{ block.post_title.text }}
      </p>
    </div>

    <!-- Icon grid -->
    <div
      class="flex flex-col lg:justify-evenly lg:flex-row gap-20 text-center lg:text-left px-6"
    >
      <div
        class="lg:w-[300px] flex flex-col items-center"
        v-for="icon_card in block.icon_grid"
      >
        <img
          :src="icon_card.icon.src"
          :style="{
            height: icon_card.icon.height + 'px',
            width: icon_card.icon.width + 'px',
          }"
          class="mx-auto"
        />
        <p
          class="text-center font-bold"
          :style="{
            color: icon_card.title.color,
            'font-size': icon_card.title.font_size + 'rem',
            'margin-bottom': icon_card.title.margin_bottom + 'px',
            'margin-top': icon_card.title.margin_top + 'px',
          }"
        >
          {{ icon_card.title.text }}
        </p>
        <p
          class="leading-[30px] tracking-[0.252px]"
          :style="{
            color: icon_card.description.color,
            'font-size': icon_card.description.font_size + 'rem',
            'margin-bottom': icon_card.description.margin_bottom + 'px',
            'margin-top': icon_card.description.margin_top + 'px',
          }"
        >
          {{ icon_card.description.text }}
        </p>
      </div>
    </div>

    <!-- Grid footer -->
    <div class="py-[50px] text-center">
      <p class="text-[39px] mb-[40px] font-bold">
        {{ block.grid_footer.text }}
      </p>
      <a :href="block.grid_footer.cta.path">
        <button class="border-b-2 text-[18px] py-1 border-black">
          {{ block.grid_footer.cta.text }}
        </button>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>
