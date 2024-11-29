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

for (let i = 0; i < numerosfacturas; i++) {
  let factura = prompt("Ingresa el importe del documento");
  if (factura >= importe_techo) {
    alert("Factura importe " + factura + ": Retener " + factura* 0.07);
  } else if (factura >= importe_piso) {
    alert("Factura importe " + factura + ": Informar " + factura);
  } else {
    alert("Factura importe " + factura + ": No requiere acción");
  }
}
