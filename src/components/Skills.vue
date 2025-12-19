<script>
export default {
  name: 'Skills',
  data () { 
        return {
            skills: [
            "Adobe Illustrator",
            "Vue.js",
            "Графический дизайн",
            "Trello",
            "CSS",
            "Godot 4",
            "Адаптивная верстка",
            "Python",
            "Figma",
            "JavaScript",
            "CorelDraw",
            "Frontend",
            "Aseprite",
            "HTML",
            "Веб-дизайн",
            "UI/UX",
            "GDScript",
            "Adobe Photoshop"
            ]
        }
    }
}

</script>

<template>
    <section>
        <div class="skills-wrapper">
            <div class="skills-content">
                <h1>НАВЫКИ</h1>
                <div class="skills-container">
                    <span class="skill-tag" v-for="skill in skills">{{ skill }}</span>
                </div>
            </div>
        </div>
    </section>    
</template>

<style scoped>    
   
    .skills-wrapper{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
    }

    .skills-content{
        width: 100%;
        max-width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
    }
    h1 {
        font-family: 'OpenSansBold';
        color: white;
        font-size: 3.5rem;
        margin-top: 0;
    }

    .skills-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start; 
        gap: 10px;
        margin: 0;
    }

    .skill-tag {
        display: inline-block;
        background: rgba(93, 173, 220, 0.1);
        color: white;
        padding: 18px 32px;
        border-radius: 50px;
        font-family: 'OpenSansRegular';
        font-size: 1.4rem;
        transition: all 0.6s ease;
        white-space: nowrap;
        backdrop-filter: blur(2px);
        cursor: pointer;
    }

    .skill-tag:hover {
        background: rgb(26, 159, 255);
        transform:  scale(1.09);
    }

    /* Адаптивность для 640px */
    @media (max-width: 640px) {
        .skills-wrapper {
            padding: 15px;
            justify-content: flex-start; 
        }
        
        .skills-content {
            text-align: left; 
            max-width: 100%;
        }
        
        h1 {
            font-size: 2.2rem;
            margin-bottom: 25px;
            text-align: left; 
        }
        
        .skills-container {
            justify-content: flex-start; 
            margin: 0; 
            gap: 8px;
        }
        
        .skill-tag {
            padding: 12px 20px;
            font-size: 1.1rem;
        }

         .skill-tag:active {
            background: rgb(26, 159, 255);
            transform:  scale(1.09);
        }
    }

    
</style>