document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".questions .text-2xl");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      answer.classList.toggle("hidden");
    });
  });
});
window.addEventListener("load", () => {
  setTimeout(() => {
    const aboutMe = document.querySelector(".about-me");
    aboutMe.classList.add("active");
  }, 1000);
});
window.addEventListener("load", () => {
  setTimeout(() => {
    const meSection = document.querySelector(".me");
    meSection.classList.add("active");
  }, 1000);
});
document.addEventListener("DOMContentLoaded", function () {
  const slideDiv = document.querySelector(".slide-left");
  slideDiv.classList.add("translate-x-0");
});
