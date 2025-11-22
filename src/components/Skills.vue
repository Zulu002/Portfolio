<script>
export default {
  name: 'Skills'
}
</script>

<template>
    <div class="skills-wrapper">
        <div class="skills-content">
            <h1>Навыки</h1>
            <div class="skills-container">
                <span class="skill-tag">Веб-дизайн</span>
                <span class="skill-tag">Графический дизайн</span>
                <span class="skill-tag">Frontend</span>
                <span class="skill-tag">UI/UX</span>
                <span class="skill-tag">Адаптивная верстка</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">Adobe Photoshop</span>
                <span class="skill-tag">Illustrator</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">SASS/SCSS</span>
                <span class="skill-tag">Bootstrap</span>
                <span class="skill-tag">Tailwind CSS</span>
                <span class="skill-tag">Webpack</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">REST API</span>
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">MySQL</span>
            </div>
        </div>
    </div>
</template>

<style scoped>    
    .skills-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
    }

    .skills-content {
        text-align: center;
        width: 100%;
        max-width: 1300px;
    }

    h1 {
        font-family: 'OpenSansBold';
        color: white;
        font-size: 3.5rem;
        margin-top: 0;
    }

    .skills-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin: 0 auto;
    }

    .skill-tag {
        display: inline-block;
        background-color: #5daddc;
        color: white;
        padding: 18px 32px;
        border-radius: 3px;
        font-family: 'OpenSansRegular';
        font-size: 1.4rem;
        transition: all 0.4s ease;
        white-space: nowrap;
        backdrop-filter: blur(10px);
        cursor: pointer;
    }

    .skill-tag:hover {
        background: #81cffd;
        box-shadow: 0 12px 30px rgba(0,0,0,0.25);
        transform:  scale(1.08);
    }

    /* Адаптивность для 640px */
    @media (max-width: 640px) {
        .skills-wrapper {
            padding: 15px;
            justify-content: flex-start; /* Выравнивание по левому краю */
        }
        
        .skills-content {
            text-align: left; /* Текст по левому краю */
            max-width: 100%;
        }
        
        h1 {
            font-size: 2.2rem;
            margin-bottom: 25px;
            text-align: left; /* Заголовок по левому краю */
        }
        
        .skills-container {
            justify-content: flex-start; /* Элементы по левому краю */
            margin: 0; /* Убираем авто-отступы */
            gap: 8px;
        }
        
        .skill-tag {
            padding: 12px 20px;
            font-size: 1.1rem;
        }
    }

    
</style>