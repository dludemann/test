<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section class="bg-black font-display" :data-cms-bind="dataBinding">
    <div
      class="container mx-auto bg-white rounded-sm py-20 px-10 flex justify-between gap-20 flex-col lg:flex-row"
    >
      <div class="max-w-[400px]">
        <h2 class="text-black font-bold text-[54px]">{{ block.title }}</h2>
        <div class="bg-primary-500 w-[120px] h-[10px] my-4"></div>
        <p class="text-[18.5px] text-[#475467]">
          {{ block.description }}
        </p>
      </div>
      <div class="w-full">
        <div v-for="(faq, index) in block.faqs">
          <p class="font-bold text-black text-[26px]">
            {{ faq.question }}
          </p>
          <p class="text-[#475467] text-[16px] leading-[24px]">
            {{ faq.answer }}
          </p>
          <div
            v-if="index !== block.faqs.length - 1"
            class="w-full h-px bg-black bg-opacity-20 my-10"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
