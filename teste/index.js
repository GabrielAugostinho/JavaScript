const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather(){
    const choice = select.value;

    if(choice === "sunny") {
        para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    } else if(choice === "rainy") {
        para.textContent =
        "vai chover.";
    } else if(choice === "snowing") {
        para.textContent =
        "vai nevar";
    } else if(choice === "overcast"){
        para.textContent =
        "chuva ensolarada";
    } else{
        para.textContent = ""
    }
}


