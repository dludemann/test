<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const BOOKING_LINK =
  "https://meetings.hubspot.com/the-match-artist/strategy-session?email=xyz@example.com";

const iframeRef = ref(null);

const observeIframeContent = () => {
  const iframe = iframeRef.value;
  if (iframe && iframe.contentDocument) {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList" || mutation.type === "attributes") {
          console.log("Iframe content changed");
          // Add your logic here to handle content changes
        }
      }
    });

    observer.observe(iframe.contentDocument, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }
};

onMounted(() => {
  const iframe = iframeRef.value;
  iframe.addEventListener("load", observeIframeContent);
});

onUnmounted(() => {
  const iframe = iframeRef.value;
  iframe.removeEventListener("load", observeIframeContent);
});
</script>

<template>
  <section
    style="position: relative; padding-top: 100%"
    class="hidden lg:block"
  >
    <iframe
      ref="iframeRef"
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
      ref="iframeRef"
      :src="BOOKING_LINK"
      frameborder="0"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    />
  </section>
</template>

<style scoped>
iframe #logo-landmark-booking-container {
  display: none;
}
</style>
