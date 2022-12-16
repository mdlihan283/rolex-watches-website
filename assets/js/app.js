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

// dark mode work
let root = document.querySelector(":root");
let rootStyle = getComputedStyle(root);
let white = rootStyle.getPropertyValue("--white");
let black = rootStyle.getPropertyValue("--black");
let grayBlack = rootStyle.getPropertyValue("--grayBlack");
let grayWhite = rootStyle.getPropertyValue("--grayWhite");
let btnColor = rootStyle.getPropertyValue("--btnColor");
let borderWhite = rootStyle.getPropertyValue("--borderWhite");
let borderBlack = rootStyle.getPropertyValue("--borderBlack");
let darkBlackW = rootStyle.getPropertyValue("--darkBlackW");
let darkBlackB = rootStyle.getPropertyValue("--darkBlackB");

let darkMood = document.getElementById("darkMood");

darkMood.addEventListener("click", () => {
  if (!localStorage.getItem("dark")) {
    localStorage.setItem("dark", "true");
    location.reload();
  } else {
    location.reload();
    localStorage.removeItem("dark");
  }

  // darkmood icon changing
  if (darkMood.classList.contains("fa-moon")) {
    darkMood.classList.remove("fa-moon");
    darkMood.classList.add("fa-sun");
  } else {
    darkMood.classList.add("fa-moon");
    darkMood.classList.remove("fa-sun");
  }
});

function darkMode() {
  if (localStorage.getItem("dark")) {
    root.style.setProperty("--grayBlack", "#ffffff");
    root.style.setProperty("--whiteFb", "#1F1F1F");
    root.style.setProperty("--black", white);
    root.style.setProperty("--btnColor", "#ffffff");
    root.style.setProperty("--borderWhite", borderBlack);
  } else {
    return false;
  }
}
darkMode();
