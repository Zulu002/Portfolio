<script>
import photoshop from "../assets/icons/photoshop.svg";
import illustrator from "../assets/icons/illustrator.svg";
import figma from "../assets/icons/figma.svg";
import aseprite from "../assets/icons/aseprite.svg";

import miro from "../assets/icons/miro.svg";
import trello from "../assets/icons/trello.svg";
import pinterest from "../assets/icons/pinterest.svg";
import chatgpt from "../assets/icons/ChatGPT.svg";

import css from "../assets/icons/CSS3.svg";
import html from "../assets/icons/html5.svg";
import js from "../assets/icons/JavaScript.svg";
import vue from "../assets/icons/vue.svg";
import unity from "../assets/icons/unity.svg";
import python from "../assets/icons/python.svg";
import git from "../assets/icons/git.svg";

export default {
  name: "ExpertiseStack",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Дизайн",
          description:
            "Веб и графический дизайн. Проектирую интерфейсы и визуальный стиль. Создаю логотипы, иконки и ассеты для игр.",
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
            "Инди- и фронтенд-разработка, прототипирование интерфейсов. Верстаю, создаю макеты, добавляю интерактив и работаю с системой контроля версий.",
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
        {
          id: 3,
          title: "Другие инструменты",
          description:
            "Инструменты для поиска идей, вдохновения, ускорения работы и поддержки креативного и аналитического процесса.",
          stack: [
            { name: "Pinterest", icon: pinterest },
            { name: "ChatGPT", icon: chatgpt },
            { name: "Trello", icon: trello },
            { name: "Miro", icon: miro },
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
      <div class="cards">
        <article v-for="card in cards" :key="card.id" class="card">
          <h3 class="name">{{ card.title }}</h3>

          <p class="description">
            {{ card.description }}
          </p>

          <ul class="stack">
            <li v-for="item in card.stack" :key="item.name" class="stack-item">
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

/* 3 карточки в ряд */
.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 28px;
  background: #dcdcdc;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}

.name {
  margin: 0 0 14px;
  color: #000;
  font-size: 1.5rem;
  font-family: "OpenSansBold";
}

.description {
  margin: 0 0 20px;
  color: #4c4c4c;
  font-size: 1rem;
  line-height: 1.55;
  flex: 1; /* выравнивает высоту карточек */
}

.stack {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
}

.stack-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  font-family: "OpenSansBold";
  letter-spacing: 0.04em;
  color: #000;
}

.stack img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  transition: transform 0.25s ease;
}

.stack-item:hover img {
  transform: scale(1.12);
}

/* Планшет: 2 колонки */
@media (max-width: 1100px) {
  .cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Мобилка: 1 колонка */
@media (max-width: 720px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

/* Отключаем ховеры на тач-устройствах */
@media (hover: none) {
  .card:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    transform: none;
  }

  .stack-item:hover img {
    transform: none;
  }
}
</style>
