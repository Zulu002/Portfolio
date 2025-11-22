<script setup>
const sections = [
  { id: 'skills', label: 'НАВЫКИ' },
  { id: 'projects', label: 'ПРОЕКТЫ' },
  { id: 'graphics', label: 'ГРАФИКА' },
  { id: 'layouts', label: 'МАКЕТЫ' },
  { id: 'contacts', label: 'КОНТАКТЫ', isContact: true }
];

const scrollToSection = (sectionId) => {
  const targetElement = document.getElementById(sectionId);
  targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
</script>

<template>
  <main class="container">
    <section class="developer-section">
      <img src="../assets/logo.svg" alt="Логотип разработчика" width="410" height="auto">
      <h1>О РАЗРАБОТЧИКЕ</h1>
      <p>Меня зовут Гаджи Зулумханов. Я дизайнер с фокусом на графический и веб-дизайн, а также интересуюсь разработкой игр (геймдевом).</p>
      <p>С детства меня увлекал мир видеоигр, и со временем это увлечение переросло в желание понимать и создавать их самому. Это побудило меня развивать навыки дизайна: в колледже я начал с создания логотипов, фирменного стиля и макетов для веб-сайтов.</p>
      <p>Сейчас я активно развиваюсь в области веб-разработки, углубленно изучая JavaScript и фреймворки для фронтенда, чтобы создавать не только визуально привлекательные, но и функциональные цифровые продукты.</p>
    </section>
    
    <div class="divider"></div>
    
    <nav class="navigation" aria-label="Основные разделы">
      <button
        v-for="section in sections"
        :key="section.id"
        class="nav-button"
        :class="{ 'nav-button--contact': section.isContact }"
        @click="scrollToSection(section.id)"
      >
        {{ section.label }}
      </button>
    </nav>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden; /* Предотвращает горизонтальный скроллинг */
}

.developer-section {
  color: #ffffff;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.developer-section img {
  width: min(410px, 100%);
  height: auto;
  max-width: 100%;
}

h1 {
  font-size: clamp(28px, 4vw, 45px);
  font-family: 'OpenSansBold';
  margin: 0 0 20px 0;
}

p {
  margin: 0 0 15px 0;
  font-family: 'OpenSansRegular';
  font-size: clamp(16px, 2vw, 22px);
  line-height: 1.4;
  text-align: justify;
  max-width: 100%;
}

.divider {
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, #66C0F4, #2161CD);
  margin: 20px 0px 10px 0px;
  max-width: 100%;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.nav-button {
  width: 214px;
  height: 60px;
  font-family: 'OpenSansBold';
  font-size: 20px;
  border-radius: 2px;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: #5daddc;
  color: white;
  flex: 1;
  min-width: 0; /* Позволяет кнопкам сжиматься */
  max-width: 214px; /* Максимальная ширина как у оригинальных кнопок */
}

.nav-button:hover {
  background-color: #85cdf8;
}

.nav-button--contact {
  background-color: #699E46;
}

.nav-button--contact:hover {
  background-color: #8ece61;
}

/* Адаптивность */
@media (max-width: 768px) {
  .navigation {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  
  .nav-button {
    width: 100%;
    max-width: 480px;
    height: 50px;
  }
  
  .container {
    padding: 0 10px;
  }
}

@media (max-width: 640px) {
  
  .navigation {
    gap: 6px;
  }
}
</style>