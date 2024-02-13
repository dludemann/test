<script>
export default {
  props: ["block", "dataBinding"],
};
</script>

<template>
  <section
    class="relative flex flex-col"
    :data-cms-bind="dataBinding"
    :style="{
      'background-color': block.background_color,
      color: block.text_color,
    }"
  >
    <div class="w-full mx-auto bg-black justify-center font-body relative">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center justify-center pb-[60px] relative p-6"
      >
        <div class="max-w-[600px] p-5 flex flex-col pt-[96px] relative z-10">
          <h1
            class="text-[58px] font-accent tracking-[-1%] leading-[69.6px] font-bold text-white"
            style="text-wrap: balance"
          >
            Premier Online Dating Photography in {{ block.location.city
            }}<span v-if="block.location.state">,</span>
            {{ block.location.state }}
          </h1>
          <p class="text-white text-[22.5px] font-body leadig-[36px]">
            Elevate your online dating with stunning profile photography.
            Increase your matches on top dating apps such as Tinder, Hinge,
            Bumble, and Match.com. Serving {{ block.location.city }},
            {{ block.location.state }}.
          </p>
          <a :href="block.button.path">
            <button
              class="flex bg-primary-500 w-fit py-[12px] px-[24px] font-bold text-white mt-5"
            >
              {{ block.button.text }}
              <img
                src="/icons/arrow-right.svg"
                class="w-[24px] h-[24px] ml-2"
                alt=""
              />
            </button>
          </a>
          <div
            class="mt-[40px] mb-[40px] flex items-center gap-4 font-body px-2 pr-4 rounded-full bg-[#232323]"
            :style="{
              maxWidth: block.testimonial.width + 'px',
              height: 70 + 'px',
            }"
          >
            <div
              class="overflow-hidden bg-gray-600 rounded-full flex-shrink-0 border-2 border-white relative"
              :style="{
                width: 50 + 'px',
                height: 50 + 'px',
              }"
            >
              <nuxt-img
                :src="block.testimonial.image.src"
                :alt="block.testimonial.image.alt"
              />
            </div>
            <p class="text-white font text-body-small mr-1">
              "{{ block.testimonial.text }}" -
              {{ block.testimonial.person }}
            </p>
          </div>
        </div>

        <div
          class="absolute top-0 -right-32 w-[500px] h-[800px] lg:relative opacity-80 lg:opacity-100"
        >
          <nuxt-img
            class="object-cover"
            :style="{ 'max-width': block.image.max_width + 'px' }"
            :src="block.image.src"
            :alt="block.image.alt"
          />
        </div>
      </div>
      <div
        class="items-center lg:items-start flex gap-8 lg:gap-4 flex-col lg:flex-row justify-between relative lg:absolute lg:bottom-20 opacity-50 w-full z-50 max-w-[300px] lg:max-w-[1200px] py-12 lg:py-0 left-1/2 -translate-x-1/2"
      >
        <a
          class="col-span-4 lg:col-span-1"
          href="https://www.theamericanreporter.com/the-number-one-way-to-turn-your-online-dating-profile-around-the-match-artist/"
          target="_blank"
          aria-label="Read more the match artist on the american reporter"
          ><img
            src="/images/location/clients/client-1.png"
            onerror="this.setAttribute('data-error', 1)"
            alt="The American Reporter Logo"
            data-nuxt-img=""
        /></a>
        <a
          aria-label="Read more the match artist on entrepreneur"
          class="col-span-4 lg:col-span-1"
          href="https://www.entrepreneur.com/article/430103"
          target="_blank"
          ><img
            src="/images/location/clients/client-2.png"
            onerror="this.setAttribute('data-error', 1)"
            alt="Entrepreneur Logo"
            data-nuxt-img=""
        /></a>
        <a
          class="col-span-4 lg:col-span-1"
          href="https://nyweekly.com/dating/photos-that-help-you-find-love-introducing-the-match-artist/"
          target="_blank"
          aria-label="Read more the match artist on NY Weekly"
          ><img
            src="/images/location/clients/client-3.png"
            onerror="this.setAttribute('data-error', 1)"
            alt="NY Weekly Logo"
            data-nuxt-img=""
        /></a>
        <a
          class="col-span-4 lg:col-span-1"
          href="https://www.morningbrew.com/daily/stories/2023/02/22/inside-jobs-dating-app-photographer-nick-friesen"
          target="_blank"
          aria-label="Read more the match artist on the Morning Brew"
          ><img
            src="/images/location/clients/client-4.png"
            onerror="this.setAttribute('data-error', 1)"
            alt="Morning Brew Logo"
            data-nuxt-img=""
        /></a>
      </div>
    </div>
  </section>
</template>
