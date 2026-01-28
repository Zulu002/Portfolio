<script setup>
const sections = [
  { id: "projects", label: "ПРОЕКТЫ" },
  { id: "graphics", label: "ВИТРИНА" },
  { id: "contacts", label: "КОНТАКТЫ", isContact: true },
];

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <section>
    <main class="container">
      <section class="developer-section">
        <img src="../assets/logo.svg" alt="Логотип разработчика" />

        <p>
          Меня зовут Гаджи. Я дизайнер с фокусом на графический и веб-дизайн, а также
          интересуюсь разработкой игр (геймдевом).
        </p>
        <p>
          С детства меня увлекал мир видеоигр, и со временем это увлечение переросло в
          желание понимать и создавать их самому. Это побудило меня развивать навыки
          дизайна: в колледже я начал с создания логотипов, фирменного стиля и макетов
          для веб-сайтов.
        </p>
        <p>
          Сейчас я активно развиваюсь в области веб-разработки, углубленно изучая
          JavaScript и фреймворки для фронтенда, чтобы создавать не только визуально
          привлекательные, но и функциональные цифровые продукты.
        </p>
      </section>

      <div class="divider"></div>

      <nav class="navigation" aria-label="Основные разделы">
        <button
          v-for="section in sections"
          :key="section.id"
          class="nav-button"
          :class="{ 'nav-button--contact': section.isContact }"
          type="button"
          @click="scrollToSection(section.id)"
        >
          <span class="nav-label">{{ section.label }}</span>
        </button>
      </nav>
    </main>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.developer-section {
  width: 100%;
  color: #dcdcdc;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.developer-section img {
  width: 120px;
  height: auto;
  margin-bottom: 25px;
}

p {
  margin: 0 0 15px;
  font-family: "OpenSansRegular";
  font-size: 1.5vw;
  text-align: justify;
  width: 100%;
}

.divider {
  width: 100%;
  height: 3px;
  margin: 5px 0 10px;
  background-color: #a5d3c6;
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 214px;
  height: 70px;
  flex: 1 1 0;

  border: none;
  border-radius: 2px;
  cursor: pointer;

  font-family: "OpenSansBold";
  font-size: 25px;

  background-color: #a5d3c6; 
  color: #1e1c17;

  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #7fb8a7;
}

.nav-button--contact {
  flex: 2 1 0;
}

.nav-label {
  position: relative;
  padding: 0 18px;
}

.nav-label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translateY(-50%);
  background: #1e1c17;
  opacity: 0;
}

.nav-button:hover .nav-label::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 10px;
  }

  p {
    font-size: 18px;
  }

  .navigation {
    flex-direction: column;
    align-items: center;
  }

  .nav-button {
    width: 100%;
    height: 50px;
    flex: 1 1 auto;
  }

  .developer-section img {
    width: 90px;
    margin-bottom: 18px;
  }
}

@media (max-width: 640px) {
  .navigation {
    gap: 6px;
  }
}
</style>
