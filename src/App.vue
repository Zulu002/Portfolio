<script setup>
import { ref } from "vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Graphics from "./components/Graphics.vue";
import Contacts from "./components/Contacts.vue";

const language = ref("ru");

const setLanguage = (nextLanguage) => {
  language.value = nextLanguage;
};
</script>

<template>
  <div class="container">
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

    <About id="about" class="section section-1" :language="language" />
    <Project id="projects" class="section section-3" :language="language" />
    <Graphics id="graphics" class="section section-4" :language="language" />
    <Contacts id="contacts" class="section section-5" :language="language" />
  </div>
</template>

<style scoped>
.container {
  overflow-y: auto;
}

.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
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

.language-button.active {
  background: #a5d3c6;
  color: #1e1c17;
  border-color: transparent;
}

@media (max-width: 640px) {
  .language-switcher {
    top: 10px;
    right: 10px;
    padding: 2px;
    gap: 2px;
  }

  .language-button {
    padding: 2px 7px;
    font-size: 0.6rem;
  }
}

@media (max-width: 420px) {
  .language-switcher {
    top: 8px;
    right: 8px;
    padding: 2px;
    gap: 2px;
  }

  .language-button {
    padding: 1px 6px;
    font-size: 0.55rem;
    letter-spacing: 0.02em;
  }
}

@media (max-width: 360px) {
  .language-switcher {
    top: 6px;
    right: 6px;
    padding: 1px;
    gap: 2px;
  }

  .language-button {
    padding: 1px 5px;
    font-size: 0.5rem;
  }
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
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
</style>
