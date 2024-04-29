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
  const baseURL = "https://ik.imagekit.io/4itnipzjr";

  let imageSrc = src.value;
  let isRelative = imageSrc ? imageSrc.startsWith("/") : false;

  if (imageSrc) {
    if (isRelative) {
      imageSrc = `${baseURL}${imageSrc}`;
    } else {
      imageSrc = imageSrc.replace(
        "https://photostma.blob.core.windows.net/marketing",
        baseURL
      );
    }
  }

  return imageSrc;
});
</script>
