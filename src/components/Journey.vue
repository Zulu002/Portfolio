<script>
export default {
  name: "JourneySection",
  data() {
    return {
      journeyCard: {
        title: "Мой путь",
        text: `С детства меня увлекали видеоигры, и именно это со временем привело меня к желанию создавать собственные проекты. Я поступил в Ростовский колледж связи и информатики на специальность «Информационные системы». На третьем курсе я познакомился с веб-разработкой и дизайном и начал создавать небольшие веб-страницы, иконки и логотипы. Сейчас я получаю высшее образование по направлению «Бизнес-информатика» и параллельно изучаю инди-разработку, стремясь развиваться на стыке дизайна, технологий и создания цифровых продуктов.`,
      },
    };
  },
};
</script>

<template>
  <section class="journey">
    <div class="journey-wrapper">
      <article class="card">
        <h3 class="name">{{ journeyCard.title }}</h3>
        <p class="description journey-text">{{ journeyCard.text }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>

.journey {
  padding: 40px 20px;
  font-family: "OpenSansRegular";
}

.journey-wrapper {
  max-width: var(--content-width);
  margin: 0 auto;
}

.card {
  border: 1px solid #201E19;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 28px;
  background: #1B1913;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 0 45px rgba(127, 223, 255, 0.25);
}

.name {
  margin: 0 0 14px;
  color: #EDECEC;
  font-size: 1.6rem;
  font-family: "OpenSansBold";
}

.description {
  color: #9A9996;
  font-size: 1rem;
  line-height: 1.55;
  margin: 0;
}


.journey-text {
  white-space: pre-line;
}

@media (max-width: 640px) {
  .section-title {
    font-size: 1.6rem;
  }
}

@media (hover: none) {
  .card:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    transform: none;
  }
}
</style>
