<script>
export default {
  props: {
    language: {
      type: String,
      default: "ru",
    },
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Invoice Calculator",
          description:
            "A web application that simplifies calculations when filling out physical invoices.",
          stack: ["HTML5", "CSS3", "JavaScript", "illustrator"],
          link: "https://zulu002.github.io/invoice/",
          logo: "https://raw.githubusercontent.com/Zulu002/invoice/main/img/icon.svg",
        },
      ],
    };
  },
  computed: {
    localizedProjects() {
      return this.projects.map((project) => ({
        ...project,
        title: project.title[this.language] ?? project.title.ru,
        description: project.description[this.language] ?? project.description.ru,
      }));
    },
    heading() {
      return this.language === "en" ? "PROJECTS" : "ПРОЕКТЫ";
    },
    ctaLabel() {
      return this.language === "en" ? "View project" : "Посмотреть проект";
    },
  },
};
</script>

<template>
  <section class="projects">
    <div class="projects-wrapper">
      <h1 class="title">PROJECTS</h1>

      <div class="cards">
        <article
          v-for="project in localizedProjects"
          :key="project.id"
          class="card"
        >
          <header class="card-header">
            <img :src="project.logo" :alt="project.title" class="logo" />
            <h3 class="name">{{ project.title }}</h3>
          </header>

          <p class="description">{{ project.description }}</p>

          <div class="stack">
            <span v-for="tech in project.stack" :key="tech" class="stack-item">
              {{ tech }}
            </span>
          </div>

          <a
            :href="project.link"
            class="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 40px 20px;
  font-family: "OpenSansRegular";
}

.projects-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.title {
  margin-bottom: 30px;
  color: #EEE6DB;
  font-size: 2.5rem;
  font-family: "OpenSansBold";
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: #dcdcdc;
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.name {
  margin: 0;
  color: #000;
  font-size: 1.4rem;
  font-family: "OpenSansBold";
}

.description {
  margin-bottom: 16px;
  color: #4c4c4c;
  font-size: 0.95rem;
  line-height: 1.5;
  flex-grow: 1;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.stack-item {
  padding: 6px 10px;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.12);
  color: #2b2b2b;
  font-size: 0.8rem;
  font-family: "OpenSansBold";
  user-select: none;
}

.btn {
  padding: 12px 24px;
  background: #000;
  color: #dcdcdc;
  text-decoration: none;
  text-align: center;
  font-family: "OpenSansBold";
  box-sizing: border-box;
  border: 1px solid transparent;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.btn:hover {
  background: #dcdcdc;
  color: #000;
  border-color: #000;
}

@media (max-width: 640px) {
  .title {
    font-size: 2rem;
  }

  .card {
    padding: 20px;
  }
}
</style>
