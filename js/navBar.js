const toggle = document.querySelector(".menu-bar");
const navLists = document.querySelector(".helloo");
const hero = document.querySelector(".hero");
let running = true;

toggle.addEventListener("click", function () {
  if (running) {
    navLists.classList.add("hello");
    hero.classList.add("hero", "hero-margin");
    running = false;
  } else {
    navLists.classList.remove("hello");
    hero.classList.remove("hero-margin");
    running = true;
  }
});
