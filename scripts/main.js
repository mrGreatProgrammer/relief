const burgerBtn = document.querySelector(".burger--btn");
const navList = document.querySelector(".nav__list");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-opened");
  navList.classList.toggle("nav__list-opened");
});
