<script setup>
import photoshopLogo from "../assets/stack/photoshop.svg";
import illustratorLogo from "../assets/stack/illustrator.svg";
import figmaLogo from "../assets/stack/figma.svg";
import asepriteLogo from "../assets/stack/aseprite.svg";
import unityLogo from "../assets/stack/unity.svg";
import pythonLogo from "../assets/stack/python.svg";
import htmlLogo from "../assets/stack/html.svg";
import cssLogo from "../assets/stack/css.svg";
import vueLogo from "../assets/stack/vue.svg";
import javascriptLogo from "../assets/stack/javascript.svg";

const stackItems = [
  { name: "Adobe Photoshop", label: "Фотошоп", logo: photoshopLogo },
  { name: "Adobe Illustrator", label: "Иллюстратор", logo: illustratorLogo },
  { name: "Figma", label: "Фигма", logo: figmaLogo },
  { name: "Aseprite", label: "Асипрайт", logo: asepriteLogo },
  { name: "Unity", label: "Юнити", logo: unityLogo },
  { name: "Python", label: "Пайтон", logo: pythonLogo },
  { name: "HTML", label: "HTML", logo: htmlLogo },
  { name: "CSS", label: "CSS", logo: cssLogo },
  { name: "Vue", label: "Vue", logo: vueLogo },
  { name: "JavaScript", label: "Javascript", logo: javascriptLogo },
];
</script>

<template>
  <section class="stack-section">
    <div class="stack-container">
      <div class="stack-header">
        <h2 class="stack-title">Мой стек</h2>
        <p class="stack-subtitle">
          Инструменты и технологии, которые я использую в дизайне, вебе и геймдеве.
        </p>
      </div>

      <ul class="stack-grid" role="list">
        <li v-for="item in stackItems" :key="item.name" class="stack-card">
          <div class="stack-logo">
            <img :src="item.logo" :alt="item.name" loading="lazy" />
          </div>
          <span class="stack-label">{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.stack-section {
  width: 100%;
}

.stack-container {
  width: 100%;
  max-width: 70%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: #dcdcdc;
}

.stack-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stack-title {
  margin: 0;
  font-family: "OpenSansBold";
  font-size: clamp(26px, 2.4vw, 36px);
  letter-spacing: 0.04em;
  color: #ffffff;
}

.stack-subtitle {
  margin: 0 auto;
  max-width: 520px;
  font-family: "OpenSansRegular";
  font-size: clamp(16px, 1.2vw, 18px);
  line-height: 1.6;
  color: rgba(220, 220, 220, 0.85);
}

.stack-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
}

.stack-card {
  background: rgba(12, 12, 12, 0.55);
  border: 1px solid rgba(165, 211, 198, 0.2);
  border-radius: 18px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.stack-card:hover {
  transform: translateY(-4px);
  border-color: rgba(165, 211, 198, 0.5);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
}

.stack-logo {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stack-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.stack-label {
  font-family: "OpenSansBold";
  font-size: 0.95rem;
  color: #f0f0f0;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .stack-container {
    max-width: 100%;
    padding: 0 14px;
  }

  .stack-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  .stack-card {
    padding: 16px 12px;
  }
}
</style>
