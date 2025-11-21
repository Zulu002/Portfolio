<script setup>
import About from './components/about.vue';
import Skills from './components/Skills.vue';
import Project from './components/Project.vue';
import Graphics from './components/Graphics.vue';
import Layouts from './components/Layouts.vue';
import Contacts from './components/Contacts.vue';
import { onMounted, ref } from 'vue'

const isScrolling = ref(false);

onMounted(() => {
  const container = document.querySelector('.snap-container');
  let scrollTimeout = null;
  
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    
    if (isScrolling.value) return;
    
    isScrolling.value = true;
    
    const delta = Math.sign(e.deltaY);
    const currentScroll = container.scrollTop;
    const slideHeight = window.innerHeight;
    const currentSlide = Math.round(currentScroll / slideHeight);
    
    // Определяем целевую секцию
    let targetSlide = currentSlide + delta;
    targetSlide = Math.max(0, Math.min(targetSlide, 5)); // 0-5 для 6 секций
    
    const targetScroll = targetSlide * slideHeight;
    
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling.value = false;
    }, 1000); // Увеличили таймаут
    
  }, { passive: false });
});
</script>

<template>
  <div class="snap-container">
    <section id="about" class="slide slide-1">
      <About />
    </section>
    <section id="skills" class="slide slide-2">
      <Skills />
    </section>
    <section id="projects" class="slide slide-3">
      <Project />
    </section>
    <section id="graphics" class="slide slide-4">
      <Graphics />
    </section>
    <section id="layouts" class="slide slide-5">
      <Layouts />
    </section>
    <section id="contacts" class="slide slide-6">
      <Contacts />
    </section>
  </div>
</template>

<style scoped>
.snap-container {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.slide {
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  overflow: hidden;
}

/* Фоны для слайдов */
.slide-1 { background-color: #1B2838; }
.slide-2 { background-color: #1B2838;
  background-image: 
    linear-gradient(#3d5b81 1px, transparent 1px),
    linear-gradient(90deg, #3d5b81 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0;}
.slide-3 {background-color: #EDEDED;}
.slide-4 { background-color: #EDEDED; }
.slide-5 { background-color: #EDEDED;
  background-image: 
    linear-gradient(#b0b0b0 1px, transparent 1px),
    linear-gradient(90deg, #b0b0b0 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0;}
.slide-6 { background-color: #1B2838; }

/* Скрываем scrollbar */
.snap-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.snap-container::-webkit-scrollbar {
  display: none;
}
</style>