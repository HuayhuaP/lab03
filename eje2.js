var bandera = false;
console.log(typeof bandera);

function miFuncion() {}
console.log(typeof miFuncion);

var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

class Personal {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(typeof Personal);

var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

var y = null;
console.log(typeof y);
