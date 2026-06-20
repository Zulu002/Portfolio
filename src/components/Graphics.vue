<script>
import logo1 from "../assets/storage/logo1.svg";
import logo2 from "../assets/storage/logo2.svg";
import logo3 from "../assets/storage/logo3.svg";
import logo4 from "../assets/storage/logo4.svg";
import logo5 from "../assets/storage/logo5.svg";
import logo6 from "../assets/storage/logo6.svg";
import logo7 from "../assets/storage/logo7.svg";
import logo8 from "../assets/storage/logo8.svg";
import logo9 from "../assets/storage/logo9.svg";
import logo10 from "../assets/storage/logo10.svg";
import logo11 from "../assets/storage/logo11.svg";
import logo12 from "../assets/storage/logo12.svg";
import logo13 from "../assets/storage/logo13.svg";

export default {
  props: {
    locale: {
      type: String,
      default: "en",
    },
  },
  data() {
    return {
      projects: [
        { id: 1, link: "https://pin.it/6jYmg8GZU", logo: logo7 },
        { id: 2, link: "https://pin.it/6jYmg8GZU", logo: logo3 },
        { id: 3, link: "https://pin.it/6jYmg8GZU", logo: logo12 },
        { id: 4, link: "https://pin.it/6jYmg8GZU", logo: logo2 },
        { id: 5, link: "https://pin.it/6jYmg8GZU", logo: logo5 },
        { id: 6, link: "https://pin.it/6jYmg8GZU", logo: logo6 },
        { id: 7, link: "https://pin.it/6jYmg8GZU", logo: logo1 },
        { id: 8, link: "https://pin.it/6jYmg8GZU", logo: logo4 },
        { id: 9, link: "https://pin.it/6jYmg8GZU", logo: logo9 },
        { id: 10, link: "https://pin.it/6jYmg8GZU", logo: logo10 },
        { id: 11, link: "https://pin.it/6jYmg8GZU", logo: logo11 },
        { id: 12, link: "https://pin.it/6jYmg8GZU", logo: logo8 },
        { id: 13, link: "https://pin.it/6jYmg8GZU", logo: logo13 },
      ],
    };
  },
  computed: {
    darkBackedProjects() {
      return this.projects.slice(0, 6);
    },
    lightBackedProjects() {
      return this.projects.slice(6);
    },
    text() {
      const content = {
        en: {
          title: "illustrations",
          description: "Logos, icons, and graphic experiments collected in one place.",
          aria: "Illustration showcase",
        },
        ru: {
          title: "иллюстрации",
          description: "Логотипы, иконки и графические эксперименты в одном месте.",
          aria: "Витрина иллюстраций",
        },
      };

      return content[this.locale] || content.en;
    },
  },
};
</script>

<template>
  <section class="projects-showcase">
    <div class="showcase-wrapper">
      <div class="showcase-column showcase-column-dark">
        <div class="showcase-copy">
          <h2 class="showcase-title">{{ text.title }}</h2>
          <p class="showcase-text">
            {{ text.description }}
          </p>
        </div>

        <div class="gallery-grid gallery-grid-light" :aria-label="text.aria">
          <a
            v-for="project in lightBackedProjects"
            :key="project.id"
            :href="project.link"
            class="tile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="project.logo"
              :alt="`Illustration ${project.id}`"
              class="image"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </a>
        </div>
      </div>

      <div class="showcase-column showcase-column-light">
        <div class="showcase-copy">
          <h2 class="showcase-title">{{ text.title }}</h2>
          <p class="showcase-text">
            {{ text.description }}
          </p>
        </div>

        <div class="gallery-grid gallery-grid-dark" :aria-label="text.aria">
          <a
            v-for="project in darkBackedProjects"
            :key="project.id"
            :href="project.link"
            class="tile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="project.logo"
              :alt="`Illustration ${project.id}`"
              class="image"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-showcase {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.showcase-wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  box-sizing: border-box;
}

.showcase-column {
  width: 100%;
  padding: 28px 31px 30px;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
}

.showcase-column-light {
  border: 4px solid #000000;
  background: transparent;
}

.showcase-column-light .showcase-title {
  color: #060606;
}

.showcase-column-light .showcase-text {
  color: #060606;
}

.showcase-column-dark {
  background: #000000;
}

.showcase-copy {
  margin-bottom: 24px;
}

.showcase-title {
  margin: 0;
  color: var(--accent);
  font-size: clamp(28px, 3.2vw, 31px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
}

.showcase-text {
  max-width: 560px;
  margin: 12px 0 0;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.2;
}

.gallery-grid {
  display: grid;
  width: 100%;
  gap: 14px;
  justify-content: center;
  justify-items: center;
}

.gallery-grid-dark {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.gallery-grid-light {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.tile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  overflow: hidden;
  text-decoration: none;
  border-radius: 50%;
  width: 100%;
  max-width: 118px;
  box-sizing: border-box;
  transition: border-radius var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
}

.image {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  object-fit: cover;
  transition: transform var(--motion-duration) var(--motion-ease);
}

.tile:hover,
.tile:focus-visible {
  border-radius: 5px;
  transform: translateY(-2px);
}

.tile:hover .image {
  transform: scale(1.04);
}

@media (max-width: 640px) {
  .projects-showcase {
    padding: 8px 16px;
  }

  .showcase-wrapper {
    grid-template-columns: 1fr;
  }

  .showcase-column {
    padding: 24px 22px;
  }

  .showcase-column-dark .showcase-text {
    color: #ffffff;
  }

  .showcase-column-light .showcase-text {
    color: #060606;
  }

  .gallery-grid-dark,
  .gallery-grid-light {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .tile:hover {
    transform: translateY(-2px);
  }
}
</style>
