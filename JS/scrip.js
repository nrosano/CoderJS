//Git add .
//Git commit - m ""
//Git Push

const importe_piso = 2000;
const importe_techo = 10000;

alert(
  "Bienvenido, vamos a determinar si debes realizar alguna acción en tus facturas"
);

// Solicitar el número de facturas
let numerosfacturas;
while (true) {
  numerosfacturas = parseInt(
    prompt("Favor ingresar cuántos documentos vas a analizar.(Ejemplo: 5)")
  );
  if (!isNaN(numerosfacturas) && numerosfacturas > 0) {
    break;
  } else {
    alert("Ingresa un numero valido mayor a 0.(Ejemplo: 5)");
  }
}

for (let i = 0; i < numerosfacturas; i++) {
  let factura = parseFloat(prompt("Ingresa el importe del documento"));
  if (!isNaN(factura)) {
    if (factura >= importe_techo) {
      alert(
        "Factura importe " +
          factura +
          ": Retener " +
          parseFloat((factura * 0.07).toFixed(2))
      );
    } else if (factura >= importe_piso) {
      alert("Factura importe " + factura + ": Informar " + factura);
    } else {
      alert("Factura importe " + factura + ": No requiere acción");
    }
  } else {
    alert("El importe ingresado no es válido. Por favor, ingresa un número.");
  }
}
