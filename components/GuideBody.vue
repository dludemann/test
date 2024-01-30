<!-- eslint-disable vue/no-v-html -->
<template>
  <div id="page-content" class="page-content content-styles font-body">
    <ContentDoc />
  </div>
</template>

<script>
export default {
  name: 'SiloBody',
  data() {
    return {
      sectionObserver: null,
      canChangeSidebar: true,
    };
  },
  mounted() {
    this.observeSections();

    // Update all anchor tags in silo body from butter to open in new tab
    setTimeout(() => {
      const page = document.getElementById('page-content');
      const anchors = page.getElementsByTagName('a');

      Array.from(anchors).forEach(function (element) {
        element.setAttribute('target', '_blank');
      });
    }, 200);

    setTimeout(() => {
      const hash = this.$route.hash;
      const section = this.$el.querySelector(hash);
      const _ = this;

      if (section) {
        this.canChangeSidebar = false;
        section.scrollIntoView({ behavior: 'smooth' });
        this.$emit('hash-change', this.$route.hash.replace('#', ''));

        var scrollTimeout;
        addEventListener('scroll', function () {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(function () {
            _.canChangeSidebar = true;

            removeEventListener('scroll', function () {
              this.canChangeSidebar = true;
            });
          }, 100);
        });
      }
    }, 100);
  },

  methods: {
    observeSections() {
      try {
        this.sectionObserver?.disconnect();
      } catch (error) {
        console.error(error);
      }

      // Observe each section
      setTimeout(() => {
        const options = {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        };

        this.sectionObserver = new IntersectionObserver(
          this.sectionObserverHandler,
          options
        );
        const page = document.getElementById('page-content');
        const sections = page.querySelectorAll('[id]');
        sections.forEach((section) => {
          this.sectionObserver.observe(section);
        });
      }, 100);
    },
    sectionObserverHandler(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting && this.canChangeSidebar) {
          const sectionId = entry.target.id;
          history.replaceState({}, '', `#${sectionId}`);
          this.$emit('hash-change', `${sectionId}`);
          break;
        }
      }
    },
    slugify(name) {
      return name
        .split(' ')
        .join('-')
        .replace('?', '')
        .replace('.', '')
        .replace("'", '');
    },
  },
};
</script>

<style scoped>
#scroll-detector {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#bar-detector {
  width: 100vw;
  height: 10px;
  background: blue;
}

.page-content {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  position: relative;
}

.page-content-block h2,
.page-content-block h3 {
  padding: 1rem 1rem 1rem 0;
  border-bottom: none;
  background: linear-gradient(var(--mediumRed), var(--mediumRed)) bottom left
    no-repeat;
  background-size: 5% 5px;
  letter-spacing: 0.25rem;
}
.page-content-block p {
  padding: 0 0 0 3rem;
}
</style>
