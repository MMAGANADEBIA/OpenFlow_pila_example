let pushButton = document.querySelector("#pushButton").addEventListener("click", data);

var pila = [];

function data(){ let numero = document.querySelector("#numero").value; add(numero); }

function add(numero){
  pila.push(numero);
  impresion(pila);
}

function impresion(pila){
  let impresionPila = document.querySelector("#impresionPila");
  impresionPila.innerHTML = "pila = " + pila;
}

let popButton = document.querySelector("#popButton").addEventListener("click", popPila);

function popPila(){
  let popPila = document.querySelector("#popPila");
  pila.pop();
  popPila.innerHTML = "Fila despues de aplicarle pop = " + pila;
}

let shiftButton = document.querySelector("#shiftButton").addEventListener("click", shiftPila);

function shiftPila(){
  let shiftPila = document.querySelector("#shiftPila");
  pila.shift();
  shiftPila.innerHTML = "Pila despues de aplicarle shift = " + pila;
}

let sortButton = document.querySelector("#sortButton").addEventListener("click", sortPila);

function sortPila(){
  let sortPila = document.querySelector("#sortPila");
  pila.sort(compareFunction);
  sortPila.innerHTML="Pila de menor a mayor = " + pila;
}

function compareFunction(a, b){
  return a - b;
}

let sortIn = document.querySelector("#sortIn").addEventListener("click", sortPila2);

function sortPila2(){
  let sortPila = document.querySelector("#sortPila");
  pila.sort(compareFunction2);
  sortPila.innerHTML = "Pila de mayor a menor = " + pila;
}

function compareFunction2(a, b){
  return b - a;
}

let unshiftButton = document.querySelector("#unshiftButton").addEventListener("click", data2);

function data2(){
  let unshiftNumber = document.querySelector("#unshiftNumber").value;
  impresionUnshift(unshiftNumber);
}

function impresionUnshift(unshiftNumber){
  pila.unshift(unshiftNumber);
  let unshiftPila = document.querySelector("#unshiftPila");
  unshiftPila.innerHTML= "Pila despues de aplicarle unshift = " + pila;
}

let reverseButton = document.querySelector("#reverseButton").addEventListener("click", reversePila);

function reversePila(){
  let reversePila = document.querySelector("#reversePila");
  pila.reverse();
  reversePila.innerHTML = "Pila despues de aplicarle reverse = " + pila;
}
