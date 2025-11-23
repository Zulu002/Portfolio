<script setup>
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Project from './components/Project.vue';
import Graphics from './components/Graphics.vue';
import Layouts from './components/Layouts.vue';
import Contacts from './components/Contacts.vue';
</script>

<template>
  <div class="container">
      <About id="about" class="section section-1"/>
      <Skills id="skills" class="section section-2"/>
      <Project id="projects" class="section section-3"/>
      <Graphics id="graphics" class="section section-4"/>
      <Layouts id="layouts" class="section section-5"/>
      <Contacts id="contacts" class="section section-6"/>  
  </div>
</template>

<style scoped>
#graphics{
  width: 100%;
}
.container {
  overflow-y: auto;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

/* Фоны для секций */
.section-1 { background-color: #1B2838; }
.section-2 { 
  background-color: #1B2838;
  background-image: 
    linear-gradient(#3d5b81 2px, transparent 1px),
    linear-gradient(90deg, #3d5b81 2px, transparent 1px);
  background-size: 60px 60px;
  background-position: center;
}
.section-3 {
  background-color: rgb(26, 159, 255);
  background-image: 
      linear-gradient(#EDEDED 2px, transparent 1px),
      linear-gradient(90deg, #EDEDED 2px, transparent 1px);
  background-size: 60px 60px;
  background-position: center;
}
.section-4 { background-color: #EDEDED;}
.section-5 { 
  background-color: #EDEDED;
  background-image: 
    linear-gradient(rgb(26, 159, 255) 2px, transparent 1px),
    linear-gradient(90deg, rgb(26, 159, 255) 2px, transparent 1px);
  background-size: 240px 240px;
  background-position: center;
}
.section-6 { background-color: #1B2838; }
</style>