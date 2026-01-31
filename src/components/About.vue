<script setup>
</script>

<template>
  <section>
    <main class="container">
      <section class="developer-section">
        <div class="logo-wrap" aria-hidden="true">
          <img src="../assets/logo.svg" alt="Логотип разработчика" />
        </div>

        <h1 class="title">IGNIDRA</h1>
        <span class="subtitle">Designer · Web · Game Dev</span>

        <p class="intro">
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

      <div class="divider" aria-hidden="true"></div>
    </main>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 64%;
  margin: 0 auto;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.developer-section {
  width: 100%;
  color: #dcdcdc;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logo-wrap {
  margin-bottom: 22px;
}

.logo-wrap img {
  width: 120px;
  height: auto;
}

.title {
  margin: 0;
  font-family: "OpenSansBold";
  font-size: clamp(32px, 3vw, 46px);
  letter-spacing: 0.04em;
  color: #dcdcdc;
}

.subtitle {
  margin: 10px 0 34px;
  font-family: "OpenSansRegular";
  font-size: clamp(13px, 1.1vw, 16px);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(220, 220, 220, 0.6);
}

p {
  width: 100%;
  margin: 0 0 22px;
  font-family: "OpenSansRegular";
  font-size: clamp(18px, 1.35vw, 22px);
  line-height: 1.7;
  text-align: justify;
  color: rgba(220, 220, 220, 0.95);
}

.intro {
  font-size: clamp(20px, 1.55vw, 24px);
  color: #dcdcdc;
}

.divider {
  width: 100%;
  height: 2px;
  margin: 20px 0 10px;
  background: linear-gradient(to right, transparent, #a5d3c6, transparent);
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
  }

  .logo-wrap img {
    width: 100px;
  }

  p,
  .intro {
    text-align: left;
  }

  p {
    font-size: 18px;
  }

  .intro {
    font-size: 20px;
  }
}
</style>
