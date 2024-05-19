// const cats = ["gato1", "gato2", "gato3", "gato4"];

// // for(const cat of cats) {
// //     console.log(cat);
// // }

// function toUpper(string) {
//     return string.toUpperCase();
// }

// const upperCats = cats.map(toUpper);

// console.log(upperCats);

function cDog(dog){
    return dog.startsWith("c");
}

const dogs = ["cachorro", "dog", "cachorro2", "dog3"];


const filtered = dogs.filter(cDog);

console.log(filtered);

const birds = ["bird1", "bird2", "ave1", "ave2", "aripua"];
const filtro = birds.filter((bird)=> bird .startsWith("a"));
console.log(filtro);


