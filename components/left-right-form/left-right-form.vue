<script>
export default {
  props: ["block", "dataBinding"],
  computed: {
    titleParts() {
      const [_, cityState] = this.block.title.match(
        /Professional Dating Photography\s+in\s+(.*)/
      );
      return {
        main: "Professional Dating Photography",
        cityState: cityState || "",
      };
    },
  },
  mounted() {
    console.log("block", this.block);
  },
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
      <article class="max-w-[560px] w-full text-white pr-4">
        <div class="font-bold text-[2.2rem] text-[3.125rem]">
          <h2>
            {{ titleParts.main }}
            <span>{{ titleParts.cityState }}</span>
          </h2>
        </div>
        <div class="bg-primary-500 w-[120px] h-[10px] my-4" />
        <p class="text-20px">
          {{ block.description }}
        </p>
        <div
          class="flex flex-col gap-4 my-6"
          v-for="list_item in block.list"
          :key="list_item.text"
        >
          <div class="flex items-center gap-4">
            <tma-image :src="list_item.icon" class="w-[32px] h-[32px]" alt="" />
            <p class="text-[18.5px] mb-0">{{ list_item.text }}</p>
          </div>
        </div>
      </article>

      <div class="py-8 w-full max-w-[375px]" id="contact">
        <div
          class="p-6 bg-white text-black lex-shrink-0 w-full flex flex-col items-start gap-8 rounded-sm"
        >
          <contact-form
            :has-city-input="block.form.city_input"
            :city="block.form.city"
            :state="block.form.state"
            :country="'USA'"
          />
        </div>
      </div>
    </div>
  </section>
</template>
