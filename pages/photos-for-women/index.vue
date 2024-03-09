<script setup>
const { data: ip } = await useFetch("https://api.ipify.org/?format=json", {
  server: false,
});

const data = await $fetch(
  "https://thematchartist.com/.netlify/functions/findUserLocation"
);
const location = data ? JSON.parse(data).message : null;

const city = location ? location.city : null;
console.log("city", city);
const largeQuote1 = {
  quote: "This is one of the most fun things I’ve ever done.",
  author: "Match Artist Customer",
};

const largeQuote2 = {
  quote:
    "Before getting my pictures done with The Match Artist, I had been getting matches with women who are 5/10 off of Tinder. After getting my pictures done, I've been getting matches with women who are 10/10. This changes everything. I recommend this company if you are looking to get your pictures professionally taken.",
  author: "John G.",
};

useHead({
  title: "Online Dating Photos for Women",
  meta: [
    {
      name: "description",
      content:
        "Looking for a professional photographer to take your pictures? Click here to book a session with a dating photographer expert!",
    },
    {
      name: "og:description",
      content:
        "Looking for a professional photographer to take your pictures? Click here to book a session with a dating photographer expert!",
    },
    {
      name: "og:title",
      content: "Online Dating Photos for Women",
    },
    {
      name: "og:url",
      content: "https://thematchartist.com/photos-for-women",
    },
    {
      name: "og:image",
      content: "https://cdn.buttercms.com/SyfwUlPMRHqxm0lqpH4L",
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
  <div
    class="py-[200px] relative"
    :style="{
      backgroundImage: 'url(https://cdn.buttercms.com/En9qSrmQ5GfsqZD2j4WB)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <h1
      class="font-light z-10 relative text-[96px] leading-[96px] text-center text-white"
    >
      Online Dating Photos
    </h1>
    <p
      class="text-[26px] z-10 relative text-center tracking-[1px] leading-[44px] text-white"
    >
      For Women
    </p>

    <div
      class="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 z-0"
    />
  </div>

  <section>
    <p class="max-w-[800px] mx-auto text-[18px] py-[50px] px-6">
      Your photos are the core of your profile. We help you take the best
      pictures possible. Having the photos professionally taken is only part of
      the process. We also help you learn how to look and pose so you can look
      better in future photos.
    </p>
  </section>

  <!-- RESULT -->
  <div
    class="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#171717] text-white"
  >
    <div class="h-[800px] w-full relative">
      <img
        src="https://cdn.buttercms.com/ixgX23g2QQqVvm3zHAeZ"
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
        <li class="text-[20px] leading-[34px]">Go on better dates.</li>
        <li class="text-[20px]">Learn how to take better pictures.</li>
        <li class="text-[20px]">Improved Social Media Presence.</li>
      </ul>
    </article>
  </div>

  <LargeQuote v-bind="largeQuote1" />

  <!-- INCLUDED -->
  <div
    class="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#171717] text-white"
  >
    <article class="p-[70px] flex flex-col items-start">
      <h2
        class="font-bold text-[39px] tracking-[0.252px] leading-[40px] mx-auto border-b-[3px] pb-1 mb-[2.2rem]"
      >
        How it works
      </h2>

      <ul class="list-disc">
        <li class="text-[20px] leading-[34px]">
          Fill out the contact form and we'll describe the process on a call.
        </li>
        <li class="text-[20px]">
          Sign up, fill out your questionnaire, and book a call with your
          photographer.
        </li>
        <li class="text-[20px]">Plan logistics for your shoot.</li>
        <li class="text-[20px]">
          We'll shoot with you for 4-5 hours resulting in 200-300 edited photos.
        </li>
      </ul>
    </article>
    <div class="h-[800px] w-full relative">
      <img
        src="https://cdn.buttercms.com/ffytEyAKRyGhhIMhFghU"
        class="object-cover w-full h-full"
      />
    </div>
  </div>

  <section>
    <p class="max-w-[800px] mx-auto text-[18px] py-[50px] px-6">
      We are based in Austin, Dallas, Chicago, NY, and LA, however, we
      frequently shoot in 30+ cities per month. We occasionally visit other
      cities, please fill out the contact form and we will let you know when we
      are in a location near you.
    </p>
  </section>

  <!-- INQUIRE -->
  <div
    class="p-6 bg-white max-w-[800px] mx-auto flex-shrink-0 w-full flex flex-col items-center gap-8"
  >
    <ContactForm id="woman" />
  </div>

  <div class="max-w-[900px] mb-8 mx-auto text-center mt-4 px-6">
    <p>
      Each session includes coaching on posing and facial expressions to help
      you look better in both photos and real life. You’ll receive a booklet
      with advice about how to use your photos online, how to open women online,
      and other tips for your adventures online.
    </p>
  </div>

  <ConnectWithUs />
</template>
