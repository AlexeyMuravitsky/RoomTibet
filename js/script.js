document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const headerNav = document.getElementById("headerNav");
  const navLinks = headerNav.querySelectorAll("a");

  menuIcon.addEventListener("click", () => {
    headerNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    headerNav.classList.toggle("open");
    menuIcon.classList.toggle("burger-active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      headerNav.classList.remove("active");
      document.body.classList.remove("no-scroll");
      headerNav.classList.remove("open");
      menuIcon.classList.remove("burger-active");

      const targetSection = document.querySelector(
        `[data-section="${link.getAttribute("href").substring(1)}"]`
      );

      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
