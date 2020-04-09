document.querySelector("#mobile-nav-btn").addEventListener("click", () => {
  // toggle menu div
  document.querySelector("#mobile-nav").classList.toggle("hidden");
  // toggle menu icon
  document.querySelector(['[data-js="open-icon"]']).classList.toggle("hidden");
  document.querySelector(['[data-js="close-icon"]']).classList.toggle("hidden");
});
