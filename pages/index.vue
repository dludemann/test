<script setup>
import { onMounted, reactive, ref } from "vue";

// ==========================================================
// CITY
// ==========================================================
const city = ref("Austin");
const state = ref("TX");

onMounted(async () => {
  try {
    const data = await $fetch(
      "https://thematchartist.com/.netlify/functions/findUserLocation"
    );

    const location = data ? JSON.parse(data).message : null;

    city.value = location ? location.city : "Austin";
    state.value = location ? location.state : "TX";
  } catch (error) {
    console.error("Failed to fetch location:", error);
  }
});
// ==========================================================
// EDIT BELOW HERE
// ==========================================================

const faqs = reactive([
  {
    question: "Where is The Match Artist located?",
    answer:
      "The Match Artist is headquartered in Texas but we provide services in all cities in the US",
    open: true,
  },
  {
    question: "How many photos do I need for my dating profile?",
    answer:
      "For platforms like Tinder, Bumble, Hinge, Dil Mil, and Match.com, a diverse set of 5-6 photos is recommended. This allows potential matches to see various aspects of your personality and interests. High-quality photos from a professional shoot can also be repurposed for other online profiles or CVs. Most people opt for around 16 quality photos to use across different platforms.",
    open: false,
  },
  {
    question:
      "What's the best online dating tip from a photographer's perspective?",
    answer:
      "Always be genuine! Whether you're on Tinder, Bumble, Hinge, Dil Mil, or Match.com, it's essential to portray your true self. Authenticity helps you attract more meaningful connections.",
    open: false,
  },
  {
    question: "What makes a bad profile picture?",
    answer:
      "Using the same photo across Tinder, Bumble, Hinge, Dil Mil, and Match.com can be repetitive. Avoid staged environments, excessive filters, and inauthentic portrayals. Each platform has its vibe, so tailor your photos to fit the app's audience while staying true to yourself.",
    open: false,
  },
  {
    question: "Are selfies good for online dating photos?",
    answer:
      "In general, no – but there are exceptions! A quick selfie can add fun and personality to your Tinder or Bumble profile but is less suited for more serious platforms like Match.com or Hinge. It’s best to invest in professional dating photos if your goal is to attract more serious relationships.",
    open: false,
  },
  {
    question: "What should I wear for my dating profile photoshoot?",
    answer:
      "When deciding what to wear to your dating photoshoot, it’s important to consider the platform(s). Casual attire might be more fitting for Tinder or Bumble, while you might opt for a slightly more polished look for Match.com or Dil Mil. Regardless of the platform, be it Hinge or any other, always wear what makes you feel confident and represents your personal style.",
    open: false,
  },
]);

const toggleFAQ = (index) => {
  faqs[index].open = !faqs[index].open;
};

// HERO IMAGE
const heroImage =
  "https://images.thematchartist.com/images/tinder-dating-profile.jpg";

// GO ON BETTER DATES
const captureSparkImage =
  "https://images.thematchartist.com/images/match-artist-photographer.jpg";
const bestAngleImage = "/images/home/best-angle.jpg";
const personalizedImage = "/images/home/photoshoot.jpg";

// TESTIMONIAL IMAGE
const testimonialImage =
  "https://tma.imgix.net/images/Missed%20Images/iMDvC2IaQHaryK9.jpg";
const testimonialImageHeadshot =
  "https://images.thematchartist.com/images/reviews/Karthik.jpg";

// LOOK CONFIDENT
const confidentBefore = "/images/home/before.jpg";
const confidentAfter = "/images/home/after.jpg";

// IMPORTANCE OF DATING PHOTOGRAPHY
const youngMenImage =
  "https://tma.imgix.net/images/Missed%20Images/embeddable_746d.jpg";
const belowAverageMen =
  "https://tma.imgix.net/images/Missed%20Images/embeddable_b49f.jpg";
const olderWomen = "https://tma.imgix.net/images/focused-woman.JPG";
const anyoneResults =
  "https://tma.imgix.net/images/Missed%20Images/embeddable_9571.jpg";

