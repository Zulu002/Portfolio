<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import Lenis from "lenis";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Graphics from "./components/Graphics.vue";
import Contacts from "./components/Contacts.vue";
import Stack from "./components/Stack.vue";
import Journey from "./components/Journey.vue";

const getBrowserLocale = () => {
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  return browserLanguages.some((language) =>
    language?.toLowerCase().startsWith("ru")
  )
    ? "ru"
    : "en";
};

const locale = ref(getBrowserLocale());
const contactPulseKey = ref(0);

let lenis;
let contactPulseTimer;
const scrollToSection = (href, options = {}) => {
  const target = document.querySelector(href);

  if (!target) {
    return;
  }

  const targetHeight = target.getBoundingClientRect().height;
  const centerOffset = Math.max((window.innerHeight - targetHeight) / 2, 16);

  lenis?.scrollTo(target, { offset: -centerOffset });

  if (options.highlightContacts) {
    window.clearTimeout(contactPulseTimer);
    contactPulseTimer = window.setTimeout(() => {
      contactPulseKey.value += 1;
    }, 650);
  }
};

onMounted(async () => {
  await nextTick();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  lenis = new Lenis({
    autoRaf: true,
    duration: reduceMotion ? 0 : 1.2,
    smoothWheel: !reduceMotion,
    wheelMultiplier: 0.85,
  });

});

onBeforeUnmount(() => {
  window.clearTimeout(contactPulseTimer);
  lenis?.destroy();
});
</script>

<template>
  <Header v-model:locale="locale" />

  <main class="container">
    <About :locale="locale" class="section0" @navigate="scrollToSection" />
    <Journey :locale="locale" id="journey" class="section" />
    <Stack :locale="locale" id="stack" class="section" />
    <Graphics :locale="locale" id="graphics" class="section" />
    <Project :locale="locale" id="projects" class="section" />
    <Contacts
      :locale="locale"
      :pulse-key="contactPulseKey"
      id="contacts"
      class="section"
    />
  </main>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 100%;
  padding-top: 0;
  padding-bottom: 48px;
  box-sizing: border-box;
}

.section0 {
  display: flex;
  justify-content: flex-end;
  align-items: end;
  width: 100%;
  padding: 10px 10px 0;
  box-sizing: border-box;
}

.section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .container {
    padding-bottom: 32px;
  }

  .section {
    padding-right: 16px;
    padding-left: 16px;
  }

  .section0 {
    padding: 10px 16px 0;
  }

}
</style>
