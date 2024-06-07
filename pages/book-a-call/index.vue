<script setup>
useHead({
  title: "Book a Call | The Match Artist",
  meta: [],
});

definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="bg-[#f6f8fa]">
    <div
      class="bg-[#f6f8fa] p-8 lg:max-w-[840px] mx-auto w-full text-center pt-8"
    >
      <h1 class="text-2xl font-bold mb-4">Free Strategy Session</h1>

      <p>
        This is a free strategy session with one of our team members. We will
        discuss your dating goals and explain how we optimize profiles for
        maximum success. This call will also give you a chance to ask any
        questions you have about The Match Artist and our process.
      </p>
    </div>
    <Booking />
    <ConnectWithUs />
  </div>
</template>
