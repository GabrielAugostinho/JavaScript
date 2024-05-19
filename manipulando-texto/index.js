// const name = 'gabriel';
// const lasName = 'lindo'
// const greeting = `bem vindo ${name} ${lasName}`
// console.log(greeting);

const button = document.querySelector("button");

function greet(){
    const name = prompt('what is your name?');
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `hello, ${name}, nice to meet you!`;

}

button.addEventListener("click", greet);

