<script>
import logo1 from "../assets/storage/logo1.svg";
import logo2 from "../assets/storage/logo2.svg";
import logo3 from "../assets/storage/logo3.svg";
import logo4 from "../assets/storage/logo4.svg";
import logo5 from "../assets/storage/logo5.svg";
import logo6 from "../assets/storage/logo6.svg";
import logo7 from "../assets/storage/logo7.svg";
import logo8 from "../assets/storage/logo8.svg";

export default {
  data() {
    return {
      projects: [
        { id: 1, link: "https://pin.it/6jYmg8GZU", logo: logo1 },
        { id: 2, link: "https://pin.it/6jYmg8GZU", logo: logo2 },
        { id: 3, link: "https://pin.it/6jYmg8GZU", logo: logo3 },
        { id: 4, link: "https://pin.it/6jYmg8GZU", logo: logo4 },
        { id: 5, link: "https://pin.it/6jYmg8GZU", logo: logo5 },
        { id: 6, link: "https://pin.it/6jYmg8GZU", logo: logo6 },
        { id: 7, link: "https://pin.it/6jYmg8GZU", logo: logo7 },
        { id: 8, link: "https://pin.it/6jYmg8GZU", logo: logo8 },
      ],
    };
  },
};
</script>

<template>
  <section class="projects-showcase">
    <div class="showcase-wrapper">
      <h1 class="title">ВИТРИНА</h1>

      <div class="grid">
        <a
          v-for="project in projects"
          :key="project.id"
          :href="project.link"
          class="tile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="project.logo"
            :alt="`Project ${project.id}`"
            class="image"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-showcase {
  width: 100%;
  font-family: "OpenSansRegular";
}

.showcase-wrapper {
  max-width: 85%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.title {
  margin: 0 0 20px;
  color: #EEE6DB;
  font-size: 2.5rem;
  font-family: "OpenSansBold";
  text-align: left;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.tile {
  position: relative;
  display: flex;
  aspect-ratio: 1;
  overflow: hidden;
  text-decoration: none;
  background: #2a2a2a;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tile:hover .image {
  transform: scale(1.1);
}

@media (max-width: 640px) {
  .showcase-wrapper {
    max-width: 100%;
    padding: 0 15px;
  }

  .title {
    text-align: left;
    font-size: 2rem;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .tile {
    border-width: 2px;
  }

  .tile:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .image {
    padding: 5px;
  }
}
</style>
