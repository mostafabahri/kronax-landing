const toggleNav = () =>
  document.querySelector("#mobile-nav").classList.toggle("hidden");

const navBtn = document.querySelector("#mobile-nav-btn");
navBtn.addEventListener("click", toggleNav);
navBtn.addEventListener("blur", toggleNav);
