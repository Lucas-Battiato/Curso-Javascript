function pedido(){
let nombre;

do {
    nombre = prompt("Bienvenido a Hamburguesería Kian. Por favor ingrese su nombre.");

} while (nombre.length < 3 || nombre.length > 12);

//Utilización de IF
//if(hamburguesa.toLowerCase() == "hamburguesa simple"){
//    alert(nombre + " seleccionaste una Hamburguesa Simple");
//    }
//    else if (hamburguesa.toLowerCase() == "hamburguesa completa"){
//        alert(nombre + " seleccionaste una Hamburguesa Completa");
//    }
//    else if (hamburguesa.toLowerCase() == "hamburguesa kian"){
//        alert(nombre + " seleccionaste una Hamburguesa Kian");
//    }
//    else{
//        alert("Nombre de hamburguesa incorrecta")
//    }

const valor = {
    simple: 3000,
    completa: 4000,
    kian: 5000,
};

let compraTotal = 0;

do {

    let hamburguesa = prompt(nombre + " que hamburguesa desearías pedir? \n1.Simple.  \n2.Completa.  \n3.Kian. ");

    let eleccionHamburguesa;

    switch (hamburguesa.toLowerCase()) {

        case "simple":
            eleccionHamburguesa = "simple";
            alert(nombre + " seleccionaste una Hamburguesa Simple.");
            break;

        case "completa":
            eleccionHamburguesa = "completa";
            alert(nombre + " seleccionaste una Hamburguesa Completa.");
            break;

        case "kian":
            eleccionHamburguesa = "kian";
            alert(nombre + " seleccionaste una Hamburguesa Kian.");
            break;

        default:
            alert("Nombre de hamburguesa incorrecta");
    }

    if (eleccionHamburguesa) {
        compraTotal += valor[eleccionHamburguesa];
        alert("Su pedido es hamburguesa " + eleccionHamburguesa + ". El valor total es : $" + valor[eleccionHamburguesa]);
    }

    var agregar = prompt("Desearía agregar algo mas? Si o No").toLowerCase();

} while (agregar === "si");

alert("Muchas gracias por su compra, el precio final es : $" + compraTotal);
}
pedido()
//* En este código se puede visualizar como primero le pedimos que ingrese un nombre valido, luego hago unas variables de almacenamiento, después determino la eleccion del pedido, se suma el precio total, se hace un ciclo por si quiere agregar mas elecciones y al final le muestra el resultado total.