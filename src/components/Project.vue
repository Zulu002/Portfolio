<script>
import logo1 from "../assets/projects/cal.png";
import logo2 from "../assets/projects/gk.png";
import logo3 from "../assets/projects/hp.png";

export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Калькулятор накладных",
          description:
            "Веб-приложение для упрощения вычислений и работы с физическими накладными.",
          points: [
            "UX-ориентированная логика",
            "Быстрые расчёты",
            "Минималистичный интерфейс",
          ],
          link: "https://zulu002.github.io/invoice/",
          preview: logo1,
        },
        {
          id: 2,
          title: "Glorious Knight Jam",
          description:
            "Многостраничный сайт для геймджема с фокусом на навигацию и вовлечение.",
          points: [
            "Проектирование UX",
            "Чистый HTML / CSS / JS",
            "Адаптивная верстка",
          ],
          link: "https://zulu002.github.io/GloriousKnightJam/index.html",
          preview: logo2,
        },
        {
          id: 3,
          title: "Билд",
          description:
            "Прототип сайта строительной компании. Простота, доверие и понятный путь к заявке.",
          points: [
            "Чистый UI",
            "Контентная структура",
            "Фокус на услугах",
          ],
          link: "https://www.figma.com/design/7Fh3YxnuhcraX8bPg6A9kg/Untitled?node-id=0-1&t=tbHeU7CS72UovLF1-1",
          preview: logo3,
        },
      ],
    };
  },
};
</script>

<template>
  <section class="projects">
    <div class="projects-wrapper">
      <div class="cards">
        <article v-for="project in projects" :key="project.id" class="card">
          <!-- PREVIEW -->
          <div class="preview">
            <div class="preview-frame">
              <img
                :src="project.preview"
                :alt="project.title"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <!-- INFO -->
          <div class="card-body">
            <h1 class="name">{{ project.title }}</h1>

            <p class="description">
              {{ project.description }}
            </p>

            <ul class="points">
              <li v-for="(p, i) in project.points" :key="i">
                {{ p }}
              </li>
            </ul>

            <!-- BUTTON -->
            <a
              :href="project.link"
              class="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Посмотреть проект
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* КЛЮЧЕВОЕ: чтобы width:100% не пробивал из-за padding/border */
:global(*),
:global(*::before),
:global(*::after) {
  box-sizing: border-box;
}

/* SECTION */
.projects {
  padding: 40px 20px;
  font-family: "OpenSansRegular";
}

.projects-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

/* GRID */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* CARD */
.card {
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  color: #111;
  border-radius: 6px;
  overflow: hidden;

  /* меньше лагов: изолируем перерисовку */
  contain: content;

  transition: box-shadow 0.25s ease;
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

/* PREVIEW */
.preview {
  padding: 14px;
  background: #f4f4f4;
}

.preview-frame {
  aspect-ratio: 16 / 10;
  background: #e6e6e6;
  border-radius: 4px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.05) saturate(0.95);
  transition: transform 0.35s ease;
  will-change: transform;
}

.card:hover .preview-frame img {
  transform: scale(1.02);
}

/* BODY */
.card-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* TITLE */
.name {
  margin: 0;
  font-family: "OpenSansBold";
  font-size: 1.5rem;
  text-transform: uppercase;
}

/* DESCRIPTION */
.description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #444;
}

/* POINTS */
.points {
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
}

.points li {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 10px;
  background: #2a2a2a;
  color: #ffffff ;
  border: 1px solid #d0d0d0;
  margin-bottom: 6px;
  width: fit-content;
}

/* BUTTON — на всю ширину (без вылезания) */
.btn {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  text-align: left;
  padding: 12px 24px;
  background: #000;
  color: #efefef;
  text-decoration: none;
  font-family: "OpenSansBold";
  font-size: 1rem;
  border: 1px solid transparent;
  transition: background 0.4s ease, color 0.4s ease, border 0.4s ease;
}

.btn:hover {
  background: #efefef;
  color: #000;
  border-color: #000;
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
