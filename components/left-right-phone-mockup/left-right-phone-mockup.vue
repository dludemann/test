<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section
    class="lg:pt-[90px] lg:pb-[270px] overflow-hidden font-display"
    :style="{
      'background-color': block.background_color,
      color: block.text_color,
    }"
    :data-cms-bind="dataBinding"
  >
    <div
      class="container mx-auto relative flex flex-col gap-8 lg:flex-row justify-end items-center lg:items-start"
    >
      <div class="h-[350px] lg:h-auto w-full mb-8 hidden lg:block">
        <div
          class="relative lg:absolute w-[200px] lg:w-auto top-[10px] lg:top-0 h-full lg:h-auto overflow-hidden lg:right-[60%] lg:translate-x-0"
        >
          <UtilityPhoneMockup :image="block.image" />
        </div>
      </div>
      <article class="max-w-[560px] w-full p-4 text-center lg:text-left">
        <h2
          class="font-bold text-[2rem] leading-[3rem] lg:text-[3.125rem]"
          style="text-wrap: balance"
        >
          {{ block.title }}
        </h2>
        <div class="bg-primary-500 w-[120px] h-[10px] my-8 mx-auto lg:mx-0" />
        <p class="text-20px">
          {{ block.description }}
        </p>

        <div class="flex flex-col gap-4 my-12">
          <div
            class="flex items-center gap-4 justify-center lg:justify-start"
            v-for="list_item in block.list"
          >
            <img class="w-[24px] h-[24px]" :src="list_item.icon" alt="" />
            <p class="font-bold text-[22px] font-display">
              {{ list_item.text }}
            </p>
          </div>
        </div>

        <a
          class="flex justify-center lg:justify-start"
          :href="block.button.path"
        >
          <button
            class="flex bg-primary-500 w-fit py-[12px] px-[24px] text-white"
          >
            {{ block.button.text }}
            <img
              src="/icons/arrow-right.svg"
              class="w-[24px] h-[24px] ml-2"
              alt=""
            />
          </button>
        </a>
      </article>
    </div>
  </section>
</template>
