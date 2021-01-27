const burger = document.querySelector(".header__burger");
const links = document.querySelector(".header__links-burger");
const headLinks = document.querySelector(".header__links");
const slider = document.querySelector(".slider");
const headerForm = document.querySelector(".header__form");

function clickBurger() {
  burger.addEventListener("click", (e) => {
    links.classList.toggle("d-none");
    headLinks.classList.toggle("d-none");
    if (!slider.classList.contains("d-none")) {
      slider.classList.add("d-none");
    } else if (headerForm.classList.contains("d-none")) {
      slider.classList.remove("d-none");
    }
  });
}

export default clickBurger;
