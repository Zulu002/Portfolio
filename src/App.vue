<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import Lenis from "lenis";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Graphics from "./components/Graphics.vue";
import Contacts from "./components/Contacts.vue";
import Stack from "./components/Stack.vue";
import Journey from "./components/Journey.vue";
import Playground from "./components/Playground.vue";

const savedLocale = window.localStorage.getItem("portfolio-locale");
const locale = ref(["en", "ru"].includes(savedLocale) ? savedLocale : "en");
const activeSection = ref("about");

let lenis;
let animationFrameId;
let sectionElements = [];

const sectionIds = ["about", "journey", "stack", "graphics", "projects"];

const updateActiveSection = () => {
  if (!sectionElements.length) {
    return;
  }

  const viewportCenter = window.innerHeight / 2;
  const closestSection = sectionElements
    .map((section) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;

      return {
        id: section.id,
        distance: Math.abs(sectionCenter - viewportCenter),
      };
    })
    .sort((first, second) => first.distance - second.distance)[0];

  if (closestSection?.id) {
    activeSection.value = closestSection.id;
  }
};

const scrollToSection = (href) => {
  const target = document.querySelector(href);

  if (!target) {
    return;
  }

  const targetHeight = target.getBoundingClientRect().height;
  const centerOffset = Math.max((window.innerHeight - targetHeight) / 2, 16);

  lenis?.scrollTo(target, { offset: -centerOffset });
};

watch(locale, (value) => {
  window.localStorage.setItem("portfolio-locale", value);
});

onMounted(async () => {
  await nextTick();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  lenis = new Lenis({
    duration: reduceMotion ? 0 : 1.05,
    smoothWheel: !reduceMotion,
    wheelMultiplier: 0.85,
  });

  const raf = (time) => {
    lenis.raf(time);
    updateActiveSection();
    animationFrameId = window.requestAnimationFrame(raf);
  };

  animationFrameId = window.requestAnimationFrame(raf);

  sectionElements = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  updateActiveSection();
  window.addEventListener("resize", updateActiveSection);
});

onBeforeUnmount(() => {
  if (animationFrameId) {
    window.cancelAnimationFrame(animationFrameId);
  }

  window.removeEventListener("resize", updateActiveSection);
  lenis?.destroy();
});
</script>

<template>
  <Header
    v-model:locale="locale"
    :active-section="activeSection"
    @navigate="scrollToSection"
  />

  <main class="container">
    <About :locale="locale" class="section0" @navigate="scrollToSection" />
    <Journey :locale="locale" id="journey" class="section" />
    <Stack :locale="locale" id="stack" class="section" />
    <Playground :locale="locale" class="section" />
    <Graphics :locale="locale" id="graphics" class="section" />
    <Project :locale="locale" id="projects" class="section" />
    <Contacts :locale="locale" id="contacts" class="section" />
  </main>
</template>

<style scoped>
.container {
  min-height: 100%;
  padding-top: 0;
  box-sizing: border-box;
}

.section0 {
  display: flex;
  justify-content: flex-end;
  align-items: end;
  width: 100%;
  padding: 10px 10px 6px;
  box-sizing: border-box;
}

.section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .section {
    padding: 10px 16px;
  }

  .section0 {
    padding: 10px 16px;
  }
}
</style>
