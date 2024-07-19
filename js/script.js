document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const headerNav = document.getElementById("headerNav");

  menuIcon.addEventListener("click", function () {
    headerNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });
});
