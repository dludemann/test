<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section
    :data-cms-bind="dataBinding"
    :style="{ backgroundColor: block.background_color }"
  >
    <div
      class="container mx-auto flex flex-col items-center py-10 lg:py-[120px] px-6 font-display"
    >
      <h2
        class="text-center text-gray-900 font-bold max-w-[700px] text-[2.2rem] text-[3.125rem]"
      >
        {{ block.title }}
      </h2>

      <div
        class="w-full max-w-[770px] overflow-hidden py-4 lg:py-[60px] h-[500px] lg:h-auto relative"
      >
        <a :href="block.image" rel="canonical">
          <nuxt-img :src="block.image" class="object-cover w-full h-full" />
        </a>
      </div>

      <p class="max-w-[660px] text-center leading-loose mb-8">
        {{ block.text }}
      </p>
      <a :href="block.button.path">
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
    </div>
  </section>
</template>
