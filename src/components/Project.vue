<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Калькулятор накладных',
          description: 'Веб-приложение, которое упрощает вычислительные расчеты при заполнении физических накладных.',
          stack: ['HTML5', 'CSS3', 'JavaScript', 'illustrator'],
          link: 'https://zulu002.github.io/invoice/',
          logo: 'https://raw.githubusercontent.com/Zulu002/invoice/main/img/icon.svg'
        }
      ]
    }
  }
}
</script>

<template>
  <section>
    <div class="projects">
      <div class="content-wrapper">

        <div class="header-container">
          <h1 class="title">ПРОЕКТЫ</h1>
        </div>

        <div class="cards">
          <div
            class="card"
            v-for="project in projects"
            :key="project.id"
          >
            <div class="card-header">
              <img
                :src="project.logo"
                :alt="project.title"
                class="logo"
              />
              <h3 class="name">{{ project.title }}</h3>
            </div>

            <p class="description">
              {{ project.description }}
            </p>

            <!-- Стек технологий -->
            <div class="stack">
              <span
                class="stack-item"
                v-for="tech in project.stack"
                :key="tech"
              >
                {{ tech }}
              </span>
            </div>

            <a
              :href="project.link"
              class="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Посмотреть проект
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  font-family: 'OpenSansRegular';
  padding: 40px 20px;
}

.header-container {
  max-width: 1000px;
  margin: 0 auto 30px;
}

.title {
  color: #dcdcdc;
  font-size: 2.5rem;
  font-family: 'OpenSansBold';
}

/* Сетка */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Карточка */
.card {
  background: #dcdcdc;
  padding: 25px;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Хедер карточки */
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
  color: #000;
  font-size: 1.4rem;
  font-family: 'OpenSansBold';
  margin: 0;
}

/* Описание */
.description {
  color: #4c4c4c;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 16px;
  flex-grow: 1;
}

/* Стек */
.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.stack-item {
  padding: 6px 10px;
  font-size: 0.8rem;
  font-family: 'OpenSansBold';
  color: #2b2b2b;

  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.12);
  user-select: none;
}

/* Кнопка */
.btn {
  background: #000;
  color: #dcdcdc;
  text-decoration: none;
  padding: 12px 24px;
  font-family: 'OpenSansBold';
  text-align: center;
  transition: 0.3s ease;
}

.btn:hover {
  background: #dcdcdc;
  color: #000;
  border: 1px solid #000;
}

/* Мобилка */
@media (max-width: 640px) {
  .title {
    font-size: 2rem;
  }

  .card {
    padding: 20px;
  }
}
</style>
