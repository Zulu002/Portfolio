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
      visibleColumns: 5,
      projects: [
        { id: 1, link: "https://pin.it/6jYmg8GZU", logo: logo1 },
        { id: 2, link: "https://pin.it/6jYmg8GZU", logo: logo4 },
        { id: 3, link: "https://pin.it/6jYmg8GZU", logo: logo8 },
        { id: 4, link: "https://pin.it/6jYmg8GZU", logo: logo2 },
        { id: 5, link: "https://pin.it/6jYmg8GZU", logo: logo5 },
        { id: 6, link: "https://pin.it/6jYmg8GZU", logo: logo6 },
        { id: 7, link: "https://pin.it/6jYmg8GZU", logo: logo7 },
        { id: 8, link: "https://pin.it/6jYmg8GZU", logo: logo3 },
      ],
    };
  },
};
</script>

<template>
  <section class="projects-showcase">
    <div class="showcase-wrapper">
      <h2 class="section-title">Графика</h2>

      <div class="slider">
        <div
          class="track"
          :style="{
            '--logo-columns': visibleColumns,
            '--logo-item-percent': `${100 / projects.length}%`,
            '--marquee-ratio': projects.length / visibleColumns
          }"
        >
          <div class="marquee" aria-label="Лента логотипов">
            <div class="marquee__group">
              <a
                v-for="project in projects"
                :key="`a-${project.id}`"
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
                  draggable="false"
                />
              </a>
            </div>
            <div class="marquee__group" aria-hidden="true">
              <a
                v-for="project in projects"
                :key="`b-${project.id}`"
                :href="project.link"
                class="tile"
                target="_blank"
                rel="noopener noreferrer"
                tabindex="-1"
              >
                <img
                  :src="project.logo"
                  :alt="`Project ${project.id}`"
                  class="image"
                  loading="lazy"
                  draggable="false"
                />
              </a>
            </div>
          </div>
        </div>
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
  max-width: var(--content-width);
  margin: 0 auto;
  box-sizing: border-box;
}

.section-title {
  margin: 0 0 22px;
  font-family: "OpenSansBold";
  font-size: 2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #EDECEC;
}

.slider {
  position: relative;
  width: 100%;
}

/* окно */
.track {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 0 4px;

  --logo-gap: 15px;
  --logo-columns: 5;
  --logo-item-percent: 12.5%;
  --marquee-ratio: 1.6;
  --marquee-duration: 32s;
  --logo-inner-padding: 8px;
}

/* лента */
.marquee {
  display: flex;
  width: calc(var(--marquee-ratio) * 200%);
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  animation: marquee-move var(--marquee-duration) linear infinite;
}

.marquee__group {
  width: calc(var(--marquee-ratio) * 100%);
  display: flex;
  gap: var(--logo-gap);
  box-sizing: border-box;
  padding-inline-end: var(--logo-gap);
}

/* пауза при наведении/фокусе */
.track:hover .marquee,
.track:focus-within .marquee {
  animation-play-state: paused;
}

/* двигаем ровно на половину общей ленты */
@keyframes marquee-move {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}

/* карточка логотипа */
.tile {
  border-radius: 5px;
  position: relative;
  display: flex;
  flex: 0 0 calc(var(--logo-item-percent) - var(--logo-gap));
  aspect-ratio: 1;
  overflow: hidden;
  text-decoration: none;
  background: #1B1913;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image {
  width: 100%;
  height: 100%;
  padding: var(--logo-inner-padding);
  box-sizing: border-box;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tile:hover .image {
  transform: scale(1.1);
}

@media (max-width: 640px) {
  .projects-showcase {
    width: calc(100% + 32px);
    margin-inline: -16px;
  }

  .showcase-wrapper {
    padding-inline: 8px;
    box-sizing: border-box;
  }

  .section-title {
    text-align: left;
    font-size: 1.6rem;
  }

  .track {
    --logo-gap: 8px;
    --logo-inner-padding: 2px;
  }

  .tile:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    animation: none;
    transform: none;
  }
}
</style>
