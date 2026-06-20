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
    name: "Zulumkhanov",
    surname: "Gadzhi",
    tagline: "I'm getting ready to crush the sun",
  },
  ru: {
    name: "Zulumkhanov",
    surname: "Gadzhi",
    tagline: "Готовлюсь сокрушить солнце",
  },
};

const text = computed(() => content[props.locale] ?? content.en);

const dots = [
  "muted",
  "bright",
  "empty",
  "bright",
  "empty",
  "muted",
  "bright",
  "bright",
  "bright",
  "empty",
  "bright",
  "muted",
  "bright",
  "empty",
  "bright",
  "bright",
  "bright",
  "empty",
  "muted",
  "bright",
  "empty",
  "bright",
  "muted",
  "bright",
  "empty",
  "bright",
  "bright",
  "bright",
  "bright",
  "muted",
  "empty",
  "bright",
  "bright",
  "muted",
  "bright",
  "muted",
  "bright",
  "empty",
  "muted",
  "bright",
  "empty",
  "muted",
  "bright",
  "bright",
  "bright",
  "empty",
];
</script>

<template>
  <section class="about" id="about">
    <div class="about-panel">
      <div class="about-copy">
        <h1 class="about-title">{{ text.name }}<br />{{ text.surname }}</h1>
        <p class="about-tagline">{{ text.tagline }}</p>
      </div>

      <div class="dot-pattern" aria-hidden="true">
        <span
          v-for="(dot, index) in dots"
          :key="index"
          class="dot-cell"
          :class="dot"
          :style="{ '--delay': `${index * -0.23}s` }"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  width: 100%;
  padding: 16px 10px 10px;
  box-sizing: border-box;
}

.about-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  width: 100%;
  max-width: var(--content-width);
  min-height: 278px;
  margin: 0 auto;
  padding: 36px 31px 24px 24px;
  box-sizing: border-box;
  background: #000000;
  border-radius: 5px;
}

.about-copy {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 216px;
}

.about-title {
  margin: 0;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: clamp(42px, 5vw, 58px);
  font-weight: 400;
  line-height: 0.88;
  letter-spacing: 0;
  color: #ffffff;
}

.about-tagline {
  margin: 24px 0 0;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: 18px;
  line-height: 1.15;
  letter-spacing: 0;
  color: var(--accent);
}

.dot-pattern {
  display: grid;
  grid-template-columns: repeat(9, 40px);
  grid-auto-rows: 40px;
  gap: 4px;
  align-self: center;
}

.dot-cell {
  display: block;
  width: 40px;
  height: 40px;
}

.dot-cell.bright,
.dot-cell.muted {
  border-radius: 50%;
  animation: dot-shift 1.6s ease-in-out var(--delay) infinite alternate;
}

.dot-cell.bright {
  --dot-from: var(--accent);
  --dot-to: var(--accent-muted);
}

.dot-cell.muted {
  --dot-from: var(--accent-muted);
  --dot-to: var(--accent);
}

@keyframes dot-shift {
  0%,
  28% {
    background: var(--dot-from);
  }

  100% {
    background: var(--dot-to);
  }
}

@media (max-width: 980px) {
  .about-panel {
    grid-template-columns: 1fr;
    gap: 34px;
    align-items: start;
  }

  .about-copy {
    min-height: 0;
  }

  .dot-pattern {
    justify-self: end;
  }
}

@media (max-width: 520px) {
  .about {
    padding: 12px 16px 8px;
  }

  .about-panel {
    min-height: 0;
    padding: 28px 22px 22px;
  }

  .about-title {
    font-size: 42px;
  }

  .about-tagline {
    margin-top: 18px;
    font-size: 15px;
  }

  .dot-pattern {
    grid-template-columns: repeat(9, 28px);
    grid-auto-rows: 28px;
    gap: 4px;
  }

  .dot-cell {
    width: 28px;
    height: 28px;
  }
}
</style>
