const loadButtonArticles = document.querySelector(".articles__btn");

const button = document.querySelector(".articles__btn>button");

function loadArticles() {
  const articlesArr = Array.from(document.querySelectorAll(".unactive"));

  loadButtonArticles.addEventListener("click", (e) => {
    articlesArr.forEach((elem) => {
      elem.classList.toggle("d-none");
    });
    button.classList.toggle("active");
    checkBtn();
  });
}

function checkBtn() {
  if (button.classList.contains("active")) {
    button.textContent = "Hide";
  } else {
    button.textContent = "Load More";
  }
}

export default loadArticles;
