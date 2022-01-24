const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav__mobile");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("nav__mobile--active");
});
