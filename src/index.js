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
const libraryGit = document.querySelector(".library-git");
const libraryLink = document.querySelector(".library-link");
const moonMatesGit = document.querySelector(".moonmates-git");
const moonMatesLink = document.querySelector(".moonmates-link");
const rikochetLink = document.querySelector(".rikochet-link");
const splitSpoilsLink = document.querySelector(".split-spoils-link");

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
//LIBRARY APP LINKS / BUTTONS
libraryGit.addEventListener("click", () => {
  window.open("https://github.com/mcmityler/library-book-app", "_blank");
});
libraryLink.addEventListener("click", () => {
  window.open("https://mcmityler.github.io/library-book-app/", "_blank");
});
//MOON MATES APP LINKS / BUTTONS
moonMatesGit.addEventListener("click", () => {
  window.open("https://github.com/mcmityler/astrology-registration", "_blank");
});
moonMatesLink.addEventListener("click", () => {
  window.open("https://mcmityler.github.io/astrology-registration/", "_blank");
});
//RIKOCHET LINKS / BUTTONS
rikochetLink.addEventListener("click", () => {
  window.open("https://mcmityler.itch.io/rikochet-paid-version", "_blank");
});
//SPLIT THE SPOILS LINKS / BUTTONS
splitSpoilsLink.addEventListener("click", () => {
  window.open("https://mcmityler.itch.io/split-the-spoils", "_blank");
});
