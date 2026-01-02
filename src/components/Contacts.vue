<template>
  <footer class="vertical-menu">
    <div class="menu-content">
      <p class="menu-title">КОНТАКТЫ И ДРУГОЕ</p>

      <ul class="menu-list">
        <li>
          <a href="#about" class="menu-link" @click="smoothScroll">ОБО МНЕ</a>
        </li>
        <li>
          <a href="https://t.me/Ignidra" class="menu-link" target="_blank" rel="noopener">
            TELEGRAM
          </a>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ignidra0@gmail.com&su=Портфолио&body=Здравствуйте!"
            class="menu-link"
            target="_blank"
            rel="noopener"
          >
            GMAIL
          </a>
        </li>
        <li>
          <a href="https://github.com/Zulu002" class="menu-link" target="_blank" rel="noopener">
            GITHUB
          </a>
        </li>
        <li>
          <a href="https://pin.it/2EtxOo6aR" class="menu-link" target="_blank" rel="noopener">
            PINTEREST
          </a>
        </li>
      </ul>

      <img src="../assets/logo.svg" alt="Логотип разработчика" class="brand-logo" />
    </div>
  </footer>
</template>

<script setup>
const smoothScroll = (event) => {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const targetId = href.slice(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>

<style scoped>
.vertical-menu {
  font-family: "OpenSansBold";
  width: 100%;
  padding: 40px 20px;
  text-align: left;

  border-top: 1px solid rgba(220, 220, 220, 0.18);
  background: rgba(0, 0, 0, 0.1);
}

.menu-content {
  max-width: 900px;
  margin: 0 auto;
}

/* Заголовок — равен пунктам, не меньше */
.menu-title {
  margin: 0 0 12px;
  font-size: 2.5rem;
  line-height: 1.05;
  color: #dcdcdc;
  letter-spacing: 0.04em;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  gap: 8px;
}

.menu-link {
  display: block;
  text-decoration: none;
  color: #dcdcdc;
  font-size: 2.5rem;
  line-height: 1.05;

  cursor: pointer;
  width: 100%;
  text-align: left;

  /* место под квадратик + стартовая позиция */
  padding: 4px 0 4px 18px;
  position: relative;

  /* живость */
  transition: color 0.18s ease, transform 0.18s ease;
}

/* квадратик-курсор */
.menu-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translateY(-50%);
  opacity: 0;
  background: #ded0a1;
}

/* ✅ мягкий сдвиг вправо + цвет */
.menu-link:hover {
  color: #ded0a1;
  transform: translateX(4px); /* ВАЖНО: маленькое значение */
}

.menu-link:hover::before {
  opacity: 1;
}

.menu-link:focus-visible {
  outline: 2px solid rgba(222, 208, 161, 0.75);
  outline-offset: 4px;
}

/* логотип */
.brand-logo {
  width: 400px;
  max-width: 80%;
  margin-top: 18px;
  display: block;
  opacity: 0.95;
}

@media (max-width: 640px) {
  .vertical-menu {
    padding: 30px 20px;
  }

  .menu-title,
  .menu-link {
    font-size: 2rem;
  }

  .brand-logo {
    width: 75%;
  }
}
</style>
