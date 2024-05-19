const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () => {
    const name = prompt('What is your name?');
    alert (`Hello ${name}, nice to see you!`);
    headingA.textContent = `Wellcome, ${name}!`;
}

let myName = "Gabriel";
let myAge = 23;

let myNameArray = ["Gabriel", 23, true, ["a", "b", "c"]];

let dog = {name: "rex", breed: 5};

const birds = {especies: "Passeriformes"};