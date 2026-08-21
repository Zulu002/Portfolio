<script setup>
import { computed } from "vue";

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
});

const content = {
  en: {
    label: "Quote",
  },
  ru: {
    label: "Цитата",
  },
};

const quotes = {
  en: [
    {
      quote: "Not all those who wander are lost.",
      author: "J. R. R. Tolkien",
    },
    {
      quote: "Courage is found in unlikely places.",
      author: "J. R. R. Tolkien",
    },
    {
      quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      author: "Albert Einstein",
    },
    {
      quote: "Mistakes are also important to me. I don't cross them out of my life or memory.",
      author: "Geralt of Rivia",
    },
    {
      quote: "Even the smallest person can change the course of the future.",
      author: "J. R. R. Tolkien",
    },
    {
      quote: "Eyes up, Guardian.",
      author: "Ghost, Destiny",
    },
  ],
  ru: [
    {
      quote: "Не каждый, кто странствует, потерян.",
      author: "Дж. Р. Р. Толкин",
    },
    {
      quote: "Мужество обнаруживается в самых неожиданных местах.",
      author: "Дж. Р. Р. Толкин",
    },
    {
      quote: "Жизнь — как езда на велосипеде. Чтобы сохранить равновесие, нужно двигаться.",
      author: "Альберт Эйнштейн",
    },
    {
      quote: "Ошибки для меня тоже важны. Я не вычёркиваю их из жизни или памяти.",
      author: "Геральт из Ривии",
    },
    {
      quote: "Даже самый маленький человек способен изменить ход будущего.",
      author: "Дж. Р. Р. Толкин",
    },
    {
      quote: "Выше нос, Страж.",
      author: "Призрак, Destiny",
    },
  ],
};

const selectedQuoteIndex = Math.floor(Math.random() * quotes.en.length);

const text = computed(() => {
  const locale = quotes[props.locale] ? props.locale : "en";

  return {
    ...content[locale],
    ...quotes[locale][selectedQuoteIndex],
  };
});
</script>

<template>
  <section class="next-idea" :aria-label="text.label">
    <figure class="quote-card">
      <span class="quote-mark" aria-hidden="true">“</span>

      <div class="quote-copy">
        <blockquote>
          <p>{{ text.quote }}</p>
        </blockquote>
        <div class="quote-divider" aria-hidden="true"></div>
        <cite class="quote-author">{{ text.author }}</cite>
      </div>
    </figure>

  </section>
</template>

<style scoped>
.next-idea {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  box-sizing: border-box;
  font-family: "OpenSansBold", sans-serif;
}

.quote-card {
  display: grid;
  width: 100%;
  grid-template-columns: clamp(64px, 8vw, 96px) minmax(0, 1fr);
  gap: clamp(18px, 2.4vw, 30px);
  align-items: center;
  min-height: 0;
  margin: 0;
  padding: 30px 31px;
  overflow: hidden;
  border-radius: 5px;
  background: #000000;
  box-sizing: border-box;
}

.quote-mark {
  align-self: start;
  transform: translateY(4px);
  color: var(--accent);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(88px, 10vw, 120px);
  font-weight: 700;
  line-height: 0.68;
  text-align: left;
  user-select: none;
}

blockquote {
  margin: 0;
}

blockquote p {
  max-width: 1040px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(25px, 3vw, 42px);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 1.08;
}

.quote-divider {
  width: 100%;
  height: 1px;
  margin: 18px 0 12px;
  background: rgba(var(--accent-rgb), 0.42);
}

.quote-author {
  display: block;
  margin: 0;
  color: var(--accent);
  font-family: "OpenSansRegular", sans-serif;
  font-size: 16px;
  font-style: normal;
}

@media (max-width: 640px) {
  .quote-card {
    grid-template-columns: 1fr;
    gap: 2px;
    min-height: 0;
    padding: 20px 22px;
  }

  .quote-mark {
    justify-self: start;
    font-size: 76px;
    line-height: 0.58;
    transform: translateY(4px);
  }

  .quote-divider {
    margin-top: 16px;
  }
}

</style>
