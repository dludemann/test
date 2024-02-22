<script setup>
import { defineProps } from "vue";
const props = defineProps({
  menuData: Object,
  currentPath: Object,
  mainSlug: String,
});

const { menuData: m, currentPath: c, mainSlug: s } = toRefs(props);

const menuData = m.value;
const currentPath = c.value;
const mainSlug = s.value;

const generatePrevious = () => {
  menuData[currentPath.level_one].title;
  const currentLevelTwoIndex = menuData[
    currentPath.level_one
  ].children.findIndex((c) => c.slug === currentPath.level_two.level_two_slug);
  const previousLevelTwo =
    menuData[currentPath.level_one].children[currentLevelTwoIndex - 1];
  if (previousLevelTwo) {
    return {
      title: menuData[currentPath.level_one].title,
      slug: `${mainSlug}/${previousLevelTwo.slug}`,
      section: previousLevelTwo.title,
      active: true,
    };
  } else {
    const previousSilo = menuData[currentPath.level_one - 1];

    if (currentPath.level_one === 0) {
      return {
        title: menuData[currentPath.level_one].title,
        slug: "",
        section: currentPath.level_two.level_two_title,
        active: false,
      };
    }

    console.log("hello");

    return {
      title: previousSilo.title,
      slug: `${mainSlug}/${
        previousSilo.children[previousSilo.children.length - 1].slug
      }`,
      section: previousSilo.children[previousSilo.children.length - 1].title,
      active: true,
    };
  }
};

const generateNext = () => {
  menuData[currentPath.level_one].title;
  const currentLevelTwoIndex = menuData[
    currentPath.level_one
  ].children.findIndex((c) => c.slug === currentPath.level_two.level_two_slug);

  const nextLevelTwo =
    menuData[currentPath.level_one].children[currentLevelTwoIndex + 1];

  if (nextLevelTwo) {
    return {
      title: menuData[currentPath.level_one].title,
      slug: `${mainSlug}/${nextLevelTwo.slug}`,
      section: nextLevelTwo.title,
      active: true,
    };
  } else {
    // if we're at the end there is no more
    if (menuData.length === currentPath.level) {
      return {
        title: menuData[currentPath.level_one].title,
        slug: "",
        section: currentPath.level_two.level_two_title,
        active: false,
      };
    }

    const nextSilo = menuData[currentPath.level_one + 1];

    if (nextSilo) {
      return {
        title: nextSilo.title,
        slug: `${mainSlug}/${nextSilo.children[0].slug}`,
        section: nextSilo.children[0].title,
        active: true,
      };
    } else
      return {
        title: "",
        slug: ``,
        section: "",
        active: false,
      };
  }
};
</script>

<template>
  <section>
    <div class="w-full mt-16">
      <div class="flex flex-col lg:flex-row w-full">
        <nuxt-link
          rel="canonical"
          :to="generatePrevious().slug"
          :class="
            generatePrevious().active
              ? 'cursor-pointer hover:bg-[#1789a3]'
              : 'cursor-not-allowed bg-opacity-50'
          "
          class="bg-[#227F94] flex gap-10 px-10 items-center h-[185px] lg:w-1/2 c text-left"
        >
          <div class="w-8 h-8 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 10.6667L10.6666 16.0001M10.6666 16.0001L16 21.3334M10.6666 16.0001H21.3333M29.3333 16.0001C29.3333 23.3639 23.3638 29.3334 16 29.3334C8.63616 29.3334 2.66663 23.3639 2.66663 16.0001C2.66663 8.63628 8.63616 2.66675 16 2.66675C23.3638 2.66675 29.3333 8.63628 29.3333 16.0001Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="text-white">
            <p>{{ generatePrevious().title }}</p>
            <p class="font-bold text-[28px] font-display">
              {{ generatePrevious().section }}
            </p>
          </div>
        </nuxt-link>
        <nuxt-link
          rel="canonical"
          :to="generateNext().slug"
          :class="
            generateNext().active
              ? 'cursor-pointer hover:bg-[#ab0707]'
              : 'cursor-not-allowed bg-opacity-50'
          "
          class="bg-[#990808] flex gap-10 px-10 items-center h-[185px] lg:w-1/2 justify-end cursor-pointer"
        >
          <div class="text-white">
            <p>{{ generateNext().title }}</p>
            <p class="font-bold text-[28px] font-display">
              {{ generateNext().section }}
            </p>
          </div>

          <div
            class="w-8 h-8 flex items-center justify-center transform rotate-180"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 10.6667L10.6666 16.0001M10.6666 16.0001L16 21.3334M10.6666 16.0001H21.3333M29.3333 16.0001C29.3333 23.3639 23.3638 29.3334 16 29.3334C8.63616 29.3334 2.66663 23.3639 2.66663 16.0001C2.66663 8.63628 8.63616 2.66675 16 2.66675C23.3638 2.66675 29.3333 8.63628 29.3333 16.0001Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </nuxt-link>
      </div>
    </div>

    <section class="bg-[#090303] py-20">
      <div
        class="container mx-auto flex justify-between items-start px-4 lg:px-16 flex-col lg:flex-row gap-12"
      >
        <article class="max-w-[560px] w-full text-white">
          <h2 class="font-bold text-heading-h1 font-accent">
            Professional Dating Photography
          </h2>
          <div class="bg-primary-500 w-[120px] h-[10px] my-4" />
          <p class="text-20px">
            We tailor your photo experience with us to highlight things you
            enjoy doing most. Whether it's kayaking, rock climbing, reading, or
            drinking coffee, you'll get more matches with a varied profile
            filled with your talents.
          </p>

          <div class="flex flex-col gap-4 my-6">
            <div class="flex items-center gap-4">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                  stroke="#22C55E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="text-[18.5px] font-body mb-0">Better dating profile</p>
            </div>
            <div class="flex items-center gap-4">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                  stroke="#22C55E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="text-[18.5px] font-body">Go on better dates</p>
            </div>
            <div class="flex items-center gap-4">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0057 16.8155L14.0057 20.8155L22.0057 12.8155M29.339 16.8155C29.339 24.1792 23.3695 30.1488 16.0057 30.1488C8.6419 30.1488 2.67236 24.1792 2.67236 16.8155C2.67236 9.45165 8.6419 3.48212 16.0057 3.48212C23.3695 3.48212 29.339 9.45165 29.339 16.8155Z"
                  stroke="#22C55E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-[18.5px] font-body">
                Improved social media presence
              </p>
            </div>
          </div>
        </article>

        <!-- FORM -->
        <div
          class="p-6 bg-white max-w-[375px] flex-shrink-0 w-full flex flex-col items-start gap-8"
        >
          <ContactForm :has-city-input="false" />
        </div>
      </div>
    </section>
  </section>
</template>
