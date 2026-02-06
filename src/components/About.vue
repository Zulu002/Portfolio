<script setup>
</script>

<template>
  <section class="hero" id="about">
    <div class="hero-inner">
      <div class="hero-content">
        <h1 class="title">IGNIDRA</h1>
        <p class="subtitle">WEB-DESIGNER, GAMEDEV</p>

        <p class="intro">
          Меня зовут Гаджи. Занимаюсь графическим и веб-дизайном,
          а также интересуюсь разработкой игр (геймдевом).
        </p>

        <div class="socials">
          <a href="https://t.me/Ignidra" aria-label="Telegram" class="social-link">
            <img src="../assets/icons/telegram.svg" alt="" />
          </a>

          <a href="https://github.com/Zulu002" aria-label="GitHub" class="social-link">
            <img src="../assets/icons/github.svg" alt="" />
          </a>

          <a href="https://pin.it/2EtxOo6aR" aria-label="Pinterest" class="social-link">
            <img src="../assets/icons/pinterest.svg" alt="" />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ignidra0@gmail.com&su=%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!" aria-label="Mail" class="social-link">
            <img src="../assets/icons/gmail.svg" alt="" />
          </a>
        </div>
      </div>

      
      <div class="hero-logo" aria-hidden="true">
        <img src="../assets/logo.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-inner {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 80px;
}



.hero-content {
  max-width: 640px;
}

.title {
  margin: 0;
  font-family: "OpenSansBold";
  font-size: clamp(64px, 7vw, 110px);
  letter-spacing: 0;
  color: #a5d3c6;
}

.subtitle {
  margin: 0 0 12px;
  font-family: "OpenSansBold";
  font-size: 27px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(165, 211, 198, 0.85);
}

.intro {
  margin-top: 0;
  font-family: "OpenSansRegular";
  font-size: 22px;
  color: rgba(220, 220, 220, 0.95);
}



.socials {
  margin-top: 36px;
  display: flex;
  gap: 18px;
}

.social-link {
  width: 43px;
  height: 43px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.7;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.social-link:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.social-link img {
  width: 100%;
  height: 100%;
  object-fit: contain;

  
  filter: brightness(0) saturate(100%)
    invert(83%) sepia(11%) saturate(493%)
    hue-rotate(116deg) brightness(95%) contrast(88%);
}



.hero-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-logo img {
  width: 100%;
  max-width: 520px;
  opacity: 0.9;
}



@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .hero-logo {
    order: -1;
  }
}

@media (max-width: 768px) {
  .hero-inner {
    padding: 0 20px;
  }

  .title {
    font-size: 56px;
  }

  .intro {
    font-size: 18px;
  }
}
</style>
