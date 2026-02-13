<script setup>
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Graphics from "./components/Graphics.vue";
import Contacts from "./components/Contacts.vue";
import Stack from "./components/Stack.vue";
import Journey from "./components/Journey.vue";
</script>

<template>
  <div class="container">
    <About class="section0" />
    <Journey id="journey" class="section" />
    <Stack id="stack" class="section" />
    <Graphics id="graphics" class="section" />
    <Project id="projects" class="section" />
    <Contacts class="section" />
  </div>
</template>

<style scoped>
.container {
  min-height: 100%;
}

.section0 {
  border-radius: 0 0 10px 10px;
  background-color: #59B994;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .section {
    padding: 16px;
  }
}
</style>
