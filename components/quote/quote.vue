<template>
  <blockquote
    class="large-quote container mx-auto max-w-[1040px] py-20 px-3 font-display"
    :data-cms-bind="dataBinding"
  >
    {{ block.quote }}
    <footer v-if="block.author" class="large-quote__author">
      - {{ block.author }}
    </footer>
  </blockquote>
</template>

<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<style>
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
  top: 25%;
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
