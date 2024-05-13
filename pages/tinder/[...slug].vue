<script setup>
import { ref } from "vue";
import menuGroupings from "../../data/guides/tinder.json";

const currentHash = ref("");
const loaded = ref(false);
const { page, globals } = useContent();
const route = useRoute();
const pageData = page.value;
pageData.page_title = "Tinder Algorithm";

const changeCurrentHash = (slug) => {
  currentHash.value = slug;
};

const head = generateHead(pageData, route);
useHead(head);

const collection = page.value._dir;
const contentQuery = await queryContent(collection)
  .where({
    _path: { $ne: `/${collection}` },
  })
  .find();
const mainSlug = ["/", collection].join("");

const silo = contentQuery;

const menuData = menuGroupings.map((menuGrouping) => {
  //("mebu grouping", menuGrouping);
  //console.log("silo", silo);

  return {
    title: menuGrouping.heading,
    href: null,
    slug: null,
    children: silo
      .map((page) => {
        if (page.menu_grouping === menuGrouping.heading) {
          return {
            title: page.title,
            href: null,
            slug: page._path.split("/")[2],
            children: page.body.toc.links.map((tocItem) => {
              return {
                title: tocItem.text,
                href: null,
                slug: tocItem.id,
              };
            }),
          };
        }
        return null;
      })
      .filter((menuItem) => menuItem !== null),
  };
});

//console.log("menuData", menuData);
const initData = () => {
  // Find index of the level one title
  const levelOneIndex = menuGroupings.findIndex(
    (menuGrouping) => pageData.menu_grouping === menuGrouping.heading
  );

  // Find the Level Two Object
  let levelTwo = {};
  for (let j = 0; j < menuData.length; j++) {
    const menuSection = menuData[j];
    if (pageData.menu_grouping === menuSection.title) {
      levelTwo = {
        title: pageData.title,
        slug: pageData._path.split("/")[2],
      };
    }
  }

  // Parse Level Three
  const levelThree = pageData.body.toc.links.map((tocItem) => {
    return {
      title: tocItem.text,
      slug: tocItem.id,
    };
  });

  // Update Current Hash
  currentHash.value = "";

  // Return Object
  return {
    level_one: levelOneIndex,
    level_two: {
      level_two_title: levelTwo.title,
      level_two_slug: levelTwo.slug,
    },
    level_three: levelThree,
  };
};

const currentPath = initData();
loaded.value = true;
</script>
<template>
  <div class="flex font-display">
    <SideNav
      v-if="loaded"
      :current-hash="currentHash"
      :menu-data="menuData"
      :current-path="currentPath"
      :page-data="silo"
      :main-slug="mainSlug"
      @hash-change="changeCurrentHash"
    />
    <section class="w-full font-display">
      <!-- Text content  -->
      <section class="px-6 lg:px-0 max-w-[800px] mx-auto">
        <p class="text-[1rem] font-bold text-[#171717] uppercase pt-[50px]">
          {{ pageData.menu_grouping }}
        </p>
        <h1 class="text-[3rem] font-bold py-2 leading-[3.75rem] text-[#1E293B]">
          {{ pageData.title }}
        </h1>
        <p class="py-5">
          Written by <span class="font-bold">{{ pageData.author }}</span>
        </p>

        <GuideBody
          class="guide-content"
          :current-content="currentPath.level_three"
          @hash-change="changeCurrentHash"
        />
      </section>

      <!-- START SILO FOOTER -->
      <GuideFooter
        :menu-data="menuData"
        :current-path="currentPath"
        :main-slug="mainSlug"
      />
      <!--- END SILO FOOTER-->
    </section>
  </div>
</template>

<style>
.guide-content p {
  margin-bottom: 1.5rem;
}

.guide-content img {
  margin-block: 1.5rem;
}

.guide-content ul,
.guide-content ol {
  margin-bottom: 1.5rem;
}

.guide-content ul > li {
  list-style-type: disc;
  margin-left: 2rem;
}

.guide-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.guide-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.guide-content h2 {
  font-size: 2rem;
  font-weight: bold;
}

.guide-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
}
.silo-content {
  font-family: "IBM Plex Sans";
  size: 18px;
  color: #1e293b;
}
.silo-content img {
  margin-top: 24px;
}
.silo-content img,
.silo-content p {
  margin-bottom: 24px;
}

.silo-content h1,
.silo-content h2,
.silo-content h3 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0px !important;
}
.silo-content h1 {
  font-size: 2.5rem;
}
.silo-content h2 {
  font-size: 2rem;
}
.silo-content h3 {
  font-size: 1.75rem;
}
.silo-content a {
  color: #bf9441;
}
h3 a {
  color: black !important;
}

.silo-content ul {
  margin-bottom: 24px;
  list-style-type: disc;
  margin-left: 24px;
}
.silo-content ul p,
.silo-content ol p {
  margin-bottom: 0px;
}

.navigating-the-algorithms {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.header-content {
  display: flex;
  flex-direction: row;
  background: black;
  position: relative;
}

.header-content__block {
  display: flex;
  color: white;
  align-items: center;
  max-width: 800px;
  padding-right: 4.2857142857rem;
  padding-left: 4.2857142857rem;
  width: 100%;
}

.header-content__block__description {
  display: flex;
  flex-direction: column;
  margin: 3rem 3rem 3rem 0;
  width: 100%;
}

.header-content__block__description h2 {
  background: linear-gradient(var(--mediumRed), var(--mediumRed)) bottom left
    no-repeat;
  background-size: 13% 5px;
  padding-bottom: 2rem;
}
.header-content__block__description p {
  width: 80%;
}

.app_logo {
  object-fit: contain;
  flex-grow: 0.2;
}

@media (max-width: 650px) {
  .header-content__block {
    flex-flow: column-reverse;
  }

  .header-content__block__description {
    width: 100%;
  }
  .app_logo {
    height: 20rem;
    width: 20rem;
    padding: 3rem;
  }
}
</style>
