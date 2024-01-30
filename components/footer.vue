<script setup>
import data from '../data/footer.json';

const nav_links_classes =
  'text-white text-[16px] leading-[120%] font-medium tracking-[-0.32px] font-display py-1 flex gap-2 items-center justify-center lg:justify-start text-center lg:text-left hover:text-primary-700';
</script>

<template>
  <footer class="bg-black">
    <!-- TOP SECTION -->
    <section
      class="container mx-auto grid lg:grid-cols-[250px_minmax(200px,_1fr)_250px] py-16 gap-8 px-2">
      <!-- LOGO SECTION -->
      <div
        class="w-full lg:max-w-[300px] flex flex-col px-6 lg:px-0 items-center lg:items-start">
        <!-- LOGO -->
        <nuxt-img class="w-[232px] h-[20px]" :src="data.logo" alt="" />

        <p class="text-[#EAECF0] font-body mt-6 text-center lg:text-left">
          {{ data.description }}
        </p>
      </div>

      <!-- URLS -->
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <!-- BROWSER COLUMN -->
        <div
          class="w-full flex flex-col gap-4"
          v-for="section in data.sections">
          <p
            class="text-primary-500 font-display font-bold text-center lg:text-left">
            {{ section.title }}
          </p>
          <nav class="flex flex-col gap-3">
            <nuxt-link
              rel="canonical"
              :to="link.link"
              :class="nav_links_classes"
              v-for="link in section.links">
              <div
                class="w-6 h-6 flex items-center justify-center"
                v-if="link.icon">
                <img class="w-[24px] h-[25px]" :src="link.icon" alt="" />
              </div>
              {{ link.text }}
            </nuxt-link>
          </nav>
        </div>

        <!-- BROWSER COLUMN 
        <div class="w-full lg:w-[250px] flex flex-col gap-4 flex-shrink-0">
          <p
            class="text-primary-500 font-display font-bold text-center lg:text-left"
          >
            CONTACT US
          </p>
          <nav class="flex flex-col gap-3">
            <div :class="nav_links_classes">
              <div class="w-6 h-6 flex items-center justify-center">
                <img
                  class="w-[24px] h-[25px]"
                  src="/icons/location.svg"
                  alt=""
                />
              </div>
              Austin, TX 78701
            </div>
            <a href="mailto:info@thematchartist.com" :class="nav_links_classes">
              <div class="w-6 h-6 flex items-center justify-center">
                
              </div>
              info@thematchartist.com
            </a>
          </nav>
        </div>
        -->

        <!-- ONLINE DATING TOOLS -->
      </div>
      <div class="flex-1 flex flex-col gap-4 px-6 overflow-hidden">
        <p
          class="text-primary-500 font-display font-bold text-center lg:text-left">
          {{ data.form.title }}
        </p>
        <p class="text-[#EAECF0] font-body text-center lg:text-left">
          {{ data.form.description }}
        </p>

        <form
          class="drip-form flex flex-col gap-4"
          action="https://www.getdrip.com/forms/91517951/submissions"
          data-drip-embedded-form="91517951"
          method="post">
          <input
            type="email"
            name="fields[email]"
            value=""
            placeholder="Email"
            required
            class="input" />

          <input
            type="text"
            name="fields[first_name]"
            placeholder="First Name"
            required
            class="input" />
          <button
            class="btn"
            type="submit"
            :class="'bg-[' + data.form.button.background_color + ']'"
            :style="{ color: data.form.button.text_color }">
            {{ data.form.button.text }}
          </button>
        </form>
      </div>
    </section>

    <section class="py-8 border-t border-[#475467] px-6">
      <p class="text-[#D0D5DD] font-body text-center">
        {{ data.copyright }}
      </p>
    </section>
  </footer>
</template>

<style>
.input {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  align-items: center;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-color: rgb(208 213 221 / var(--tw-border-opacity));
  border-radius: 0.5rem;
  border-width: 1px;
  color: rgb(102 112 133 / var(--tw-text-opacity));
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  gap: 0.5rem;
  line-height: 160%;
  padding: 0.625rem 14px;
}

.btn {
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  gap: 0.5rem;
  justify-content: center;
  line-height: 1.75rem;
  line-height: 25px;
  padding: 0.75rem 1.5rem;
}
</style>
