<script>
export default {
  name: 'ProjectsGrid',
  data() {
    return {
      projects: [
        {
          id: 1,
          link: 'https://pin.it/6jYmg8GZU',
          logo: 'src/assets/storage/logo1.svg'
        },
        {
          id: 2,
          link: 'https://pin.it/6jYmg8GZU',
          logo: 'src/assets/storage/logo2.svg'
        },
        {
          id: 3,
          link: 'https://pin.it/6jYmg8GZU',
          logo: 'src/assets/storage/logo3.svg'
        },
        {
          id: 4,
          link: 'https://pin.it/6jYmg8GZU',
          logo: 'src/assets/storage/logo4.svg'
        },
        {
          id: 5,
          link: 'https://pin.it/6jYmg8GZU',
          logo: 'src/assets/storage/logo5.svg'
        },
        {
          id: 6,
          link: 'https://pin.it/6jYmg8GZU',
          logo: 'src/assets/storage/logo6.svg'
        },
        {
          id: 7,
          link: 'https://pin.it/6jYmg8GZU',
          logo: 'src/assets/storage/logo7.svg'
        },
        {
          id: 8,
          link: 'https://pin.it/6jYmg8GZU',
          logo: 'src/assets/storage/logo8.svg'
        }
      ]
    }
  }
}
</script>

<template>
  <section>
    <div class="projects-slider">
      <h1 class="title">ВИТРИНА</h1>
      <div class="slider-container">
        <div class="slides-wrapper">
          <div class="slides-track">
            <a 
              v-for="project in projects" 
              :key="project.id" 
              :href="project.link" 
              class="slide-item"
            >
              <img :src="project.logo" :alt="'Project ' + project.id" class="project-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-slider {
  font-family: 'OpenSansRegular';
  width: 100%;
}

.title {
  text-align: center;
  color: #000000;
  font-size: 2.5rem;
  font-family: 'OpenSansBold';
  margin-top: 0;
}

.slider-container {
  max-width: 85%;
  margin: 0 auto;
  padding: 0 20px;
}

.slides-wrapper {
  overflow: hidden;
  position: relative;
}

.slides-track {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  justify-content: center;
}

.slide-item {
  background: #2a475e;
  border: 1px solid #3c5a78;
  aspect-ratio: 1;
  display: flex;
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  padding: 20px; 
  transition: transform 0.3s ease;
  box-sizing: border-box;
}

.slide-item:hover .project-image {
  transform: scale(1.1);
}

/* Адаптивность для 640px */
@media (max-width: 640px) {
  .projects-slider {
    min-height: auto;
    padding: 30px 0;
  }
  
  .title {
    font-size: 2rem;
    text-align: left;
    padding: 0 15px;
    margin-bottom: 20px;
  }
  
  .slider-container {
    padding: 0 15px;
    max-width: 100%;
  }
  
  .slides-track {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin: 0;
  }
  
  .slide-item {
    border-width: 2px;
  }
  
  .slide-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  .project-image {
    padding: 5px; 
  }
}
</style>