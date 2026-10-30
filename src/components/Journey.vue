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
    title: "little about me",
    text:
      "Technology has been an important part of my life since childhood. Over time, I developed a passion for design and the game industry, and that interest grew into a desire to create projects of my own. I graduated from RKSI as a software developer and am now continuing my studies at university. In the future, I want to combine my knowledge of development and design to create engaging games.",
  },
  ru: {
    title: "немного обо мне",
    text:
      "Технологии с детства стали важной частью моей жизни. Со временем я особенно полюбил дизайн и игровую индустрию, а этот интерес перерос в желание создавать собственные проекты. Я окончил РКСИ по профессии программиста и сейчас продолжаю обучение в университете. В будущем хочу объединить знания в разработке и дизайне, чтобы создавать интересные игры.",
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
  padding: 22px 31px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #000000;
}

.journey-title {
  margin: 0 0 10px;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: clamp(28px, 3.2vw, 31px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
  color: var(--accent);
}

.journey-text {
  max-width: 1116px;
  margin: 0;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.16;
  letter-spacing: 0;
  text-align: justify;
  color: #ffffff;
}

@media (max-width: 640px) {
  .journey {
    padding: 8px 16px;
  }

  .journey-panel {
    min-height: 0;
    padding: 20px 22px;
  }

  .journey-text {
    font-size: 15px;
    line-height: 1.25;
  }

}
</style>
