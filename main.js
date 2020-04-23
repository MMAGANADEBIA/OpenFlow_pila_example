let btn = document.querySelector("#btn").addEventListener("click", data);

var pila = [];

function data(){ let numero = document.querySelector("#numero").value; add(numero); }

function add(numero){
  pila.push(numero);
  console.log(pila);
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
