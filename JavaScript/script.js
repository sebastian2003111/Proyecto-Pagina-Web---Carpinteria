/**  ================================== CONTACTO ==================================**/

/**
 * Formulario
 */
const formulario = document.querySelector('.formulario');

if(formulario){
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.querySelector('input[type="text"]').value;
        const telefono = document.querySelector('input[type="tel"]').value;
        const correo = document.querySelector('input[type="email"]').value;
        const mensaje = document.querySelector('textarea').value;

        if(nombre === '' || telefono === '' || correo === '' || mensaje === ''){
            alert('Todos los campos son obligatorios');
            return;
        }

        if(!correo.includes('@')){
            alert('El correo no es valido');
            return;
        }

        const datosFormulario = {nombre, telefono, correo, mensaje};
        localStorage.setItem('ContactoSebastian', JSON.stringify(datosFormulario));

        alert('Mensaje enviado correctamente');
        formulario.reset();
    });
}


const datosGuardados = localStorage.getItem('Mensaje_Usuario');
if (datosGuardados){
    console.log(JSON.parse(datosGuardados));
}

// =============================
// VER MÁS / VER MENOS
// =============================

const botonVermas = document.getElementById("boton-vermas");
const bioCompleta = document.getElementById("bio-completa");

if (botonVermas && bioCompleta) {

    botonVermas.addEventListener("click", () => {

        const estaOculto = bioCompleta.classList.contains("oculto");

        if (estaOculto) {
            bioCompleta.classList.remove("oculto");
            bioCompleta.classList.add("visible");
            botonVermas.textContent = "Ver menos";
        } else {
            bioCompleta.classList.remove("visible");
            bioCompleta.classList.add("oculto");
            botonVermas.textContent = "Ver más";
        }

    });

}

