// const myInt = 5;
// const myFloat = 5.0;

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "Machine is running";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "Machine is stoped";
    }
}

const btncarro = document.querySelector('#carro');
const txtcarro = document.querySelector('#pcarro');

btncarro.addEventListener("click", updateBtnCarro);

function updateBtnCarro() {
    if (btncarro.textContent === "Ligar carro") {
        btncarro.textContent = "Desligar carro";
        txtcarro.textContent = "Carro está ligado";
} else {
    btncarro.textContent = "Ligar carro";
    txtcarro.textContent = "Carro está desligado";
}}