<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Калькулятор накладных",
          description:
            "Веб-приложение, которое упрощает вычислительные расчеты при заполнении физических накладных.",
          link: "https://zulu002.github.io/invoice/",
          logo: "https://raw.githubusercontent.com/Zulu002/invoice/main/img/icon.svg",
        },
        {
          id: 2,
          title: "Лендинг продукта",
          description:
            "Адаптивный лендинг с акцентом на структуру, композицию и пользовательский путь.",
          link: "#",
          logo: "https://via.placeholder.com/40",
        },
        {
          id: 3,
          title: "UI Kit",
          description:
            "Набор интерфейсных компонентов, собранных в единой визуальной системе.",
          link: "#",
          logo: "https://via.placeholder.com/40",
        },
        {
          id: 4,
          title: "Dungeon",
          description:
            "Игра в жанре сокобан находится на стадии продумывания и изучения технологий разработки",
          link: "#",
          logo: "https://via.placeholder.com/40",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="projects">
    <div class="projects-wrapper">
      <h1 class="title">ПРОЕКТЫ</h1>

      <div class="cards">
        <article v-for="project in projects" :key="project.id" class="card">
          <header class="card-header">
            <img :src="project.logo" :alt="project.title" class="logo" />
            <h3 class="name">{{ project.title }}</h3>
          </header>

          <p class="description">
            {{ project.description }}
          </p>

          <a
            :href="project.link"
            class="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Посмотреть проект
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 0 20px 40px;
  font-family: "OpenSansRegular";
}

.projects-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.title {
  margin-top: 0;
  margin-bottom: 30px;
  color: #dcdcdc;
  font-size: 2.5rem;
  font-family: "OpenSansBold";
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.card {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: #dcdcdc;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.name {
  margin: 0;
  color: #000;
  font-size: 1.4rem;
  font-family: "OpenSansBold";
}

.description {
  flex-grow: 1;
  margin-bottom: 16px;
  color: #4c4c4c;
  font-size: 0.95rem;
  line-height: 1.5;
}

.btn {
  padding: 12px 24px;
  background: #000;
  color: #EFEFEF;
  text-decoration: none;
  font-family: "OpenSansBold";
  border: 1px solid transparent;
  transition: 0.3s ease;
}

.btn:hover {
  background: #EFEFEF;
  color: #000;
  border-color: #000;
}

@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 2rem;
  }
}
</style>
