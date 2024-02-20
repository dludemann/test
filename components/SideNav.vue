<template>
  <aside class="side-bar-container">
    <button class="left-nav-mobile-toggle bg-gray-400" @click="toggleMenu()">
      <div class="left-nav-mobile-toggle__content--nav-hidden">
        <svg
          fill="#000000"
          height="2rem"
          width="2rem"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 297 297"
          xml:space="preserve"
        >
          <g>
            <g>
              <g>
                <path
                  d="M280.214,39.211H16.786C7.531,39.211,0,46.742,0,55.997v24.335c0,9.256,7.531,16.787,16.786,16.787h263.428
				c9.255,0,16.786-7.531,16.786-16.787V55.997C297,46.742,289.469,39.211,280.214,39.211z"
                />
                <path
                  d="M280.214,119.546H16.786C7.531,119.546,0,127.077,0,136.332v24.336c0,9.255,7.531,16.786,16.786,16.786h263.428
				c9.255,0,16.786-7.531,16.786-16.786v-24.336C297,127.077,289.469,119.546,280.214,119.546z"
                />
                <path
                  d="M280.214,199.881H16.786C7.531,199.881,0,207.411,0,216.668v24.335c0,9.255,7.531,16.786,16.786,16.786h263.428
				c9.255,0,16.786-7.531,16.786-16.786v-24.335C297,207.411,289.469,199.881,280.214,199.881z"
                />
              </g>
            </g>
          </g>
        </svg>
        <p class="ml-2">Menu</p>
      </div>
    </button>
    <nav
      class="left-nav"
      :class="{ showMenu: breakpointToggle }"
      style="background: white"
    >
      <div>
        <ul class="left-nav__root showMenu__root bg-[#faf4e5]">
          <li>
            <h5
              class="bg-[#990808] p-4 font-display text-white font-bold text-[18px]"
            >
              {{ pageData.page_title }}
            </h5>

            <!-- LEVEL ONE START -->
            <ul class="">
              <li
                v-for="(level_one, i) in menuData"
                :key="level_one.title"
                style="width: 100%"
              >
                <button
                  class="py-4 pr-4 pl-2.5 flex items-center w-full"
                  :class="{ activeSubLink: isLevelOneActive(i) }"
                  @click="toggleLevelOne(i)"
                >
                  <!-- LEVEL ONE ICON -->
                  <div
                    class="w-6 h-6 bg-black mr-2 rounded-md flex items-center justify-center"
                  >
                    <UtilityRandomIcon :index="i" />
                  </div>

                  <span>{{ level_one.title }}</span>
                </button>

                <!-- LEVEL TWO START -->
                <ul v-if="openedLevelOnes.includes(i)" class="border-l ml-4">
                  <li
                    v-for="level_two in level_one.children"
                    :key="level_two.title"
                    class="relative"
                  >
                    <a :href="mainSlug + '/' + level_two.slug">
                      <button
                        class="px-4 py-2 relative"
                        :class="{
                          activeSubMenuLink: isLevelTwoActive(level_two),
                        }"
                      >
                        <!-- INDICATOR -->
                        <div
                          v-if="isLevelTwoActive(level_two)"
                          class="h-full top-0 -left-[1.5px] absolute w-[2px] bg-[#ce1b1b] block"
                        />
                        {{ level_two.title }}
                      </button>
                    </a>

                    <!-- LEVEL THREE START -->
                    <ul
                      v-if="
                        level_two.slug === currentPath.level_two.level_two_slug
                      "
                      class="ml-2"
                    >
                      <li
                        v-for="level_three in level_two.children"
                        :key="level_three.title"
                        class="text-[16px] px-4 py-1"
                      >
                        <a @click="handleLevelThreeClick(level_three)">
                          <button
                            :class="{
                              activeLevelThree:
                                level_three.slug === currentHash,
                            }"
                          >
                            &#x2022;
                            {{ level_three.title }}
                          </button>
                        </a>
                      </li>
                    </ul>
                    <!-- LEVEL THREE END -->
                  </li>
                </ul>
                <!-- LEVEL TWO END -->
              </li>
            </ul>
            <!-- LEVEL ONE END -->
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
import RandomIcon from "./utility/RandomIcon.vue";

