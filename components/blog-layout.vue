<template>
  <Hero :block="heroData" />
  <section class="font-display">
    <div v-for="post in posts">
      <article class="grid lg:grid-cols-2 mx-auto">
        <div class="blog-post-thumb">
          <a :href="post._path">
            <nuxt-img
              class="h-full object-cover max-h-[550px]"
              :src="post.featured_image"
              :alt="post.featured_image_alt"
              loading="eager" />
          </a>
        </div>
        <div class="p-[70px]">
          <h2
            class="mb-[50px] font-bold text-[31px] tracking-[0.252px] leading-[40px]">
            {{ post.title }}
          </h2>
          <p
            class="border-t-2 border-black text-[18px] mb-[20px] inline-flex"
            v-html="formatDate(post.created)"></p>
          <p
            class="text-[18px] mb-[20px] leading-[30.6px] tracking-[0.252px] text-[#171717]">
            {{ post.summary }}
          </p>
          <a class="text-[#BF9441] text-[18px]" :href="post._path"
            >Read full post</a
          >
        </div>
      </article>
    </div>
  </section>
  <section id="next" v-if="hasPaginatinon">
    <PaginationControls
      :pageNumber="pageNumber"
      :numberOfPages="numberOfPages"
      :urlPrefix="urlPrefix" />
  </section>
  <SocialBanner :block="socialBannerData" />
</template>

<script setup>
import { DateTime } from 'luxon';

const { posts, pageNumber, numberOfPages, urlPrefix } = defineProps({
  posts: Array,
  pageNumber: {
    type: Number,
    default() {
      return 1;
    },
  },
  numberOfPages: {
    type: Number,
    default() {
      return 1;
    },
  },
  urlPrefix: {
    type: String,
    default() {
      return 'blog';
    },
  },
});

const hasPaginatinon = numberOfPages > 1;

const formatDate = (date) => {
  return DateTime.fromISO(date).toFormat('LLL dd');
};

const socialBannerData = {
  heading: 'Connect with us',
  social_media: [
    {
      path: 'https://www.facebook.com/TheMatchArtist',
      image: {
        src: '/images/social/media/facebook.svg',
        alt: 'Facebook',
        opacity: 0.25,
      },
    },
    {
      path: 'https://www.instagram.com/thematchartist/',
      image: {
        src: '/images/social/media/instagram.svg',
        alt: 'Instagram',
        opacity: 0.25,
      },
    },
  ],
  news_mentions: [
    {
      path: 'https://www.theamericanreporter.com/the-number-one-way-to-turn-your-online-dating-profile-around-the-match-artist/',
      image: {
        src: '/images/social/news-mentions/the-american-reporter.png',
        alt: 'The American Reporter',
      },
    },
    {
      path: 'https://www.entrepreneur.com/article/430103',
      image: {
        src: '/images/social/news-mentions/entrepeneur.png',
        alt: 'Entrepeneur',
      },
    },
    {
      path: 'https://nyweekly.com/dating/photos-that-help-you-find-love-introducing-the-match-artist/',
      image: {
        src: '/images/social/news-mentions/new-york-weekly.png',
        alt: 'New York Weekly',
      },
    },
    {
      path: 'https://www.morningbrew.com/daily/stories/2023/02/22/inside-jobs-dating-app-photographer-nick-friesen',
      image: {
        src: '/images/social/news-mentions/morning-brew.webp',
        alt: 'Morning Brew',
      },
    },
  ],
};

const heroData = {
  _bookshop_name: 'hero',
  background_color: null,
  background_image: '/images/backgrounds/blog.png',
  background_filters: {
    brightness: 1,
    blur: 0,
  },
  pre_title: {
    text: null,
    text_color: 'white',
    top_spacing: null,
    bottom_spacing: null,
  },
  title: {
    text: 'Our Blog',
    text_color: 'white',
    heading_style: 'h1',
    top_spacing: null,
    bottom_spacing: null,
  },
  post_title: {
    text: 'Sharing tips for online dating success',
    text_color: 'white',
    top_spacing: null,
    bottom_spacing: null,
  },
};
</script>
