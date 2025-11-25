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

      ]
    }
  }
}
</script>

<template>
  <section>
    <div class="projects">
      <div class="header-container">
        <h1 class="title">ПРОЕКТЫ</h1>
      </div>
      <div class="cards">
        <div class="card" v-for="project in projects" :key="project.id">
          <div class="card-header">
            <img :src="project.logo" :alt="project.title" class="logo" />
            <h3 class="name">{{ project.title }}</h3>
          </div>
          <p class="description">{{ project.description }}</p>
          <a :href="project.link" class="btn" target="_blank">Посмотреть проект</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  font-family: 'OpenSansRegular';
}

.title {
  text-align: left;
  color: white;
  font-size: 2.5rem;
  font-family: 'OpenSansBold';
  margin: 10px 0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 100%;
  margin: 0 auto;
}

.card {
  background: white;
  padding: 25px;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: all 0.3s ease;
  width: 100%;
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
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
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
  text-align: left;
  font-family: 'OpenSansBold';
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: all 0.3s ease;
  width: 100%;
}

.btn:hover {
  color: #000000;
  background: #ffffff;
  border: 1px solid #000000;
}

/* Адаптивность для 640px */
@media (max-width: 640px) {
  .projects {
    padding: 30px 15px;
  }
  
  .header-container {
    max-width: 100%;
    margin: 0 0 25px 0;
  }
  
  .title {
    font-size: 2rem;
    padding-left: 0;
    margin-bottom: 8px;
  }
  
  hr {
    height: 4px;
  }
  
  .cards {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 20px;
    margin: 0;
  }
  
  .card {
    padding: 20px;
  }
  
  .card-header {
    gap: 10px;
    margin-bottom: 12px;
  }
  
  .logo {
    font-size: 1.5rem;
    min-width: 35px;
    height: 35px;
  }
  
  .name {
    font-size: 1.3rem;
  }
  
  .description {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 18px;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 0.95rem;
    text-align: center;
  }

  .btn:active {
    color: #000000;
    background: #ffffff;
    border: 1px solid #000000;
  }
}
</style>