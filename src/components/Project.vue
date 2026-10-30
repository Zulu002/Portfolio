<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import invoicePreview from "../assets/projects/cal-preview.jpg";
import jamPreview from "../assets/projects/gk-preview.jpg";
import tetraPreview from "../assets/projects/tetra-preview.png";

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
});

const content = {
  en: {
    title: "projects",
    open: "Open",
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
        title: "TETRA",
        description:
          "A fast-paced retro puzzle game where pieces continuously fall from above. Grab, rotate, and place them before they cross the dashed deadline.",
        tags: ["retro puzzle", "Godot", "arcade"],
        link: "https://ignidra.itch.io/tetra",
        preview: tetraPreview,
      },
    ],
  },
  ru: {
    title: "проекты",
    open: "Открыть",
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
        title: "TETRA",
        description:
          "Динамичная ретро-головоломка, в которой фигуры непрерывно падают сверху. Хватайте, вращайте и размещайте их до пересечения пунктирной границы.",
        tags: ["ретро-головоломка", "Godot", "аркада"],
        link: "https://ignidra.itch.io/tetra",
        preview: tetraPreview,
      },
    ],
  },
};

const text = computed(() => content[props.locale] ?? content.en);
// Extra slides at either end keep both wrap directions moving one card at a time.
const slides = computed(() => {
  const projects = text.value.projects;
  return [projects[projects.length - 1], ...projects, projects[0]];
});
const position = ref(1);
const activeIndex = computed(() => (position.value - 1 + text.value.projects.length) % text.value.projects.length);
const animate = ref(true);
let moving = false;
let timer;
let transitionTimer;
let frame;
let touchStart;
const labels = computed(() => props.locale === "ru"
  ? { previous: "Предыдущий проект", next: "Следующий проект" }
  : { previous: "Previous project", next: "Next project" });

const finishTransition = () => {
  if (!moving) return;
  window.clearTimeout(transitionTimer);
  const count = text.value.projects.length;
  if (position.value === 0 || position.value === count + 1) {
    animate.value = false;
    position.value = position.value === 0 ? count : 1;
    frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(() => {
        animate.value = true;
        moving = false;
      });
    });
  } else {
    moving = false;
  }
};
const stopTimer = () => window.clearInterval(timer);
const startTimer = () => {
  window.clearInterval(timer);
  timer = window.setInterval(() => {
    if (!document.hidden) move(1);
  }, 10000);
};
const move = (direction) => {
  if (moving) return;
  moving = true;
  position.value += direction;
  // Also settle when reduced motion suppresses transitionend.
  transitionTimer = window.setTimeout(finishTransition, 500);
  startTimer();
};
const onTouchEnd = (event) => {
  if (!touchStart) return;
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
  touchStart = null;
};
onMounted(startTimer);
onBeforeUnmount(() => {
  window.clearInterval(timer);
  window.clearTimeout(transitionTimer);
  window.cancelAnimationFrame(frame);
});
</script>

<template>
  <section class="projects" :aria-label="text.title" aria-roledescription="carousel">
    <div class="project-carousel"
      @keydown.left.prevent="move(-1)"
      @keydown.right.prevent="move(1)"
    >
    <div class="project-viewport"
      @touchstart.passive="touchStart = { x: $event.touches[0].clientX, y: $event.touches[0].clientY }"
      @touchend.passive="onTouchEnd"
      @touchcancel="touchStart = null"
      @focusin="stopTimer"
      @focusout="startTimer"
    >
    <div class="project-list" :class="{ 'without-transition': !animate }"
      :style="{ transform: `translateX(-${position * 100}%)` }"
      @transitionend.self="finishTransition">
      <article
        v-for="(project, index) in slides"
        :key="`${index}-${project.title}`"
        class="project-item"
        :inert="index !== activeIndex + 1"
        :aria-hidden="index !== activeIndex + 1"
      >
        <div class="project-copy">
          <span class="project-number">{{ String((index - 1 + text.projects.length) % text.projects.length + 1).padStart(2, "0") }}</span>
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
              :class="{ 'preview-image-contain': project.fit === 'contain' }"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </article>
    </div>
    </div>
    <button type="button" class="slider-arrow slider-arrow-prev" :aria-label="labels.previous" @click="move(-1)">‹</button>
    <button type="button" class="slider-arrow slider-arrow-next" :aria-label="labels.next" @click="move(1)">›</button>
    </div>
  </section>
</template>

<style scoped>
.projects {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.project-carousel {
  position: relative;
  min-width: 0;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
}

.project-viewport { overflow: hidden; border-radius: 5px; }
.project-list { display: flex; transition: transform 450ms ease; }
.project-list > .project-item { flex: 0 0 100%; }
.project-list.without-transition { transition: none; }
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 36px;
  height: 56px;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--accent);
  cursor: pointer;
  font-size: 38px;
  line-height: 1;
}
.slider-arrow-prev { left: 4px; }
.slider-arrow-next { right: 4px; }
.slider-arrow:hover { background: rgba(var(--accent-rgb), .12); }
.slider-arrow:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
@media (prefers-reduced-motion: reduce) { .project-list { transition: none; } }

.project-item {
  display: grid;
  grid-template-columns: minmax(0, 0.46fr) minmax(0, 0.54fr);
  gap: 32px;
  align-items: center;
  min-width: 0;
  min-height: 330px;
  padding: 28px 48px 30px;
  border-radius: 5px;
  background: #000000;
  box-sizing: border-box;
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

.preview-link img.preview-image-contain {
  object-fit: contain;
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
  text-decoration: underline;
  text-decoration-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: background-color var(--motion-duration) var(--motion-ease),
    text-decoration-color var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
}

.project-open:hover,
.project-open:focus-visible {
  text-decoration-color: currentColor;
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
  .project-item {
    grid-template-columns: 1fr;
    gap: 18px;
    min-height: 0;
  }

}

@media (max-width: 640px) {
  .projects {
    padding: 8px 16px;
  }

  .project-item {
    padding: 24px 44px;
  }

  .project-number {
    margin-bottom: 14px;
  }
}
</style>
