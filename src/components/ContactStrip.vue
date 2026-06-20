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
    aria: "Quick contact links",
  },
  ru: {
    aria: "Быстрые контактные ссылки",
  },
};

const links = [
  { label: "Telegram", href: "https://t.me/Ignidra", external: true },
  { label: "Email", href: "mailto:ignidra0@gmail.com?subject=Portfolio" },
  { label: "GitHub", href: "https://github.com/Zulu002", external: true },
];

const text = computed(() => content[props.locale] ?? content.en);
</script>

<template>
  <section class="contact-strip">
    <div class="strip-panel">
      <nav class="strip-links" :aria-label="text.aria">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="strip-link"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="signal" aria-hidden="true">
        <span v-for="index in 28" :key="index" :style="{ '--delay': `${index * 0.04}s` }"></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-strip {
  width: 100%;
  padding: 10px 10px 6px;
  box-sizing: border-box;
}

.strip-panel {
  display: grid;
  grid-template-columns: max-content minmax(180px, 1fr);
  gap: 24px;
  align-items: center;
  width: 100%;
  max-width: var(--content-width);
  min-height: 56px;
  margin: 0 auto;
  padding: 8px 12px;
  border-radius: 5px;
  background: #000000;
  box-sizing: border-box;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
}

.strip-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
}

.strip-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 5px;
  background: var(--accent);
  color: #060606;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  transition: background-color var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
}

.strip-link:hover,
.strip-link:focus-visible {
  background: #ffffff;
  transform: translateY(-1px);
}

.signal {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
  width: 100%;
  min-width: 420px;
  height: 34px;
  overflow: hidden;
}

.signal span {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 0;
  background: rgba(255, 255, 255, 0.22);
  transform-origin: bottom;
  transition: background-color var(--motion-duration) var(--motion-ease);
}

.strip-panel:has(.strip-link:hover) .signal span,
.strip-panel:has(.strip-link:focus-visible) .signal span {
  background: var(--accent);
  animation: equalizer-beat 0.72s steps(4, end) var(--delay) infinite;
}

@keyframes equalizer-beat {
  0%,
  100% {
    transform: scaleY(0.38);
  }

  25% {
    transform: scaleY(1.9);
  }

  50% {
    transform: scaleY(0.74);
  }

  75% {
    transform: scaleY(2.8);
  }
}

@media (prefers-reduced-motion: reduce) {
  .signal span {
    animation: none;
  }
}

@media (max-width: 640px) {
  .contact-strip {
    padding: 8px 16px;
  }

  .strip-panel {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 12px;
  }

  .signal {
    min-width: 0;
  }
}
</style>
