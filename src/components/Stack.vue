<script>
import photoshop from "../assets/icons/photoshop.svg";
import illustrator from "../assets/icons/illustrator.svg";
import figma from "../assets/icons/figma.svg";
import aseprite from "../assets/icons/aseprite.svg";

import css from "../assets/icons/CSS3.svg";
import html from "../assets/icons/html5.svg";
import js from "../assets/icons/JavaScript.svg";
import vue from "../assets/icons/vue.svg";
import unity from "../assets/icons/unity.svg";
import python from "../assets/icons/python.svg";
import git from "../assets/icons/git.svg";

export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Дизайн",
          description:
            "Графический и интерфейсный дизайн с упором на композицию, визуальную иерархию и пользовательский опыт. Работаю с брендингом, UI и игровыми ассетами.",
          stack: [
            { name: "Figma", icon: figma },
            { name: "Photoshop", icon: photoshop },
            { name: "Illustrator", icon: illustrator },
            { name: "Aseprite", icon: aseprite },
          ],
        },
        {
          id: 2,
          title: "Разработка",
          description:
            "Фронтенд-разработка и прототипирование интерфейсов. Создаю адаптивные, понятные и функциональные веб-продукты.",
          stack: [
            { name: "HTML", icon: html },
            { name: "CSS", icon: css },
            { name: "JavaScript", icon: js },
            { name: "Vue", icon: vue },
            { name: "Unity", icon: unity },
            { name: "Python", icon: python },
            { name: "Git", icon: git },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <section class="expertise">
    <div class="expertise-wrapper">
      <h1 class="title">ИНСТРУМЕНТЫ И ТЕХНОЛОГИИ</h1>

      <div class="cards">
        <article v-for="card in cards" :key="card.id" class="card">
          <h3 class="name">{{ card.title }}</h3>

          <p class="description">
            {{ card.description }}
          </p>

          <ul class="stack">
            <li v-for="item in card.stack" :key="item.name">
              <img :src="item.icon" :alt="item.name" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.expertise {
  padding: 40px 20px;
  font-family: "OpenSansRegular";
}

.expertise-wrapper {
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
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

/* CARD */
.card {
  display: flex;
  flex-direction: column;
  padding: 28px;
  background: #dcdcdc;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

/* CARD HOVER — подъём */
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}

/* TEXT */
.name {
  margin: 0 0 14px;
  color: #000;
  font-size: 1.6rem;
  font-family: "OpenSansBold";
}

.description {
  margin-bottom: 18px;
  color: #4c4c4c;
  font-size: 1rem;
  line-height: 1.55;
}

/* STACK */
.stack {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 14px 22px;
}

.stack li {
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 0.95rem;
  font-family: "OpenSansBold";
  letter-spacing: 0.04em;
  color: #000;
}

/* ICONS */
.stack img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  transition: transform 0.25s ease;
}

/* лёгкий hover на иконках */
.stack li:hover img {
  transform: scale(1.15);
}

/* ADAPTIVE */
@media (max-width: 900px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .title {
    font-size: 2rem;
  }
}

/* TOUCH DEVICES */
@media (hover: none) {
  .card:hover {
    transform: none;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }

  .stack li:hover img {
    transform: none;
  }
}
</style>
