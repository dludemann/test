<template>
  <section
    class="container mx-auto max-w-[1040px]"
    :style="{
      'padding-top': block.top_spacing + 'px',
      'padding-bottom': block.bottom_spacing + 'px',
    }"
    :data-cms-bind="dataBinding"
  >
    <iframe :src="block.video_link"></iframe>
  </section>
</template>

<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<style scoped>
iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}
</style>
