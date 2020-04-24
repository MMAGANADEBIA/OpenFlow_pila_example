var pila = [];

let pushButton = document.querySelector("#pushButton").addEventListener("click", () => { let numero = document.querySelector("#numero").value; pila.push(numero);
impresionPila=document.querySelector("#impresionPila"); impresionPila.innerHTML = "pila = " + pila;}); //Push

let unshiftButton = document.querySelector("#unshiftButton").addEventListener("click", () => {let unshiftNumber = document.querySelector("#unshiftNumber").value; pila.unshift(unshiftNumber);
let unshiftPila = document.querySelector("#unshiftPila"); unshiftPila.innerHTML= "Pila despues de aplicarle unshift = " + pila;}); //unshift

let popButton = document.querySelector("#popButton").addEventListener("click", () => {let popPila = document.querySelector("#popPila"); pila.pop();
popPila.innerHTML = "Fila despues de aplicarle pop = " + pila;}); //pop

let shiftButton = document.querySelector("#shiftButton").addEventListener("click", () => {let shiftPila = document.querySelector("#shiftPila"); pila.shift();
shiftPila.innerHTML = "Pila despues de aplicarle shift = " + pila;}); //shift

let sortButton = document.querySelector("#sortButton").addEventListener("click", () => {let sortPila = document.querySelector("#sortPila");let compareFunction = (a, b) => { return a - b; }; pila.sort(compareFunction);
sortPila.innerHTML="Pila de menor a mayor = " + pila;}); //sort

let sortIn = document.querySelector("#sortIn").addEventListener("click", () => {let sortPila = document.querySelector("#sortPila");let compareFunction2 = (a, b) => {return b - a;}; pila.sort(compareFunction2); //sort inverso
sortPila.innerHTML = "Pila de mayor a menor = " + pila;}); //sort inverso

let reverseButton = document.querySelector("#reverseButton").addEventListener("click", () => {let reversePila = document.querySelector("#reversePila"); pila.reverse(); //reverse
reversePila.innerHTML = "Pila despues de aplicarle reverse = " + pila;}); //reverse
