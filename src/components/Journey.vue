<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

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
    words: [
      "404 404 404 404 404",
      "I'm a designer, gamer, developer (maybe)",
      "I want an interesting job",
    ],
  },
  ru: {
    title: "немного обо мне",
    text:
      "Технологии с детства стали важной частью моей жизни. Со временем я особенно полюбил дизайн и игровую индустрию, а этот интерес перерос в желание создавать собственные проекты. Я окончил РКСИ по профессии программиста и сейчас продолжаю обучение в университете. В будущем хочу объединить знания в разработке и дизайне, чтобы создавать интересные игры.",
    words: [
      "404 404 404 404 404",
      "Я дизайнер, геймер, разработчик (может быть)",
      "Хочу интересную работу",
    ],
  },
};

const text = computed(() => content[props.locale] ?? content.en);
const typedText = ref("");

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let timerId;

const tick = () => {
  const currentWords = text.value.words;
  const currentWord = currentWords[wordIndex];

  if (isDeleting) {
    letterIndex -= 1;
  } else {
    letterIndex += 1;
  }

  typedText.value = currentWord.slice(0, letterIndex);

  let delay = isDeleting ? 55 : 95;

  if (!isDeleting && letterIndex === currentWord.length) {
    delay = 900;
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    delay = 280;
    isDeleting = false;
    wordIndex = (wordIndex + 1) % currentWords.length;
  }

  timerId = window.setTimeout(tick, delay);
};

onMounted(() => {
  timerId = window.setTimeout(tick, 350);
});

onBeforeUnmount(() => {
  window.clearTimeout(timerId);
});

watch(
  () => props.locale,
  () => {
    window.clearTimeout(timerId);
    wordIndex = 0;
    letterIndex = 0;
    isDeleting = false;
    typedText.value = "";
    timerId = window.setTimeout(tick, 250);
  },
);
</script>

<template>
  <section class="journey">
    <div class="journey-panel">
      <h2 class="journey-title">{{ text.title }}</h2>
      <p class="journey-text">{{ text.text }}</p>

      <div class="journey-divider" aria-hidden="true"></div>

      <p class="typing-line">
        <span class="typing-word">{{ typedText }}</span>
      </p>
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

.journey-divider {
  width: 100%;
  height: 1px;
  margin: 16px 0 12px;
  background: rgba(var(--accent-rgb), 0.42);
}

.typing-line {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 24px;
  margin: 0;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: 20px;
  line-height: 1.1;
  letter-spacing: 0;
}

.typing-word {
  min-width: 360px;
  color: var(--accent);
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

  .typing-line {
    font-size: 18px;
  }

  .typing-word {
    min-width: 0;
  }
}
</style>
