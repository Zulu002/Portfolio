<script setup>
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Graphics from "./components/Graphics.vue";
import Contacts from "./components/Contacts.vue";
</script>

<template>
  <div class="container">
    <About id="about" class="section section-1" />
    <Project id="projects" class="section section-3" />
    <Graphics id="graphics" class="section section-4" />
    <Contacts id="contacts" class="section section-5" />
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

.section-1 {
  background-color: #1e1c17;
}

.section-3,
.section-5 {
  background-color: #1e1c17;
  background-image:
    radial-gradient(rgba(222, 208, 161, 0.15) 2px, transparent 1px),
    radial-gradient(rgba(222, 208, 161, 0.1) 2px, transparent 1px);
  background-size: 40px 40px, 80px 80px;
  background-position: 0 0, 20px 20px;
}

.section-4 {
  background-color: #dcdcdc;
}
</style>
