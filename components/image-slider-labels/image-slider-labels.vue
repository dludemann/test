<script>
export default {
  props: ["block", "dataBinding"],
};
</script>

<template>
  <section
    class="py-[110px] font-display"
    :data-cms-bind="dataBinding"
    :style="{
      'background-color': block.background_color,
      color: block.text_color,
    }"
  >
    <article class="container mx-auto text-center max-w-[800px] mb-16">
      <h2
        class="text-white font-bold text-[2.2rem] text-[3.125rem]"
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
    <div>
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
              :key="slide.src"
              class="h-[500px] lg:w-[300px] !max-w-[300px] relative"
            >
              <div class="h-[300px] lg:w-[300px] !max-w-[300px] relative">
                <img
                  :src="slide.src"
                  alt="Portfolio Image"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="h-[20%] bg-[#FFFFFF] text-black p-3">
                <h4 class="text-black font-bold text-[2rem]">
                  {{ slide.title }}
                </h4>
                <p class="mb-0">{{ slide.subtitle }}</p>
              </div>
            </SwiperSlide>

            <UtilitySwiperControls />
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
