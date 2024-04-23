<script setup>
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

      <div class="flex gap-6 flex-col lg:flex-row">
        <div class="flex flex-col gap-6">
          <TestimonialTweet
            :name="testimonialTest.name"
            :username="testimonialTest.username"
            :profile-picture="testimonialTest.profilePicture"
            :content="testimonialTest.content"
          />
          <TestimonialTweet
            :name="testimonialTest.name"
            :username="testimonialTest.username"
            :profile-picture="testimonialTest.profilePicture"
            :content="testimonialTest.content"
          />
          <TestimonialTweet
            :name="testimonialTest.name"
            :username="testimonialTest.username"
            :profile-picture="testimonialTest.profilePicture"
            :content="testimonialTest.content"
          />
        </div>

        <div class="flex flex-col gap-6">
          <TestimonialTweet
            :name="testimonialTest.name"
            :username="testimonialTest.username"
            :profile-picture="testimonialTest.profilePicture"
            :content="testimonialTest.content"
          />
          <TestimonialTweet
            :name="testimonialTest.name"
            :username="testimonialTest.username"
            :profile-picture="testimonialTest.profilePicture"
            :content="testimonialTest.content"
          />
          <TestimonialTweet
            :name="testimonialTest.name"
            :username="testimonialTest.username"
            :profile-picture="testimonialTest.profilePicture"
            :content="testimonialTest.content"
          />
        </div>

        <div class="flex flex-col gap-6">
          <TestimonialTweet
            :name="testimonialTest.name"
            :username="testimonialTest.username"
            :profile-picture="testimonialTest.profilePicture"
            :content="testimonialTest.content"
          />
          <TestimonialTweet
            :name="testimonialTest.name"
            :username="testimonialTest.username"
            :profile-picture="testimonialTest.profilePicture"
            :content="testimonialTest.content"
          />
          <TestimonialTweet
            :name="testimonialTest.name"
            :username="testimonialTest.username"
            :profile-picture="testimonialTest.profilePicture"
            :content="testimonialTest.content"
          />
        </div>
      </div>
    </section>
  </section>
</template>
