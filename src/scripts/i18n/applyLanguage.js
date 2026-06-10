import { translations } from "../data/translations.js";

const DEFAULT_LANGUAGE = "en";
const STORAGE_KEY = "pumplab-language";

export function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(STORAGE_KEY);

  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith("ru")) {
    return "ru";
  }

  if (
    browserLanguage.startsWith("sr") ||
    browserLanguage.startsWith("me") ||
    browserLanguage.startsWith("bs") ||
    browserLanguage.startsWith("hr")
  ) {
    return "me";
  }

  return DEFAULT_LANGUAGE;
}

export function applyLanguage(language) {
  const dictionary = translations[language] ?? translations[DEFAULT_LANGUAGE];

  document.documentElement.lang = dictionary.htmlLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;

    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langButton === language);
  });

  localStorage.setItem(STORAGE_KEY, language);
}
