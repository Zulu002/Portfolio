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
          link: 'https://zulu002.github.io/invoice/',
          logo: 'https://raw.githubusercontent.com/Zulu002/invoice/main/img/icon.svg'
        },
        {
          id: 2,
          title: 'Калькулятор накладных',
          description: 'Веб-приложение, которое упрощает вычислительные расчеты при заполнении физических накладных.',
          link: 'https://zulu002.github.io/invoice/',
          logo: 'https://raw.githubusercontent.com/Zulu002/invoice/main/img/icon.svg'
        },
        {
          id: 3,
          title: 'Калькулятор накладных',
          description: 'Веб-приложение, которое упрощает вычислительные расчеты при заполнении физических накладных.',
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
          <div class="card" v-for="project in projects" :key="project.id">
            <!-- ЛОГОТИП СЛЕВА, ЗАГОЛОВОК СПРАВА В ОДНУ ЛИНИЮ -->
            <div class="card-header">
              <img :src="project.logo" :alt="project.title" class="logo" />
              <h3 class="name">{{ project.title }}</h3>
            </div>

            <p class="description">{{ project.description }}</p>

            <a :href="project.link" class="btn" target="_blank">
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
  position: relative;
}

.content-wrapper {
  position: relative;
  z-index: 1;
}

.header-container {
  max-width: 1000px;
  margin: 0 auto 30px auto;
}

.title {
  text-align: left;
  color: #ffffff; /* если фон тёмный — оставляй белый */
  font-size: 2.5rem;
  margin-bottom: 0;
  font-family: 'OpenSansBold';
}

/* Сетка и карточки как у макетов */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.card {
  background: #ffffff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* ВАЖНО: логотип слева, заголовок справа, по центру по вертикали */
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
  flex-shrink: 0;
}

.name {
  color: #000000;
  font-size: 1.4rem;
  margin: 0;
  font-family: 'OpenSansBold';
}

.description {
  color: #585758;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.btn {
  display: inline-block;
  background-color: #000000;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-family: 'OpenSansBold';
  border: 1px solid transparent;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.btn:hover {
  background: #ffffff;
  border-color: #000000;
  color: #000000;
}

/* Мобильная версия */
@media (max-width: 640px) {
  .projects {
    padding: 30px 15px;
  }

  .title {
    font-size: 2rem;
  }

  .cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card {
    padding: 20px;
  }

  .logo {
    width: 36px;
    height: 36px;
  }

  .name {
    font-size: 1.3rem;
  }
}
</style>
