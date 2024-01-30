<script setup lang="ts">
const swiper = useSwiper();

const handlePrev = () => {
  const active = swiper.value.activeIndex;
  swiper.value.slideTo(active - 1);
};

const handleNext = () => {
  const active = swiper.value.activeIndex;
  swiper.value.slideTo(active + 1);
};
</script>
<template>
  <div class="flex gap-4 mx-auto container items-center justify-center">
    <button
      @click="handlePrev"
      aria-label="Previous Image"
      class="bg-primary-500 mt-6 lg:w-auto rounded-full !w-[56px] p-0 h-[56px] flex items-center justify-center transform rotate-180"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
          fill="white"
        />
      </svg>
    </button>

    <button
      @click="handleNext"
      aria-label="Next Image Image"
      class="bg-primary-500 mt-6 lg:w-auto rounded-full !w-[56px] p-0 h-[56px] flex items-center justify-center"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 4.92969L12.5 6.42969L17.0703 11H3V13H17.0703L12.5 17.5703L14 19.0703L21.0703 12L14 4.92969Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>
