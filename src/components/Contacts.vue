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

      <img src="../assets/logo.svg" alt="Логотип разработчика" class="brand-logo" />
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
  background: #ded0a1;
}

.menu-link:hover {
  color: #ded0a1;
  transform: translateX(4px);
}

.menu-link:hover::before {
  opacity: 1;
}

.menu-link:focus-visible {
  outline: 2px solid rgba(222, 208, 161, 0.75);
  outline-offset: 4px;
}

.brand-logo {
  display: block;
  width: 400px;
  max-width: 80%;
  margin-top: 18px;
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
