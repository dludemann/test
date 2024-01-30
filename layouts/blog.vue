<template>
  <section class="blog @@padding @@blog-two">
    <slot />
  </section>
</template>

<script setup>
const route = useRoute();
const pageData = await queryContent('blog').where({ _path: '/blog' }).findOne();

const head = generateHead(pageData, route);

useHead(head);
</script>
