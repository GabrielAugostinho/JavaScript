// let shoppingDone = false;
// let childsAllowance;

// if(shoppingDone === true){
//     childsAllowance = 10;
// } else {
//     childsAllowance = 5;
// }

// const number = 10;
// if(number > 0) {
//     console.log("positivo")
// } else if(number < 0) {
//     console.log("negativo")
// } else {
//     console.log("zeo")
// }

const inputNumber = prompt("Digite o numero");
const number = parseInt(inputNumber);

const resultadoElemento = document.getElementById("resultado");

if(number > 0){
    resultadoElemento.textContent = "o numero é positivo"
} else if(number < 0){
    resultadoElemento.textContent = "numero negativo"
} else {
    resultadoElemento.textContent = "zero"
}
