const toggle = document.querySelector(".menu-bar");
const navLists = document.querySelector(".helloo");
const main = document.querySelector(".main");
let running = true;

toggle.addEventListener("click", function () {
  if (running) {
    navLists.classList.add("hello");
    main.classList.add("main", "hero-margin");
    running = false;
  } else {
    navLists.classList.remove("hello");
    main.classList.remove("hero-margin");
    running = true;
  }
});
