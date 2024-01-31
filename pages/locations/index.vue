<script setup>
import { computed } from 'vue';
const search = ref('');
const { page } = useContent();
const pageData = page.value;

const locations = pageData.locations.map((location) => ({
  ...location,
  cityFilter: location.location_name.toLowerCase(),
}));

const filteredLocations = computed(() =>
  locations.filter((location) =>
    location.cityFilter.includes(search.value.toLowerCase())
  )
);
</script>

<template>
  <section class="bg-black">
    <div
      class="container mx-auto py-[42px] flex justify-center items-center px-6 font-display"
    >
      <div class="max-w-[600px] w-full">
        <h1 class="text-white text-center text-heading-h1 font-bold">
          {{ pageData.title }}
        </h1>
        <p class="text-white text-center mt-2">
          {{ pageData.description }}
        </p>

        <div class="relative w-full">
          <input
            class="input w-full mt-10"
            placeholder="Where do you live?"
            v-model="search"
          />

          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-[14px] top-1/2 transform -translate-y-1/2"
          >
            <path
              d="M21.3877 21.5L17.8878 18M20.3877 12C20.3877 16.6944 16.5821 20.5 11.8877 20.5C7.19327 20.5 3.3877 16.6944 3.3877 12C3.3877 7.30558 7.19327 3.5 11.8877 3.5C16.5821 3.5 20.3877 7.30558 20.3877 12Z"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- GRID -->
  <section class="bg-black min-h-[50vh]">
    <div
      class="container mx-auto py-20 flex items-center justify-center px-6 font-display"
    >
      <div class="grid grid-cols-4 gap-6 w-full">
        <nuxt-link
          rel="canonical"
          :to="card.path"
          class="col-span-4 lg:col-span-1"
          v-for="card in filteredLocations"
        >
          <div
            class="relative w-full h-[300px] flex p-2 justify-center items-center overflow-hidden rounded-lg border-secondary-300 cursor-pointer"
          >
            <p
              class="text-white text-center relative z-20 font-display text-heading-h3 font-bold drop-shadow-[4px_4px_4px_rgba(0,0,0,0.30)]"
            >
              {{ card.location_name }}
            </p>

            <div class="h-full w-full absolute bg-black bg-opacity-50 z-10" />
            <nuxt-img
              loading="lazy"
              :src="card.img"
              class="absolute object-cover h-full w-full"
            />
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
