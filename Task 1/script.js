/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let svarai = document.getElementById("svarai");
let gramai = document.getElementById("gramai");
let uncijos = document.getElementById("uncijos");
let form = document.querySelector("form");

form.addEventListener("submit", converter); 

function converter(e) {
    e.preventDefault()
    let inputVal = document.getElementById("search").value;
    let svaras = inputVal * 2.2046;
    let gramas = inputVal / 0.0010000;
    let uncija = inputVal * 35.274; 
    svarai.textContent = svaras;
    gramai.textContent = gramas;
    uncijos.textContent = uncija;
}