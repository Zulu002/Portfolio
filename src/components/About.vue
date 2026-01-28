<script setup>
import { computed } from "vue";

const props = defineProps({
  language: {
    type: String,
    default: "ru",
  },
});

const content = computed(() =>
  props.language === "en"
    ? {
        alt: "Developer logo",
        paragraphs: [
          "My name is Gadzhi. I am a designer focused on graphic and web design, and I am also interested in game development.",
          "Since childhood, I have been fascinated by video games, and over time that fascination grew into a desire to understand and create them myself. This motivated me to develop my design skills: in college I started with logos, brand identities, and website layouts.",
          "I am now actively growing in web development, diving deeper into JavaScript and front-end frameworks to create digital products that are not only visually appealing but also functional.",
        ],
      }
    : {
        alt: "Логотип разработчика",
        paragraphs: [
          "Меня зовут Гаджи. Я дизайнер с фокусом на графический и веб-дизайн, а также интересуюсь разработкой игр (геймдевом).",
          "С детства меня увлекал мир видеоигр, и со временем это увлечение переросло в желание понимать и создавать их самому. Это побудило меня развивать навыки дизайна: в колледже я начал с создания логотипов, фирменного стиля и макетов для веб-сайтов.",
          "Сейчас я активно развиваюсь в области веб-разработки, углубленно изучая JavaScript и фреймворки для фронтенда, чтобы создавать не только визуально привлекательные, но и функциональные цифровые продукты.",
        ],
      }
);
</script>

<template>
  <section>
    <main class="container">
      <section class="developer-section">
        <img src="../assets/logo.svg" alt="Developer logo" />

        <p>
          My name is Gadzhi. I am a designer focused on graphic and web design, and I am
          also interested in game development.
        </p>
        <p>
          Since childhood, I have been fascinated by video games, and over time that
          fascination grew into a desire to understand and create them myself. This
          motivated me to develop my design skills: in college I started with logos,
          brand identities, and website layouts.
        </p>
        <p>
          I am now actively growing in web development, diving deeper into JavaScript and
          front-end frameworks to create digital products that are not only visually
          appealing but also functional.
        </p>
      </section>

      <div class="divider"></div>
    </main>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  overflow-x: hidden;
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
  font-size: 1.5vw;
  text-align: justify;
  width: 100%;
}

.divider {
  width: 100%;
  height: 3px;
  margin: 5px 0 10px;
  background-color: #a5d3c6;
}



@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 10px;
  }

  p {
    font-size: 18px;
  }
}
</style>
