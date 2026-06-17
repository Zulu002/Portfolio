<script setup>
import { computed } from "vue";
import invoicePreview from "../assets/projects/cal.png";
import jamPreview from "../assets/projects/gk.png";
import buildPreview from "../assets/projects/hp.png";

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
});

const content = {
  en: {
    title: "projects",
    open: "open",
    tagsLabel: "Project tags",
    openLabel: "Open",
    projects: [
      {
        title: "Invoice Calculator",
        description:
          "A small web app that simplifies calculations for physical invoices and everyday paperwork.",
        tags: ["UX logic", "fast calculations", "minimal UI"],
        link: "https://zulu002.github.io/invoice/",
        preview: invoicePreview,
      },
      {
        title: "Glorious Knight Jam",
        description:
          "A multi-page game jam website focused on clear navigation, event structure, and engagement.",
        tags: ["UX design", "HTML CSS JS", "responsive layout"],
        link: "https://zulu002.github.io/GloriousKnightJam/index.html",
        preview: jamPreview,
      },
      {
        title: "Build",
        description:
          "A construction company website prototype built around trust, clarity, and a direct path to contact.",
        tags: ["clean UI", "content structure", "service focus"],
        link: "https://www.figma.com/design/7Fh3YxnuhcraX8bPg6A9kg/Untitled?node-id=0-1&t=tbHeU7CS72UovLF1-1",
        preview: buildPreview,
      },
    ],
  },
  ru: {
    title: "проекты",
    open: "открыть",
    tagsLabel: "Теги проекта",
    openLabel: "Открыть",
    projects: [
      {
        title: "Invoice Calculator",
        description:
          "Небольшое веб-приложение для быстрых расчетов и работы с физическими накладными.",
        tags: ["UX-логика", "быстрые расчеты", "минимальный UI"],
        link: "https://zulu002.github.io/invoice/",
        preview: invoicePreview,
      },
      {
        title: "Glorious Knight Jam",
        description:
          "Многостраничный сайт для геймджема с понятной навигацией, структурой события и вовлечением.",
        tags: ["UX-дизайн", "HTML CSS JS", "адаптив"],
        link: "https://zulu002.github.io/GloriousKnightJam/index.html",
        preview: jamPreview,
      },
      {
        title: "Build",
        description:
          "Прототип сайта строительной компании про доверие, ясность и прямой путь к контакту.",
        tags: ["чистый UI", "структура", "услуги"],
        link: "https://www.figma.com/design/7Fh3YxnuhcraX8bPg6A9kg/Untitled?node-id=0-1&t=tbHeU7CS72UovLF1-1",
        preview: buildPreview,
      },
    ],
  },
};

const text = computed(() => content[props.locale] ?? content.en);
</script>

<template>
  <section class="projects">
    <div class="projects-panel">
      <h2 class="section-title">{{ text.title }}</h2>

      <div class="project-list">
        <article v-for="project in text.projects" :key="project.title" class="project-item">
          <a
            :href="project.link"
            class="preview-link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${text.openLabel} ${project.title}`"
          >
            <img :src="project.preview" :alt="project.title" loading="lazy" decoding="async" />
          </a>

          <div class="project-copy">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <a
              :href="project.link"
              class="project-open"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ text.open }}
            </a>

            <ul class="tag-list" :aria-label="text.tagsLabel">
              <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.projects-panel {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 28px 31px 30px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #000000;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
}

.section-title {
  margin: 0 0 24px;
  color: #d1ffc4;
  font-size: clamp(28px, 3.2vw, 31px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
}

.project-list {
  display: grid;
  gap: 0;
}

.project-item {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 24px;
  align-items: center;
  min-width: 0;
  padding: 18px 0;
  border-top: 1px solid rgba(209, 255, 196, 0.26);
}

.project-item:last-child {
  padding-bottom: 0;
}

.preview-link {
  display: block;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  border-radius: 5px;
  background: transparent;
}

.preview-link img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--motion-duration) var(--motion-ease);
}

.preview-link:hover img,
.preview-link:focus-visible img {
  transform: scale(1.04);
}

.project-title {
  margin: 0 0 8px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.1;
}

.project-open {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 62px;
  min-height: 32px;
  margin-top: 14px;
  padding: 0 12px;
  border-radius: 5px;
  background: #d1ffc4;
  color: #060606;
  font-size: 15px;
  line-height: 1;
  text-decoration: none;
  transition: background-color var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
}

.project-open:hover,
.project-open:focus-visible {
  background: #ffffff;
  transform: translateY(-1px);
}

.project-description {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 16px;
  line-height: 1.2;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
}

.tag-list li {
  padding: 0;
  border-radius: 5px;
  background: transparent;
  color: #d1ffc4;
  font-size: 13px;
  line-height: 1;
}

@media (max-width: 760px) {
  .project-item {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}

@media (max-width: 640px) {
  .projects {
    padding: 8px 16px;
  }

  .projects-panel {
    padding: 24px 22px;
  }

}
</style>
