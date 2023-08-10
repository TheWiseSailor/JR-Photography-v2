let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  setTimeout(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      const aboutMe = document.querySelector(".about-me");
      aboutMe.classList.add("active");
    } else {
      const meSection = document.querySelector(".me");
      meSection.classList.add("active");
    }

    lastScrollTop = scrollTop;
  }, 2000);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const meSection = document.querySelector(".me");
    meSection.classList.add("active");
  }, 3000);
});
