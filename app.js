const navLinks = document.querySelectorAll(".nav-link");
const opner = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-link-logo");
const menuCloser = document.querySelector(".closer");
opner.addEventListener("click", () => {
  menu.classList.add("show-menu");
  opner.classList.add("hide-toggle");
  menuCloser.classList.add("show-toggle");
});
menuCloser.addEventListener("click", () => {
  menu.classList.remove("show-menu");
  opner.classList.remove("hide-toggle");
  menuCloser.classList.remove("show-toggle");
});
navLinks.forEach(function (list) {
  const listBtn = list.querySelector(".list-btn");
  const svgBtn = listBtn.querySelector(".svg-btn");

  listBtn.addEventListener("click", function () {
    navLinks.forEach(function (li) {
      if (li !== list) {
        li.classList.remove("show-link-list");
      }
    });

    list.classList.toggle("show-link-list");
  });
});
