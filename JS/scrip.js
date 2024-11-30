//Git add .
//Git commit - m ""
//Git Push

const importe_piso = 2000;
const importe_techo = 10000;

alert(
  "Bienvenido, vamos a determinar si debes realizar alguna acción en tus facturas"
);

// Solicitar el número de facturas
let numerosfacturas = parseInt(
  prompt("Favor ingresar cuántos documentos vas a analizar (Ejemplo: 5)")
);

// Validar que se haya ingresado un número válido
if (!isNaN(numerosfacturas) && numerosfacturas > 0) {
  for (let i = 0; i < numerosfacturas; i++) {
    // Solicitar el importe de cada factura
    let factura = parseFloat(prompt("Ingresa el importe del documento"));

    // Validar que el importe sea un número
    if (!isNaN(factura)) {
      if (factura >= importe_techo) {
        alert("Factura importe " + factura + ": Retener " + factura * 0.07);
      } else if (factura >= importe_piso) {
        alert("Factura importe " + factura + ": Informar " + factura);
      } else {
        alert("Factura importe " + factura + ": No requiere acción");
      }
    } else {
      alert("El importe ingresado no es válido. Por favor, ingresa un número.");
      i--; // Volver a pedir la misma factura
    }
  }
} else {
  alert("No ingresaste un número válido. Por favor, intenta de nuevo.");
}
