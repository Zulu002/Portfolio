<script setup>
import { ref } from "vue";

/**
 * hoverIdx = номер квадрата (1..9)
 * 0 = ничего не подсвечиваем
 */
const hoverIdx = ref(0);

const setHover = (idx) => {
  hoverIdx.value = idx;
};

const clearHover = () => {
  hoverIdx.value = 0;
};
</script>

<template>
  <footer class="contacts">
    <div class="contacts-wrapper">
      <article class="card">
        <div class="inner">
          <!-- Левая колонка: контакты -->
          <div class="links-col">
            <h3 class="name">КОНТАКТЫ</h3>

            <ul class="menu-list">
              <li>
                <a
                  href="https://t.me/Ignidra"
                  class="menu-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  @mouseenter="setHover(1)"
                  @mouseleave="clearHover"
                  @focus="setHover(1)"
                  @blur="clearHover"
                >
                  Telegram
                </a>
              </li>

              <li>
                <a
                  href="mailto:ignidra0@gmail.com?subject=Портфолио&body=Здравствуйте!"
                  class="menu-link"
                  @mouseenter="setHover(3)"
                  @mouseleave="clearHover"
                  @focus="setHover(3)"
                  @blur="clearHover"
                >
                  Email
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Zulu002"
                  class="menu-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  @mouseenter="setHover(5)"
                  @mouseleave="clearHover"
                  @focus="setHover(5)"
                  @blur="clearHover"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://pin.it/2EtxOo6aR"
                  class="menu-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  @mouseenter="setHover(9)"
                  @mouseleave="clearHover"
                  @focus="setHover(9)"
                  @blur="clearHover"
                >
                  Pinterest
                </a>
              </li>
            </ul>

            <p class="footer-meta">© 2026 by ignidra</p>
          </div>

          <!-- Правая колонка: квадраты -->
          <div class="squares-col" aria-hidden="true">
            <div class="squares" :data-active="hoverIdx">
              <span class="sq"></span>
              <span class="sq"></span>
              <span class="sq"></span>
              <span class="sq"></span>
              <span class="sq"></span>
              <span class="sq"></span>
              <span class="sq"></span>
              <span class="sq"></span>
              <span class="sq"></span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </footer>
</template>

<style scoped>
.contacts {
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  font-family: "OpenSansRegular";
}

.contacts-wrapper {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
}

.card {
  width: 100%;
  border-radius: 5px;
  padding: 26px 28px 22px;
  background: #a5d3c6;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
}

.inner {
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 32px;
  align-items: center;
}

/* Левая часть */
.name {
  margin: 0 0 12px;
  color: #000;
  font-size: 1.6rem;
  font-family: "OpenSansBold";
}

.menu-list {
  display: grid;
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
}

.menu-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.78);
  font-size: 1rem;
  line-height: 1.25;
  font-family: "OpenSansBold";

  transform: translateX(0);
  transition: transform 0.15s ease, color 0.15s ease;
}

.menu-link:hover {
  transform: translateX(6px);
  color: rgba(0, 0, 0, 0.92);
}

.menu-link:focus-visible {
  outline: 2px solid rgba(0, 0, 0, 0.45);
  outline-offset: 3px;
  border-radius: 6px;
}

.footer-meta {
  margin: 0;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: 0.02em;
}

/* Правая часть: квадраты */
.squares-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.squares {
  display: grid;
  grid-template-columns: repeat(3, 14px);
  grid-template-rows: repeat(3, 14px);
  gap: 6px;
}

.sq {
  width: 14px;
  height: 14px;
  border: 1px solid rgba(0, 0, 0, 0.35);
  background: transparent;
  transition: background-color 0.22s ease, border-color 0.22s ease;
}

/* ===== Подсветка: выбираем квадрат по data-active ===== */
/* 1..9 — какой квадрат залить */
.squares[data-active="1"] .sq:nth-child(1),
.squares[data-active="2"] .sq:nth-child(2),
.squares[data-active="3"] .sq:nth-child(3),
.squares[data-active="4"] .sq:nth-child(4),
.squares[data-active="5"] .sq:nth-child(5),
.squares[data-active="6"] .sq:nth-child(6),
.squares[data-active="7"] .sq:nth-child(7),
.squares[data-active="8"] .sq:nth-child(8),
.squares[data-active="9"] .sq:nth-child(9) {
  background: #000;
  border-color: #000;
}

/* можно добавить легкие “соседи” для глубины */
.squares[data-active="1"] .sq:nth-child(2),
.squares[data-active="1"] .sq:nth-child(4),
.squares[data-active="3"] .sq:nth-child(2),
.squares[data-active="3"] .sq:nth-child(6),
.squares[data-active="5"] .sq:nth-child(2),
.squares[data-active="5"] .sq:nth-child(8),
.squares[data-active="9"] .sq:nth-child(6),
.squares[data-active="9"] .sq:nth-child(8) {
  background: rgba(0, 0, 0, 0.18);
}

@media (max-width: 720px) {
  .inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .squares-col {
    justify-content: flex-start;
  }
}
</style>
