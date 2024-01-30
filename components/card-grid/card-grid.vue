<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section
    class="container mx-auto max-w-[1000px] text-[48px] px-6 font-display"
    :data-cms-bind="dataBinding">
    <h1 class="my-10 font-bold">{{ block.heading }}</h1>

    <div class="grid grid-cols-2 gap-16">
      <div
        v-for="card in block.cards"
        :key="card.title"
        class="col-span-2 lg:col-span-1 text-center overflow-hidden">
        <div
          class="h-auto lg:h-[510px] w-full lg:w-[510px] bg-slate-500 overflow-hidden relative">
          <nuxt-img :src="card.image" class="object-cover h-full w-full" />
        </div>

        <article class="p-8">
          <p class="font-bold text-[1.5rem]">{{ card.title }}</p>
          <p class="mb-5 text-[1.125rem]">{{ card.subtitle }}</p>
          <p class="text-[1.125rem] tracking-[1px] leading-6 font-body">
            {{ card.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
