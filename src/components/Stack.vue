<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Дизайн",
          description:
            "Графический и интерфейсный дизайн с упором на композицию, визуальную иерархию и пользовательский опыт. Работаю с брендингом, UI и игровыми ассетами.",
          stack: ["Figma", "Photoshop", "Illustrator", "Aseprite"],
        },
        {
          id: 2,
          title: "Разработка",
          description:
            "Фронтенд-разработка и прототипирование интерфейсов. Создаю адаптивные, понятные и функциональные веб-продукты.",
          stack: ["HTML", "CSS", "JavaScript", "Vue", "Unity", "Python"],
        },
      ],
    };
  },
};
</script>

<template>
  <section class="expertise">
    <div class="expertise-wrapper">
      <h1 class="title">ИНСТРУМЕНТЫ И ТЕХНОЛГИИ</h1>

      <div class="cards">
        <article v-for="card in cards" :key="card.id" class="card">
          <h3 class="name">{{ card.title }}</h3>

          <p class="description">
            {{ card.description }}
          </p>

          <ul class="stack">
            <li v-for="item in card.stack" :key="item">
              {{ item }}
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

.title {
  margin-bottom: 30px;
  color: #eee6db;
  font-size: 2.5rem;
  font-family: "OpenSansBold";
}

/* GRID */
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

/* CARD */
.card {
  display: flex;
  flex-direction: column;
  padding: 28px;
  background: #eee6db;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* TITLE */
.name {
  margin: 0 0 14px;
  color: #000;
  font-size: 1.6rem;
  font-family: "OpenSansBold";
}

/* DESCRIPTION */
.description {
  margin-bottom: 18px;
  color: #4c4c4c;
  font-size: 1rem;
  line-height: 1.55;
}

/* STACK */
.stack {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
}

.stack li {
  font-size: 0.9rem;
  color: #000;
  font-family: "OpenSansBold";
  letter-spacing: 0.04em;
}

/* ADAPTIVE */
@media (max-width: 900px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .title {
    font-size: 2rem;
  }
}
</style>
