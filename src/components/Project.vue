<script>
import logo1 from "../assets/projects/cal.png";
import logo2 from "../assets/projects/gk.png";
import logo3 from "../assets/projects/hp.png";
import logo4 from "../assets/projects/build.svg";
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Калькулятор накладных",
          description:
            "Веб-приложение, которое упрощает вычислительные расчеты при заполнении физических накладных.",
          link: "https://zulu002.github.io/invoice/",
          logo: "https://raw.githubusercontent.com/Zulu002/invoice/main/img/icon.svg",
          preview: logo1,
        },
        {
          id: 2,
          title: "Glorious Knight Jam",
          description:
            "Glorious Knight Jam — многостраничный сайт для геймджема. Спроектировал структуру, улучшил UX, разработал UI и реализовал сайт на чистом HTML/CSS/JS.",
          link: "https://zulu002.github.io/GloriousKnightJam/index.html",
          logo: "https://raw.githubusercontent.com/Zulu002/GloriousKnightJam/refs/heads/main/images/icon.svg",
          preview: logo2,
        },
        {
          id: 3,
          title: "Билд",
          description:
            "Прототип сайта строительной компании в простом и чистом дизайне.Основная цель — понятно представить услуги, вызвать доверие и упростить путь пользователя к заявке.",
          link: "https://zulu002.github.io/GloriousKnightJam/index.html",
          logo: logo4,
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
      <h1 class="title">ПРОЕКТЫ</h1>

      <div class="cards">
        <article v-for="project in projects" :key="project.id" class="card">
          <!-- PREVIEW -->
          <div class="preview">
            <img :src="project.preview" :alt="project.title" />
          </div>

          <header class="card-header">
            <img :src="project.logo" :alt="project.title" class="logo" />
            <h3 class="name">{{ project.title }}</h3>
          </header>

          <p class="description">
            {{ project.description }}
          </p>

          <a
            :href="project.link"
            class="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Посмотреть проект
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 0 20px 40px;
  font-family: "OpenSansRegular";
}

.projects-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.title {
  margin-bottom: 30px;
  color: #dcdcdc;
  font-size: 2.5rem;
  font-family: "OpenSansBold";
}

/* GRID */
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* CARD */
.card {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: #dcdcdc;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* PREVIEW */
.preview {
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 16px;
  border-radius: 4px;
  overflow: hidden;
  background: #cfcfcf;
}

.preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.card:hover .preview img {
  transform: scale(1.04);
}

/* HEADER */
.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.name {
  margin: 0;
  color: #000;
  font-size: 1.4rem;
  font-family: "OpenSansBold";
}

/* TEXT */
.description {
  flex-grow: 1;
  margin-bottom: 18px;
  color: #4c4c4c;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* BUTTON */
.btn {
  padding: 12px 24px;
  background: #000;
  color: #efefef;
  text-decoration: none;
  font-family: "OpenSansBold";
  border: 1px solid transparent;
  transition: background 0.3s ease, color 0.3s ease, border 0.3s ease;
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

  .title {
    font-size: 2rem;
  }
}
</style>
