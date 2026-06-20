<script setup>
import { computed } from "vue";

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
  activeSection: {
    type: String,
    default: "about",
  },
});

const emit = defineEmits(["update:locale", "navigate"]);

const labels = {
  en: {
    nav: [
      { label: "About", href: "#about", marker: "1" },
      { label: "Journey", href: "#journey", marker: "2" },
      { label: "Stack", href: "#stack", marker: "3" },
      { label: "Illustrations", href: "#graphics", marker: "4" },
      { label: "Projects", href: "#projects", marker: "5" },
    ],
    switchLabel: "Switch language",
  },
  ru: {
    nav: [
      { label: "Обо мне", href: "#about", marker: "1" },
      { label: "Путь", href: "#journey", marker: "2" },
      { label: "Навыки", href: "#stack", marker: "3" },
      { label: "Иллюстрации", href: "#graphics", marker: "4" },
      { label: "Проекты", href: "#projects", marker: "5" },
    ],
    switchLabel: "Переключить язык",
  },
};

const text = computed(() => labels[props.locale] ?? labels.en);
const sectionFromHref = (href) => href.replace("#", "");

const setLocale = (value) => {
  emit("update:locale", value);
};

const navigate = (href) => {
  emit("navigate", href);
};
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <nav class="main-nav" aria-label="Main navigation">
        <a
          v-for="link in text.nav"
          :key="link.href"
          class="nav-link"
          :class="{ active: activeSection === sectionFromHref(link.href) }"
          :href="link.href"
          :aria-label="link.label"
          :title="link.label"
          @click.prevent="navigate(link.href)"
        >
          {{ link.marker }}
        </a>
      </nav>

      <div class="language-switch" :aria-label="text.switchLabel">
        <button
          type="button"
          class="language-option"
          :class="{ active: locale === 'en' }"
          @click="setLocale('en')"
        >
          EN
        </button>
        <button
          type="button"
          class="language-option"
          :class="{ active: locale === 'ru' }"
          @click="setLocale('ru')"
        >
          RU
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 10px;
  right: 17px;
  z-index: 10;
  width: 33px;
  box-sizing: border-box;
}

.header-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 4px;
  border-radius: 4px;
  background: #000000;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
}

.main-nav,
.language-switch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.nav-link,
.language-option {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  background: transparent;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: 20px;
  line-height: 1;
  transition: background-color var(--motion-duration) var(--motion-ease),
    color var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
}

.nav-link {
  text-decoration: none;
}

.language-option {
  height: 25px;
  border: 0;
  cursor: pointer;
  font-size: 13px;
}

.nav-link:hover,
.nav-link.active,
.language-option:hover,
.language-option.active,
.language-option:focus-visible {
  background: #3d3d3d;
  color: #ffffff;
}

.nav-link:hover,
.nav-link.active {
  transform: translateY(-1px);
}

.nav-link:focus-visible,
.language-option:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

@media (max-width: 900px) {
  .site-header {
    top: 10px;
    right: 10px;
    width: 31px;
  }

  .header-inner {
    padding: 4px;
  }

  .nav-link,
  .language-option {
    width: 23px;
    border-radius: 4px;
  }

  .nav-link {
    height: 23px;
    font-size: 18px;
  }

  .language-option {
    height: 23px;
    font-size: 12px;
  }
}
</style>
