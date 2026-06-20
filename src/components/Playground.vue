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
    title: "loading next idea",
    text:
      "I have a lot of ideas and projects that I want to try: design, games, applications.",
  },
  ru: {
    title: "загружаю идею",
    text:
      "У меня много идей и проектов, которые я хочу попробовать: дизайн, игры, приложения.",
  },
};

const copy = computed(() => content[props.locale] ?? content.en);

const pixels = [
  0, 1, 0, 1, 1, 0,
  1, 1, 0, 0, 1, 1,
  0, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 0,
];
</script>

<template>
  <section class="playground">
    <article class="play-card">
      <div class="card-copy">
        <h2 class="card-title">{{ copy.title }}</h2>
        <p class="card-text">{{ copy.text }}</p>
      </div>

      <div class="pixel-loader" aria-hidden="true">
        <span
          v-for="(pixel, index) in pixels"
          :key="index"
          class="pixel"
          :class="{ active: pixel }"
          :style="{ '--delay': `${index * 0.08}s` }"
        ></span>
      </div>

      <div class="load-line" aria-hidden="true">
        <span></span>
      </div>
    </article>
  </section>
</template>

<style scoped>
.playground {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.play-card {
  position: relative;
  width: 100%;
  max-width: var(--content-width);
  min-height: 172px;
  margin: 0 auto;
  overflow: hidden;
  padding: 24px 31px 28px;
  border-radius: 5px;
  background: #000000;
  box-sizing: border-box;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
}

.card-copy {
  position: relative;
  z-index: 1;
}

.card-title {
  max-width: calc(100% - 178px);
  margin: 0;
  color: var(--accent);
  font-size: clamp(28px, 3.2vw, 31px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
}

.card-text {
  margin: 10px 0 0;
  color: #ffffff;
  font-size: 18px;
  line-height: 1.1;
}

.pixel-loader {
  position: absolute;
  top: 24px;
  right: 31px;
  display: grid;
  grid-template-columns: repeat(6, 18px);
  gap: 6px;
}

.pixel {
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.16);
  animation: pixel-pulse 2.4s steps(2, end) var(--delay) infinite;
}

.pixel.active {
  background: var(--accent);
}

.load-line {
  position: absolute;
  right: 31px;
  bottom: 28px;
  left: 31px;
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
}

.load-line span {
  display: block;
  width: 42%;
  height: 100%;
  border-radius: inherit;
  background: var(--accent);
  animation: loader-scan 3.2s var(--motion-ease) infinite;
}

@keyframes pixel-pulse {
  0%,
  100% {
    opacity: 0.36;
    transform: scale(0.86);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes loader-scan {
  0% {
    transform: translateX(-110%);
  }

  100% {
    transform: translateX(260%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pixel,
  .load-line span {
    animation: none;
  }
}

@media (max-width: 760px) {
  .playground {
    padding: 8px 16px;
  }

  .play-card {
    min-height: 166px;
    padding: 22px;
  }

  .card-title {
    max-width: calc(100% - 134px);
  }

  .pixel-loader {
    top: 22px;
    right: 22px;
    grid-template-columns: repeat(6, 15px);
    gap: 5px;
  }

  .pixel {
    width: 15px;
    height: 15px;
  }

  .load-line {
    right: 22px;
    bottom: 22px;
    left: 22px;
  }
}
</style>
