import { applyLanguage, getInitialLanguage } from "./i18n/applyLanguage.js";

const card = document.querySelector(".brand-card");

requestAnimationFrame(() => {
  card?.animate(
    [
      { opacity: 0, transform: "translateY(16px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 620,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "both"
    }
  );
});

applyLanguage(getInitialLanguage());

document.querySelectorAll("[data-lang-button]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langButton);
  });
});
