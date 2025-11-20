import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { createElement, Plus } from "lucide";

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const box = [];
  console.log(box.length);

  console.log(box);
  const boxGrid = document.querySelector(".box-grid");

  console.log(boxGrid.children);

  for (let i = 250; i > box.length; i--) {
    const particle = createElement(Plus, {});
    boxGrid.append(particle);

    particle.classList.add("particle");

    particle.addEventListener("mousemove", () => {
      particle.style.color = "grey";

      setTimeout(() => {
        particle.style.color = "black";
      }, 500);
    });
  }
});
