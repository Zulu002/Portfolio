<script setup>
import { computed } from "vue";

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
});

const emit = defineEmits(["navigate"]);

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
const contactLabel = computed(() => (props.locale === "ru" ? "Контакты" : "Contacts"));

const goToContacts = () => {
  emit("navigate", "#contacts");
};

const dotPattern = [
  "111101111",
  "100000010",
  "101100100",
  "100101000",
  "111101111",
];

const dots = dotPattern.flatMap((row) =>
  [...row].map((cell) => (cell === "1" ? "bright" : "muted")),
);
</script>

<template>
  <section class="about" id="about">
    <div class="about-panel">
      <div class="about-copy">
        <h1 class="about-title">{{ text.name }}<br />{{ text.surname }}</h1>
        <p class="about-tagline">{{ text.tagline }}</p>
        <button type="button" class="about-contact" @click="goToContacts">
          {{ contactLabel }}
        </button>
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
  min-height: 238px;
  margin: 0 auto;
  padding: 24px 31px;
  box-sizing: border-box;
  background: #000000;
  border-radius: 5px;
}

.about-copy {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 190px;
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

.about-contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-height: 36px;
  margin-top: 18px;
  padding: 0 12px;
  border: 0;
  border-radius: 5px;
  background: var(--accent);
  color: #060606;
  cursor: pointer;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: 15px;
  line-height: 1;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: background-color var(--motion-duration) var(--motion-ease),
    text-decoration-color var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
}

.about-contact:hover,
.about-contact:focus-visible {
  text-decoration-color: currentColor;
  transform: translateY(-1px);
}

.about-contact:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

.dot-pattern {
  display: grid;
  grid-template-columns: repeat(9, 40px);
  grid-auto-rows: 40px;
  gap: 4px;
  align-self: end;
  justify-self: end;
  margin-bottom: 0;
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
    gap: 22px;
    align-items: start;
  }

  .about-copy {
    min-height: 0;
  }

  .dot-pattern {
    order: -1;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    grid-auto-rows: auto;
    gap: clamp(3px, 0.8vw, 6px);
    justify-self: center;
    align-self: auto;
    width: 100%;
    max-width: 440px;
  }

  .dot-cell {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
  }
}

@media (max-width: 520px) {
  .about {
    padding: 12px 16px 8px;
  }

  .about-panel {
    min-height: 0;
    padding: 22px;
  }

  .about-title {
    font-size: 42px;
  }

  .about-tagline {
    margin-top: 18px;
    font-size: 15px;
  }

}
</style>
