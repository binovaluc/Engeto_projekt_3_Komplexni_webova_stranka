// Dark / light mode
const switcher = document.querySelector(".switch input");
const themeIcon = document.querySelector(".switcher-description i");

const darkMode = () => {
  themeIcon.classList.replace("fa-sun", "fa-moon");
};
const lightMode = () => {
  themeIcon.classList.replace("fa-moon", "fa-sun");
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
};

switcher.addEventListener("change", switchTheme);

//Menu
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");
const menuLinks = document.querySelectorAll("nav ul li a");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  });
});

// Kontrola shody hesel ve formuláři
const form = document.getElementById("signup-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const notPassword = document.getElementById("not-password");
const registerSuccess = document.getElementById("register-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  notPassword.style.display = "none";
  registerSuccess.style.display = "none";

  if (password.value !== confirmPassword.value) {
    notPassword.style.display = "block";
  } else {
    form.reset();
    registerSuccess.style.display = "block";
  }
});

// Scroll up tlačítko
const scrollUpBtn = document.getElementById("scroll-up-button");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
