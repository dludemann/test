<template>
  <nav class="font-body">
    <ul class="flex gap-4 mt-8 justify-center">
      <li
        class="hover:bg-[#444444] bg-[#181818] py-2.5 px-5 text-white rounded text-[18px]">
        <a :href="previousButtonLink(2)">&lt&lt First Page </a>
      </li>
      <li
        class="hover:bg-[#444444] bg-[#181818] py-2.5 px-5 text-white rounded text-[18px]"
        v-if="hasPreviousPage">
        <a :href="previousButtonLink(pageNumber)">&lt Previous Page </a>
      </li>
      <li
        class="hover:bg-[#444444] bg-[#181818] py-2.5 px-5 text-white rounded text-[18px]"
        v-if="hasNextPage">
        <a :href="`/${urlPrefix}/page/${pageNumber + 1}`"> Next Page > </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const { pageNumber, numberOfPages, urlPrefix } = defineProps({
  pageNumber: Number,
  numberOfPages: Number,
  urlPrefix: String,
});

const hasNextPage = pageNumber + 1 <= numberOfPages;
const hasPreviousPage = pageNumber - 1 >= 1;
const previousButtonLink = (index) => {
  let previousURL = '';
  if (index == 2) {
    previousURL = `/${urlPrefix}/`;
  } else {
    previousURL = `/${urlPrefix}/page/${index - 1}`;
  }
  return previousURL;
};
</script>
