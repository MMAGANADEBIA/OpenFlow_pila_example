let pushButton = document.querySelector("#pushButton").addEventListener("click", data);

var pila = [];

function data(){ let numero = document.querySelector("#numero").value; add(numero); }

function add(numero){
  pila.push(numero);
  //console.log(pila);
  impresion(pila);
}

function impresion(pila){
  console.log(pila);
  let impresionPila = document.querySelector("#impresionPila");
  impresionPila.innerHTML = "pila = " + pila;
  //return pila;
}

let popButton = document.querySelector("#popButton").addEventListener("click", popPila);

function popPila(){
  let popPila = document.querySelector("#popPila");
  pila.pop(); //pila.pop is not a function
  popPila.innerHTML = "Fila despues de aplicarle pop = " + pila;
  //console.log(pila)
}

/*var btn = document.querySelector("#btn");  Primera version, duplicaba numeros
btn.addEventListener("click", first);
let firstInput = document.querySelector("#numero").value;

let pila = [];

function first(){

  pila.push(firstInput);

  console.log(pila);
}
*/
