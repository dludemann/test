<script>
export default {
  props: ["block", "dataBinding"],
};
</script>

<template>
  <div>
    <section
      class="container mx-auto grid lg:grid-cols-2 gap-10 pt-20 mb-10 justify-center px-6 font-display"
      :data-cms-bind="dataBinding"
    >
      <a
        :href="button.path"
        class="py-6 px-10 flex flex-col gap-[14px] max-w-[600px]"
        v-for="button in block.buttons"
        :style="{
          backgroundColor: button.background_color,
          color: button.text_color,
        }"
      >
        <h2 class="text-heading-h2 font-bold">
          {{ button.title }}
        </h2>
        <p>
          {{ button.text }}
        </p>
        <div
          class="flex gap-5 hover:backdrop-brightness-95 items-center py-2"
          :class="button.button.underline ? 'underline' : ''"
        >
          <p class="min-w-1/2 mb-0">
            {{ button.button.text }}
          </p>
          <img
            v-if="button.button.arrow === 'black'"
            src="/icons/arrow-right-black.svg"
            alt=""
            class="w-[24px]"
          />
          <img
            v-if="button.button.arrow === 'white'"
            src="/icons/arrow-right.svg"
            alt=""
            class="w-[24px]"
          />
        </div>
      </a>
    </section>

    <section class="container mx-auto px-6 pb-20">
      <div class="py-6 px-10 bg-[#E4E4E4] w-full">
        <h2 class="text-heading-h2 font-bold font-display text-secondary-900">
          As Featured in RedFin
        </h2>
        <p class="text-secondary-900 text-body-regular font-body mt-4">
          We were featured in a Redfin article. Check out the article we were
          featured in:
          <a
            href="https://www.redfin.com/blog/things-to-do-in-jersey-city-nj/"
            class="underline text-error-900"
            target="_blank"
            >20 Things to Do in Jersey City, NJ | Redfin</a
          >
        </p>
      </div>
    </section>
  </div>
</template>
