<script setup>
import { computed } from "vue";
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

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
});

const toolGroups = {
  en: {
    title: "stack",
    groups: [
      {
        title: "design",
        description:
          "I work with interfaces, visual systems, logos, icons, and game-ready assets.",
        tools: [
          { name: "Figma", icon: figma },
          { name: "Photoshop", icon: photoshop },
          { name: "Illustrator", icon: illustrator },
          { name: "Aseprite", icon: aseprite },
        ],
      },
      {
        title: "development",
        description:
          "I build responsive pages, add interaction, prototype ideas, and keep projects organized in Git.",
        tools: [
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
        title: "workflow",
        description:
          "I use planning, references, and AI tools to move faster from rough ideas to polished results.",
        tools: [
          { name: "Pinterest", icon: pinterest },
          { name: "ChatGPT", icon: chatgpt },
          { name: "Trello", icon: trello },
          { name: "Miro", icon: miro },
        ],
      },
    ],
  },
  ru: {
    title: "навыки",
    groups: [
      {
        title: "дизайн",
        description:
          "Работаю с интерфейсами, визуальными системами, логотипами, иконками и ассетами для игр.",
        tools: [
          { name: "Figma", icon: figma },
          { name: "Photoshop", icon: photoshop },
          { name: "Illustrator", icon: illustrator },
          { name: "Aseprite", icon: aseprite },
        ],
      },
      {
        title: "разработка",
        description:
          "Верстаю адаптивные страницы, добавляю интерактив, прототипирую идеи и работаю с Git.",
        tools: [
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
        title: "процесс",
        description:
          "Использую планирование, референсы и AI-инструменты, чтобы быстрее доводить идеи до результата.",
        tools: [
          { name: "Pinterest", icon: pinterest },
          { name: "ChatGPT", icon: chatgpt },
          { name: "Trello", icon: trello },
          { name: "Miro", icon: miro },
        ],
      },
    ],
  },
};

const text = computed(() => toolGroups[props.locale] ?? toolGroups.en);
</script>

<template>
  <section class="stack-section">
    <div class="stack-panel">
      <h2 class="section-title">{{ text.title }}</h2>

      <div class="stack-grid">
        <section v-for="group in text.groups" :key="group.title" class="stack-group">
          <h3 class="group-title">{{ group.title }}</h3>
          <p class="group-description">{{ group.description }}</p>

          <ul class="tool-list">
            <li v-for="tool in group.tools" :key="tool.name" class="tool-item">
              <img :src="tool.icon" :alt="tool.name" />
              <span>{{ tool.name }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack-section {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.stack-panel {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 28px 31px 30px;
  box-sizing: border-box;
  border: 4px solid transparent;
  border-image: repeating-linear-gradient(
      90deg,
      #d1ffc4 0 28px,
      transparent 28px 42px
    )
    4;
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

.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.stack-group {
  min-width: 0;
}

.group-title {
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.1;
}

.group-description {
  margin: 0 0 18px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 15px;
  line-height: 1.22;
}

.tool-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tool-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 30px;
  padding: 0;
  color: #ffffff;
  font-size: 14px;
  line-height: 1;
}

.tool-item img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  transition: transform var(--motion-duration) var(--motion-ease);
}

.tool-item:hover img {
  transform: scale(1.12);
}

@media (max-width: 900px) {
  .stack-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .stack-section {
    padding: 8px 16px;
  }

  .stack-panel {
    padding: 24px 22px;
  }
}
</style>
