<script>
import logo1 from "../assets/storage/logo1.svg";
import logo2 from "../assets/storage/logo2.svg";
import logo3 from "../assets/storage/logo3.svg";
import logo5 from "../assets/storage/logo5.svg";
import logo6 from "../assets/storage/logo6.svg";
import logo7 from "../assets/storage/logo7.svg";
import logo9 from "../assets/storage/logo9.svg";
import logo10 from "../assets/storage/logo10.svg";
import logo11 from "../assets/storage/logo11.svg";
import logo12 from "../assets/storage/logo12.svg";
import logo13 from "../assets/storage/logo13.svg";
import head from "../assets/storage/head.svg";

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
        { id: 1, logo: logo7 },
        { id: 2, logo: logo3 },
        { id: 3, logo: logo12 },
        { id: 4, logo: logo2 },
        { id: 5, logo: logo5 },
        { id: 7, logo: logo6 },
        { id: 8, logo: logo1, panel: "dark" },
        { id: 10, logo: logo9 },
        { id: 11, logo: logo10 },
        { id: 12, logo: logo11 },
        { id: 14, logo: logo13 },
        {
          id: 15,
          logo: head,
          alt: "Geometric head illustration",
          panel: "dark",
        },
      ],
    };
  },
  computed: {
    darkBackedProjects() {
      return this.projects.filter(
        (project, index) => project.panel === "light" || (!project.panel && index < 7),
      );
    },
    lightBackedProjects() {
      return this.projects.filter(
        (project, index) => project.panel === "dark" || (!project.panel && index >= 7),
      );
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
      <div class="showcase-row showcase-row-dark">
        <div class="showcase-copy">
          <h2 class="showcase-title">{{ text.title }}</h2>
          <p class="showcase-text">
            {{ text.description }}
          </p>
        </div>

        <div class="showcase-divider" aria-hidden="true"></div>

        <div class="gallery-grid gallery-grid-light" :aria-label="text.aria">
          <div
            v-for="project in lightBackedProjects"
            :key="project.id"
            class="tile"
          >
            <img
              :src="project.logo"
              :alt="project.alt || `Illustration ${project.id}`"
              class="image"
              width="128"
              height="128"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <div class="showcase-row showcase-row-light">
        <div class="gallery-grid gallery-grid-dark" :aria-label="text.aria">
          <div
            v-for="project in darkBackedProjects"
            :key="project.id"
            class="tile"
          >
            <img
              :src="project.logo"
              :alt="project.alt || `Illustration ${project.id}`"
              class="image"
              width="128"
              height="128"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
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
  gap: 16px;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  box-sizing: border-box;
}

.showcase-row {
  width: 100%;
  padding: 24px 31px;
  box-sizing: border-box;
  border-radius: 5px;
}

.showcase-row-light {
  background: #eae9e9;
}

.showcase-row-dark {
  background: #000000;
}

.showcase-copy {
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
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

.showcase-divider {
  width: 100%;
  height: 1px;
  margin: 18px 0 22px;
  background: rgba(var(--accent-rgb), 0.42);
}

.gallery-grid {
  display: grid;
  width: 100%;
  gap: 14px;
  justify-content: center;
  justify-items: center;
}

.gallery-grid-dark {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.gallery-grid-light {
  grid-template-columns: repeat(6, minmax(0, 1fr));
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

  .showcase-row {
    padding: 22px;
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
