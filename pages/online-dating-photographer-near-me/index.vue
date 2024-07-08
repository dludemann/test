<script setup>
const { data: ip } = await useFetch("https://api.ipify.org/?format=json", {
  server: false,
});

const data = await $fetch(
  "https://thematchartist.com/.netlify/functions/findUserLocation"
);

//console.log("data", data);

const location = data ? JSON.parse(data).message : null;

const city = location ? location.city : null;
const state = location ? location.state : null;
//console.log("city", city);

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

const heroBlock = {
  _bookshop_name: "HeroLeftRightLocation",
  background_color: "#090303",
  text_color: "#FFFFFF",
  location: {
    city,
    state,
  },
  image: {
    src: "/images/rohit5.jpg",
    alt: "Photo of Brian on a black background",
    max_width: 500,
  },
  testimonial: {
    text: "An overall skyrocketing experience for my online dating.",
    person: "Brent S",
    image: {
      src: "/images/work/brent.webp",
      alt: "Photo of Brent",
      height: 50,
      width: 50,
    },
    height: 54,
    width: 365,
    vertical_padding: 40,
    horizontal_padding: 9,
  },
  button: {
    path: "#contact",
    text: "Book a Call",
  },
};

const imageBlock = {
  _bookshop_name: "ImageSlider",
  background_color: "#090303",
  text_color: "#FFFFFF",
  location: { city, state },
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

const leftRightBlock = {
  _bookshop_name: "LeftRightQuote",
  background_color: "#090303",
  text_color: "#FFFFFF",
  location: { city, state },
  image: {
    src: "https://images.thematchartist.com/images/portfolio/BeforeAfter/richard-before.jpg",
  },
  image2: {
    src: "https://images.thematchartist.com/images/portfolio/BeforeAfter/richard-after.jpg",
  },
  title: "Transform Your Online Dating Profile",
  quote: {
    background_color: "#FFFFFF",
    text_color: "#090303",
    text: "Before getting pics taken by The Match Artist, I was getting 2-3 tinder matches a week. After getting new high value pictures from The Match Artist and tweaking my bio I was getting over 5 matches per day with really great girls. The results truly speak for themselves.",
    person: "Cameron T",
  },
  cta: {
    title: "Stand Out in the Digital Dating Scene",
    button: {
      text: "Book a Call",
      background_color: "#990800",
    },
    stats: [
      {
        number: 1000,
        text: "Successful Clients",
      },
      {
        number: 20,
        text: "Marriages",
      },
      {
        number: 250,
        text: "Relationships",
      },
    ],
  },
  button: {
    path: "#contact",
    text: "Book a Call",
  },
};

const phoneMockupBlock = {
  _bookshop_name: "LeftRightPhoneMockup",
  background_color: "#FFFFFF",
  location: { city, state },

  text_color: "#090303",
  image: {
    src: "/images/mockups/tindermock.webp",
    height: 812,
    width: 375,
  },
  title: "Elevate Your Dating Profile with Professional Dating Photography",
  description:
    "In a picture-first dating world, make sure your profile photo entices prospects to explore further and discover your true potential.",
  list: [
    {
      icon: "/icons/camera.svg",
      text: "Make a great first impression",
    },
    {
      icon: "/icons/heart.svg",
      text: "Get more matches",
    },
    {
      icon: "/icons/magnifying-glass.svg",
      text: "Go on better dates",
    },
    {
      icon: "/icons/gold-star.svg",
      text: "Feel more confident",
    },
  ],
  button: {
    path: "#contact",
    text: "Book a Call",
  },
};

const leftRightlistBlock = {
  _bookshop_name: "LeftRightList",
  title: "Expert guidance in every step of your photoshoot",
  description:
    "Our professional photographers strike the perfect balance between showcasing your best features and maintaining an honest representation of yourself, avoiding the pitfalls of overediting and appearing inauthentic.",
  list: [
    {
      icon: "/icons/green-tick.svg",
      text: "Facial expression & body language coaching",
    },
    {
      icon: "/icons/green-tick.svg",
      text: "4-5 hour shoot demonstrating your lifestyle and hobbies",
    },
    {
      icon: "/icons/green-tick.svg",
      text: "Advice on your best photos and dating app optimizations",
    },
    {
      icon: "/icons/green-tick.svg",
      text: "200-300 edited photos",
    },
  ],
  button: {
    path: "#contact",
    text: "Book a Call",
  },
  image: {
    src: "https://photostma.blob.core.windows.net/web/justen collage (1).png",
    alt: null,
    max_width: 766,
    height: 766,
  },
};

const faqBlock = {
  _bookshop_name: "Faq",
  title: "FAQS",
  description:
    "Have more questions than what you see here? Reach out to our team—we'd love to chat and help however we can.",
  faqs: [
    {
      question: "What services does a dating app photographer offer?",
      answer:
        "A dating app photographer offers professional photography services designed to enhance your profile on dating apps by providing high-quality, attractive photographs that capture your personality and style.",
    },
    {
      question:
        "How can a dating profile photographer improve my online dating success?",
      answer:
        "A dating app photographer can improve your online dating success by capturing visually appealing photos that stand out on dating platforms, thus increasing your visibility and attractiveness to potential matches.",
    },
    {
      question:
        "What should I expect during a session with a dating app photographer?",
      answer:
        "During a session with a dating app photographer, you should expect a professional photoshoot that focuses on bringing out your best features, with advice on poses, backgrounds, and outfits that compliment your individuality.",
    },
  ],
};

const leftRightForm = {
  _bookshop_name: "LeftRightForm",
  background_color: "#090303",
  text_color: "#000000",
  title: "Professional Dating Photography in Austin, Texas",
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
      text: "Improved social media presence",
    },
  ],
  form: {
    title: "Inquire Now",
    city_input: false,
    city: "Austin",
    state: "Texas",
  },
};
</script>

<template>
  <NuxtLayout>
    <HeroLeftRightLocation :block="heroBlock" />
    <ImageSlider :block="imageBlock" />
    <LeftRightQuote :block="leftRightBlock" />
    <LeftRightPhoneMockup :block="phoneMockupBlock" />
    <LeftRightList :block="leftRightlistBlock" />
    <FAQ :block="faqBlock" />
    <LeftRightForm :block="leftRightForm" />
  </NuxtLayout>
</template>
