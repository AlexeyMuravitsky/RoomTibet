document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const headerNav = document.getElementById("headerNav");
  const navLinks = headerNav.querySelectorAll("a");

  menuIcon.addEventListener("click", function () {
    headerNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    headerNav.classList.toggle("open");
    menuIcon.classList.toggle("burger-active");
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      headerNav.classList.remove("active");
      document.body.classList.remove("no-scroll");
      headerNav.classList.remove("open");
      menuIcon.classList.remove("burger-active");
    });
  });
});
