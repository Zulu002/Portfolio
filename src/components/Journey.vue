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
      "I've been fascinated with video games since childhood, and this is what eventually led me to want to create my own projects. I enrolled in the Rostov College of Communications and Informatics, majoring in Information Systems. In my third year, I discovered web development and design and began creating small web pages, icons, and logos. I'm currently pursuing a degree in Business Informatics and simultaneously studying indie development, striving to develop at the intersection of design, technology, and digital product creation.",
    prefix: "I am",
    words: ["developer", "designer", ":)", "game developer", "master chief"],
  },
  ru: {
    title: "немного обо мне",
    text:
      "С детства меня увлекали видеоигры, и со временем это привело меня к желанию создавать собственные проекты. Я поступил в Ростовский колледж связи и информатики на направление информационных систем. На третьем курсе познакомился с веб-разработкой и дизайном, начал делать небольшие страницы, иконки и логотипы. Сейчас я учусь на бизнес-информатике и параллельно изучаю инди-разработку, развиваясь на стыке дизайна, технологий и цифровых продуктов.",
    prefix: "Я",
    words: ["разработчик", "дизайнер", ":)", "game developer", "master chief"],
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
        <span class="typing-prefix">{{ text.prefix }}</span>
        <span class="typing-word">{{ typedText }}</span>
        <span class="typing-caret" aria-hidden="true"></span>
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
  min-height: 218px;
  margin: 0 auto;
  padding: 28px 31px 30px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #000000;
}

.journey-title {
  margin: 0 0 16px;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: clamp(28px, 3.2vw, 31px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
  color: #d1ffc4;
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
  margin: 26px 0 18px;
  background: rgba(209, 255, 196, 0.42);
}

.typing-line {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 31px;
  margin: 0;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: 0;
}

.typing-prefix {
  color: #ffffff;
}

.typing-word {
  min-width: 172px;
  color: #d1ffc4;
}

.typing-caret {
  width: 2px;
  height: 25px;
  background: #d1ffc4;
  animation: caret-blink 0.8s steps(1) infinite;
}

@keyframes caret-blink {
  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}

@media (max-width: 640px) {
  .journey {
    padding: 8px 16px;
  }

  .journey-panel {
    min-height: 0;
    padding: 24px 22px;
  }

  .journey-text {
    font-size: 15px;
    line-height: 1.25;
  }

  .typing-line {
    font-size: 20px;
  }

  .typing-word {
    min-width: 142px;
  }
}
</style>
