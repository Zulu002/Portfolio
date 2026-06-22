<script setup>
import { computed } from "vue";
import invoicePreview from "../assets/projects/cal-preview.jpg";
import jamPreview from "../assets/projects/gk-preview.jpg";
import buildPreview from "../assets/projects/hp-preview.jpg";

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
    <div class="project-list">
      <article
        v-for="(project, index) in text.projects"
        :key="project.title"
        class="project-item"
        :class="{ reversed: index % 2 === 1 }"
      >
        <div class="project-copy">
          <span class="project-number">{{ String(index + 1).padStart(2, "0") }}</span>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>

          <ul class="tag-list" :aria-label="text.tagsLabel">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>

          <a
            :href="project.link"
            class="project-open"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ text.open }}
          </a>
        </div>

        <div class="project-preview">
          <a
            :href="project.link"
            class="preview-link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${text.openLabel} ${project.title}`"
          >
            <img
              :src="project.preview"
              :alt="project.title"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.project-list {
  display: grid;
  gap: 10px;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
}

.project-item {
  display: grid;
  grid-template-columns: minmax(0, 0.46fr) minmax(0, 0.54fr);
  gap: 32px;
  align-items: center;
  min-width: 0;
  min-height: 330px;
  padding: 28px 31px 30px;
  border-radius: 5px;
  background: #000000;
  box-sizing: border-box;
}

.project-item.reversed {
  grid-template-columns: minmax(0, 0.54fr) minmax(0, 0.46fr);
}

.project-item.reversed .project-copy {
  order: 2;
}

.project-item.reversed .project-preview {
  order: 1;
}

.project-copy {
  min-width: 0;
}

.project-number {
  display: block;
  margin-bottom: 18px;
  color: rgba(var(--accent-rgb), 0.24);
  font-size: clamp(58px, 8vw, 104px);
  line-height: 0.82;
}

.preview-link {
  display: block;
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 1px rgba(var(--accent-rgb), 0.24);
  transition: box-shadow var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
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

.preview-link:hover,
.preview-link:focus-visible {
  box-shadow: 0 0 0 2px var(--accent);
  transform: translateY(-2px);
}

.project-title {
  margin: 0 0 8px;
  color: #ffffff;
  font-size: clamp(28px, 3.2vw, 36px);
  font-weight: 400;
  line-height: 1.1;
}

.project-open {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 84px;
  min-height: 38px;
  margin-top: 20px;
  padding: 0 16px;
  border-radius: 5px;
  background: var(--accent);
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
  max-width: 520px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 18px;
  line-height: 1.24;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
}

.tag-list li {
  padding: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--accent);
  font-size: 13px;
  line-height: 1;
}

@media (max-width: 760px) {
  .project-item,
  .project-item.reversed {
    grid-template-columns: 1fr;
    gap: 18px;
    min-height: 0;
  }

  .project-item.reversed .project-copy,
  .project-item.reversed .project-preview {
    order: initial;
  }
}

@media (max-width: 640px) {
  .projects {
    padding: 8px 16px;
  }

  .project-item {
    padding: 24px 22px;
  }

  .project-number {
    margin-bottom: 14px;
  }
}
</style>
