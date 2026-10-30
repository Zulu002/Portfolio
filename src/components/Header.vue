<script setup>
import { computed } from "vue";

const props = defineProps({
  locale: {
    type: String,
    default: "en",
  },
});

const emit = defineEmits(["update:locale"]);

const labels = {
  en: {
    switchLabel: "Switch language",
  },
  ru: {
    switchLabel: "Переключить язык",
  },
};

const text = computed(() => labels[props.locale] ?? labels.en);

const setLocale = (value) => {
  emit("update:locale", value);
};
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <div class="language-switch" :aria-label="text.switchLabel">
        <button
          type="button"
          class="language-option"
          :class="{ active: locale === 'en' }"
          @click="setLocale('en')"
        >
          EN
        </button>
        <button
          type="button"
          class="language-option"
          :class="{ active: locale === 'ru' }"
          @click="setLocale('ru')"
        >
          RU
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10;
  width: 33px;
  box-sizing: border-box;
}

.header-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 4px;
  border-radius: 4px;
  background: #000000;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
}

.language-switch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.language-option {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  background: transparent;
  font-family: "Hammersmith One", "OpenSansBold", sans-serif;
  font-size: 20px;
  line-height: 1;
  transition: background-color var(--motion-duration) var(--motion-ease),
    color var(--motion-duration) var(--motion-ease),
    transform var(--motion-duration) var(--motion-ease);
}


.language-option {
  height: 25px;
  border: 0;
  cursor: pointer;
  font-size: 13px;
}

.language-option:hover,
.language-option.active,
.language-option:focus-visible {
  background: #3d3d3d;
  color: #ffffff;
}


.language-option:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

@media (max-width: 900px) {
  .site-header {
    top: 10px;
    right: 6px;
    width: 31px;
  }

  .header-inner {
    padding: 4px;
  }

  .language-option {
    width: 23px;
    border-radius: 4px;
  }


  .language-option {
    height: 23px;
    font-size: 12px;
  }
}
</style>
