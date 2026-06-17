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
    title: "contacts",
    text:
      "I am open to design work, web projects, game-related visuals, and small creative collaborations.",
    aria: "Contact links",
    meta: "2026 by ignidra",
  },
  ru: {
    title: "контакты",
    text:
      "Открыт к дизайн-задачам, веб-проектам, визуалу для игр и небольшим творческим коллаборациям.",
    aria: "Контактные ссылки",
    meta: "2026 by ignidra",
  },
};

const links = computed(() => [
  { label: "Telegram", href: "https://t.me/Ignidra", external: true },
  { label: "Email", href: "mailto:ignidra0@gmail.com?subject=Portfolio" },
  { label: "GitHub", href: "https://github.com/Zulu002", external: true },
  { label: "Pinterest", href: "https://pin.it/2EtxOo6aR", external: true },
]);

const text = computed(() => content[props.locale] ?? content.en);
</script>

<template>
  <footer class="contacts">
    <div class="contacts-panel">
      <div class="contacts-copy">
        <h2 class="contacts-title">{{ text.title }}</h2>
        <p class="contacts-text">{{ text.text }}</p>
      </div>

      <nav class="contact-links" :aria-label="text.aria">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="contact-link"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>

      <p class="footer-meta">{{ text.meta }}</p>
    </div>
  </footer>
</template>

<style scoped>
.contacts {
  width: 100%;
  padding: 10px 10px 24px;
  box-sizing: border-box;
}

.contacts-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 28px 31px 24px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #000000;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
}

.contacts-title {
  margin: 0 0 12px;
  color: #d1ffc4;
  font-size: clamp(28px, 3.2vw, 31px);
  font-weight: 400;
  line-height: 1.1;
}

.contacts-text {
  max-width: 560px;
  margin: 0;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.2;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: start;
  gap: 8px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 5px;
  background: #d1ffc4;
  color: #060606;
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

.contact-link:hover,
.contact-link:focus-visible {
  text-decoration-color: currentColor;
  transform: translateY(-1px);
}

.footer-meta {
  grid-column: 1 / -1;
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.64);
  font-size: 13px;
}

@media (max-width: 720px) {
  .contacts {
    padding: 8px 16px 20px;
  }

  .contacts-panel {
    grid-template-columns: 1fr;
    padding: 24px 22px;
  }

  .contact-links {
    justify-content: flex-start;
  }
}
</style>
