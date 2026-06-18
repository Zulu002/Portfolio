<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Project from "./components/Project.vue";
import Graphics from "./components/Graphics.vue";
import Contacts from "./components/Contacts.vue";
import Stack from "./components/Stack.vue";
import Journey from "./components/Journey.vue";

const locale = ref("en");
</script>

<template>
  <Header v-model:locale="locale" />

  <main class="container">
    <About :locale="locale" class="section0" />
    <Journey :locale="locale" id="journey" class="section" />
    <Graphics :locale="locale" id="graphics" class="section" />
    <Stack :locale="locale" id="stack" class="section" />
    <Project :locale="locale" id="projects" class="section" />
    <Contacts :locale="locale" id="contacts" class="section" />
  </main>
</template>

<style scoped>
.container {
  min-height: 100%;
  padding-top: 53px;
  box-sizing: border-box;
}

.section0 {
  display: flex;
  justify-content: flex-end;
  align-items: end;
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
  .container {
    padding-top: 101px;
  }

  .section {
    padding: 16px;
  }
}
</style>
