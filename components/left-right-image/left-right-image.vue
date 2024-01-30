<script setup>
import { marked } from 'marked';
const markdownify = (text) => {
  const markdown = marked.parse(text);
  return markdown;
};
</script>

<template>
  <section
    :data-cms-bind="dataBinding"
    class="font-display"
    :style="{
      'background-color': block.background_color,
      color: block.layout.text.color,
    }"
  >
    <div
      class="grid lg:grid-cols-2 gap-8"
      :class="[
        block.layout.container ? 'container mx-auto' : '',
        block.layout.max_width ? 'mx-auto' : '',
        block.layout.text.horizontally_centered ? 'text-center' : '',
      ]"
      :style="{
        'padding-inline': block.layout.horizontal_padding + 'px',
        'padding-block': block.layout.vertical_padding + 'px',
        'max-width': block.layout.max_width + 'px',
      }"
    >
      <!-- Text Unflipped -->
      <section
        v-if="!block.layout.flipped"
        class="flex flex-col items-center mx-auto"
        :class="block.layout.text.vertically_centered ? 'justify-center' : ''"
        :style="{
          'padding-block': block.layout.text.vertical_padding + 'px',
          'padding-inline': block.layout.text.horizontal_padding + 'px',
          'max-width': block.layout.text.max_width + 'px',
        }"
      >
        <h1 class="font-bold text-[36px] border-b">
          {{ block.heading }}
        </h1>
        <blockquote
          class="large-quote"
          v-if="block.layout.text.text_is_quote"
          v-html="markdownify(block.text)"
        ></blockquote>
        <footer
          v-if="block.layout.text.quote_author"
          class="large-quote__author"
        >
          - {{ block.layout.text.quote_author }}
        </footer>
        <div
          v-if="!block.layout.text.text_is_quote"
          class="left-right__text"
          v-html="markdownify(block.text)"
        ></div>
      </section>

      <!-- Standard image -->
      <section
        v-if="block.image.image.src"
        :class="[
          block.layout.flipped ? 'flex justify-start' : 'flex justify-end',
        ]"
      >
        <nuxt-img
          class="rounded-sm"
          :src="block.image.image.src"
          :alt="block.image.image.alt"
        />
      </section>

      <!-- Image grid -->
      <section
        v-if="block.image.image_grid.images[0].image.src"
        class="grid justify-center"
        :style="{
          'grid-template-columns':
            'repeat(2, minmax(0,' + block.image.image_grid.image_width + 'px))',
          gap: '16px',
        }"
      >
        <div
          class="flex flex-col overflow-hidden justify-center items-center"
          v-for="image in block.image.image_grid.images"
        >
          <p
            v-if="image.heading"
            class="text-white text-center font-bold text-[18px] w-[50%]"
          >
            {{ image.heading }}
          </p>
          <nuxt-img
            :src="image.image.src"
            class="object-cover h-full w-full rounded-sm"
          />
        </div>
      </section>

      <!-- Full sized image -->
      <section v-if="block.image.full_sized_image.src">
        <div class="overflow-hidden justify-center items-center">
          <nuxt-img
            :src="block.image.full_sized_image.src"
            class="object-cover h-full w-full"
            :style="{
              'max-height': block.image.full_sized_image.max_height + 'px',
            }"
          />
        </div>
      </section>

      <!-- Text Flipped -->
      <section
        v-if="block.layout.flipped"
        class="flex flex-col items-center mx-auto"
        :class="block.layout.text.vertically_centered ? 'justify-center' : ''"
        :style="{
          'padding-block': block.layout.text.vertical_padding + 'px',
          'padding-inline': block.layout.text.horizontal_padding + 'px',
          'max-width': block.layout.text.max_width + 'px',
        }"
      >
        <h1 class="font-bold text-[36px] border-b">
          {{ block.heading }}
        </h1>
        <blockquote class="large-quote" v-if="block.layout.text.text_is_quote">
          {{ block.text }}
          <footer
            v-if="block.layout.text.quote_author"
            class="large-quote__author"
          >
            - {{ block.layout.text.quote_author }}
          </footer>
        </blockquote>
        <div
          v-if="!block.layout.text.text_is_quote"
          class="left-right__text"
          v-html="markdownify(block.text)"
        ></div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<style>
.left-right__text > p {
  margin-bottom: 64px;
  line-height: 2rem;
  letter-spacing: 0.05em;
}
.left-right__text > ul > li {
  list-style-type: initial;
  margin-bottom: 12px;
  line-height: 2rem;
  letter-spacing: 0.05em;
  margin-left: 0;
}

.left-right__text > h2 {
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: bold;
  text-wrap: balance;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 16px;
}

.large-quote {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  z-index: 1;
  line-height: 1.4;
}

.large-quote::before {
  --side-length: 100px;
  content: '';
  width: var(--side-length);
  height: var(--side-length);
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('/images/assets/quote.png');
  background-size: 100%;
  transform: translate(-10%, -40%);
  z-index: 99;
  opacity: 0.2;
}

.large-quote__author {
  font-size: 1.8rem;
  margin-top: 2rem;
}
</style>
