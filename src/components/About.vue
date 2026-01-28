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
  },
  en: {
    logoAlt: "Developer logo",
    paragraphs: [
      "My name is Gadzhi. I am a designer focused on graphic and web design, and I am also interested in game development.",
      "Since childhood I have been fascinated by the world of video games, and over time this passion grew into a desire to understand and create them myself. That inspired me to develop my design skills: in college I started with logos, brand identities, and website layouts.",
      "I am currently growing in web development, diving deeper into JavaScript and front-end frameworks to build digital products that are not only visually appealing but also functional.",
    ],
  },
};

const content = computed(() => translations[props.language] ?? translations.ru);

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
  max-width: 880px;
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
  max-width: 820px;
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 12px;
  }

  p {
    font-size: 1rem;
  }

  .developer-section img {
    width: 90px;
    margin-bottom: 18px;
  }
}

</style>
