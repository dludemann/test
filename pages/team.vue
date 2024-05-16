<script setup>
const team = [
  {
    name: "Shane White",
    title: "Founder",
    img: "/images/team/shane-2.jpeg",
    description:
      "Shane is the founder of a software company and a popular wedding DJ company. Shane’s passion for The Match artist started when Nick shot some photos one night and suggested he uploaded them to Tinder. After many dates later, he had a girlfriend and thought he could be helpful to other guys in search of love and relationships. In addition to being full time at The Match Artist, Shane enjoys piloting his plane, and running every day of the week. He guarantees your experience with The Match Artist will be memorable.",
  },
  {
    name: "Nick Friesen",
    title: "Founder / Photographer",
    img: "/images/team/nick-2.jpeg",
    description:
      "Nick ran a wedding and headshot photography company for years. He picked up a camera while studying piano performance in college and fell in love with portraits and facial expression coaching. Outside of coaching guys to look their best in photos, he enjoys coffee, playing piano, and spending time with his two dogs.",
  },
  {
    name: "Nate",
    title: "Photographer",
    img: "/images/team/nate.jpg",
    description:
      "Nate has been a professional photographer for over a decade now. He has a longstanding career in helping people gain newfound confidence while showing them a side of themselves they haven't seen before and in their very best light. By having explored a widely diverse aspect of the field he has accumulated over time, not only a vast understanding of creative dynamics and vision, but also directing fundamentals. He always makes the most of every experience and is very effective and strategic while being personable in every sense, making for a great working relationship and report.",
  },
  {
    name: "Shiloh",
    title: "Photographer",
    img: "/images/team/shiloh.jpeg",
    description:
      "Shiloh has photographed some of the top celebrities including Christopher Nolan, Seth Rogen, Jessica Chastain, and more. Based outside of San Francisco, in addition to photography he also enjoys writing, directing, and acting in films.",
  },
  {
    name: "Jason",
    title: "Photographer",
    img: "/images/team/jason.jpeg",
    description:
      "Jason has been shooting photos for 20+ years and has really fine tuned the art of natural looking portraits. Originally from California, he enjoys yoga, natural health, and playing guitar.",
  },
  {
    name: "Mike",
    title: "Photographer",
    img: "/images/team/mike-1.webp",
    description:
      "Mike is based in NY and has been shooting for 17 years. He was named Time Magazine's community Artist of the Year in 2022 and is an art educator in the Web3 space. Outside of shooting street + portrait photos, he's big into hiking, camping, and skating.",
  },
  {
    name: "Mike",
    title: "Photographer",
    img: "/images/team/mike-2.webp",
    description:
      "Originally from Topeka, Mike has a unique eye for intriguing portraits. In his spare time, he takes killer astrophotography photos, travels frequently, and is pretty nerdy about his tech. The Match Artist resonates with him because he actually met his wife on Tinder and together they have a relationship podcast.",
  },
  {
    name: "Marcos",
    title: "Photographer",
    img: "/images/team/marcos.jpeg",
    description:
      "Marcos Geary is a Venezuelan-American photographer. His passion for photography started as a young child living in the rural Andes of Venezuela documenting the world around him. He has since gained 10+ years of professional experience working as both a portrait and fashion photographer. In his spare time, he is a chef for private parties.",
  },
  {
    name: "Robby",
    title: "Dating Coach",
    img: "/images/team/robby.webp",
    description:
      "Robby is no stranger to the art and science of coaching men to tap into their inner confidence and unlock their true potential. With over a decade of coaching experience, this is not just a profession, it’s a passion, particularly when it comes to guiding men through dating and relationships. He is deep-rooted in evolutionary psychology and intersexual dynamics. When he’s not coaching, you’ll find Robby cooking, spending time at the gym, and traveling as much as possible.",
  },
  {
    name: "Allie",
    title: "Editor",
    img: "/images/team/allie.jpeg",
    description:
      "Allie makes sure to choose and edit the best photos from your shoot for maximum matches. She also enjoys helping create new content for Match Artist clients. Outside of The Match Artist, she enjoys improv, crossword puzzles, and hanging out with her husband and two dogs.",
  },
];

