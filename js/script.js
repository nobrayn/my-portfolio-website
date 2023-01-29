const folioApp = {};

// burger menu



folioApp.mobileMenu = () => {
  folioApp.hamburger.classList.toggle("active");
  folioApp.navMenu.classList.toggle("active");
}

folioApp.init = () => {
  folioApp.hamburger = document.querySelector(".hamburger");
  folioApp.navMenu = document.querySelector(".navbarLinks");
  folioApp.hamburger.addEventListener("click", folioApp.mobileMenu);
  folioApp.mobileMenu();
}

folioApp.init();