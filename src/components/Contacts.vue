<template>
  <section>
    <div class="vertical-menu">
      <div class="menu-content">
        <p class="menu-title">КОНТАКТЫ И ДРУГОЕ</p>
        <ul class="menu-list">
          <li><a href="#about" class="menu-link" @click="smoothScroll">ОБО МНЕ</a></li>
          <li><a href="https://t.me/Ignidra" class="menu-link" target="_blank">TELEGRAM</a></li>
          <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=ignidra0@gmail.com&su=Портфолио&body=Здравствуйте!" class="menu-link" target="_blank">GMAIL</a></li>
          <li><a href="https://github.com/Zulu002" class="menu-link" target="_blank">GITHUB</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<style scoped>
.vertical-menu {
  font-family: 'OpenSansBold';
  padding: 40px 20px;
  width: 100%;
  min-height: 100;
  text-align: left;
}

.menu-content {
  min-height: 60vh;
  margin: 0 auto;
}

.menu-title {
  font-size: 2.5rem;
  color: white;
  margin: 0;
  padding: 0;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.menu-link {
  display: block;
  text-decoration: none;
  color: #ffffff;
  font-size: 2.5rem;
  font-family: 'OpenSansBold';
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  width: 100%;
}

.menu-link:hover {
  color: #66c0f4;
  padding-left: 10px;
}

.menu-link:last-child {
  border-bottom: none;
}

@media (max-width: 640px) {
  .vertical-menu {
    padding: 30px 20px;
  }
  
  .menu-title {
    font-size: 2rem;
  }
  
  .menu-link {
    font-size: 2rem; /* Увеличил для мобильных */
  }

  .menu-link:active {
    color: #66c0f4;
    padding-left: 10px;
  }

}

</style>