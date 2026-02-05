<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Graphics from "./components/Graphics.vue";
import Contacts from "./components/Contacts.vue";
import Stack from "./components/Stack.vue";
import Journey from "./components/Journey.vue";

const navContent = {
  ariaLabel: "Основные разделы",
  sections: [
    { id: "about", label: "ОБО МНЕ" },
    { id: "stack", label: "СТЕК" },
    { id: "projects", label: "ПРОЕКТЫ" },
    { id: "graphics", label: "ВИТРИНА" },
  ],
};

const activeSection = ref("about");

const EXTRA_OFFSET = 12;

const updateHeaderOffsetVar = () => {
  const header = document.querySelector(".site-header");
  const root = document.querySelector(".container");
  if (!header || !root) return;

  const style = window.getComputedStyle(header);
  const top = parseFloat(style.top || "0") || 0;
  const h = header.getBoundingClientRect().height || 0;

  root.style.setProperty(
    "--header-offset",
    `${Math.round(top + h + EXTRA_OFFSET)}px`
  );
};

const scrollToSection = async (sectionId) => {
  activeSection.value = sectionId;

  await nextTick();

  const el = document.getElementById(sectionId);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

onMounted(() => {
  updateHeaderOffsetVar();
  window.addEventListener("resize", updateHeaderOffsetVar, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeaderOffsetVar);
});
</script>

<template>
  <div class="container">
    
    <header class="site-header">
      <nav class="site-navigation" :aria-label="navContent.ariaLabel">
        <button
          v-for="section in navContent.sections"
          :key="section.id"
          class="site-nav-button"
          :class="{ active: activeSection === section.id }"
          type="button"
          @click="scrollToSection(section.id)"
        >
          {{ section.label }}
        </button>
      </nav>
    </header>

    
    <About class="section0" />
    <Journey id="about" class="section" />
    <Stack id="stack" class="section" />
    <Project id="projects" class="section" />
    <Graphics id="graphics" class="section" />
    <Contacts class="section" />
  </div>
</template>

<style scoped>
.container {
  min-height: 100%;
  --header-offset: 90px; 
}


.site-header {
  position: fixed;
  top: 18px;
  left: 18px;
  transform: none;
  z-index: 10;
}

.site-navigation {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
  overflow: hidden;
}

.site-nav-button {
  border: none;
  border-radius: 999px;
  height: 36px;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "OpenSansBold";
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  line-height: 1;
  white-space: nowrap;
  color: #dcdcdc;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.site-nav-button:hover {
  background: rgba(165, 211, 198, 0.15);
}

.site-nav-button.active {
  background: #a5d3c6;
  color: #1e1c17;
}

.site-nav-button:focus-visible {
  outline: 2px solid #a5d3c6;
  outline-offset: 2px;
}


.section0 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100svh;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}


.section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  
  scroll-margin-top: var(--header-offset);
}

@media (max-width: 768px) {
  .site-header {
    display: none;
  }

  .section {
    padding: 16px;
    scroll-margin-top: 16px;
  }
}
</style>
