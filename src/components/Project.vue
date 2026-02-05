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
          points: ["UX-ориентированная логика", "Быстрые расчёты", "Минималистичный интерфейс"],
          link: "https://zulu002.github.io/invoice/",
          preview: logo1,
        },
        {
          id: 2,
          title: "Glorious Knight Jam",
          description:
            "Многостраничный сайт для геймджема с фокусом на навигацию и вовлечение.",
          points: ["Проектирование UX", "Чистый HTML / CSS / JS", "Адаптивная верстка"],
          link: "https://zulu002.github.io/GloriousKnightJam/index.html",
          preview: logo2,
        },
        {
          id: 3,
          title: "Билд",
          description:
            "Прототип сайта строительной компании. Простота, доверие и понятный путь к заявке.",
          points: ["Чистый UI", "Контентная структура", "Фокус на услугах"],
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
      <h2 class="section-title">Проекты</h2>
      <div class="cards">
        <article v-for="project in projects" :key="project.id" class="card">
          
          <header class="card-top">
            <h3 class="name">{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>

            
            <ul class="points" aria-label="Теги проекта">
              <li v-for="(p, i) in project.points" :key="i">{{ p }}</li>
            </ul>

            <a
              :href="project.link"
              class="learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Посмотреть проект <span aria-hidden="true">→</span>
            </a>
          </header>

          
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
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>

:global(*),
:global(*::before),
:global(*::after) {
  box-sizing: border-box;
}


.projects {
  padding: 40px 20px;
  font-family: "OpenSansRegular";
}

.projects-wrapper {
  max-width: var(--content-width);
  margin: 0 auto;
}


.section-title {
  margin: 0 0 22px;
  font-family: "OpenSansBold";
  font-size: 2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #EDECEC;
}


.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}


.card {
  background: #1B1913;
  color: #f2f2f2;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #201E19;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}


.card-top {
  padding: 20px 20px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.name {
  margin: 0;
  font-family: "OpenSansBold";
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.description {
  margin: 0;
  color: #9A9996;
  font-size: 0.95rem;
  line-height: 1.5;
}


.points {
  margin: 2px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.points li {
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  padding: 6px 10px;

  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
}


.learn {
  margin-top: 2px;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;
  font-family: "OpenSansBold";
  color: #a5d3c6; 
  width: fit-content;

  transition: transform 0.2s ease, opacity 0.2s ease;
}

.learn:hover {
  transform: translateX(10px);
  opacity: 0.9;
}


.preview {
  padding: 14px 14px 18px;
}

.preview-frame {
  border-radius: 8px;
  overflow: hidden;

  
  background: #d8d1c1;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.35),
    0 12px 28px rgba(0, 0, 0, 0.35);

  
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  transform: scale(1.01);
  transition: transform 0.35s ease;
  will-change: transform;
}



@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .section-title {
    font-size: 1.6rem;
  }

  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
