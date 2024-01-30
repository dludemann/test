<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>

<template>
  <section
    class="py-[110px] font-display px-4"
    :data-cms-bind="dataBinding"
    :style="{
      'background-color': block.background_color,
      color: block.text_color,
    }"
  >
    <article class="container mx-auto text-center max-w-[800px] mb-16">
      <p class="text-[#A6A6A6] font-bold mb-4" v-if="block.location.city">
        DATING PHOTOGRAPHY IN {{ block.location.city.toUpperCase() }},
        {{ block.location.state.toUpperCase() }}
      </p>
      <h2
        class="text-white font-bold text-[2.2rem] lg:text-[3.125rem] text-heading-h1"
        v-if="block.title"
      >
        {{ block.title }}
      </h2>
      <p
        class="text-[#D9D9D9] mx-auto max-w-[620px] text-[22px] leading-[30px] mt-4"
        v-if="block.description"
      >
        {{ block.description }}
      </p>
    </article>

    <!-- Swiper -->
    <div
      v-bind:style="{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.7)), url(' +
          block.background_image +
          ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
    >
      <div class="container mx-auto">
        <div>
          <Swiper
            :space-between="40"
            :slides-per-view="1"
            :loop="true"
            :breakpoints="{
              1024: {
                slidesPerView: 4,
              },
            }"
          >
            <SwiperSlide
              v-for="slide in block.images"
              :key="slide"
              class="h-[500px] lg:w-[350px] !max-w-[350px] relative"
            >
              <div class="h-[500px] lg:w-[350px] !max-w-[350px] relative">
                <nuxt-img
                  :src="slide"
                  alt="Portfolio Image"
                  class="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>

            <UtilitySwiperControls />
          </Swiper>
        </div>
      </div>
      <div class="flex flex-col items-center py-[110px]">
        <div class="flex gap-1 justify-center">
          <img src="/icons/star.svg" class="h-[20px] w-[20px]" alt="" />
          <img src="/icons/star.svg" class="h-[20px] w-[20px]" alt="" />
          <img src="/icons/star.svg" class="h-[20px] w-[20px]" alt="" />
          <img src="/icons/star.svg" class="h-[20px] w-[20px]" alt="" />
          <img src="/icons/star.svg" class="h-[20px] w-[20px]" alt="" />
        </div>
        <p class="text-center max-w-[950px] mt-4 text-[1.5rem] leading-[33px]">
          {{ block.testimonial.text }}
        </p>
        <p class="text-white font-bold mt-4">
          - {{ block.testimonial.person }}.
        </p>
      </div>
    </div>
  </section>
</template>
