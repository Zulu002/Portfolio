<script setup>
import { computed } from "vue";

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
});

const content = {
  en: {
    title: "Little about me",
    text:
      "I’ve been into computers and games since I was a kid. Later, I got interested in design and started trying to make things of my own. I graduated from RKSI with a qualification in programming, and I’m now studying at university. I want to keep learning about design and development and eventually make my own game.",
  },
  ru: {
    title: "Немного обо мне",
    text:
      "С детства увлекаюсь компьютерами и играми. Позже заинтересовался дизайном и начал пробовать делать что-то своё. Окончил РКСИ по специальности «Программирование», сейчас учусь в университете. Хочу дальше развиваться в дизайне и разработке и со временем сделать свою игру.",
  },
};

const text = computed(() => content[props.locale] ?? content.en);
</script>

<template>
  <section class="journey">
    <div class="journey-panel">
      <h2 class="journey-title">{{ text.title }}</h2>
      <p class="journey-text">{{ text.text }}</p>

    </div>
  </section>
</template>

<style scoped>
.journey {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.journey-panel {
  width: 100%;
  max-width: var(--content-width);
  min-height: 0;
  margin: 0 auto;
  padding: 24px 31px;
  background: #eae9e9;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  align-items: start;
  box-sizing: border-box;
}

.journey-title {
  margin: 0;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: clamp(28px, 3.2vw, 31px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
  color: #111111;
}

.journey-text {
  width: 100%;
  margin: 0;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0;
  text-align: left;
  color: #303030;
}

@media (max-width: 760px) {
  .journey {
    padding: 8px 16px;
  }

  .journey-panel {
    min-height: 0;
    padding: 20px 22px;
  }

  .journey-text {
    font-size: 17px;
    line-height: 1.5;
  }

}
</style>
