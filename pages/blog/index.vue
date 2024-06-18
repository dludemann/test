<template>
  <NuxtLayout>
    <BlogLayout
      :posts="pagedPosts"
      :pageNumber="pageNumber"
      :numberOfPages="numberOfPages"
    />
  </NuxtLayout>
</template>

<script setup>
const pageNumber = 1;

const pageData = await queryContent("blog").where({ _path: "/blog" }).findOne();
const pageSize = pageData.pagination.size || 9;

const allPosts = await queryContent("blog")
  .where({ _path: { $ne: "/blog" } })
  .only(["title"])
  .find();
const numberOfPosts = allPosts.length;
const numberOfPages = Math.ceil(numberOfPosts / pageSize);

console.log("hello");

const pagedPosts = await queryContent("blog")
  .where({
    _path: { $ne: "/blog" },
  })
  .sort({ published: -1 })
  .limit(pageData.pagination.size)
  .find();
</script>
