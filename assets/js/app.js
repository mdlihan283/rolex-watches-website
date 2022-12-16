let topBar = document.getElementById("topBar");
window.onscroll = () => {
  let scroll = scrollY;
  if (scroll > 20) {
    topBar.classList.add("barActive");
  } else {
    topBar.classList.remove("barActive");
  }
};
