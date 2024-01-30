<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section
    class="container mx-auto my-[70px] font-display"
    :data-cms-bind="dataBinding"
  >
    <div class="flex flex-col items-center justify-center my-[70px]">
      <p class="italic text-[20px] color-[#171717]">- {{ block.heading }} -</p>
      <div class="flex gap-8 mt-4">
        <a
          v-for="link in block.social_media"
          :href="link.path"
          target="_blank"
          rel="noopener noreferrer"
        >
          <nuxt-img
            :src="link.image.src"
            :alt="link.image.alt"
            :style="{ opacity: link.image.opacity }"
          />
        </a>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-8 items-center px-8">
      <a
        v-for="news_mention in block.news_mentions"
        class="col-span-4 lg:col-span-1"
        :href="news_mention.path"
        target="_blank"
      >
        <nuxt-img :src="news_mention.image.src" :alt="news_mention.image.alt" />
      </a>
    </div>
  </section>
</template>
