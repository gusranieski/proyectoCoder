let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let edad = document.getElementById("edad");
let correo = document.getElementById("correo");


nombre.oninput=()=>{
    if(isNaN(nombre.value)){
        nombre.style.color="green";
    }else{
        nombre.style.color="red";
    }
}

//EVENTO SUBMIT
let formulario = document.getElementById("formularioDeRegistro");
formulario.addEventListener("submit",validarFormulario);

function validarFormulario(e){
    if((nombre.value=="")||(!isNaN(nombre.value))){
        e.preventDefault();
        Swal.fire(
            'Completaste bien tus datos?',
            'Volvé a ingresarlos!',
            'question'
          )
    }else if(edad.value < 18){
        e.preventDefault();
        Swal.fire(
            'Sos mayor de edad?',
            'Para registrarse se requiere ser mayor de 18 años!',
            'question'
          )
    }
}