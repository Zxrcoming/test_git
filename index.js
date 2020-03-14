// some the about the performance of Magit.
// test Magit with git branch performance and play with it.
// this is master branch.
const navbarEl = document.querySelector(".navbar");
const headerEl = document.querySelector(".header-desc");

const burgerEl = document.querySelector(".burger");
const menusEl = document.querySelector(".menus");

window.addEventListener("load", () => {
  headerEl.style.transform = "translateY(200px)";
  headerEl.style.opacity = "1";
});

window.addEventListener("scroll", () => {
  let height = navbarEl.getBoundingClientRect().height;
  menusEl.style.display = "";
  if (window.pageYOffset - height > 600) {
    if (!navbarEl.classList.contains("sticky")) {
      navbarEl.classList.add("sticky");
    }
  } else {
    navbarEl.classList.remove("sticky");
  }
});
console.log(menusEl);
burgerEl.addEventListener("click", () => {
  if (menusEl.style.display === "") {
    menusEl.style.display = "block";
  } else {
    menusEl.style.display = "";
  }
});
