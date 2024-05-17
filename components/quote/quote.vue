<template>
  <section class="container mx-auto max-w-[800px] py-5 px-3 font-body">
    <blockquote
      :class="{ 'large-quote': block.style === 'Large quote', 'case-study': block.style === 'Case study'}"
      :data-cms-bind="dataBinding"
    >
      {{ block.quote }}
    </blockquote>
    <div v-if="block.author"
          :class="{ 'large-quote__author': block.style === 'Large quote', 'case-study__author': block.style === 'Case study'}"
      >
        - {{ block.author }}
    </div>
  </section>
</template>

<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<style scoped>
.case-study{
  font-weight:bolder;
  max-width:800px;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  letter-spacing: 1px;
  line-height: 2rem;
  text-align: justify;
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
.case-study__author {
  font-size: 1.125rem;
  line-height: 2rem;
}
</style>
