<script>
export default {
  name: 'ProjectsGrid',
  data() {
    return {
      projects: [
        {
          id: 1,
          link: '#',
          logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=300&fit=crop&crop=center'
        },
        {
          id: 2,
          link: '#',
          logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=300&fit=crop&crop=center'
        },
        {
          id: 3,
          link: '#',
          logo: 'https://images.unsplash.com/photo-1610465299993-e95f6caa7c8c?w=300&h=300&fit=crop&crop=center'
        },
        {
          id: 4,
          link: '#',
          logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=300&fit=crop&crop=center'
        },
        {
          id: 5,
          link: '#',
          logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=300&fit=crop&crop=center'
        },
        {
          id: 6,
          link: '#',
          logo: 'https://images.unsplash.com/photo-1610465299993-e95f6caa7c8c?w=300&h=300&fit=crop&crop=center'
        },
        {
          id: 7,
          link: '#',
          logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=300&fit=crop&crop=center'
        },
        {
          id: 8,
          link: '#',
          logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=300&fit=crop&crop=center'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="projects-slider">
    <h1 class="title">Графика</h1>
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
</template>

<style scoped>
.projects-slider {
  font-family: 'OpenSansRegular';
}

.title {
  text-align: center;
  color: #000000;
  font-size: 2.5rem;
  font-family: 'OpenSansBold';
}

.slider-container {
  max-width: 1200px;
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

.slide-item:hover {
  border-color: #68c8ff;
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.slide-item:hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 192, 244, 0.2), transparent);
  pointer-events: none;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.slide-item:hover .project-image {
  transform: scale(1.05);
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
    object-fit: cover;
  }
}

</style>