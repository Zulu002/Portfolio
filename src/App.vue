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
    <section id="about" class="section section-1">
      <About />
    </section>
    <section id="skills" class="section section-2">
      <Skills />
    </section>
    <section id="projects" class="section section-3">
      <Project />
    </section>
    <section id="graphics" class="section section-4">
      <Graphics />
    </section>
    <section id="layouts" class="section section-5">
      <Layouts />
    </section>
    <section id="contacts" class="section section-6">
      <Contacts />
    </section>
  </div>
</template>

<style scoped>
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
    linear-gradient(#3d5b81 1px, transparent 1px),
    linear-gradient(90deg, #3d5b81 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0;
}
.section-3 { background-image: linear-gradient(0deg, rgb(26, 159, 255) 0%, rgb(26, 159, 255) 100%);}
.section-4 { background-color: #EDEDED; }
.section-5 { 
  background-color: #EDEDED;
  background-image: 
    linear-gradient(#b0b0b0 1px, transparent 1px),
    linear-gradient(90deg, #b0b0b0 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: 0 0;
}
.section-6 { background-color: #1B2838; }
</style>