<template>
  <img :src="cleanSrc" v-bind="$attrs" />
</template>

<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  modifiers: {
    type: String,
    default: "",
  },
});

const { src, modifiers } = toRefs(props);

// Create Source
const cleanSrc = computed(() => {
  let imageSrc = src.value;

  console.log("imageSrc", imageSrc);

  if (imageSrc) {
    imageSrc = imageSrc.replace(
      "https://photostma.blob.core.windows.net/marketing",
      "http://images.thematchartist.com"
    );
  }

  return imageSrc;
});
</script>
