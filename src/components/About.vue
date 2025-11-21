<script setup>
const scrollToSection = (sectionId) => {
  const targetElement = document.getElementById(sectionId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<template>
    <div class="Container">
        <div class="developer-section">
            <img src="../assets/logo.svg" alt="Логотип">
            <h1>О РАЗРАБОТЧИКЕ</h1>
            <p>Меня зовут Гаджи Зулумханов. Я дизайнер с фокусом на графический и веб-дизайн, а также интересуюсь разработкой игр (геймдевом).</p>
            <p>С детства меня увлекал мир видеоигр, и со временем это увлечение переросло в желание понимать и создавать их самому. Это побудило меня развивать навыки дизайна: 
                в колледже я начал с создания логотипов, фирменного стиля и макетов для веб-сайтов.</p>
            <p>Сейчас я активно развиваюсь в области веб-разработки, углубленно изучая JavaScript 
                и фреймворки для фронтенда, чтобы создавать не только визуально привлекательные, но и 
                функциональные цифровые продукты.</p>
        </div>
        <hr>
    </div>
    <div class="ButtonBar">
        <button class="Button_Specifications" @click="scrollToSection('skills')">НАВЫКИ</button>
        <button class="Button_Specifications" @click="scrollToSection('projects')">ПРОЕКТЫ</button>
        <button class="Button_Specifications" @click="scrollToSection('graphics')">ГРАФИКА</button>
        <button class="Button_Specifications" @click="scrollToSection('layouts')">МАКЕТЫ</button>
        <button class="Button_Сontacts" @click="scrollToSection('contacts')">КОНТАКТЫ</button>
    </div>
</template>

<style scoped>
    .Container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15px;
    }
    
    img {
        width: 410px;
        margin-top: 15px;
        max-width: 100%;
        height: auto;
    }

    .developer-section {
        color: #FFFFFF;
        width: 1100px;
        max-width: 100%;
    }

    h1 {
        font-size: 45px;
        font-family: 'OpenSansBold';
        margin-top: 0px;
        margin-bottom: 20px;
    }

    p {
        margin-top: 0px;
        margin-bottom: 15px;
        font-family: 'OpenSansRegular';
        font-size: 22px;
        line-height: 1.4;
    }

    hr {
        width: 1100px;
        max-width: 100%;
        height: 5px;
        background: linear-gradient(to right, #66C0F4, #2161CD);
        border: none;
        margin-bottom: 10px;
    }

    .ButtonBar {
        display: flex;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
        padding: 0 15px;
    }

    .Button_Specifications,
    .Button_Сontacts {
        width: 214px;
        height: 60px;
        font-family: 'OpenSansBold';
        font-size: 20px;
        border-radius: 2px;
        border: none;
        transition: all 0.5s ease;
        cursor: pointer;
    }

    .Button_Specifications {
        background-color: #5daddc;
        color: white;
    }

    .Button_Specifications:hover {
        background-color: #85cdf8;
        color: white;
    }

    .Button_Сontacts {
        background-color: #699E46;
        color: white;
    }

    .Button_Сontacts:hover {
        background-color: #8ece61;
        color: white;
    }

    /* Средние мобильные */
    @media (max-width: 640px) {
        .ButtonBar {
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }
        
        .Button_Specifications,
        .Button_Сontacts {
            text-align: left;
            width: 100%;
            max-width: 480px;
            height: 50px;
        }
        
        img {
            width: 280px;
        }
        
        h1 {
            font-size: 28px;
        }
        
        p {
            text-align: justify;
            font-size: 16px;
        }

        .Button_Specifications:active {
            background-color: #85cdf8;
            color: white;
        }

        .Button_Сontacts:active {
            background-color: #8ece61;
            color: white;
        }
    }

</style>