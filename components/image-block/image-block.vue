<script>
export default {
  props: ["block", "dataBinding"],
};
</script>

<template>
  <section
    class="container mx-auto max-w-[1040px] lg:px-16 px-3"
    :data-cms-bind="dataBinding"
    :style="{
      'padding-top': block.top_spacing + 'px',
      'padding-bottom': block.bottom_spacing + 'px',
    }"
  >
    <div class="max-w-[800px] mx-auto text-left mb-[2.5rem]">
      <p
        class="text-[26px] font-body z-10 relative text-center tracking-[1px] leading-[44px]"
        v-if="block.pre_title"
      >
        {{ block.pre_title }}
      </p>
      <h2
        class="font-bold text-[2.2rem] text-center"
        v-if="block.title"
      >
        {{ block.title }}
      </h2>
      <tma-image
        class="h-full w-full object-contain self-center"
        :src="block.image.src"
        :alt="block.image.alt"
      />   
    </div>
  </section>
</template>
