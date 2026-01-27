<script setup>
const smoothScroll = (event) => {
  const href = event.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;

  event.preventDefault();
  document.getElementById(href.slice(1))?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <footer class="vertical-menu">
    <div class="menu-content">
      <p class="menu-title">КОНТАКТЫ И ДРУГОЕ</p>

      <ul class="menu-list">
        <li>
          <a href="#about" class="menu-link" @click="smoothScroll">ОБО МНЕ</a>
        </li>
        <li>
          <a
            href="https://t.me/Ignidra"
            class="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            TELEGRAM
          </a>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ignidra0@gmail.com&su=Портфолио&body=Здравствуйте!"
            class="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GMAIL
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Zulu002"
            class="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </li>
        <li>
          <a
            href="https://pin.it/2EtxOo6aR"
            class="menu-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            PINTEREST
          </a>
        </li>
      </ul>

      <img
        src="../assets/logo.svg"
        alt="Логотип разработчика"
        class="brand-logo"
      />
    </div>
  </footer>
</template>

<style scoped>
.vertical-menu {
  width: 100%;
  padding: 40px 20px;
  text-align: left;
  font-family: "OpenSansBold";
  border-top: 1px solid rgba(220, 220, 220, 0.18);
  background: rgba(0, 0, 0, 0.1);
}

.menu-content {
  max-width: 900px;
  margin: 0 auto;
}

.menu-title {
  margin: 0 0 12px;
  font-size: 2.5rem;
  line-height: 1.05;
  color: #dcdcdc;
  letter-spacing: 0.04em;
}

.menu-list {
  display: grid;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-link {
  display: block;
  width: 100%;
  text-align: left;
  text-decoration: none;
  cursor: pointer;

  color: #dcdcdc;
  font-size: 2.5rem;
  line-height: 1.05;

  position: relative;
  padding: 4px 0 4px 18px;

  transition: color 0.18s ease, transform 0.18s ease;
}

.menu-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translateY(-50%);
  opacity: 0;
  background: #a5d3c6;
}

.menu-link:hover {
  color: #a5d3c6;
  transform: translateX(4px);
}

.menu-link:hover::before {
  opacity: 1;
}

/* ✅ маленький центрированный логотип */
.brand-logo {
  display: block;
  width: 110px;        /* ключевое изменение */
  height: auto;
  margin: 56px auto 0; /* центр + отступ сверху */
  opacity: 0.9;
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
    width: 90px;
    margin-top: 24px;
  }
}
</style>
