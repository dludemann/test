<template>
  <section class="flex font-display">
    <SideNavBars :links="portfolioMenu" />
    <NuxtLayout class="w-full">
      <main>
        <template v-if="formattedPage">
          <component
            v-for="(block, index) in formattedPage.content_blocks"
            :is="block._bookshop_name"
            :block="block"
            :dataBinding="`#content_blocks.${index}`"
            :key="index"></component>
        </template>
        <slot />
      </main>
    </NuxtLayout>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import {
  onCloudCannonChanges,
  stopCloudCannonChanges,
} from '@cloudcannon/visual-editor-connector';

const { page } = useContent();
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
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
      .replaceAll(/[^a-zA-Z0-9 ]/g, ' ')
      .replaceAll(/(^\w{1})|(\s+\w{1})/g, (c) => c.toUpperCase())
      .replaceAll(' ', '');
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

const allPortfolios = await queryContent('portfolio').find();

const portfolioMenu = allPortfolios.map((file) => {
  const filePath = file._path.split('.')[0];
  if (filePath === '/portfolio/index') {
    return {
      path: '/portfolio/',
      title: 'General',
      active: filePath === pageData._path ? true : false,
    };
  } else {
    return {
      path: `${filePath}/`,
      title: file.title,
      active: filePath === pageData._path ? true : false,
    };
  }
});
</script>