useHead({
  title: "Our Team",
  meta: [
    {
      name: "description",
      content: "Photo collection by The Match Artist",
    },
    {
      name: "og:description",
      content: "Photo collection by The Match Artist",
    },
    {
      name: "og:title",
      content: "Reviews",
    },
    {
      name: "og:url",
      content: "https://thematchartist.com/reviews",
    },
    {
      name: "og:image",
      content: "/images/camera-in-a-mirror.jpg",
    },
    {
      name: "og:site_name",
      content: "https://thematchartist.com",
    },
    {
      name: "og:type",
      content: "website",
    },
  ],
});
</script>

<template>
  <Header />

  <section class="py-[120px] mb-[150px]">
    <section class="container mx-auto">
      <h1
        class="text-center text-[56px] leading-[50px] lg:text-[96px] max-w-[800px] mx-auto font-bold lg:leading-[90px]"
      >
        Meet the Faces Behind the Lens
      </h1>

      <p class="text-center max-w-[600px] mx-auto mt-8 text-[20px]">
        Meet the talented team shaping visual narratives and capturing the
        essence of every story.
      </p>
    </section>

    <div class="flex gap-8 justify-center overflow-hidden mt-20 items-center">
      <div
        class="rounded-full overflow-hidden w-[124px] h-[124px] bg-gray-600 opacity-10 flex-shrink-0"
      >
        <img :src="team[6].img" class="object-cover h-full w-full" />
      </div>
      <div
        class="rounded-full overflow-hidden w-[148px] h-[148px] bg-gray-600 opacity-30 flex-shrink-0"
      >
        <img :src="team[5].img" class="object-cover h-full w-full" />
      </div>
      <div
        class="rounded-full overflow-hidden w-[188px] h-[188px] bg-gray-600 opacity-50 flex-shrink-0"
      >
        <img :src="team[4].img" class="object-cover h-full w-full" />
      </div>
      <div
        class="rounded-full overflow-hidden w-[212px] h-[212px] bg-gray-600 flex-shrink-0"
      >
        <img :src="team[0].img" class="object-cover h-full w-full" />
      </div>
      <div
        class="rounded-full overflow-hidden w-[188px] h-[188px] bg-gray-600 opacity-50 flex-shrink-0"
      >
        <img :src="team[1].img" class="object-cover h-full w-full" />
      </div>
      <div
        class="rounded-full overflow-hidden w-[148px] h-[148px] bg-gray-600 opacity-30 flex-shrink-0"
      >
        <img :src="team[2].img" class="object-cover h-full w-full" />
      </div>
      <div
        class="rounded-full overflow-hidden w-[124px] h-[124px] bg-gray-600 opacity-10 flex-shrink-0"
      >
        <img :src="team[3].img" class="object-cover h-full w-full" />
      </div>
    </div>
  </section>

  <section class="container mx-auto max-w-[1200px] text-[48px] px-6 py-20">
    <!-- GRID -->
    <div class="grid grid-cols-1 gap-16">
      <!-- TEAM MEMBER -->
      <div
        v-for="(member, index) in team"
        :key="member.name"
        class="text-center overflow-hidden flex gap-8 lg:gap-[96px] items-center flex-col"
        :class="index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'"
      >
        <div
          class="h-auto lg:h-[510px] w-full lg:w-[510px] bg-slate-500 overflow-hidden relative flex-shrink-0"
        >
          <img :src="member.img" class="object-cover h-full w-full" />
        </div>

        <article class="">
          <p class="font-bold text-heading-h1 text-left mb-4">
            {{ member.name }}
          </p>
          <p class="mb-8 text-[18px] text-left nice-text uppercase font-medium">
            {{ member.title }}
          </p>
          <p class="text-[18px] text-gray-700 text-left">
            {{ member.description }}
          </p>
        </article>
      </div>
    </div>
  </section>

  <SuccessStories />
  <WeAreExperts />
</template>

<style>
.nice-text {
  background: var(
    --Gold-linear,
    linear-gradient(351deg, #c08850 2.18%, #ffd79e 93.46%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
