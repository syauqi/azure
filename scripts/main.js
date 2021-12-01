window.onscroll = function () {
  const nav = document.querySelector(".navbar");
  if (!nav) {
    return false;
  }
  if (window.pageYOffset > 40) {
    nav.classList.add("nav-on-scroll");
  } else {
    nav.classList.remove("nav-on-scroll");
  }
};
