<script>
export default {
  props: ["block", "dataBinding"],
};
</script>

<template>
  <section
    class="bg-black py-[180px] overflow-hidden font-display text-white"
    :data-cms-bind="dataBinding"
  >
    <div
      class="container mx-auto max-w-[1400px] relative flex gap-16 flex-col-reverse lg:flex-row items-center lg:items-start"
    >
      <article
        class="max-w-[560px] w-full text-white p-8 items-center lg:items-start"
      >
        <h2 class="font-bold text-heading-h2">
          {{ block.title }}
        </h2>
        <div class="bg-primary-500 w-[120px] h-[10px] my-8" />
        <p class="text-20px">
          {{ block.description }}
        </p>

        <div class="flex flex-col gap-4 my-12">
          <div class="flex items-center gap-4" v-for="list_item in block.list">
            <tma-image :src="list_item.icon" alt="" class="w-[28px] h-[28px]" />
            <p class="text-[1.125rem]">
              {{ list_item.text }}
            </p>
          </div>
        </div>

        <a :href="block.button.path">
          <button
            class="flex bg-primary-500 font-bold w-fit py-[12px] px-[24px] text-white"
          >
            Book a Call
            <tma-image
              src="/icons/arrow-right.svg"
              class="w-[24px] h-[24px] ml-2"
              alt=""
            />
          </button>
        </a>
      </article>

      <tma-image
        class="max-w-[766px] max-h-[766px] p-6 lg:w-1/2 object-contain"
        :style="{
          'max-width': block.image.max_width + 'px',
          'max-height': block.image.max_height + 'px',
        }"
        :src="block.image.src"
        :alt="block.image.alt"
        :data-cms-bind="`${dataBinding}.image`"
      />
    </div>
  </section>
</template>
