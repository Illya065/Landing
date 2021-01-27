const postsBlock = document.querySelector(".posts__block");

const postsArr = [
  {
    id: 1,
    img: "bg_post1",
    day: "30",
    month: "Sep.",
    title: "Lorem ipsum dolor sit amet",
    text:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.",
  },
  {
    id: 2,
    img: "bg_post2",
    day: "28",
    month: "Oct.",
    title: "Lorem ipsum dolor sit amet",
    text:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.",
  },
  {
    id: 3,
    img: "bg_post3",
    day: "01",
    month: "Dec.",
    title: "Lorem ipsum dolor sit amet",
    text:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.",
  },
];

function publicPosts() {
  const fragment = document.createDocumentFragment();

  for (let key of postsArr) {
    createPosts(key, fragment);
  }

  postsBlock.appendChild(fragment);

  console.log(fragment);
}

function createPosts(key, fragment) {
  const post = document.createElement("div");
  post.classList.add("posts__post");
  fragment.appendChild(post);

  const image = document.createElement("div");
  image.classList.add("posts__post-img");
  image.style.background = `url(../img/${key.img}.png) center / cover no-repeat`;
  post.appendChild(image);

  const date = document.createElement("div");
  date.classList.add("posts__post-date");
  image.appendChild(date);

  const day = document.createElement("div");
  day.classList.add("posts__date-day");
  day.textContent = key.day;
  date.appendChild(day);

  const month = document.createElement("div");
  month.classList.add("posts__date-month");
  month.textContent = key.month;
  date.appendChild(month);

  const info = document.createElement("div");
  info.classList.add("posts__post-info");
  post.appendChild(info);

  const title = document.createElement("div");
  title.classList.add("posts__info-title");
  title.textContent = key.title;
  info.appendChild(title);

  const text = document.createElement("div");
  text.classList.add("posts__info-text");
  text.textContent = key.text;
  info.appendChild(text);

  const link = document.createElement("div");
  link.classList.add("posts__info-link");
  info.appendChild(link);

  const linkText = document.createElement("a");
  linkText.textContent = "Read More";
  linkText.setAttribute("href", "#");
  link.appendChild(linkText);
}

export default publicPosts;
