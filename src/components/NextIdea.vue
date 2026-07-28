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
  grid-template-columns: clamp(84px, 11vw, 132px) 1fr;
  gap: clamp(16px, 3vw, 38px);
  align-items: center;
  min-height: 0;
  margin: 0;
  padding: 22px 31px;
  overflow: hidden;
  border-radius: 5px;
  background: #000000;
  box-sizing: border-box;
}

.quote-mark {
  align-self: start;
  transform: translateY(12px);
  color: var(--accent);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(112px, 14vw, 164px);
  font-weight: 700;
  line-height: 0.72;
  text-align: center;
  user-select: none;
}

blockquote {
  margin: 0;
}

blockquote p {
  max-width: 760px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(26px, 3.6vw, 48px);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 1.02;
}

.quote-author {
  display: block;
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.55);
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
    font-size: 88px;
    line-height: 0.58;
    transform: translateY(8px);
  }

  .quote-author {
    margin-top: 10px;
  }
}

</style>
