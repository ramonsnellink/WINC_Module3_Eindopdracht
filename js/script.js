//Select elements
const body = document.querySelector("body");

const menuContainer = document.querySelector(".menu__container");
const toggleButton = document.querySelector(".menu__togglebutton");
const homeMenuItem = document.querySelector(".menu__item--home");
const redMenuItem = document.querySelector(".menu__item--red");
const greenMenuItem = document.querySelector(".menu__item--green");
const blueMenuItem = document.querySelector(".menu__item--blue");
const yellowMenuItem = document.querySelector(".menu__item--yellow");

const toggleShowMenu = () => {
  menuContainer.classList.toggle("menu__container--show");
};

// Remove any old color classes
const removeClasses = () => {
  body.classList.remove("body--home");
  body.classList.remove("body--red");
  body.classList.remove("body--green");
  body.classList.remove("body--blue");
  body.classList.remove("body--yellow");
};

// Color change Functions

const changeBackgroundGrey = () => {
  removeClasses();
  body.classList.add("body--home");
  toggleShowMenu();
};

const changeBackgroundRed = () => {
  removeClasses();
  body.classList.add("body--red");
  toggleShowMenu();
};

const changeBackgroundGreen = () => {
  removeClasses();
  body.classList.add("body--green");
  toggleShowMenu();
};

const changeBackgroundBlue = () => {
  removeClasses();
  body.classList.add("body--blue");
  toggleShowMenu();
};

const changeBackgroundYellow = () => {
  removeClasses();
  body.classList.add("body--yellow");
  toggleShowMenu();
};
// Event listeners

toggleButton.addEventListener("click", toggleShowMenu);

homeMenuItem.addEventListener("click", changeBackgroundGrey);
redMenuItem.addEventListener("click", changeBackgroundRed);
greenMenuItem.addEventListener("click", changeBackgroundGreen);
blueMenuItem.addEventListener("click", changeBackgroundBlue);
yellowMenuItem.addEventListener("click", changeBackgroundYellow);
