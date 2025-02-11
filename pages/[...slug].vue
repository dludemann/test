<template>
  <NuxtLayout>
    <main class="w-full overflow-x-hidden">
      <template v-if="formattedPage">
        <component
          v-for="(block, index) in formattedPage.content_blocks"
          :is="block._bookshop_name"
          :block="block"
          :dataBinding="`#content_blocks.${index}`"
          :key="index"
        ></component>
      </template>
      <slot />
    </main>
  </NuxtLayout>
</template>

<script setup>
import {
  onCloudCannonChanges,
  stopCloudCannonChanges,
} from "@cloudcannon/visual-editor-connector";
import { onBeforeUnmount, onMounted, ref } from "vue";

const { page } = useContent();
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}
const route = useRoute();
const pageData = page.value;

const head = generateHead(pageData, route);
useHead(head);

const formatBookshopName = (pageObject) => {
  pageObject.content_blocks.forEach(function (item) {
    item._bookshop_name = item._bookshop_name
      .replaceAll(/[^a-zA-Z0-9 ]/g, " ")
      .replaceAll(/(^\w{1})|(\s+\w{1})/g, (c) => c.toUpperCase())
      .replaceAll(" ", "");
  });
  return pageObject;
};

const formattedPage = ref(
  pageData.content_blocks ? formatBookshopName(pageData) : {}
);

onMounted(async () => {
  onCloudCannonChanges((latestValue) => {
    formattedPage.value = formatBookshopName(latestValue);
  });
});

onBeforeUnmount(async () => {
  stopCloudCannonChanges();
});
</script>

<style>
.page-content a {
  color: #bf9441;
}
.page-content a:hover {
  text-decoration: underline;
}

h3 a {
  color: black !important;
}
</style>
