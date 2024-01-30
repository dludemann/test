<script>
export default {
  props: ['block', 'dataBinding'],
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
    <div class="container mx-auto justify-center font-display px-5">
      <div class="flex justify-center gap-8 justify-evenly">
        <nuxt-img
          v-if="block.image.flipped"
          class="opacity-50 lg:opacity-100 absolute lg:static lg:self-start object-cover"
          :style="{ 'max-width': block.image.max_width + 'px' }"
          :src="block.image.src"
          :alt="block.image.alt"
        />
        <div class="max-w-[600px] p-3 flex flex-col pt-[96px] relative z-10">
          <span
            class="text-[#E4B266] text-xs font-semibold tracking-[1.2px] font-display block"
            >{{ block.pre_title.toUpperCase() }}</span
          >
          <h1
            class="text-[2.5rem] lg:text-[3.5rem] tracking-[-1%] leading-[69.6px] font-bold mb-5"
            style="text-wrap: balance"
          >
            {{ block.title }}
          </h1>
          <p class="text-[1.25rem]">
            {{ block.description }}
          </p>
          <a :href="block.button.path">
            <button
              class="flex bg-primary-500 w-fit py-[12px] px-[24px] text-white mt-5"
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
            v-if="block.testimonial.text"
            class="mt-[80px] flex items-center gap-4 rounded-full bg-[#232323]"
            :style="{
              width: block.testimonial.width + 'px',
              height: block.testimonial.height + 'px',
              'padding-block': block.testimonial.vertical_padding + 'px',
              'padding-inline': block.testimonial.horizontal_padding + 'px',
            }"
          >
            <div
              class="overflow-hidden bg-gray-600 rounded-full flex-shrink-0 border-2 border-white relative"
              :style="{
                width: block.testimonial.image.width + 'px',
                height: block.testimonial.image.height + 'px',
              }"
            >
              <nuxt-img
                :src="block.testimonial.image.src"
                :alt="block.testimonial.image.alt"
              />
            </div>
            <p class="text-white mr-1">
              "{{ block.testimonial.text }}" -
              {{ block.testimonial.person }}
            </p>
          </div>
        </div>
        <nuxt-img
          v-if="!block.image.flipped"
          class="opacity-50 lg:opacity-100 absolute left-1/2 lg:static object-cover"
          :style="{ 'max-width': block.image.max_width + 'px' }"
          :src="block.image.src"
          :alt="block.image.alt"
        />
      </div>
      <div
        class="grid grid-cols-4 gap-8 items-center px-8"
        v-if="block.news_mentions"
      >
        <a
          class="col-span-4 lg:col-span-1"
          href="https://www.theamericanreporter.com/the-number-one-way-to-turn-your-online-dating-profile-around-the-match-artist/"
          target="_blank"
        >
          <nuxt-img
            class="opacity-[80%]"
            src="/images/social/news-mentions/the-american-reporter.png"
            alt=""
          />
        </a>
        <a
          class="col-span-4 lg:col-span-1"
          href="https://www.entrepreneur.com/article/430103"
          target="_blank"
        >
          <nuxt-img src="/images/social/news-mentions/entrepeneur.png" alt="" />
        </a>
        <a
          class="col-span-4 lg:col-span-1"
          href="https://nyweekly.com/dating/photos-that-help-you-find-love-introducing-the-match-artist/"
          target="_blank"
        >
          <nuxt-img
            src="/images/social/news-mentions/new-york-weekly.png"
            alt=""
          />
        </a>
        <a
          class="col-span-4 lg:col-span-1"
          href="https://www.morningbrew.com/daily/stories/2023/02/22/inside-jobs-dating-app-photographer-nick-friesen"
          target="_blank"
        >
          <nuxt-img
            src="/images/social/news-mentions/morning-brew.webp"
            alt=""
          />
        </a>
      </div>
    </div>
  </section>
</template>
