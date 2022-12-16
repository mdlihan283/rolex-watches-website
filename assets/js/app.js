// scrolling animation topBar
let topBar = document.getElementById("topBar");
window.onscroll = () => {
  let scroll = scrollY;
  if (scroll > 20) {
    topBar.classList.add("barActive");
  } else {
    topBar.classList.remove("barActive");
  }
};

// cart section
let addCart = document.getElementById("addCart");
let cartClose = document.getElementById("cartClose");
let cartSection = document.getElementById("cartSection");
addCart.addEventListener("click", () => {
  cartSection.classList.add("cartSecActive");
});

cartClose.addEventListener("click", () => {
  cartSection.classList.remove("cartSecActive");
});

// menu bar
let mobileBar = document.getElementById("mobileBar");
let menuClose = document.getElementById("menuBarClose");
let menu = document.querySelector(".menu");
mobileBar.addEventListener("click", () => {
  menu.classList.add("activeMenu");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("activeMenu");
});
