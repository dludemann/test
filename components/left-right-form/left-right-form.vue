<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section
    class="py-20 font-display"
    :data-cms-bind="dataBinding"
    :style="{
      'background-color': block.background_color,
      color: block.text_color,
    }"
  >
    <div
      class="container mx-auto flex justify-between items-center lg:items-start px-4 lg:px-32 flex-col lg:flex-row"
    >
      <article class="max-w-[560px] w-full text-white pr-4" id="contact">
        <h2 class="font-bold text-[2.2rem] text-[3.125rem]">
          {{ block.title }}
        </h2>
        <div class="bg-primary-500 w-[120px] h-[10px] my-4" />
        <p class="text-20px">
          {{ block.description }}
        </p>
        <div class="flex flex-col gap-4 my-6" v-for="list_item in block.list">
          <div class="flex items-center gap-4">
            <img :src="list_item.icon" class="w-[32px] h-[32px]" alt="" />
            <p class="text-[18.5px] mb-0">{{ list_item.text }}</p>
          </div>
        </div>
      </article>

      <div
        class="p-6 mt-8 bg-white text-black max-w-[375px] flex-shrink-0 w-full flex flex-col items-start gap-8 rounded-sm"
      >
        <contact-form
          :has-city-input="block.form.city_input"
          :city="block.form.city"
        />
      </div>
    </div>
  </section>
</template>
