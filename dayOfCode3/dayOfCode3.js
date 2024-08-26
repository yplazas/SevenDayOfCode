alert("Bienvenid@ al juego de elegir su ruta de estudio");

let rutaEstudio = "";

while (rutaEstudio === "") {

    rutaEstudio = prompt("quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End, Escriba front o back");

    if (rutaEstudio.toLowerCase() === "front") {

        let estudioFrontEnd = prompt("¿Qué tipo de estudio desea hacer en Front-End? Escriba react, angular, vue o svelte");

        alert(`Has elegido el estudio de ${estudioFrontEnd} en Front-End`);

        let aprendizajeFrontEnd = prompt(`desea seguir especializandose en el estudio de ${estudioFrontEnd} o convertirse en FullStack?`);
        let aprenderTecnologia = "si";
        let tecnologia = [];

        while (aprenderTecnologia === "si") {

            aprenderTecnologia = prompt("¿Hay alguna otra tecnologia que te gustaría aprender? escriba si o no");

            if (aprenderTecnologia.toLowerCase() === "si") {

                tecnologia.push(prompt("Escriba la tecnologia que desea aprender"));
                alert("interesante tecnologia");

            } else if (aprenderTecnologia.toLowerCase() === "no") {

                let mensaje = "espero te concentres en las siguientes tecnologias que eligistes: \n\n";
                alert(`Que lastima, espero puedas seguir conociendo nuevas tecnologias. ${tecnologia.length > 0 ? mensaje + tecnologia.join(" => ") : ""}`);

            } else {

                aprenderTecnologia.toLowerCase() = "si";
                alert("Por favor, escriba si o no");

            }
        }

    } else if (rutaEstudio.toLowerCase() === "back") {

        let estudioBackEnd = prompt("¿Qué tipo de estudio desea hacer en Back-End? Escriba Python, Java, PHP, C# o JavaScript");

        alert(`Has elegido el estudio de ${estudioBackEnd} en Back-End`);

        let aprendizajeBackEnd = prompt(`desea seguir especializandose en el estudio de ${estudioBackEnd} o convertirse en FullStack?`);
        let aprenderTecnologia = "si";
        let tecnologia = [];

        while (aprenderTecnologia === "si") {

            aprenderTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender? escriba si o no");

            if (aprenderTecnologia.toLowerCase() === "si") {

                tecnologia.push(prompt("Escriba la tecnología que desea aprender"));
                alert("interesante tecnologia");

            } else if (aprenderTecnologia.toLowerCase() === "no") {

                let mensaje = "espero te concentres en las siguientes tecnologias que eligistes: \n\n";
                alert(`Que lastima, espero puedas seguir conociendo nuevas tecnologias. ${tecnologia.length > 0 ? mensaje + tecnologia.join(" => ") : ""}`);

            } else {

                aprenderTecnologia.toLowerCase() = "si";
                alert("Por favor, escriba si o no");

            }
        }
    } else {
        rutaEstudio = "";
        alert("Por favor, escriba front o back");
    }
}
