<script setup>
import { computed, ref } from "vue";


const active = ref([0, 0, 0]);

const setHover = (a1, a2, a3) => {
  active.value = [a1, a2, a3];
};

const clearHover = () => {
  active.value = [0, 0, 0];
};


const getNeighbors = (idx) => {
  if (!idx) return { activeIdx: 0, neighbors: new Set() };

  const r = Math.floor((idx - 1) / 3);
  const c = (idx - 1) % 3;

  const neigh = [];

  if (r - 1 >= 0) neigh.push((r - 1) * 3 + c + 1);
  if (r + 1 <= 2) neigh.push((r + 1) * 3 + c + 1);

  if (c - 1 >= 0) neigh.push(r * 3 + (c - 1) + 1);
  if (c + 1 <= 2) neigh.push(r * 3 + (c + 1) + 1);

  return { activeIdx: idx, neighbors: new Set(neigh) };
};

const sectionState = computed(() => active.value.map((idx) => getNeighbors(idx)));
</script>

<template>
  <footer class="contacts">
    <div class="contacts-wrapper">
      <article class="card">
        <div class="inner">
          <div class="links-col">
            <h3 class="name">КОНТАКТЫ</h3>

            <ul class="menu-list">
              <li>
                <a
                  href="https://t.me/Ignidra"
                  class="menu-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  @mouseenter="setHover(1, 5, 9)"
                  @mouseleave="clearHover"
                  @focus="setHover(1, 5, 9)"
                  @blur="clearHover"
                >
                  Telegram
                </a>
              </li>

              <li>
                <a
                  href="mailto:ignidra0@gmail.com?subject=%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!"
                  class="menu-link"
                  @mouseenter="setHover(3, 6, 7)"
                  @mouseleave="clearHover"
                  @focus="setHover(3, 6, 7)"
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
                  @mouseenter="setHover(2, 4, 8)"
                  @mouseleave="clearHover"
                  @focus="setHover(2, 4, 8)"
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
                  @mouseenter="setHover(9, 1, 5)"
                  @mouseleave="clearHover"
                  @focus="setHover(9, 1, 5)"
                  @blur="clearHover"
                >
                  Pinterest
                </a>
              </li>
            </ul>

            <p class="footer-meta">© 2026 by ignidra</p>
          </div>

          
          <div class="squares-col" aria-hidden="true">
            <div class="squares-stack">
              <div v-for="(st, i) in sectionState" :key="i" class="squares">
                <span
                  v-for="n in 9"
                  :key="n"
                  class="sq"
                  :class="{
                    isActive: n === st.activeIdx,
                    isNeighbor: st.neighbors.has(n),
                  }"
                ></span>
              </div>
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
  max-width: var(--content-width);
  margin: 0 auto;
  box-sizing: border-box;
}

.card {
  width: 100%;
  border-radius: 5px;
  padding: 26px 28px 22px;
  background: #59B994;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
}

.inner {
  display: grid;
  grid-template-columns: 1fr auto; 
  gap: 32px;
  align-items: center;
}


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
  transform: translateX(10px);
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


.squares-col {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.squares-stack {
  display: flex;
  gap: 10px;
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


.sq.isNeighbor {
  background: rgba(0, 0, 0, 0.18);
  border-color: rgba(0, 0, 0, 0.28);
}


.sq.isActive {
  background: #000;
  border-color: #000;
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
