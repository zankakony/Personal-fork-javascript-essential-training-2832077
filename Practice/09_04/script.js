/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const gridCell = document.querySelectorAll(".cell");
const pageBody = document.querySelector("body");

grid.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "#38CFFF";
});

grid.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "";
});

gridCell.forEach((cell) => {
  cell.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "#6413E8";
  });

  cell.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "#e6e6e6";
  });
});

pageBody.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "a":
      document.querySelector(".cell01").style.backgroundColor = "#DDFF0D";
      break;
    case "b":
      document.querySelector(".cell02").style.backgroundColor = "#DDFF0D";
      break;
    default:
      gridCell.style.backgroundColor = "#e6e6e6";
  }
});

// add identical switch with keyup and reversed color



