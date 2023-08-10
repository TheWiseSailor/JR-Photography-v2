/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

window.addEventListener("scroll", () => {
  const logos = document.querySelector(".transition-opacity");
  const triggerElement = document.querySelector(".me");
  const triggerPosition = triggerElement.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  if (triggerPosition < windowHeight) {
    logos.classList.add("opacity-100");
  }
});
