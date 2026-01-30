<script setup>
import { ref } from "vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Graphics from "./components/Graphics.vue";
import Contacts from "./components/Contacts.vue";
import Stack from "./components/Stack.vue";

const navContent = {
  ariaLabel: "Основные разделы",
  sections: [
    { id: "about", label: "ОБО МНЕ" },
    { id: "stack", label: "СТЕК" },
    { id: "graphics", label: "ВИТРИНА" },
    { id: "projects", label: "ПРОЕКТЫ" },
    { id: "contacts", label: "КОНТАКТЫ" },
  ],
};

const activeSection = ref("about");

const scrollToSection = (sectionId) => {
  activeSection.value = sectionId;

  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
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

    <About id="about" class="section0" />
    <Stack id="stack" class="section" />
    <Graphics id="graphics" class="section" />
    <Project id="projects" class="section" />
    <Contacts id="contacts" class="section0" />
  </div>
</template>

<style scoped>
.container {
  min-height: 100%;
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
  padding: 20px;
  box-sizing: border-box;
}

.section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 55svh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .site-header {
    display: none;
  }

  .site-navigation {
    max-width: calc(100vw - 24px);
    padding: 8px 10px;
    gap: 6px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .site-navigation::-webkit-scrollbar {
    display: none;
  }

  .site-nav-button {
    height: 34px;
    padding: 0 14px;
    font-size: 0.78rem;
  }

  .section {
    padding: 16px;
  }
}
</style>
