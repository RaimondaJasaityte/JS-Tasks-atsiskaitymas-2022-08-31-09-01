/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let pushing = 0;
const button = document.getElementById("btn__element");
const result = document.getElementById("btn__state");

button.onclick = function () {
  pushing++;
  result.innerHTML = pushing;
};