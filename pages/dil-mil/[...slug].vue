<script setup>
import { ref } from 'vue';

const currentHash = ref('');
const loaded = ref(false);
const { page, globals } = useContent();
const route = useRoute();
const pageData = page.value;

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
const mainSlug = ['/', collection].join('');

const silo = contentQuery;
let menuGroupings = [];
for (let i = 0; i < silo.length; i++) {
  const siloItem = silo[i];
  if (!menuGroupings.includes(siloItem.menu_grouping)) {
    menuGroupings.push(siloItem.menu_grouping);
  }
}

const menuData = menuGroupings.map((menuGrouping) => {
  return {
    title: menuGrouping,
    href: null,
    slug: null,
    children: silo
      .map((page) => {
        if (page.menu_grouping === menuGrouping) {
          return {
            title: page.title,
            href: null,
            slug: page._path.split('/')[2],
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

const initData = () => {
  // Find index of the level one title
  const levelOneIndex = menuGroupings.findIndex(
    (menuGrouping) => pageData.menu_grouping === menuGrouping
  );

  // Find the Level Two Object
  let levelTwo = {};
  for (let j = 0; j < menuData.length; j++) {
    const menuSection = menuData[j];
    if (pageData.menu_grouping === menuSection.title) {
      levelTwo = {
        title: pageData.title,
        slug: pageData._path.split('/')[2],
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
  currentHash.value = '';

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

// const generatePrevious = () => {
//     menuData[currentPath.level_one].title;
//     const currentLevelTwoIndex = menuData[currentPath.level_one].children.findIndex(
//         (c) => c.slug === currentPath.level_two.level_two_slug,
//     );
//     const previousLevelTwo = menuData[currentPath.level_one].children[currentLevelTwoIndex - 1];
//     if (previousLevelTwo) {
//         return {
//             title: menuData[currentPath.level_one].title,
//             slug: `/${mainSlug}/${previousLevelTwo.slug}`,
//             section: previousLevelTwo.title,
//             active: true,
//         };
//     } else {
//         const previousSilo = menuData[currentPath.level_one - 1];

//         if (currentPath.level_one === 0) {
//             return {
//                 title: menuData[currentPath.level_one].title,
//                 slug: '',
//                 section: currentPath.level_two.level_two_title,
//                 active: false,
//             };
//         }

//         return {
//             title: previousSilo.title,
//             slug: `/${mainSlug}/${previousSilo.children[previousSilo.children.length - 1].slug}`,
//             section: previousSilo.children[previousSilo.children.length - 1].title,
//             active: true,
//         };
//     }
// };

// const generateNext = () => {
//     menuData[currentPath.level_one].title;
//     const currentLevelTwoIndex = menuData[currentPath.level_one].children.findIndex(
//         (c) => c.slug === currentPath.level_two.level_two_slug,
//     );

//     const nextLevelTwo = menuData[currentPath.level_one].children[currentLevelTwoIndex + 1];

//     if (nextLevelTwo) {
//         return {
//             title: menuData[currentPath.level_one].title,
//             slug: `/${mainSlug}/${nextLevelTwo.slug}`,
//             section: nextLevelTwo.title,
//             active: true,
//         };
//     } else {
//         // if we're at the end there is no more
//         if (menuData.length === currentPath.level) {
//             return {
//                 title: menuData[currentPath.level_one].title,
//                 slug: '',
//                 section: currentPath.level_two.level_two_title,
//                 active: false,
//             };
//         }

//         const nextSilo = menuData[currentPath.level_one + 1];

//         if (nextSilo) {
//             return {
//                 title: nextSilo.title,
//                 slug: `/${mainSlug}/${nextSilo.children[0].slug}`,
//                 section: nextSilo.children[0].title,
//                 active: true,
//             };
//         } else
//             return {
//                 title: '',
//                 slug: ``,
//                 section: '',
//                 active: false,
//             };
//     }
// };
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
      @hash-change="changeCurrentHash" />
    <section class="w-full font-display p-8 mb-[50px]">
      <!-- Text content  -->
      <section class="max-w-[800px] mx-auto">
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
          @hash-change="changeCurrentHash" />
      </section>
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

.guide-content h2 {
  font-size: 2rem;
  font-weight: bold;
}
.silo-content {
  font-family: 'IBM Plex Sans';
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

.silo-content h2 {
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0px !important;
}
.silo-content a {
  color: #bf9441;
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
