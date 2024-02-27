

    let nombre = prompt("Bienvenido a Hamburguesería Kian. Por favor ingrese su nombre.");

//Utilización de IF
//if(hamburguesa.toLowerCase() == "hamburguesa simple"){
//    prompt(nombre + " seleccionaste una Hamburguesa Simple");
//    }
//    else if (hamburguesa.toLowerCase() == "hamburguesa completa"){
//        prompt(nombre + " seleccionaste una Hamburguesa Completa");
//    }
//    else if (hamburguesa.toLowerCase() == "hamburguesa kian"){
//        prompt(nombre + " seleccionaste una Hamburguesa Kian");
//    }
//    else{
//        alert("Nombre de hamburguesa incorrecta")
//    }

let precio = 0;

    do {  

        let hamburguesa = prompt(nombre + " que hamburguesa desearías pedir? \n1.Hamburguesa Simple \n2.Hamburguesa Completa \n3.Hamburguesa Kian" );
        

        switch(hamburguesa.toLowerCase()){
            case "hamburguesa simple":
                    alert(nombre + " seleccionaste una Hamburguesa Simple.");
                    precios = 1000;
                break;
            case "hamburguesa completa":
                    alert(nombre + " seleccionaste una Hamburguesa Completa.");
                    precios = 1500;
                break;
            case "hamburguesa kian":
                    alert(nombre + " seleccionaste una Hamburguesa Kian.");
                    precios = 2000;
                break;
            default:
                alert("Nombre de hamburguesa incorrecta");
}

        var agregar = prompt("Desearía agregar algo mas? Si o No").toLowerCase();
        
        } while(agregar === "si")


alert("Muchas gracias por su compra, le precio final es : $" + precio);




