<script setup>
const BOOKING_LINK =
  "https://meetings.hubspot.com/the-match-artist/strategy-session?email=xyz@example.com";
</script>

<template>
  <section
    style="position: relative; padding-top: 100%"
    class="hidden lg:block"
  >
    <iframe
      :src="BOOKING_LINK"
      frameborder="0"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    />
  </section>

  <section
    style="position: relative; padding-top: 200%"
    class="block lg:hidden"
  >
    <iframe
      :src="BOOKING_LINK"
      frameborder="0"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    />
  </section>
</template>
