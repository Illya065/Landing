const articlesBlock = document.querySelector(".articles__block");

const articlesArr = [
  {
    id: 1,
    img: "bg_photo_1",
    title: "Claritas Etiam Processus",
    sub: "Photography, Nature",
    condition: "active",
  },
  {
    id: 2,
    img: "bg_photo_2",
    title: "Quam Nutamus Farum",
    sub: "Graphic Design, Mock-Up",
    condition: "active",
  },
  {
    id: 3,
    img: "bg_photo_3",
    title: "Usus Legentis Videntur",
    sub: "Photography, Holiday",
    condition: "active",
  },
  {
    id: 4,
    img: "bg_photo_4",
    title: "Claritas Etiam Processus",
    sub: "Photography, Nature",
    condition: "active",
  },
  {
    id: 5,
    img: "bg_photo_5",
    title: "Quam Nutamus Farum",
    sub: "Graphic Design, Mock-Up",
    condition: "active",
  },
  {
    id: 6,
    img: "bg_photo_6",
    title: "Usus Legentis Videntur",
    sub: "Photography, Holiday",
    condition: "active",
  },
  {
    id: 7,
    img: "bg_photo_1",
    title: "Claritas Etiam Processus",
    sub: "Photography, Nature",
    condition: "hide",
  },
  {
    id: 8,
    img: "bg_photo_2",
    title: "Quam Nutamus Farum",
    sub: "Graphic Design, Mock-Up",
    condition: "hide",
  },
  {
    id: 9,
    img: "bg_photo_3",
    title: "Usus Legentis Videntur",
    sub: "Photography, Holiday",
    condition: "hide",
  },
  {
    id: 10,
    img: "bg_photo_4",
    title: "Claritas Etiam Processus",
    sub: "Photography, Nature",
    condition: "hide",
  },
  {
    id: 11,
    img: "bg_photo_5",
    title: "Quam Nutamus Farum",
    sub: "Graphic Design, Mock-Up",
    condition: "hide",
  },
  {
    id: 12,
    img: "bg_photo_6",
    title: "Usus Legentis Videntur",
    sub: "Photography, Holiday",
    condition: "hide",
  },
];

function publicArticles() {
  const item = document.createDocumentFragment();
  for (let key of articlesArr) {
    createArticles(key, item);
  }
  articlesBlock.appendChild(item);
}

function createArticles(key, item) {
  if (key.condition === "active") {
    const elem = document.createElement("div");
    elem.classList.add("articles__item");
    item.appendChild(elem);

    const img = document.createElement("div");
    img.classList.add("articles__item-img");
    img.style.background = `url('img/${key.img}.png') center / cover no-repeat`;
    elem.appendChild(img);

    const info = document.createElement("div");
    info.classList.add("articles__item-info");
    elem.appendChild(info);

    const title = document.createElement("div");
    title.classList.add("articles__item-title");
    info.appendChild(title);

    const titleText = document.createElement("p");
    titleText.textContent = key.title;
    title.appendChild(titleText);

    const subtitle = document.createElement("div");
    subtitle.classList.add("articles__item-subtitle");
    info.appendChild(subtitle);

    const subtitleText = document.createElement("p");
    subtitleText.textContent = key.sub;
    subtitle.appendChild(subtitleText);
  } else if (key.condition === "hide") {
    const elem = document.createElement("div");
    elem.classList.add("articles__item");
    elem.classList.add("d-none");
    elem.classList.add("unactive");
    item.appendChild(elem);

    const img = document.createElement("div");
    img.classList.add("articles__item-img");
    img.style.background = `url('img/${key.img}.png') center / cover no-repeat`;
    elem.appendChild(img);

    const info = document.createElement("div");
    info.classList.add("articles__item-info");
    elem.appendChild(info);

    const title = document.createElement("div");
    title.classList.add("articles__item-title");
    info.appendChild(title);

    const titleText = document.createElement("p");
    titleText.textContent = key.title;
    title.appendChild(titleText);

    const subtitle = document.createElement("div");
    subtitle.classList.add("articles__item-subtitle");
    info.appendChild(subtitle);

    const subtitleText = document.createElement("p");
    subtitleText.textContent = key.sub;
    subtitle.appendChild(subtitleText);
  }
}

export default publicArticles;
