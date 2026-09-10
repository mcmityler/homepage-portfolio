// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

// src/index.js
// import testImage from "./ramenTest.jpg";

// const image = document.createElement("img");
// image.src = testImage;

// document.body.appendChild(image);

// let hi = "hi";
// let hello = () => console.log("hey");
// hello();

const githubButton = document.querySelector(".github-btn");
const linkedInButton = document.querySelector(".linked-in-btn");
const itchioButton = document.querySelector(".itch-io-btn");
const battleshipGit = document.querySelector(".battleship-git");
const battleshipLink = document.querySelector(".battleship-link");
const weatherAppGit = document.querySelector(".weather-app-git");
const weatherAppLink = document.querySelector(".weather-app-link");

//ABOUT SECTION GENERAL LINKS / BUTTONS
githubButton.addEventListener("click", () => {
  window.open("https://github.com/mcmityler", "_blank");
});
linkedInButton.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/tyler-mcmillan-580603216/",
    "_blank",
  );
});
itchioButton.addEventListener("click", () => {
  window.open("https://mcmityler.itch.io/", "_blank");
});

//BATTLE SHIP LINKS / BUTTONS
battleshipGit.addEventListener("click", () => {
  window.open("https://github.com/mcmityler/battle-ship", "_blank");
});
battleshipLink.addEventListener("click", () => {
  window.open("https://mcmityler.github.io/battle-ship/", "_blank");
});
//WEATHER APP LINKS / BUTTONS
weatherAppGit.addEventListener("click", () => {
  window.open("https://github.com/mcmityler/weather-app/tree/main", "_blank");
});
weatherAppLink.addEventListener("click", () => {
  window.open("https://mcmityler.github.io/weather-app/", "_blank");
});
