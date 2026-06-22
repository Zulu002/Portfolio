<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
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

const activeStep = ref(0);
let intervalId;

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
const activeTool = (tools) => tools[activeStep.value % tools.length];

onMounted(() => {
  intervalId = window.setInterval(() => {
    activeStep.value += 1;
  }, 2600);
});

onBeforeUnmount(() => {
  window.clearInterval(intervalId);
});
</script>

<template>
  <section class="stack-section">
    <div class="stack-grid">
      <section v-for="group in text.groups" :key="group.title" class="stack-group">
        <h3 class="group-title">{{ group.title }}</h3>

        <div class="tool-roller" aria-hidden="true">
          <Transition name="icon-scroll">
            <div
              :key="`${group.title}-${activeTool(group.tools).name}`"
              class="roller-item"
            >
              <img
                :src="activeTool(group.tools).icon"
                :alt="activeTool(group.tools).name"
                width="24"
                height="24"
              />
              <span>{{ activeTool(group.tools).name }}</span>
            </div>
          </Transition>
        </div>

        <p class="group-description">{{ group.description }}</p>
      </section>
    </div>
  </section>
</template>

<style scoped>
.stack-section {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
}

.stack-grid {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.stack-group {
  min-width: 0;
  min-height: 218px;
  padding: 28px 31px 30px;
  border-radius: 5px;
  background: #000000;
  box-sizing: border-box;
}

.group-title {
  margin: 0 0 10px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 400;
  line-height: 1.1;
}

.tool-roller {
  position: relative;
  width: 100%;
  height: 32px;
  margin: 0 0 16px;
  overflow: hidden;
}

.roller-item {
  position: absolute;
  inset: 0 auto auto 0;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 32px;
  color: #ffffff;
  font-size: 15px;
  line-height: 1;
}

.roller-item img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.icon-scroll-enter-active,
.icon-scroll-leave-active {
  transition: opacity 0.55s var(--motion-ease),
    transform 0.55s var(--motion-ease);
}

.icon-scroll-enter-from {
  opacity: 0;
  transform: translateY(24px);
}

.icon-scroll-enter-to,
.icon-scroll-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.icon-scroll-leave-to {
  opacity: 0;
  transform: translateY(-24px);
}

.group-description {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 18px;
  line-height: 1.28;
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

  .stack-group {
    padding: 24px 22px;
  }
}
</style>
