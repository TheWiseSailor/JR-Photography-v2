document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".questions .text-2xl");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      answer.classList.toggle("hidden");
    });
  });
});

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    const aboutMe = document.querySelector(".about-me");
    aboutMe.classList.add("active");
  } else {
    const meSection = document.querySelector(".me");
    meSection.classList.add("active");
  }

  lastScrollTop = scrollTop;
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const meSection = document.querySelector(".me");
    meSection.classList.add("active");
  }, 3000);
});