// FIVE ESSENTIAL DATING PHOTOS
const essentialDatingPhotos = [
  "https://tma.imgix.net/images/Missed%20Images/smirk-1343.jpg",
  "https://tma.imgix.net/images/portfolio/WtfkLBeSRWp9oOyJ1STg.jpg",
  "https://tma.imgix.net/images/work/flying-hero.webp",
  "https://tma.imgix.net/images/portfolio/qya7eF3TziIJyxKzNwGR.jpg",
  "https://tma.imgix.net/images/selfie.jpg",
];

// ==========================================================
// STOP EDITING HERE
// ==========================================================

useHead({
  title: "Dating App Profile Photographer | The Match Artist",
  meta: [
    {
      name: "description",
      content:
        "Swipe with confidence with professional, eye-catching dating profile photos. The Match Artist specializes in online dating photography for Tinder, Bumble, Hinge and more",
    },
    {
      name: "og:description",
      content:
        "Swipe with confidence with professional, eye-catching dating profile photos. The Match Artist specializes in online dating photography for Tinder, Bumble, Hinge and more",
    },
    {
      name: "og:title",
      content: "Online Dating Photographer | The Match Artist",
    },
    {
      name: "og:url",
      content: "https://thematchartist.com",
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

const imageBlock = {
  _bookshop_name: "ImageSlider",
  background_color: "#090303",
  text_color: "#FFFFFF",
  title: "Full Photoshoot In Different Settings To Capture The Best You",
  description:
    "Our approach involves capturing a multitude of photos to ensure we curate a selection that shows your personality, helping you stand out on dating platforms.",
  background_image: "/images/backgrounds/city-background-detailed.jpeg",
  images: [
    "https://photostma.blob.core.windows.net/marketing/tejesh-tma-0033.jpeg",
    "https://photostma.blob.core.windows.net/marketing/jeff.jpeg",
    "https://photostma.blob.core.windows.net/marketing/justen-tma-9079.jpeg",
    "https://photostma.blob.core.windows.net/marketing/DSCF7389222.jpeg",
    "https://photostma.blob.core.windows.net/marketing/rohith-tma-2-191.jpeg",
    "https://photostma.blob.core.windows.net/marketing/connor-tma-210.jpeg",
    "https://photostma.blob.core.windows.net/marketing/DSCF5511.jpeg",
    "https://photostma.blob.core.windows.net/marketing/DSCF4069.jpeg",
    "https://photostma.blob.core.windows.net/marketing/ian-tma-0396.jpeg",
    "https://photostma.blob.core.windows.net/marketing/shakked-tma-06.jpeg",
    "https://photostma.blob.core.windows.net/marketing/juan-1172.jpeg",
  ],
  testimonial: {
    text: "I was hesitant to invest in what I thought were glorified glamour shots, and worried that the results would be a little cheesy... but I was also fed up with hours of mediocre results with my mirror selfies and cropped group photos... I was intimidated going into it but that was immediately alleviated. They did a great job of making me relaxed, comfortable, and confident.  And the results... WOW! Way more matches and likes, but the increase in the follow-through rate was the noticeable difference. No more expired Bumble matches waiting for that first outreach!",
    person: "Cameron T.",
  },
};

const leftRightForm = computed(() => ({
  _bookshop_name: "LeftRightForm",
  background_color: "#090303",
  text_color: "#000000",
  title: `Professional Dating Photography in ${city.value}, ${state.value}`,
  description:
    "We tailor your photo experience with us to highlight things you enjoy doing most. Whether it's kayaking, rock climbing, reading, or drinking coffee, you'll get more matches with a varied profile filled with your talents.",
  list: [
    {
      icon: "/icons/green-tick.svg",
      text: "Better dating profile",
    },
    {
      icon: "/icons/green-tick.svg",
      text: "Go on better dates",
    },
    {
      icon: "/icons/green-tick.svg",
      text: "Find your partner faster",
    },
  ],
  form: {
    title: "Inquire Now",
    city_input: false,
    city: city.value,
    state,
  },
}));
</script>
<template>
  <NuxtLayout>
    <!-- HERO -->
    <section class="bg-black overflow-hidden">
      <section
        class="container mx-auto flex flex-col lg:flex-row items-center justify-center pb-[60px] relative p-6"
      >
        <div class="w-full lg:max-w-[600px] relative z-10">
          <h1
            class="text-[56px] leading-[50px] lg:text-[90px] lg:leading-[100.6px] font-bold text-white mb-8"
          >
            Online Dating Profile Photographer
          </h1>
          <p class="text-white text-[22.5px] font-body leadig-[36px]">
            We transform online dating profiles on dating apps like Tinder,
            Bumble, and Hinge through intriguing photography, facial expression
            coaching, and showing you off in your element. Based in Texas we
            shoot all over the US.
          </p>

          <div class="flex flex-col lg:flex-row gap-6 mt-8">
            <a href="#contact">
              <button
                class="flex bg-[#990800] justify-center py-[12px] px-[24px] text-white font-bold w-full lg:w-auto items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                >
                  <path
                    d="M3 0V2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V0H13V2H5V0H3ZM2 7H16V18H2V7Z"
                    fill="white"
                  />
                </svg>

                BOOK A CALL
              </button>
            </a>
            <nuxt-link href="/how-it-works">
              <button
                class="flex bg-[#171717] justify-center py-[12px] px-[24px] text-white font-bold w-full lg:w-auto items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 2L7 4H4C2.89844 4 2 4.89844 2 6V18C2 19.1016 2.89844 20 4 20H20C21.1016 20 22 19.1016 22 18V6C22 4.89844 21.1016 4 20 4H17L15 2H9ZM12 7C14.8008 7 17 9.19922 17 12C17 14.8008 14.8008 17 12 17C9.19922 17 7 14.8008 7 12C7 9.19922 9.19922 7 12 7ZM12 8.5C10.0664 8.5 8.5 10.0664 8.5 12C8.5 13.9336 10.0664 15.5 12 15.5C13.9336 15.5 15.5 13.9336 15.5 12C15.5 10.0664 13.9336 8.5 12 8.5Z"
                    fill="white"
                    fill-opacity="0.8"
                  />
                </svg>

                HOW IT WORKS
              </button>
            </nuxt-link>
          </div>
        </div>

        <div
          class="absolute top-0 -right-32 w-[500px] h-[800px] lg:relative opacity-80 lg:opacity-100"
        >
          <img :src="heroImage" format="webp" alt="Smiling Man" />
        </div>
      </section>
    </section>

    <!--  PHOTO SECTION -->
    <ImageSlider :block="imageBlock" />

    <!-- FORM -->
    <LeftRightForm :block="leftRightForm" />

    <!-- GO ON BETTER DATES -->
    <section class="bg-black overflow-hidden">
      <section class="container mx-auto lg:py-[110px]">
        <article class="container mx-auto text-center max-w-[800px] mb-16">
          <h2 class="text-white font-bold text-heading-h1 font-accent">
            Confidence-Boosting Online Dating Photography
          </h2>
          <p
            class="text-[#D9D9D9] mx-auto max-w-[920px] text-[22px] leading-[30px] mt-4"
          >
            When your photos highlight your personality, potential dates are
            more likely to explore your profile. We work with you to capture
            photos that emphasize your passions and personality to help you
            swipe with confidence and attract people who share your interests.
          </p>
        </article>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto px-6"
        >
          <div
            class="px-8 py-9 justify-end flex flex-col rounded-xl relative overflow-hidden"
          >
            <div class="flex flex-col gap-4 relative z-10">
              <h3 class="text-white text-heading-h2">Capture Your Spark</h3>
              <p class="text-[#ECECEC]">
                Our photographers capture your personality and vibe to make you
                shine on dating apps.
              </p>
            </div>

            <div class="absolute left-0 top-0 h-full w-full">
              <img
                :src="captureSparkImage"
                format="png"
                alt="Man holding camera facing forward"
                class="object-cover h-full w-full"
              />
            </div>
          </div>

          <div class="flex flex-col gap-8">
            <div
              class="px-8 py-9 justify-end flex flex-col rounded-xl h-[345px] relative overflow-hidden"
            >
              <div class="flex flex-col gap-4 z-10 relative">
                <h3 class="text-white text-heading-h2">
                  Find your best angles
                </h3>
                <p class="text-[#ECECEC]">
                  We'll coach you on posing and expressions, finding your best
                  angles for standout profile pictures.
                </p>
              </div>

              <div class="absolute left-0 top-0 h-full">
                <img
                  :src="bestAngleImage"
                  format="png"
                  alt="Man holding camera facing forward"
                  className="h-full object-cover"
                />
              </div>
            </div>

            <div
              class="px-8 py-9 justify-end flex flex-col rounded-xl h-[345px] relative overflow-hidden"
            >
              <div class="flex flex-col gap-4 z-10 relative">
                <h3 class="text-white text-heading-h2">
                  Personalized photoshoot
                </h3>
                <p class="text-[#ECECEC]">
                  We delve into your hobbies and passions to create images that
                  narrate your unique story.
                </p>
              </div>

              <div class="absolute left-0 top-0 h-full">
                <img
                  :src="personalizedImage"
                  format="png"
                  alt="Man holding camera facing forward"
                  className="h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <!-- TESTIMONIAL -->
    <section class="bg-black overflow-hidden">
      <section class="container mx-auto lg:py-[110px] relative p-6 lg:p-0">
        <div
          class="bg-[#222326] p-4 lg:p-10 rounded-xl flex flex-col lg:flex-row gap-8"
        >
          <div
            class="w-full h-[400px] lg:w-[472px] lg:h-[521px] relative flex-shrink-0"
          >
            <img
              :src="testimonialImage"
              format="png"
              alt="Man holding camera facing forward"
              class="object-cover h-full w-full"
            />
          </div>

          <div class="flex flex-col justify-center">
            <p class="text-white text-heading-h5 lg:text-heading-h3 mb-8">
              “It's night and day difference. Before The Match Artist hardly
              anyone swiped right. Afterwards I had more matches than I knew
              what to do with. I eventually found my partner with these new
              photos and we are getting married in October.”
            </p>

            <div class="w-14 h-14 rounded-full bg-slate-700 overflow-hidden">
              <img
                :src="testimonialImageHeadshot"
                format="png"
                alt="Man holding camera facing forward"
                class="object-cover h-full w-full"
              />
            </div>

            <div class="mt-4">
              <p class="text-white font-medium text-[20px]">Karthik J.</p>
              <p class="text-gray-200">San Francisco</p>
            </div>
          </div>
        </div>
        <div class="absolute right-10 bottom-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
          >
            <g clip-path="url(#clip0_2455_3066)">
              <path
                d="M88.0014 32C92.8989 31.9993 97.6006 33.9235 101.093 37.3575C104.584 40.7916 106.587 45.4604 106.668 50.3573C107.148 54.9707 107.079 61.776 103.959 69.632C100.769 77.664 94.5507 86.4213 83.2014 94.9333C82.6411 95.3536 82.0035 95.6593 81.325 95.8331C80.6465 96.007 79.9405 96.0454 79.2471 95.9464C77.8469 95.7464 76.5834 94.9983 75.7347 93.8667C74.886 92.7351 74.5216 91.3127 74.7216 89.9124C74.9217 88.5121 75.6698 87.2487 76.8014 86.4C85.1427 80.144 89.9214 74.064 92.6574 68.7467C90.0922 69.4054 87.4163 69.5108 84.8073 69.0558C82.1983 68.6008 79.716 67.5958 77.5253 66.1077C75.3346 64.6195 73.4856 62.6823 72.1012 60.4246C70.7168 58.1669 69.8286 55.6404 69.4957 53.0131C69.1628 50.3857 69.3928 47.7176 70.1704 45.186C70.948 42.6543 72.2553 40.3171 74.0057 38.3296C75.756 36.3421 77.9092 34.7498 80.3223 33.6585C82.7354 32.5672 85.353 32.0018 88.0014 32ZM40.0014 32C44.8989 31.9993 49.6006 33.9235 53.0925 37.3575C56.5844 40.7916 58.5869 45.4604 58.668 50.3573C59.148 54.9707 59.0787 61.776 55.9587 69.632C52.7747 77.664 46.5507 86.4213 35.2014 94.9333C34.6411 95.3536 34.0035 95.6593 33.325 95.8331C32.6465 96.007 31.9405 96.0454 31.2471 95.9464C29.8469 95.7464 28.5834 94.9983 27.7347 93.8667C26.886 92.7351 26.5216 91.3127 26.7216 89.9124C26.9217 88.5121 27.6698 87.2487 28.8014 86.4C37.1427 80.144 41.9214 74.064 44.6574 68.7467C42.0922 69.4054 39.4163 69.5108 36.8073 69.0558C34.1983 68.6008 31.716 67.5958 29.5253 66.1077C27.3346 64.6195 25.4856 62.6823 24.1012 60.4246C22.7168 58.1669 21.8286 55.6404 21.4957 53.0131C21.1628 50.3857 21.3928 47.7176 22.1704 45.186C22.948 42.6543 24.2554 40.3171 26.0057 38.3296C27.756 36.3421 29.9092 34.7498 32.3223 33.6585C34.7354 32.5672 37.353 32.0018 40.0014 32Z"
                fill="#CE1B1B"
              />
            </g>
            <defs>
              <clipPath id="clip0_2455_3066">
                <rect width="128" height="128" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </section>
    </section>

    <!-- LOOK CONFIDENT -->
    <section class="bg-black overflow-hidden lg:py-40">
      <section
        class="container mx-auto lg:py-[110px] relative flex gap-20 flex-col lg:flex-row p-6 lg:p-0"
      >
        <div>
          <article
            class="container mx-auto text-center lg:text-left max-w-[800px] mb-16"
          >
            <h2 class="text-white font-bold text-heading-h1 font-accent">
              Look Confident With Your Dating Profile
            </h2>
            <p
              class="text-[#D9D9D9] mx-auto max-w-[820px] text-[22px] leading-[30px] mt-4"
            >
              Our photographers excel in body language and facial expressions,
              creating photos that captivate. Your revamped photos will showcase
              your personality and interests, ensuring they aren't just scrolled
              past.
            </p>
          </article>

          <ul class="divide-y divide-[#2a2a2a]">
            <li class="flex gap-4 items-center py-6">
              <div class="w-[48px] h-[48px]">
                <img src="/images/home/checkmark.svg" />
              </div>
              <p class="text-[#ECECEC] text-body-large">
                Boost your profile's visibility
              </p>
            </li>
            <li class="flex gap-4 items-center py-6">
              <div class="w-[48px] h-[48px]">
                <img src="/images/home/checkmark.svg" />
              </div>
              <p class="text-[#ECECEC] text-body-large">
                Get them curious about who you are
              </p>
            </li>
            <li class="flex gap-4 items-center py-6">
              <div class="w-[48px] h-[48px]">
                <img src="/images/home/checkmark.svg" />
              </div>
              <p class="text-[#ECECEC] text-body-large">
                Attract genuine matches
              </p>
            </li>
            <li class="flex gap-4 items-center py-6">
              <div class="w-[48px] h-[48px]">
                <img src="/images/home/checkmark.svg" />
              </div>
              <p class="text-[#ECECEC] text-body-large">
                Show off the real you
              </p>
            </li>
          </ul>

          <a href="#contact">
            <button
              class="flex bg-[#990800] w-full justify-center py-[12px] px-[24px] text-white font-bold lg:w-auto items-center gap-3 mt-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M3 0V2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V0H13V2H5V0H3ZM2 7H16V18H2V7Z"
                  fill="white"
                />
              </svg>

              BOOK A CALL
            </button>
          </a>
        </div>

        <div class="w-full lg:w-[475px] flex-shrink-0 flex flex-col gap-8">
          <div class="rounded-xl overflow-hidden relative w-full h-[360px]">
            <div
              class="absolute top-5 left-5 font-medium rounded-full uppercase z-10 bg-black text-white bg-opacity-50 px-6 py-4"
            >
              Before
            </div>

            <img
              :src="confidentBefore"
              format="png"
              alt="Man holding camera facing forward"
              class="object-cover h-full w-full"
            />
          </div>

          <div class="rounded-xl overflow-hidden relative w-full h-[360px]">
            <div
              class="absolute top-5 left-5 font-medium rounded-full uppercase z-10 bg-black text-white bg-opacity-50 px-6 py-4"
            >
              AFTER
            </div>

            <img
              :src="confidentAfter"
              format="png"
              alt="Man holding camera facing forward"
              class="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </section>

    <!-- OPTIMIZE DATING APPS -->
    <section class="bg-black overflow-hidden">
      <section
        class="container mx-auto pt-[110px] relative flex flex-col-reverse lg:flex-row gap-20 px-6 lg:p-0"
      >
        <div>
          <img
            src="/images/home/dating-apps.png"
            format="png"
            alt="Man holding camera facing forward"
            class="object-cover h-full w-full"
          />
        </div>

        <div class="flex items-center">
          <article
            class="container mx-auto text-center lg:text-left max-w-[800px] mb-16"
          >
            <h2 class="text-white font-bold text-heading-h1 font-accent">
              Perfect for Tinder, Bumble, Hinge, Match.com & More
            </h2>
            <p
              class="text-[#D9D9D9] mx-auto max-w-[820px] text-[22px] leading-[30px] mt-4"
            >
              No matter the app, you deserve a stand-out profile that draws in
              high-quality matches. Whether you’re casually dating or looking
              for something more long-term, a well-crafted dating profile holds
              the key to attracting potential dates. We offer photography for
              dating apps like Tinder, Dil Mil, Bumble, and Hinge.
            </p>
            <p
              class="text-[#D9D9D9] mx-auto max-w-[820px] text-[22px] leading-[30px] mt-4"
            >
              Ready to meet your match? Get started with dating profile
              photography today!
            </p>

            <a href="#contact">
              <button
                class="flex bg-[#990800] justify-center py-[12px] px-[24px] text-white font-bold w-full lg:w-auto items-center gap-3 mt-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                >
                  <path
                    d="M3 0V2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V0H13V2H5V0H3ZM2 7H16V18H2V7Z"
                    fill="white"
                  />
                </svg>

                BOOK A CALL
              </button>
            </a>
          </article>
        </div>
      </section>
    </section>

    <section class="bg-[#E5E5E5] lg:py-[80px] overflow-hidden">
      <div
        class="container mx-auto relative flex flex-col gap-8 lg:flex-row justify-end"
      >
        <article class="max-w-[560px] w-full p-4">
          <h2
            class="font-bold text-[28px] leading-[33.6px] tracking-[-0.56px] lg:text-heading-h2 font-display"
          >
            Why Hire a Photographer for Dating Profile Pictures
          </h2>
          <div class="bg-primary-500 w-[120px] h-[10px] my-8" />
          <p class="text-20px">
            We get it - Online dating can sometimes feel like a losing game.
          </p>
          <br />
          <p class="text-20px">
            You have a matter of seconds to make a first impression, and you
            feel like you are missing out on matches because they don’t give
            your profile a fair shot. That’s why your photos are so important –
            they are the first thing a potential date sees before they decide to
            swipe right or left.
          </p>
          <br />
          <p class="text-20px">
            At The Match Artist, we help you get more matches by leveling up
            your dating profile with authentic, confidence-boosting photography.
            It’s time to attract people who are excited to get to know YOU!
          </p>

          <a href="#contact">
            <button
              class="flex bg-[#990800] w-full justify-center py-[12px] px-[24px] text-white font-bold lg:w-auto items-center gap-3 mt-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <path
                  d="M3 0V2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V0H13V2H5V0H3ZM2 7H16V18H2V7Z"
                  fill="white"
                />
              </svg>

              BOOK A CALL
            </button>
          </a>
        </article>

        <div class="h-[350px] lg:h-auto w-full relative mb-8">
          <div
            class="relative lg:absolute w-[200px] lg:w-auto top-[10px] lg:top-0 h-full lg:h-auto overflow-hidden -right-1/4 lg:right-1/4"
          >
            <phone-mockup city="Chicago" state="IL" />
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto bg-[#F4F4F4] py-20 px-6 lg:p-20 mt-20">
      <h2
        class="font-bold text-center max-w-[800px] mx-auto text-[28px] leading-[33.6px] tracking-[-0.56px] lg:text-heading-h2 font-display"
      >
        You Might Need a Dating App Photographer if You are…
      </h2>

      <ul class="mt-[56px] flex flex-col gap-8">
        <li class="flex flex-col-reverse lg:flex-row gap-10">
          <div
            class="w-full lg:w-[280px] h-[300px] bg-gray-800 flex-shrink-0 overflow-hidden relative"
          >
            <img
              :src="youngMenImage"
              format="png"
              alt="Man holding camera facing forward"
              class="object-cover h-full w-full"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div class="text-heading-h2">
              Ready to Look More Mature & Confident
            </div>
            <p>
              Even the smallest changes to body language can lead to more online
              dating success. If you are interested in attracting more women
              your age, it’s time to step up your profile with more mature,
              professional-looking photos.
            </p>
          </div>
        </li>
        <div class="block lg:hidden h-px w-full bg-gray-300 my-4" />
        <li class="flex flex-col-reverse lg:flex-row gap-10">
          <div
            class="w-full lg:w-[280px] h-[300px] bg-gray-800 flex-shrink-0 overflow-hidden relative"
          >
            <img
              :src="belowAverageMen"
              format="png"
              alt="Man holding camera facing forward"
              class="object-cover h-full w-full"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div class="text-heading-h2">
              Insecure About Your Looks But Want to Attract Women
            </div>
            <p>
              Every man can meet their match with the right photo cues. At The
              Match Artist, we coach you on body language and facial expressions
              to capture your very best angles and attract women who are
              interested in you. We help you put your best foot forward!
            </p>
          </div>
        </li>
        <div class="block lg:hidden h-px w-full bg-gray-300 my-4" />

        <li class="flex flex-col-reverse lg:flex-row gap-10">
          <div
            class="w-full lg:w-[280px] h-[300px] bg-gray-800 flex-shrink-0 overflow-hidden relative"
          >
            <img
              :src="olderWomen"
              format="png"
              alt="Man holding camera facing forward"
              class="object-cover h-full w-full"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div class="text-heading-h2">A Career Oriented Woman</div>
            <p>
              Career women in 30s-50s often overlooked by peers. Success hinges
              on presenting the right cues in photos. Our photography is
              tailored to the type of man they aim to attract.
            </p>
          </div>
        </li>
        <div class="block lg:hidden h-px w-full bg-gray-300 my-4" />

        <li class="flex flex-col-reverse lg:flex-row gap-10">
          <div
            class="w-full lg:w-[280px] h-[300px] bg-gray-800 flex-shrink-0 overflow-hidden relative"
          >
            <img
              :src="anyoneResults"
              format="png"
              alt="Man holding camera facing forward"
              class="object-cover h-full w-full"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div class="text-heading-h2">
              Aren’t Getting Matches from Your Online Profile
            </div>
            <p>
              Maybe you have interesting photos and a descriptive bio, but still
              aren’t seeing the results you would like. If you want to get more
              matches, it may be time to give your profile a fresh look.
              Professional photography can enhance your profile to better
              showcase your features, hobbies, and personality.
            </p>
          </div>
        </li>
      </ul>
    </section>

    <!-- 5 Essential Dating Photos for Success -->
    <section class="bg-black overflow-hidden">
      <section
        class="container mx-auto pt-[110px] lg:py-[110px] relative flex gap-20 px-6 lg:px-0"
      >
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-[1100px] mx-auto"
        >
          <div class="relative">
            <h2
              class="text-heading-h1 font-bold text-white lg:absolute lg:-left-20 w-full top-1/4"
            >
              5 Essential Dating Photos for Success
            </h2>
          </div>

          <div>
            <div
              class="w-full h-[350px] relative overflow-hidden rounded-xl mb-4"
            >
              <img
                :src="essentialDatingPhotos[0]"
                format="png"
                alt="Man holding camera facing forward"
                class="object-cover h-full w-full"
              />
            </div>

            <h3 class="text-white mb-2 text-heading-h3">
              A Headshot with a Smile
            </h3>
            <p class="text-gray-400">
              Your primary profile picture should be a headshot that captures
              attention and conveys openness to potential matches.
            </p>
          </div>

          <div>
            <div
              class="w-full h-[350px] relative overflow-hidden rounded-xl mb-4"
            >
              <img
                :src="essentialDatingPhotos[1]"
                format="png"
                alt="Man holding camera facing forward"
                class="object-cover h-full w-full"
              />
            </div>

            <h3 class="text-white mb-2 text-heading-h3">The Candid Portrait</h3>
            <p class="text-gray-400">
              Candid shots showcase your personality in a natural setting.
            </p>
          </div>

          <div>
            <div
              class="w-full h-[350px] relative overflow-hidden rounded-xl mb-4"
            >
              <img
                :src="essentialDatingPhotos[2]"
                format="png"
                alt="Man holding camera facing forward"
                class="object-cover h-full w-full"
              />
            </div>

            <h3 class="text-white mb-2 text-heading-h3">The Hobby Shot</h3>
            <p class="text-gray-400">
              These photos display your passions, helping to attract matches who
              share your interests.
            </p>
          </div>

          <div>
            <div
              class="w-full h-[350px] relative overflow-hidden rounded-xl mb-4"
            >
              <img
                :src="essentialDatingPhotos[3]"
                format="png"
                alt="Man holding camera facing forward"
                class="object-cover h-full w-full"
              />
            </div>

            <h3 class="text-white mb-2 text-heading-h3">The Full Body Shot</h3>
            <p class="text-gray-400">
              No matter your physique, it’s important to have a full body shot
              to attract people who are interested in you.
            </p>
          </div>

          <div>
            <div
              class="w-full h-[350px] relative overflow-hidden rounded-xl mb-4"
            >
              <img
                :src="essentialDatingPhotos[4]"
                format="png"
                alt="Man holding camera facing forward"
                class="object-cover h-full w-full"
              />
            </div>

            <h3 class="text-white mb-2 text-heading-h3">The Selfie</h3>
            <p class="text-gray-400">
              Trust us, it’s less cringe than you think! Add a selfie to your
              dating profile for a fun and personal touch.
            </p>
          </div>
        </div>
      </section>
    </section>

    <!-- SUCCESS STORIES -->
    <SuccessStories />

    <!-- FAQ -->
    <section class="bg-black">
      <div
        class="container mx-auto py-20 px-10 flex justify-between lg:gap-20 flex-col lg:flex-row"
      >
        <div class="max-w-[500px] w-full flex-shrink-0">
          <h2 class="font-accent text-white font-bold text-[54px] mb-8">
            Frequently asked questions.
          </h2>
          <button class="btn btn-black w-full lg:w-auto items-center gap-3">
            SEE ALL FAQ'S
          </button>
        </div>

        <div class="w-full divide-y">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="py-4 cursor-pointer"
            @click="toggleFAQ(index)"
          >
            <div class="flex justify-between items-start">
              <h3 class="font-bold font-accent text-white text-[16px]">
                {{ faq.question }}
              </h3>
              <div
                class="border h-8 w-8 cursor-pointer border-white rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    v-if="faq.open"
                    d="M3 10L8 5L13 10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    v-else
                    d="M5 3L10 8L5 13"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p
              v-if="faq.open"
              class="text-gray-400 text-[16px] leading-[24px] font-body py-8"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <WeAreExperts />
  </NuxtLayout>
</template>
