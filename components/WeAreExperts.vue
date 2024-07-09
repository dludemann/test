<template>
  <section
    class="bg-black relative"
    v-bind:style="{
      background: 'url(' + '/images/man-with-camera.jpg' + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <section
      class="container relative z-10 mx-auto h-[600px] flex flex-col items-center justify-center px-6"
    >
      <h2
        class="text-white text-[56px] leading-[50px] lg:text-[96px] font-bold text-center max-w-[850px] mx-auto lg:leading-[80px] mb-10"
      >
        We are the online dating experts
      </h2>
      <p class="text-white text-center lg:text-left">
        Schedule a photography session now and make a big change for your
        profile.
      </p>

      <nuxt-link to="/online-dating-photographer-near-me">
        <button
          class="flex bg-[#990800] w-full justify-center py-[12px] px-[24px] text-white font-bold mt-4 mx-auto max-w-[200px] items-center gap-4"
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
      </nuxt-link>
    </section>
  </section>
</template>
