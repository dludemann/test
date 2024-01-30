<template>
  <div>
    <!-- MOBILE NAV -->
    <div
      class="pointer-events-none h-screen w-screen fixed top-0 left-0 z-50 block lg:hidden"
    >
      <button
        @click="toggleMenu"
        class="pointer-events-auto flex font-bold items-center border-2 border-black absolute bg-white py-[10px] px-[15px] bottom-2 right-2"
      >
        <svg
          data-v-783a4ef6=""
          height="800"
          width="800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 297 297"
          class=""
          style="height: 2rem; width: 2rem; margin-right: 1rem"
        >
          <path
            data-v-783a4ef6=""
            d="M280.214 39.211H16.786C7.531 39.211 0 46.742 0 55.997v24.335c0 9.256 7.531 16.787 16.786 16.787h263.428c9.255 0 16.786-7.531 16.786-16.787V55.997c0-9.255-7.531-16.786-16.786-16.786zM280.214 119.546H16.786C7.531 119.546 0 127.077 0 136.332v24.336c0 9.255 7.531 16.786 16.786 16.786h263.428c9.255 0 16.786-7.531 16.786-16.786v-24.336c0-9.255-7.531-16.786-16.786-16.786zM280.214 199.881H16.786C7.531 199.881 0 207.411 0 216.668v24.335c0 9.255 7.531 16.786 16.786 16.786h263.428c9.255 0 16.786-7.531 16.786-16.786v-24.335c0-9.257-7.531-16.787-16.786-16.787z"
          ></path>
        </svg>
        Menu
      </button>

      <!-- MOBILE -->
      <div class="bg-white h-full w-full pointer-events-auto" v-if="menuOpen">
        <nav class="w-full flex-shrink-0 gap-[22px] flex flex-col">
          <a
            v-for="link in links"
            :key="link.title"
            :href="link.path"
            :class="link.active ? linkActiveClass : linkClass"
            >{{ link.title }}

            <svg
              data-v-783a4ef6=""
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              class=""
              style="stroke: white"
            >
              <path
                data-v-783a4ef6=""
                d="M21.883 12l-7.527 6.235L15 19l9-7.521L15 4l-.645.764L21.884 11H0v1h21.883z"
              ></path>
            </svg>
          </a>
        </nav>
      </div>
    </div>

    <nav
      class="w-[300px] flex-shrink-0 gap-[22px] hidden lg:flex flex-col mr-4"
    >
      <a
        v-for="link in links"
        :key="link.title"
        :href="link.path"
        :class="link.active ? linkActiveClass : linkClass"
        >{{ link.title }}

        <svg
          data-v-783a4ef6=""
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          class=""
          style="stroke: white"
        >
          <path
            data-v-783a4ef6=""
            d="M21.883 12l-7.527 6.235L15 19l9-7.521L15 4l-.645.764L21.884 11H0v1h21.883z"
          ></path>
        </svg>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const linkClass = `text-[20px] py-[8.5714px] px-[11.43px] flex justify-between items-center overflow-hidden bg-black hover:bg-[#cc3737] text-white cursor-pointer font-bold`;
const linkActiveClass = `text-[20px] py-[8.5714px] px-[11.43px] flex justify-between items-center overflow-hidden bg-[#cc3737] text-white cursor-pointer font-bold`;

const { links } = defineProps({
  links: Array<{
    title: String;
    path: String;
    active: Boolean;
  }>,
});

const menuOpen = ref(false);

const toggleMenu = () => (menuOpen.value = !menuOpen.value);
</script>
