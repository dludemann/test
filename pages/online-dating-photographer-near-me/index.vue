<script setup>
const { data: ip } = await useFetch("https://api.ipify.org/?format=json", {
  server: false,
});

const data = await $fetch(
  "https://thematchartist.com/.netlify/functions/findUserLocation"
);

console.log("data", data);

const location = data ? JSON.parse(data).message : null;

const city = location ? location.city : null;
console.log("city", city);

const headerString = city
  ? `${location.city}, ${location.state}`
  : "Across The United States";

const largeQuote1 = {
  quote:
    "Before getting pics taken by The Match Artist, I was getting 2-3 tinder matches a week. After getting new high value pictures from The Match Artist and tweaking my bio I was getting over 5 matches per day with really great girls. The results truly speak for themselves.",
  author: "Cameron T.",
};

const largeQuote2 = {
  quote:
    "Before getting my pictures done with The Match Artist, I had been getting matches with women who are 5/10 off of Tinder. After getting my pictures done, I've been getting matches with women who are 10/10. This changes everything. I recommend this company if you are looking to get your pictures professionally taken.",
  author: "John G.",
};
useHead({
  title: "Online Dating Photos",
  meta: [
    {
      name: "description",
      content:
        "Online Dating Photos. &quot;Before getting my pics taken by The Match Artist, I was getting 2-3 matches a week. Now I get 30+ matches every week!",
    },
    {
      name: "og:description",
      content:
        "Online Dating Photos. &quot;Before getting my pics taken by The Match Artist, I was getting 2-3 matches a week. Now I get 30+ matches every week!",
    },
  ],
});
</script>

<template>
  <Header />

  <div
    class="py-[50px] lg:py-[150px] relative flex flex-col items-center"
    :style="{
      backgroundImage: 'url(/images/assets/ray.jpg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <p
      class="text-[24px] lg:text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white"
    >
      Online Dating Photos
    </p>
    <h1
      class="font-light z-10 relative text-[32px] lg:text-[96px] lg:leading-[96px] text-white max-w-[200px] lg:max-w-none text-center"
    >
      {{ headerString }}
    </h1>

    <div
      class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0"
    />
  </div>

  <LargeQuote v-bind="largeQuote1" />

  <!-- RESULT -->
  <div
    class="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#171717] text-white"
  >
    <div class="h-[300px] lg:h-[896px] w-full relative">
      <img
        src="https://cdn.buttercms.com/5qBc3FSbuOUGnsrjmOwY"
        class="object-cover w-full h-full"
      />
    </div>
    <article class="p-[70px] flex flex-col items-start">
      <h2
        class="font-bold text-[39px] tracking-[0.252px] leading-[40px] mx-auto border-b-[3px] pb-1 mb-[2.2rem]"
      >
        Results
      </h2>

      <ul class="list-disc">
        <li class="text-[20px] leading-[34px]">Better Dating Profile.</li>
        <li class="text-[20px]">Go on Better Dates.</li>
        <li class="text-[20px]">Improved Social Media Presence.</li>
      </ul>
    </article>
  </div>

  <!-- TESTIMONIALS -->
  <div
    class="flex justify-center flex-col lg:flex-row py-[50px] px-5 gap-8 container mx-auto"
  >
    <div class="testimonial w-full lg:max-h-[184px] lg:max-w-[350px]">
      <img
        src="https://cdn.buttercms.com/quality=v:80/compress/resize=width:625,height:329,fit:crop/21HHK9WrQoacYZBJRc2A"
        class="testimonial__img v-lazy-image v-lazy-image-loaded"
        width="625"
        height="329"
        alt="Screenshot of a text message: I finally understand why people say it's overwhelming once you update yhour pics. Literally too many convos to keep track of lol."
        sizes="(min-width: 900px) 350px, 100vw"
      />
      <p class="testimonial__author text-center">- Ray C.</p>
    </div>

    <div class="testimonial w-full lg:max-h-[184px] lg:max-w-[350px]">
      <img
        src="https://cdn.buttercms.com/quality=v:80/compress/resize=width:625,height:329,fit:crop/QRK0AHz8QhaP4hK3KudF"
        class="testimonial__img v-lazy-image v-lazy-image-loaded"
        width="625"
        height="329"
        alt="Screenshot of a text message: Definitely gotten more matches in the past 24 hours on hinge than I've gotten in the past 2 months. I'm very appreciative of the work."
      />
      <p class="testimonial__author text-center">- Ryan K.</p>
    </div>
  </div>

  <!-- INCLUDED -->
  <div
    class="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#171717] text-white"
  >
    <article class="p-[70px] flex flex-col items-start">
      <h2
        class="font-bold text-[39px] tracking-[0.252px] leading-[40px] mx-auto border-b-[3px] pb-1 mb-[2.2rem]"
      >
        Every Photoshoot Includes
      </h2>

      <ul class="list-disc">
        <li class="text-[20px] leading-[34px]">
          Facial expression & body language coaching.
        </li>
        <li class="text-[20px]">10-15 outfit changes.</li>
        <li class="text-[20px]">
          4-5 hour shoot demonstrating your lifestyle and hobbies.
        </li>
        <li class="text-[20px]">200-300 edited photos.</li>
        <li class="text-[20px]">
          Advice on your best photos and Instagram optimization.
        </li>
        <li class="text-[20px]">
          Help with apps and which premium features work well.
        </li>
      </ul>
    </article>
    <div class="h-[300px] lg:h-[896px] w-full relative">
      <img
        src="https://cdn.buttercms.com/9XdIv9saQQCOtNAoV2D9"
        class="object-cover w-full h-full"
      />
    </div>
  </div>

  <LargeQuote v-bind="largeQuote2" />

  <!-- INQUIRE -->
  <div
    class="p-6 bg-white max-w-[800px] mx-auto flex-shrink-0 w-full flex flex-col items-center gap-8"
  >
    <p class="font-bold font-accent text-[50px]">Inquire Now</p>
    <ContactForm v-if="city" :has-city-input="false" :city="city" />
    <ContactForm v-else :has-city-input="false" />
  </div>

  <div class="max-w-[900px] mx-auto text-center mt-4 mb-32">
    <p>
      Each session includes coaching on posing and facial expressions to help
      you look better in both photos and real life. You’ll receive a booklet
      with advice about how to use your photos online, how to open women online,
      and other tips for your adventures online.
    </p>
  </div>

  <ConnectWithUs />
</template>
