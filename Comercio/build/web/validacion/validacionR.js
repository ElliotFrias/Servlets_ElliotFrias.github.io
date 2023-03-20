function validarR() {
    
    // Obtener los valores ingresados en el formulario
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    //Validar los datos del formulario
    if (username == "" || email == "" || password == "" || confirmarPassword == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)){
        alert("Por favor, introduce un correo electrónico válido")
        return false;
    } else {
        return true;
    }
}

function validarC() {
    const unidadesRegex = "^[0-9]+$";

    let nombProd = document.getElementById("productoBuscCompra").value;
    let  unidadesProd = document.getElementById("unidadesCompra").value;

    //Validar los datos de la Compra
    if (!unidadesRegex.test(nombProd)){
        alert ("Por favor, introduce un valor válido")
        return false;
    } else {
        return true;
    }
}

function validarV(){
    const unidadesVRegex = /^\d+$/;
    const precioRegex = /^\d*\.?\d*$/;

    let nombVProd = document.getElementById("nomProd").value
    let precioVProd = document.getElementById("precioProducto").value
    let unidadesVProd = document.getElementById("unidadesProducto").value

    if (!precioRegex.test(precioVProd.value)){
        alert("Por favor, introduce un valor válido")
        return false;
    } else if (!unidadesVRegex.text(unidadesVProd.value))
    {
        alert("Por favor, introduce un valor válido")
        return false;
    } else{
        return true;
    }
}