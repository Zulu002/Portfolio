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
    alias: "(ignidra)",
  },
  ru: {
    name: "Зулумханов",
    surname: "Гаджи",
    alias: "(ignidra)",
  },
};

const text = computed(() => content[props.locale] ?? content.en);
const contactLabel = computed(() => (props.locale === "ru" ? "Написать мне" : "Contact me"));

const goToContacts = () => {
  emit("navigate", "#contacts", { highlightContacts: true });
};

</script>

<template>
  <section class="about" id="about">
    <div class="about-panel">
      <div class="about-copy">
        <h1 class="about-title">
          {{ text.name }}<br />{{ text.surname }}<span class="about-alias">{{ text.alias }}</span>
        </h1>
        <button type="button" class="about-contact" @click="goToContacts">
          {{ contactLabel }}
        </button>
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
  position: relative;
  isolation: isolate;
  container-type: inline-size;
  overflow: hidden;
  display: flex;
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

.about-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(to right, rgba(var(--accent-rgb), 0.24) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(var(--accent-rgb), 0.24) 1px, transparent 1px);
  background-size: 64px 64px;
  background-position: center;
}

.about-copy {
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 190px;
}

.about-title {
  margin: 0;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: clamp(32px, 5cqw, 58px);
  font-weight: 400;
  line-height: 0.88;
  letter-spacing: 0;
  color: #ffffff;
}

.about-alias {
  display: inline-block;
  margin-left: 7px;
  font-size: 0.5em;
  line-height: 1;
  color: var(--accent);
  vertical-align: baseline;
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

@media (max-width: 520px) {
  .about {
    padding: 12px 16px 8px;
  }

  .about-panel {
    min-height: 0;
    padding: 22px;
  }

  .about-alias {
    display: block;
    margin: 8px 0 0;
  }

  .about-contact {
    padding: 0 12px;
    font-size: 15px;
  }

}
</style>
