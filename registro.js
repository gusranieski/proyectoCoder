let arrayDeUsuarios = []

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
    const nuevoUsuario = {
        datoNombre: nombre.value,
        datoTelefono: telefono.value,
        datoEdad: edad.value,
        datoCorreo: correo.value
    }
    if((nombre.value=="")||(!isNaN(nombre.value))){
        e.preventDefault();
        Swal.fire(
            'Completaste bien tus datos?',
            'Volvé a ingresarlos!',
            'question'
          )
    }else if(telefono.value ==""){
        e.preventDefault();
        Swal.fire(
            'Número inválido...',
            'Ingresá el código de area --> 011 + teléfono!',
            'error'
          )
    }else if(edad.value < 18){
        e.preventDefault();
        Swal.fire(
            'Sos mayor de edad?',
            'Para registrarse se requiere ser mayor de 18 años!',
            'question'
          )
    }else{
        e.preventDefault();
        //se agregan los datos ingresados al array de usuarios
        arrayDeUsuarios.push(nuevoUsuario);
        Swal.fire('Usuario registrado!');
        enviarUsuario()
        //se muestra por consola cada usuario cargado
        console.table(nuevoUsuario);
        console.table(arrayDeUsuarios);
        //se almacena en el local storage
        localStorage.setItem("nuevoUsuario",JSON.stringify(arrayDeUsuarios));
        //se limpian los inputs después de enviar el usuario
        nombre.value = "";
        telefono.value = "";
        edad.value = "";
        correo.value = ""
    }
}

//se envían los datos con el método POST
function enviarUsuario(){
    const URLPOST="https://jsonplaceholder.typicode.com/posts";
    const nuevoPost=arrayDeUsuarios
    fetch(URLPOST,{
        method:'POST',
        body:JSON.stringify(nuevoPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then( respuesta => respuesta.json())
        .then( datos => {
            //retorna la respuesta de los datos del usuario registrado y se muestra por consola
            console.log("Datos retornados por jsonplaceholder: ");
            console.log(datos);
        })
}
