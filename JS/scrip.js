//Git add .
//Git commit - m ""
//Git Push

const importe_piso = 2000;
const importe_techo = 10000;

alert(
  "Bienvenido, vamos a determinar si debes realizar alguna accion en tus facturas"
);
let numerosfacturas = prompt(
  "Favor ingresar cuantos documentos vas a analizar (ej 10)"
);

let factura = prompt("Ingresa el importe del documento");
if (factura > 10000) {
  alert("Factura " + factura + ": Retener.");
} else if (factura > 2000) {
  alert("Factura " + factura + ": Informar.");
} else {
  alert("Factura " + factura + ": No requiere acción.");
}

alert("el importe ingresado fue " + factura1);
