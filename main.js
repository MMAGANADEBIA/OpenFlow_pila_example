var pila = [];

let data = () => { let numero = document.querySelector("#numero").value; add(numero); } //Push
let add = (numero) => { pila.push(numero); impresion(pila); }
let impresion = (pila) => { let impresionPila = document.querySelector("#impresionPila"); impresionPila.innerHTML = "pila = " + pila; } //push

let data2 = () => { let unshiftNumber = document.querySelector("#unshiftNumber").value; impresionUnshift(unshiftNumber); } //unshift
impresionUnshift = (unshiftNumber) =>{ pila.unshift(unshiftNumber); let unshiftPila = document.querySelector("#unshiftPila");
  unshiftPila.innerHTML= "Pila despues de aplicarle unshift = " + pila; } //unshift

let popPila = () => {let popPila = document.querySelector("#popPila"); pila.pop(); //pop
    popPila.innerHTML = "Fila despues de aplicarle pop = " + pila;} //pop

let shiftPila = () => { let shiftPila = document.querySelector("#shiftPila"); pila.shift(); //shift
      shiftPila.innerHTML = "Pila despues de aplicarle shift = " + pila;}//shift

let sortPila = () => { let sortPila = document.querySelector("#sortPila"); pila.sort(compareFunction); //sort
      sortPila.innerHTML="Pila de menor a mayor = " + pila;}//sort
      compareFunction = (a, b) => { return a - b; }//funcion de comparacion para numeros sort

let sortPila2 = () => {let sortPila = document.querySelector("#sortPila"); pila.sort(compareFunction2); //sort inverso
      sortPila.innerHTML = "Pila de mayor a menor = " + pila;} //sort inverso
      compareFunction2 = (a, b) => {return b - a;} //funcion de comparacion sort inverso para numeros

let reversePila = () => {let reversePila = document.querySelector("#reversePila"); pila.reverse(); //reverse
        reversePila.innerHTML = "Pila despues de aplicarle reverse = " + pila;} //reverse

let pushButton = document.querySelector("#pushButton").addEventListener("click", data); //Bloque de declaracion de botones
let unshiftButton = document.querySelector("#unshiftButton").addEventListener("click", data2);
let popButton = document.querySelector("#popButton").addEventListener("click", popPila);
let shiftButton = document.querySelector("#shiftButton").addEventListener("click", shiftPila);
let sortButton = document.querySelector("#sortButton").addEventListener("click", sortPila);
let sortIn = document.querySelector("#sortIn").addEventListener("click", sortPila2);
let reverseButton = document.querySelector("#reverseButton").addEventListener("click", reversePila); //bloque de declaracion de variables
