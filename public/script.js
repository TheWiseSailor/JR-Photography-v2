let lastScrollTop = 0;

document.addEventListener("scroll", () => {
  setTimeout(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      const aboutMe = document.querySelector(".about-me");
      aboutMe.classList.add("active");
    } else {
      const meSection = document.querySelector(".me");
      meSection.classList.add("active");
    }

    // lastScrollTop = scrollTop;
  }, 2000);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const meSection = document.querySelector(".me");
    meSection.classList.add("active");
  }, 3000);
});

//contact

document.addEventListener("scroll", () => {
  setTimeout(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const aboutMe = document.querySelector(".about-me");
    const meSection = document.querySelector(".me");
    const contactsSection = document.querySelector(".contacts");

    if (scrollTop > lastScrollTop) {
      aboutMe.classList.add("active");
      meSection.classList.remove("active");
    } else {
      meSection.classList.add("active");
      aboutMe.classList.remove("active");
    }

    // Check if aboutMe section is in view
    const aboutMeTop = aboutMe.offsetTop;
    if (aboutMeTop - scrollTop < window.innerHeight) {
      contactsSection.classList.add("active");
    } else {
      contactsSection.classList.remove("active");
    }

    lastScrollTop = scrollTop;
  }, 12000);
});
