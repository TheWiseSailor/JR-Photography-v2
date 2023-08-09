document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".questions .text-2xl");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      answer.classList.toggle("hidden");
    });
  });
});
