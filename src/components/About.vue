<script setup>
import { computed } from "vue";

const props = defineProps({
  language: {
    type: String,
    default: "ru",
  },
});

const translations = {
  ru: {
    logoAlt: "Логотип разработчика",
    paragraphs: [
      "Меня зовут Гаджи. Я дизайнер с фокусом на графический и веб-дизайн, а также интересуюсь разработкой игр (геймдевом).",
      "С детства меня увлекал мир видеоигр, и со временем это увлечение переросло в желание понимать и создавать их самому. Это побудило меня развивать навыки дизайна: в колледже я начал с создания логотипов, фирменного стиля и макетов для веб-сайтов.",
      "Сейчас я активно развиваюсь в области веб-разработки, углубленно изучая JavaScript и фреймворки для фронтенда, чтобы создавать не только визуально привлекательные, но и функциональные цифровые продукты.",
    ],
    navAriaLabel: "Основные разделы",
    sections: [
      { id: "projects", label: "ПРОЕКТЫ" },
      { id: "graphics", label: "ВИТРИНА" },
      { id: "contacts", label: "КОНТАКТЫ", isContact: true },
    ],
  },
  en: {
    logoAlt: "Developer logo",
    paragraphs: [
      "My name is Gadzhi. I am a designer focused on graphic and web design, and I am also interested in game development.",
      "Since childhood I have been fascinated by the world of video games, and over time this passion grew into a desire to understand and create them myself. That inspired me to develop my design skills: in college I started with logos, brand identities, and website layouts.",
      "I am currently growing in web development, diving deeper into JavaScript and front-end frameworks to build digital products that are not only visually appealing but also functional.",
    ],
    navAriaLabel: "Main sections",
    sections: [
      { id: "projects", label: "PROJECTS" },
      { id: "graphics", label: "SHOWCASE" },
      { id: "contacts", label: "CONTACTS", isContact: true },
    ],
  },
};

const content = computed(() => translations[props.language] ?? translations.ru);

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <section>
    <main class="container">
      <section class="developer-section">
        <img src="../assets/logo.svg" :alt="content.logoAlt" />

        <p v-for="(paragraph, index) in content.paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </section>

      <div class="divider"></div>

      <nav class="navigation" :aria-label="content.navAriaLabel">
        <button
          v-for="section in content.sections"
          :key="section.id"
          class="nav-button"
          :class="{ 'nav-button--contact': section.isContact }"
          type="button"
          @click="scrollToSection(section.id)"
        >
          <span class="nav-label">{{ section.label }}</span>
        </button>
      </nav>
    </main>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.developer-section {
  width: 100%;
  color: #dcdcdc;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.developer-section img {
  width: 120px;
  height: auto;
  margin-bottom: 25px;
}

p {
  margin: 0 0 15px;
  font-family: "OpenSansRegular";
  font-size: clamp(1rem, 1.1vw + 0.6rem, 1.25rem);
  text-align: left;
  line-height: 1.5;
  hyphens: auto;
  width: 100%;
}

.divider {
  width: 100%;
  height: 3px;
  margin: 5px 0 10px;
  background-color: #a5d3c6;
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 180px;
  height: 64px;
  flex: 1 1 180px;

  border: none;
  border-radius: 2px;
  cursor: pointer;

  font-family: "OpenSansBold";
  font-size: clamp(1rem, 1.1vw + 0.6rem, 1.4rem);

  background-color: #a5d3c6; 
  color: #1e1c17;

  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #7fb8a7;
}

.nav-button--contact {
  flex: 1.4 1 220px;
}

.nav-label {
  position: relative;
  padding: 0 18px;
}

.nav-label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translateY(-50%);
  background: #1e1c17;
  opacity: 0;
}

.nav-button:hover .nav-label::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 12px;
  }

  p {
    font-size: 1rem;
  }

  .navigation {
    flex-direction: column;
    align-items: center;
  }

  .nav-button {
    width: 100%;
    min-width: 0;
    height: 52px;
    flex: 1 1 auto;
  }

  .developer-section img {
    width: 90px;
    margin-bottom: 18px;
  }
}

@media (max-width: 640px) {
  .navigation {
    gap: 6px;
  }
}
</style>
