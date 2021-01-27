const headerSearch = document.querySelector(".header__search");
const headerForm = document.querySelector(".header__form");
const slider = document.querySelector(".slider");
const links = document.querySelector(".header__links-burger");

function clickSearch() {
  headerSearch.addEventListener("click", (e) => {
    headerForm.classList.toggle("d-none");
    if (!slider.classList.contains("d-none")) {
      slider.classList.add("d-none");
    } else if (links.classList.contains("d-none")) {
      slider.classList.remove("d-none");
    }
  });
}

export default clickSearch;
