<script setup>
</script>

<template>
  <section class="hero" id="about">
    <div class="hero-inner">
      <div class="hero-content">
        <h1 class="title">Зулумханов Гаджи (Ignidra)</h1>
        <p class="subtitle">WEB-DESIGNER, GAMEDEV</p>

        <p class="intro">
          Меня зовут Гаджи. Занимаюсь графическим и веб-дизайном,
          а также интересуюсь разработкой игр.
        </p>

        <div class="socials">
          <a href="https://t.me/Ignidra" aria-label="Telegram" class="social-link">
            <span class="social-icon icon-telegram" aria-hidden="true"></span>
          </a>

          <a href="https://github.com/Zulu002" aria-label="GitHub" class="social-link">
            <span class="social-icon icon-github" aria-hidden="true"></span>
          </a>

          <a href="https://pin.it/2EtxOo6aR" aria-label="Pinterest" class="social-link">
            <span class="social-icon icon-pinterest" aria-hidden="true"></span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ignidra0@gmail.com&su=%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!"
            aria-label="Mail"
            class="social-link"
          >
            <span class="social-icon icon-gmail" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: end;
}

.hero-inner {
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
}

.hero-content {
  max-width: 1050px;
  text-align: left;
}

.title {
  margin: 0;
  font-family: "OpenSansBold";
  font-size: clamp(31px, 7vw, 90px);
  letter-spacing: 0;
  color: #EDECEC;
  line-height: 0.95;
}

.subtitle {
  margin: 12px 0 0;
  font-family: "OpenSansBold";
  font-size: 27px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #EDECEC;
}

.intro {
  margin-top: 24px;
  max-width: 650px;
  font-family: "OpenSansRegular";
  font-size: 22px;
  line-height: 1.5;
  color: #EDECEC;
}

.socials {
  margin-top: 26px;
  margin-bottom: 26px;
  display: flex;
  justify-content: flex-start;
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

.social-icon {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #EDECEC;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}

.icon-telegram {
  mask-image: url("../assets/icons/telegram.svg");
  -webkit-mask-image: url("../assets/icons/telegram.svg");
}

.icon-github {
  mask-image: url("../assets/icons/github.svg");
  -webkit-mask-image: url("../assets/icons/github.svg");
}

.icon-pinterest {
  mask-image: url("../assets/icons/pinterest.svg");
  -webkit-mask-image: url("../assets/icons/pinterest.svg");
}

.icon-gmail {
  mask-image: url("../assets/icons/gmail.svg");
  -webkit-mask-image: url("../assets/icons/gmail.svg");
}

@media (max-width: 768px) {
  .title {
    font-size: 56px;
  }

  .subtitle {
    font-size: 18px;
    letter-spacing: 0.12em;
  }

  .intro {
    font-size: 18px;
  }

  .social-link {
    width: 38px;
    height: 38px;
  }
}
</style>