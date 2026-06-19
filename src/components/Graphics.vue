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
        { id: 1, link: "https://pin.it/6jYmg8GZU", logo: logo1 },
        { id: 2, link: "https://pin.it/6jYmg8GZU", logo: logo4 },
        { id: 3, link: "https://pin.it/6jYmg8GZU", logo: logo8 },
        { id: 4, link: "https://pin.it/6jYmg8GZU", logo: logo2 },
        { id: 5, link: "https://pin.it/6jYmg8GZU", logo: logo5 },
        { id: 6, link: "https://pin.it/6jYmg8GZU", logo: logo6 },
        { id: 7, link: "https://pin.it/6jYmg8GZU", logo: logo7 },
        { id: 8, link: "https://pin.it/6jYmg8GZU", logo: logo3 },
        { id: 9, link: "https://pin.it/6jYmg8GZU", logo: logo9 },
        { id: 10, link: "https://pin.it/6jYmg8GZU", logo: logo10 },
        { id: 11, link: "https://pin.it/6jYmg8GZU", logo: logo11 },
        { id: 12, link: "https://pin.it/6jYmg8GZU", logo: logo12 },
        { id: 13, link: "https://pin.it/6jYmg8GZU", logo: logo13 },
      ],
    };
  },
  computed: {
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
      <div class="showcase-panel">
        <div class="showcase-heading">
          <h2 class="showcase-title">{{ text.title }}</h2>
          <p class="showcase-text">
            {{ text.description }}
          </p>
        </div>

        <div class="gallery-grid" :aria-label="text.aria">
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
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  box-sizing: border-box;
}

.showcase-panel {
  width: 100%;
  padding: 28px 31px 30px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #000000;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
}

.showcase-heading {
  display: grid;
  grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.58fr);
  gap: 24px;
  align-items: start;
  margin-bottom: 24px;
}

.showcase-title {
  margin: 0;
  color: #d1ffc4;
  font-size: clamp(28px, 3.2vw, 31px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0;
}

.showcase-text {
  max-width: 560px;
  margin: 0;
  justify-self: end;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.2;
  text-align: right;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 14px;
  justify-content: center;
  justify-items: center;
}

.tile {
  position: relative;
  display: block;
  aspect-ratio: 1;
  overflow: hidden;
  text-decoration: none;
  border-radius: 50%;
  background: transparent;
  width: 100%;
  max-width: 128px;
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

  .showcase-panel {
    padding: 24px 22px;
  }

  .showcase-heading {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .showcase-text {
    justify-self: start;
    text-align: left;
  }

  .gallery-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .tile:hover {
    transform: translateY(-2px);
  }
}
</style>
