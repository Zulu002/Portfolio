<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Минималистичный лендинг',
          description: 'Одностраничный лендинг в сине-белой цветовой гамме. Современное и лаконичное решение для презентации компании или услуг. Макет включает все необходимые блоки для удобной навигации и эффективного донесения информации до пользователя.',
          link: 'https://www.figma.com/design/MjKqGW3AEn1ioiez88eLoN/%D0%92%D0%B0%D1%80%D1%84%D1%80%D0%B5%D0%B9%D0%BC-%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3?node-id=0-1&t=9mCu1gjZB2LQqVPA-1'
        },
        {
          id: 2,
          title: 'Ведем технические работы',
          description: 'Ведем технические работы',
          link: '#нет тут ничего'
        },
        {
          id: 3,
          title: 'Ведем технические работы',
          description: 'Ведем технические работы',
          link: '#нет тут ничего'
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
          <h1 class="title">МАКЕТЫ</h1>
        </div>
        <div class="cards">
          <div class="card" v-for="project in projects" :key="project.id">
            <h3 class="name">{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
            <a :href="project.link" class="btn" target="_blank">Посмотреть макет</a>
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
  overflow: hidden;
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
  color: #000000;
  font-size: 2.5rem;
  margin-bottom: 0;
  font-family: 'OpenSansBold';
}

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

.name {
  color: #000000;
  font-size: 1.4rem;
  margin: 0 0 15px 0;
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

@media (max-width: 640px) {
  .projects {
    padding: 30px 15px;
    min-height: auto;
  }
  
  .header-container {
    max-width: 100%;
    margin: 0 0 25px 0;
  }
  
  .title {
    font-size: 2rem;
    text-align: left;
    margin-bottom: 0;
  }
  
  .cards {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 20px;
    margin: 0;
  }
  
  .card {
    padding: 20px;
    border: 1px solid #f0f0f0;
  }
  
  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .name {
    font-size: 1.3rem;
    margin: 0 0 12px 0;
  }
  
  .description {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 18px;
  }
  
  .btn {
    padding: 12px 20px;
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