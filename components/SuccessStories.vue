<script setup>
const testimonials = [
  {
    name: "Chanakya G.",
    usename: "Houston, TX",
    profilePicture:
      "https://images.thematchartist.com/images/reviews/Chanakya.jpg",
    content:
      "Great service, terrific follow through, and an all around great experience working with Nate, Jason, and Robby",
  },
  {
    name: "Matthew M.",
    usename: "Tampa, FL",
    profilePicture:
      "https://images.thematchartist.com/images/reviews/Matt-M.jpg",
    content:
      "Jason did a phenomenal job. He coached me into comfortable and confident state, and he captured a ton of fantastic shots. I recommend him wholeheartedly.",
  },
  {
    name: "Baroni P.",
    usename: "New York City",
    profilePicture:
      "https://images.thematchartist.com/images/reviews/Baroni.JPG",
    content:
      "These guys were great to work with. From start to finish they were very professional, knowledgeable, and helpful. Really enjoyed working with both Mike's especially Mike S, my photographer. Very talented guy. Great team and I'd highly recommend hiring them.",
  },

  {
    name: "David B.",
    usename: "Bay Area, CA",
    profilePicture:
      "https://images.thematchartist.com/images/reviews/David-B.jpg",
    content:
      "Marcos was a pleasure to work with. He has an artistic eye and a good sense of what works. He also made me feel very comfortable despite my lack of experience. I would highly recommend his services.",
  },
  {
    name: "Jake D.",
    usename: "Denver, CO",
    profilePicture:
      "https://images.thematchartist.com/images/reviews/Jake-D.jpg",
    content:
      "This is an incredible team. Full of great, hard working, responsive people. I specifically worked with Mike and he was absolutely phenomenal. Loved how the photos turned out. Thanks Mike and The Match Artist!",
  },
  {
    name: "Cesar A.",
    usename: "Minneapolis, MN",
    profilePicture:
      "https://images.thematchartist.com/images/reviews/Cesar.jpg",
    content:
      "Incredible photos. Made a world of difference with my dating life. Went from a few matches a week to matches every day! Would give it more stars if I could.",
  },
  {
    name: "Bryan B.",
    usename: "Jacksonville, FL",
    profilePicture:
      "https://images.thematchartist.com/images/reviews/Bryan-TMA-208.jpg",
    content:
      "Working with Mike Copeland from The Match Artist was one of the best experiences I have ever had. These guys are good at what they do [..] They’ve got a great idea for a picture to show off every personality, and Mike repeatedly blew me away with the amazing shots [..] Need a LinkedIn headshot? Phone profile picture? An instagram profile picture? They’ll do that too. These guys worked extensively with me before, during, and after my shoot [..] I can’t recommend Mike and TMA enough.",
  },

  {
    name: "Mark M.",
    usename: "Austin, TX",
    profilePicture:
      "https://images.thematchartist.com/images/reviews/Mark-Review.JPG",
    content:
      "Before working with Jason, I thought the cost was high with plenty of other services to choose from. After a few hours, I not only thought it was worth it but highly recommend it. Jason was great to work with. [...] Now getting about 10+ matches a day with much higher quality to choose from. If you are thinking about using this service all I can say is HURRY! You will be thrilled you did.",
  },
  {
    name: "Michael G.",
    usename: "Dallas, TX",
    profilePicture:
      "https://images.thematchartist.com/images/reviews/Michael-G.JPG",
    content:
      "I recently signed up on a couple of dating websites and booked a photo session with The Match Artist. I'm the least photogenic person I know and figured anything would be an improvement. The photo shoot was awesome! Mike Copeland is a great photographer, knowledgeable about facial expressions and scene composition. We spent 5 hours in multiple locations; the first photo he took was as good as my best. Out of over 250 photos, I think all are great candidates! Mike, I can't tell you how much I appreciate it -- I'm really looking forward to giving these to my family and putting them on the website... I can't recommend you and TheMatchArtist enough!!",
  },
];

const testimonialTest = {
  name: "Guy Hawkins",
  username: "guyhawkins90",
  profilePicture:
    "https://pbs.twimg.com/profile_images/1403075358397829121/6Z5Z1Z8-_400x400.jpg",
  content:
    "I’ve been seeing a girl that[‘s] the most perfect human being for me. [...] the coaching on eye movement + pictures is life changing",
};
</script>
<template>
  <section class="bg-black">
    <section class="container mx-auto px-6 py-20 lg:px-20">
      <h2
        class="font-bold mb-20 text-white text-center max-w-[800px] mx-auto text-[28px] leading-[33.6px] tracking-[-0.56px] lg:text-heading-h1 font-display"
      >
        Success stories from happy customers
      </h2>

      <div class="gap-6 grid grid-cols-1 lg:grid-cols-3">
        <TestimonialTweet
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :name="testimonial.name"
          :username="testimonial.usename"
          :profile-picture="testimonial.profilePicture"
          :content="testimonial.content"
        />
      </div>
    </section>
  </section>
</template>
