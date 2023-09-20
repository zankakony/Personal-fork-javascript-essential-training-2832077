/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const box = {
  name: "Magic box",
  color: "yellow",
  material: "carton",
};

const addBox = (currentBox) => {
  const newSection = document.createElement("section");
  newSection.innerHTML = `
    <h1>${currentBox.name}</h1>
    <ul>
        <li id="boxName">Name: ${currentBox.name}</li>
        <li>Color: ${currentBox.color}</li>
        <li>Material: ${currentBox.material}</li>
    </ul>
    `;
  return newSection;
};

// changeBold();

const main = document.querySelector("main");
main.append(addBox(box));

// const changeBold = function () {
  const itemID = document.getElementById("boxName");
  itemID.style.fontWeight = "bold";
// };
