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
    case "q":
      document.querySelector(".cell01").style.backgroundColor = "#DDFF0D";
      break;
    case "w":
      document.querySelector(".cell02").style.backgroundColor = "#DDFF0D";
      break;
    case "e":
      document.querySelector(".cell03").style.backgroundColor = "#DDFF0D";
      break;
    case "r":
      document.querySelector(".cell04").style.backgroundColor = "#DDFF0D";
      break;
    case "t":
      document.querySelector(".cell05").style.backgroundColor = "#DDFF0D";
      break;
    case "y":
      document.querySelector(".cell06").style.backgroundColor = "#DDFF0D";
      break;
    case "u":
      document.querySelector(".cell07").style.backgroundColor = "#DDFF0D";
      break;
    case "i":
      document.querySelector(".cell08").style.backgroundColor = "#DDFF0D";
      break;
    case "o":
      document.querySelector(".cell09").style.backgroundColor = "#DDFF0D";
      break;
    case "p":
      document.querySelector(".cell10").style.backgroundColor = "#DDFF0D";
      break;
    case "a":
      document.querySelector(".cell11").style.backgroundColor = "#DDFF0D";
      break;
    case "s":
      document.querySelector(".cell12").style.backgroundColor = "#DDFF0D";
      break;
    case "d":
      document.querySelector(".cell13").style.backgroundColor = "#DDFF0D";
      break;
    case "f":
      document.querySelector(".cell14").style.backgroundColor = "#DDFF0D";
      break;
    case "g":
      document.querySelector(".cell15").style.backgroundColor = "#DDFF0D";
      break;
    case "h":
      document.querySelector(".cell16").style.backgroundColor = "#DDFF0D";
      break;
    case "j":
      document.querySelector(".cell17").style.backgroundColor = "#DDFF0D";
      break;
    case "k":
      document.querySelector(".cell18").style.backgroundColor = "#DDFF0D";
      break;
    case "l":
      document.querySelector(".cell19").style.backgroundColor = "#DDFF0D";
      break;
    case "z":
      document.querySelector(".cell20").style.backgroundColor = "#DDFF0D";
      break;
    case "x":
      document.querySelector(".cell21").style.backgroundColor = "#DDFF0D";
      break;
    case "c":
      document.querySelector(".cell22").style.backgroundColor = "#DDFF0D";
      break;
    case "v":
      document.querySelector(".cell23").style.backgroundColor = "#DDFF0D";
      break;
    case "b":
      document.querySelector(".cell24").style.backgroundColor = "#DDFF0D";
      break;
    case "n":
      document.querySelector(".cell25").style.backgroundColor = "#DDFF0D";
      break;
    case "m":
      document.querySelector(".cell26").style.backgroundColor = "#DDFF0D";
      break;
    default:
      gridCell.style.backgroundColor = "#e6e6e6";
  }
});

// add identical switch with keyup and reversed color

pageBody.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "q":
      document.querySelector(".cell01").style.backgroundColor = "#e6e6e6";
      break;
    case "w":
      document.querySelector(".cell02").style.backgroundColor = "#e6e6e6";
      break;
    case "e":
      document.querySelector(".cell03").style.backgroundColor = "#e6e6e6";
      break;
    case "r":
      document.querySelector(".cell04").style.backgroundColor = "#e6e6e6";
      break;
    case "t":
      document.querySelector(".cell05").style.backgroundColor = "#e6e6e6";
      break;
    case "y":
      document.querySelector(".cell06").style.backgroundColor = "#e6e6e6";
      break;
    case "u":
      document.querySelector(".cell07").style.backgroundColor = "#e6e6e6";
      break;
    case "i":
      document.querySelector(".cell08").style.backgroundColor = "#e6e6e6";
      break;
    case "o":
      document.querySelector(".cell09").style.backgroundColor = "#e6e6e6";
      break;
    case "p":
      document.querySelector(".cell10").style.backgroundColor = "#e6e6e6";
      break;
    case "a":
      document.querySelector(".cell11").style.backgroundColor = "#e6e6e6";
      break;
    case "s":
      document.querySelector(".cell12").style.backgroundColor = "#e6e6e6";
      break;
    case "d":
      document.querySelector(".cell13").style.backgroundColor = "#e6e6e6";
      break;
    case "f":
      document.querySelector(".cell14").style.backgroundColor = "#e6e6e6";
      break;
    case "g":
      document.querySelector(".cell15").style.backgroundColor = "#e6e6e6";
      break;
    case "h":
      document.querySelector(".cell16").style.backgroundColor = "#e6e6e6";
      break;
    case "j":
      document.querySelector(".cell17").style.backgroundColor = "#e6e6e6";
      break;
    case "k":
      document.querySelector(".cell18").style.backgroundColor = "#e6e6e6";
      break;
    case "l":
      document.querySelector(".cell19").style.backgroundColor = "#e6e6e6";
      break;
    case "z":
      document.querySelector(".cell20").style.backgroundColor = "#e6e6e6";
      break;
    case "x":
      document.querySelector(".cell21").style.backgroundColor = "#e6e6e6";
      break;
    case "c":
      document.querySelector(".cell22").style.backgroundColor = "#e6e6e6";
      break;
    case "v":
      document.querySelector(".cell23").style.backgroundColor = "#e6e6e6";
      break;
    case "b":
      document.querySelector(".cell24").style.backgroundColor = "#e6e6e6";
      break;
    case "n":
      document.querySelector(".cell25").style.backgroundColor = "#e6e6e6";
      break;
    case "m":
      document.querySelector(".cell26").style.backgroundColor = "#e6e6e6";
      break;
    default:
      gridCell.style.backgroundColor = "#e6e6e6";
  }
});
