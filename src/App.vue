<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Graphics from "./components/Graphics.vue";
import Contacts from "./components/Contacts.vue";

const language = ref("ru");

const navContent = computed(() =>
  language.value === "en"
    ? {
        ariaLabel: "Main sections",
        sections: [
          { id: "projects", label: "PROJECTS" },
          { id: "graphics", label: "SHOWCASE" },
          { id: "contacts", label: "CONTACTS" },
        ],
      }
    : {
        ariaLabel: "Основные разделы",
        sections: [
          { id: "projects", label: "ПРОЕКТЫ" },
          { id: "graphics", label: "ВИТРИНА" },
          { id: "contacts", label: "КОНТАКТЫ" },
        ],
      }
);

const sectionIds = ["projects", "graphics", "contacts"];
const activeSection = ref(sectionIds[0]);

const setLanguage = (nextLanguage) => {
  language.value = nextLanguage;
};

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  activeSection.value = sectionId;
};

const updateActiveSection = () => {
  const offset = 120;
  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (!section) {
      continue;
    }
    const rect = section.getBoundingClientRect();
    if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
      activeSection.value = id;
      return;
    }
  }
};

onMounted(() => {
  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("resize", updateActiveSection);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateActiveSection);
  window.removeEventListener("resize", updateActiveSection);
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
          :class="{ 'site-nav-button--active': activeSection === section.id }"
          type="button"
          @click="scrollToSection(section.id)"
        >
          {{ section.label }}
        </button>
      </nav>
      <div class="language-switcher" role="group" aria-label="Language switcher">
        <button
          class="language-button"
          :class="{ active: language === 'ru' }"
          type="button"
          @click="setLanguage('ru')"
        >
          RU
        </button>
        <button
          class="language-button"
          :class="{ active: language === 'en' }"
          type="button"
          @click="setLanguage('en')"
        >
          EN
        </button>
      </div>
    </header>

    <About id="about" class="section section-1" :language="language" />
    <Project id="projects" class="section section-3" :language="language" />
    <Graphics id="graphics" class="section section-4" :language="language" />
    <Contacts id="contacts" class="section section-5" :language="language" />
  </div>
</template>

<style scoped>
.container {
  min-height: 100%;
}

.site-header {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  z-index: 10;
}

.site-navigation {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
}

.site-nav-button {
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 8px 20px;
  font-family: "OpenSansBold";
  font-size: clamp(1rem, 0.8vw + 0.7rem, 1.2rem);
  letter-spacing: 0.02em;
  color: #dcdcdc;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease;
}

.site-nav-button:hover {
  border-color: rgba(165, 211, 198, 0.8);
}

.site-nav-button:focus-visible {
  outline: 2px solid #a5d3c6;
  outline-offset: 2px;
}

.site-nav-button--active {
  background: #a5d3c6;
  color: #1e1c17;
  border-color: transparent;
}

.language-switcher {
  display: inline-flex;
  gap: 6px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  z-index: 10;
}

.language-button {
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 6px 14px;
  font-family: "OpenSansBold";
  font-size: 0.85rem;
  color: #dcdcdc;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.language-button:hover {
  border-color: rgba(165, 211, 198, 0.8);
}

.language-button:focus-visible {
  outline: 2px solid #a5d3c6;
  outline-offset: 2px;
}

.language-button.active {
  background: #a5d3c6;
  color: #1e1c17;
  border-color: transparent;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100svh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  scroll-margin-top: 80px;
}

.section-1 {
  background-color: #1e1c17;
}

.section-3,
.section-5 {
  background-color: #1e1c17;
  background-image:
    radial-gradient(rgba(165, 211, 198, 0.1) 2px, transparent 1px),
    radial-gradient(rgba(165, 211, 198, 0.1) 2px, transparent 1px);
  background-size: 40px 40px, 80px 80px;
  background-position: 0 0, 20px 20px;
}

.section-4 {
  background-color: #EEE6DB;
}

@media (max-width: 768px) {
  .site-header {
    top: 12px;
    left: 12px;
    right: 12px;
    flex-direction: column;
    gap: 8px;
  }

  .site-navigation {
    justify-content: center;
  }

  .site-nav-button {
    padding: 6px 16px;
    font-size: 0.9rem;
  }

  .language-switcher {
    padding: 4px;
  }

  .language-button {
    padding: 4px 12px;
    font-size: 0.75rem;
  }

  .section {
    padding: 16px;
  }
}
</style>
