function mostrarMensaje() {

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let lenguaje = document.getElementById("lenguaje").value;


    alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

    let respuestaUsuario = 0;

    while (respuestaUsuario === 0 || respuestaUsuario !== 1 || respuestaUsuario !== 2) {

        respuestaUsuario = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO`));

        if (respuestaUsuario === 1) {

            alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
            break;

        } else if (respuestaUsuario === 2) {

            alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
            break;

        } else {

            alert("este numero no es valido");

        }

    }



}