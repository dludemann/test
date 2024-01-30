<script setup>
import { marked } from 'marked';
const markdownify = (text) => {
  const markdown = marked.parse(text);
  return markdown;
};
</script>

<template>
  <section
    class="container mx-auto max-w-[1040px] lg:px-16 px-3"
    :data-cms-bind="dataBinding"
  >
    <div class="py-[50px] text-center justify-center flex flex-col">
      <div class="flex gap-2 items-center mx-auto" v-if="block.pre_title">
        <div class="h-px w-[10px] bg-[#171717]" />
        <p class="text-[1.125rem] italic">{{ block.pre_title }}</p>
        <div class="h-px w-[10px] bg-[#171717]" />
      </div>
      <h1
        v-if="block.title"
        class="mb-[40px] text-[2.5rem] max-w-[660px] mx-auto font-bold font-display"
        :style="{ 'text-wrap': 'balance' }"
      >
        {{ block.title }}
      </h1>
      <div
        v-for="(paragraph, index) in block.paragraphs"
        class="max-w-[800px] mx-auto text-justify mb-[1rem]"
        :class="paragraph.inline_image ? 'grid lg:grid-cols-2 gap-5' : ''"
      >
        <nuxt-img
          :src="paragraph.inline_image"
          alt=""
          class="mr-2"
          v-if="paragraph.inline_image && paragraph.flipped === true"
        />
        <div
          v-if="paragraph.text"
          class="markdown-block__text"
          v-html="markdownify(paragraph.text)"
        ></div>
        <nuxt-img
          :src="paragraph.inline_image"
          alt=""
          class="ml-2"
          v-if="paragraph.inline_image && paragraph.flipped === false"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<style>
.markdown-block__text {
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
}

.markdown-block__text p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  letter-spacing: 1px;
  font-weight: lighter;
  line-height: 2rem;
}

.markdown-block__text h1,
.markdown-block__text h2,
.markdown-block__text h3 {
  font-weight: bolder;
  text-wrap: balance;
  font-family: Montserrat;
  line-height: 3rem;
  margin-bottom: 1rem;
}

.markdown-block__text h1 {
  font-size: 3.25rem;
}
.markdown-block__text h2 {
  font-size: 2.5rem;
}
.markdown-block__text h3 {
  font-size: 1.75rem;
}
.markdown-block__text ul > li {
  list-style: initial;
  margin-left: 2rem;
}

.align-left {
  text-align: left;
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}

blockquote {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  z-index: 1;
  line-height: 1.4;
}

blockquote::before {
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

p.standard {
  font-size: 1rem;
}

p.big {
  font-size: 2.5rem;
}

p.big-centered {
  font-size: 2.5rem;
  align-self: center;
}

p.big-centered-bold {
  font-size: 2.5rem;
  font-weight: bold;
  align-self: center;
}

p.intro {
  font-size: 1.125rem;
  font-style: italic;
  position: relative;
  width: fit-content;
  align-self: center;
}

.intro {
  margin-bottom: 10px !important;
}

.intro::before {
  position: absolute;
  left: 102%;
  top: 50%;
  content: '';
  font-size: 1.125rem;
  font-style: italic;
  height: 1px;
  width: 10px;
  background-color: #171717;
}

.intro::after {
  position: absolute;
  right: 102%;
  top: 50%;
  content: '';
  font-size: 1.125rem;
  font-style: italic;
  height: 1px;
  width: 10px;
  background-color: #171717;
}
</style>