export default {
  components: { RandomIcon },
  name: "SideNavChat",
  props: {
    menuData: {
      type: Array,
      required: true,
    },
    currentHash: {
      type: String,
      default: "",
    },
    currentPath: {
      type: Object,
    },
    pageData: {
      type: Object,
    },
    mainSlug: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      breakpointToggle: false,
      openedLevelOnes: [],
    };
  },
  watch: {
    currentHash: function () {
      // console.log('hash', this.currentHash);
    },
  },
  mounted: function () {
    this.openedLevelOnes = [this.currentPath.level_one];
  },
  methods: {
    toggleLevelOne(index) {
      if (this.openedLevelOnes.includes(index)) {
        const newArray = this.openedLevelOnes.filter((i) => i != index);
        this.openedLevelOnes = newArray;
      } else {
        this.openedLevelOnes = [...this.openedLevelOnes, index];
      }
    },
    navigateLevelTwo(level_two_object) {
      console.log(level_two_object);
      window.location.href = level_two_object.slug;
    },
    itemClick(slug) {
      this.breakpointToggle = false;
      window.location.href = `/${slug}`;
    },
    closeMenu() {
      this.breakpointToggle = false;
    },
    isLevelOneActive(index) {
      return this.currentPath.level_one === index;
    },
    handleLevelThreeClick(l_three) {
      const section = document.getElementById(`${l_three.slug}`);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        this.$emit("hash-change", l_three.slug);
        history.replaceState({}, "", `#${l_three.slug}`);
        this.closeMenu();
      }
    },
    isLevelTwoActive(l_two) {
      return this.currentPath.level_two.level_two_slug === l_two.slug;
    },
    toggleMenu() {
      this.breakpointToggle = !this.breakpointToggle;
    },
    slugify(name) {
      return name.split(" ").join("-").replace("?", "").replace("'", "");
    },
  },
};
</script>

<style scoped>
.side-bar-container {
  background: white !important;
}
li {
  list-style: none;
}
a:focus {
  text-decoration: none;
}
button {
  cursor: pointer;
  background-color: transparent;
  border-width: 0;
  text-align: left;
}

.hub-link.activeHubLink {
  background: var(--mediumRed);
}

.activeLevelThree {
  font-weight: 500;
  color: #ce1b1b;
}

.activeSubMenuLink {
  font-weight: 500;
  color: #ce1b1b;
}

.sub-menu {
  overflow: hidden;
  padding: 0 0 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.sub-menu a {
  color: black;
}

.sub-menu__level-2 {
  padding: 0.75rem 0rem 0.75rem 0rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.sub-menu__topicBlock {
  font-weight: 700;
  line-height: 2;
  width: 100%;
  text-align: start;
}
.sub-menu__topicBlock.activeSubLink {
  border-left: solid 5px var(--mediumRed);
}
.left-nav__root {
  list-style: none;
  margin: 0;
  padding: 0 0 4rem;
}

@media (min-width: 1150px) {
  .left-nav {
    position: relative;
    transform: none;
    transition: none;
    z-index: auto;
    overflow-y: auto;
    height: 100%;
  }

  .side-bar-container {
    top: 0;
    z-index: 1;
    height: 100vh;
    width: 400px;
    flex-shrink: 0;
    position: sticky;
    overflow: auto;
  }
  .left-nav-mobile-toggle {
    display: none;
  }
}

@media (max-width: 1150px) {
  .left-nav-mobile-toggle {
    position: fixed;
    bottom: 1.143rem;
    right: 1.143rem;
    z-index: 10;
    border-radius: 0.375rem;
    border: 2px solid black;
    padding: 0;
    font-weight: 500;
    cursor: pointer;
    display: block;
  }

  .left-nav-mobile-toggle__content--nav-hidden {
    padding: 0.75rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
  }
  .left-nav {
    display: none;
  }
  .left-nav.showMenu {
    display: block;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  }
}
</style>
