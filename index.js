const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
// function click() {
//   console.log("hey");
// }
// btn.onclick(click);

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
