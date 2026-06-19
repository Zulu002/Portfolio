<script setup>
import { computed } from "vue";
import logoUrl from "../assets/header-logo.svg";

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
      { label: "About", href: "#about" },
      { label: "Illustrations", href: "#graphics" },
      { label: "Stack", href: "#stack" },
      { label: "Projects", href: "#projects" },
    ],
    contacts: "Contacts",
    home: "Ignidra home",
    logo: "Ignidra logo",
    switchLabel: "Switch language",
  },
  ru: {
    nav: [
      { label: "Обо мне", href: "#about" },
      { label: "Иллюстрации", href: "#graphics" },
      { label: "Навыки", href: "#stack" },
      { label: "Проекты", href: "#projects" },
    ],
    contacts: "Контакты",
    home: "На главную Ignidra",
    logo: "Логотип Ignidra",
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
      <a
        class="brand-name"
        href="#about"
        :aria-label="text.home"
        @click.prevent="navigate('#about')"
      >
        Ignidra
      </a>

      <a
        class="brand-mark"
        href="#about"
        :aria-label="text.logo"
        @click.prevent="navigate('#about')"
      >
        <img :src="logoUrl" alt="" />
      </a>

      <nav class="main-nav" aria-label="Main navigation">
        <a
          v-for="link in text.nav"
          :key="link.href"
          class="nav-link"
          :class="{ active: activeSection === sectionFromHref(link.href) }"
          :href="link.href"
          @click.prevent="navigate(link.href)"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="header-actions">
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

        <a
          class="contact-link"
          :class="{ active: activeSection === 'contacts' }"
          href="#contacts"
          @click.prevent="navigate('#contacts')"
        >
          {{ text.contacts }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 5px 28px;
  box-sizing: border-box;
}

.header-inner {
  display: grid;
  grid-template-columns: max-content 43px minmax(0, 1fr) max-content;
  gap: 5px;
  align-items: center;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
}

.brand-name,
.brand-mark,
.main-nav,
.contact-link,
.language-switch {
  min-height: 43px;
  border-radius: 3px;
  background: #d1ffc4;
  color: #060606;
  box-sizing: border-box;
}

.brand-name,
.contact-link,
.nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  letter-spacing: 0;
  text-decoration: none;
  white-space: nowrap;
}

.brand-name {
  min-width: 82px;
  padding: 0 9px;
  font-size: 20px;
}

.brand-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  padding: 4px;
}

.brand-mark img {
  display: block;
  width: 32px;
  height: 36px;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 21px;
  padding: 0 17px;
}

.nav-link,
.contact-link {
  font-size: 14px;
}

.nav-link,
.contact-link {
  color: #060606;
  text-decoration: underline;
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: color var(--motion-duration) var(--motion-ease),
    text-decoration-color var(--motion-duration) var(--motion-ease);
}

.contact-link {
  min-width: 84px;
  padding: 0 16px;
}

.header-actions {
  display: flex;
  gap: 5px;
  align-items: center;
}

.language-switch {
  display: inline-flex;
  align-items: center;
  padding: 4px;
}

.language-option {
  min-width: 36px;
  height: 35px;
  border: 0;
  border-radius: 3px;
  background: transparent;
  color: #060606;
  cursor: pointer;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: 13px;
  transition: background-color var(--motion-duration) var(--motion-ease);
}

.language-option.active,
.language-option:hover,
.language-option:focus-visible {
  background: rgba(6, 6, 6, 0.12);
}

.nav-link:hover,
.nav-link.active,
.contact-link:hover,
.contact-link.active {
  color: #060606;
  text-decoration-color: currentColor;
}

.brand-name:focus-visible,
.brand-mark:focus-visible,
.nav-link:focus-visible,
.contact-link:focus-visible,
.language-option:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

@media (max-width: 760px) {
  .site-header {
    padding: 5px 14px;
  }

  .header-inner {
    grid-template-columns: max-content 43px 1fr;
    grid-template-areas:
      "name mark actions"
      "nav nav nav";
  }

  .brand-name {
    grid-area: name;
  }

  .brand-mark {
    grid-area: mark;
  }

  .main-nav {
    grid-area: nav;
    justify-content: space-between;
    gap: 10px;
    overflow-x: auto;
  }

  .header-actions {
    grid-area: actions;
    justify-self: end;
  }

  .contact-link {
    min-width: 0;
  }
}
</style>
