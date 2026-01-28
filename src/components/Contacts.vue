<script setup>
import { computed } from "vue";

const props = defineProps({
  language: {
    type: String,
    default: "ru",
  },
});

const translations = {
  ru: {
    title: "КОНТАКТЫ И ДРУГОЕ",
    about: "ОБО МНЕ",
    logoAlt: "Логотип разработчика",
    emailHref:
      "https://mail.google.com/mail/?view=cm&fs=1&to=ignidra0@gmail.com&su=Портфолио&body=Здравствуйте!",
  },
  en: {
    title: "CONTACTS & LINKS",
    about: "ABOUT ME",
    logoAlt: "Developer logo",
    emailHref:
      "https://mail.google.com/mail/?view=cm&fs=1&to=ignidra0@gmail.com&su=Portfolio&body=Hello!",
  },
};

const content = computed(() => translations[props.language] ?? translations.ru);

const smoothScroll = (event) => {
  const href = event.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;

  event.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <footer class="vertical-menu">
    <div class="menu-content">
      <p class="menu-title">{{ content.title }}</p>

      <ul class="menu-list">
        <li>
          <a href="#about" class="menu-link" @click="smoothScroll">
            {{ content.about }}
          </a>
        </li>
        <li>
          <a
            href="https://t.me/Ignidra"
            class="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            TELEGRAM
          </a>
        </li>
        <li>
          <a
            :href="content.emailHref"
            class="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GMAIL
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Zulu002"
            class="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </li>
        <li>
          <a
            href="https://pin.it/2EtxOo6aR"
            class="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            PINTEREST
          </a>
        </li>
      </ul>

      <img
        src="../assets/logo.svg"
        :alt="content.logoAlt"
        class="brand-logo"
      />
    </div>
  </footer>
</template>

<style scoped>
.vertical-menu {
  width: 100%;
  padding: 40px 20px;
  font-family: "OpenSansBold";
  border-top: 1px solid rgba(220, 220, 220, 0.18);
  background: rgba(0, 0, 0, 0.1);
}

/* центрируем всё содержимое */
.menu-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.menu-title {
  margin: 0 0 18px;
  font-size: clamp(1.8rem, 1.4vw + 1.3rem, 2.5rem);
  line-height: 1.05;
  color: #dcdcdc;
  letter-spacing: 0.04em;
}

/* список по центру */
.menu-list {
  display: grid;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-items: center;
}

/* ссылки */
.menu-link {
  position: relative;
  text-decoration: none;
  cursor: pointer;

  color: #dcdcdc;
  font-size: clamp(1.6rem, 1.2vw + 1.1rem, 2.4rem);
  line-height: 1.05;

  padding: 6px 28px;
  transition: color 0.2s ease;
}

/* квадраты слева и справа */
.menu-link::before,
.menu-link::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 10px;
  height: 10px;
  background: #a5d3c6;
  transform: translateY(-50%) scale(0.6);
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-link::before {
  left: 0;
}

.menu-link::after {
  right: 0;
}

/* hover-эффект */
.menu-link:hover {
  color: #a5d3c6;
}

.menu-link:focus-visible {
  outline: 2px solid #a5d3c6;
  outline-offset: 6px;
  border-radius: 4px;
}

.menu-link:hover::before,
.menu-link:hover::after {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}

/* логотип */
.brand-logo {
  display: block;
  width: 110px;
  height: auto;
  margin: 64px auto 0;
  opacity: 0.9;
}

@media (max-width: 640px) {
  .vertical-menu {
    padding: 30px 20px;
  }

  .menu-title,
  .menu-link {
    font-size: 1.8rem;
  }

  .brand-logo {
    width: 90px;
    margin-top: 48px;
  }
}
</style>
