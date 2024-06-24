<template>
  <NuxtLayout>
    <section class="bg-[#efefef] py-[70px] font-display">
      <div class="max-w-[800px] mx-auto">
        <tma-image
          v-if="pageData.featured_image"
          :src="pageData.featured_image"
          :alt="pageData.featured_image_alt"
          class="w-[800px] h-[500px] mb-8 object-cover"
        />
        <div>
          <!-- <p
          class="text-center text-[20px] text-[#787878] px-6"
          v-html="formatDate(pageData.created)"
        ></p> -->
          <h1
            class="font-bold text-center text-[#171717] text-[48px] leading-[62.5px] mb-[50px] px-6"
          >
            {{ pageData.title }}
          </h1>
          <p
            class="text-[22px] font-medium leading-[37.4px] text-[#787878] px-6"
          >
            {{ pageData.summary }}
          </p>
        </div>
      </div>
    </section>
    <div class="max-w-[800px] mx-auto py-[70px] body-container px-6">
      <component :is="renderComponent"></component>
    </div>
  </NuxtLayout>
</template>

<script setup>
import Newsletter from "@/components/Newsletter.vue"; // Adjust the import path
import { DateTime } from "luxon";
import { defineComponent, h } from "vue";

const route = useRoute();

const { page } = useContent();

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}

const pageData = page.value;

console.log("p", pageData);

const formatDate = (date) => {
  return DateTime.fromISO(date).toFormat("LLL dd");
};

const head = generateHead(pageData, route);
useHead(head);

const renderAST = (nodes) => {
  return nodes.map((node) => {
    if (node.type === "text") {
      return h("p", {}, node.value);
    }

    if (node.type === "element") {
      if (node.tag === "news-letter") {
        console.log("NODE", node);

        return h(Newsletter, {
          title: node.props.title,
          text: node.props.text,
          img: node.props.img,
          campaign: node.props.campaign,
          cta_text: node.props["cta-text"],
        });
      }

      const children = renderAST(node.children || []);
      return h(node.tag, node.props, children);
    }

    return null;
  });
};

const renderComponent = defineComponent({
  render() {
    return h("div", {}, renderAST(pageData.body.children));
  },
});
</script>
<style>
.body-container {
  display: flex;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
}

.body-container > div > p,
.body-container > div > ul > li,
.body-container > div > ol > li {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  letter-spacing: 1px;
  font-weight: lighter;
}

.body-container div > table > tbody > tr > td > img {
  margin-block: 1.25rem;
  max-height: 840px;
}

.body-container > div > h1,
.body-container > div > h2,
.body-container > div > h3 {
  font-weight: bold;
  text-wrap: balance;
}

.body-container > div > h1 {
  margin-bottom: 20px;
  font-size: 3.25rem;
}
.body-container > div > h2 {
  margin-bottom: 20px;
  font-size: 2.5rem;
}
.body-container > div > h3 {
  margin-bottom: 20px;
  font-size: 1.75rem;
}
.body-container > div > ol > li,
.body-container > div > ul > li {
  list-style: initial;
}
</style>
