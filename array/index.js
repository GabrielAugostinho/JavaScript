const shopping = ["bread", "milk", "bean", "rice", "meat"];
shopping[2] = "novoValor"
console.log(shopping[2]);

const arrayPlus = ["teste", "opa", ["pao", "top"]];
console.log(arrayPlus);


const birds = ["papagaio", "coelho", "ave"];
console.log(birds.indexOf("ss"));

const cities = ["limoeiro", "feira nova", "passira"];
console.log(cities);
cities.push("recife");
console.log(cities);
cities.push("lagoa do carro", "surubim");
console.log(cities)

const cars = ["fox", "strada", "uno", "s10"];
for (const car of cars) {
    console.log(car)
}

function double(number) {
    return number * 2;
}

const numbers = [2, 5, 10, 20];
const doubled = numbers.map(double)
console.log(doubled)


const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cidades = data.split(",");
console.log(cidades)
