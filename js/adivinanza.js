//Pude haber hecho mas reducido el código, pero aun estoy aprendiendo :)
alert("💀 Bienvenido al Calabozo D' bart 💀")
alert("Te veras atrapado en un bucle infinito y solo podrás salir si encuentras el código secreto oculto entre los siguientes acertijos.\nEL CÓDIGO SECRETO son numeros aleatorios que una vez encuentres, tendras que darle un orden para que funcione.\n \n\n                                    BUENA SUERTE! 💀");

nombre = prompt("ingresa tu nombre para comenzar :").toUpperCase();
while (nombre === '') {
    switch (nombre) {
        case '':
            nombre = prompt("ingresa tu nombre para comenzar :").toUpperCase();
            break;
    }
}

let elegir = parseInt(prompt(`- ${nombre} escoge un numero del 1 al 10 :\n- Ingresa el código secreto de 5 dígitos :`));

while (elegir != 34005) {
    switch (elegir) {
        case 1:
            alert("¿Qué es eso que anda todo el día y nunca sale de su sitio?");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "EL RELOJ") {
                alert("- Correcto 👑 ✔️\n- código : 4");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        case 2:
            alert("Si soy joven, joven quedo. Si soy viejo, viejo quedo. Tengo boca pero no hablo, tengo ojos pero no veo. ¿Qué soy?");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "EL RETRATO") {
                alert("- Correcto 👑 ✔️\n- código : 0");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        case 3:
            alert("Existe una santa mujer que con un solo diente llama a la gente.");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "LA CAMPANA") {
                alert("- Correcto 👑 ✔️\n- código : 4");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        case 4:
            alert("Sobre la mesa me ponen, me cortan, me usan, pero no me comen. ¿Qué soy?");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "LA SERVILLETA") {
                alert("- Correcto 👑 ✔️\n- código :  5");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        case 5:
            alert("Bebo agua con los pies y respiro al revés, ¿qué soy?");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "EL ARBOL") {
                alert("- Correcto 👑 ✔️\n- código : 4");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        case 6:
            alert("Desde el momento en que nací, corro de día, corro de noche, corro sin parar, hasta morir en el mar. ¿Quién soy?");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "EL RIO") {
                alert("- Correcto 👑 ✔️\n- código : 3");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        case 7:
            alert("¿Qué cosa es, que si la nombras desaparece?");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "EL SILENCIO") {
                alert("- Correcto 👑 ✔️\n- código : 0");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        case 8:
            alert("Tengo ojos pero no veo, agua pero no bebo y barba pero no me afeito. ¿Quién soy?");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "EL COCO") {
                alert("- Correcto 👑 ✔️\n- código : 5");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        case 9:
            alert("Nazco sin tener padre, muero y va naciendo mi madre. ¿Quién soy?");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "LA NIEVE") {
                alert("- Correcto 👑 ✔️\n- código : 0");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        case 10:
            alert("Alto, alto como un pino, pesa menos que un comino.");
            respuesta = prompt("respuesta :").toUpperCase();
            if (respuesta == "EL HUMO") {
                alert("- Correcto 👑 ✔️\n- código : 3");
            } else {
                alert("- Fallaste 💀 ❌\n- no olvides anteponer 'el' ó 'la' en tu respuesta");
            }
            break;
        default:
            alert("🤨🤨🤨 elige una opcion correcta");

    }
    elegir = parseInt(prompt(`- ${nombre} escoge un numero del 1 al 10 :\n- Ingresa el código secreto de 5 dígitos :`));
}

alert(`${nombre} HAS LOGRADO ESCAPAR\n\n                                          VICTORIA 🏆`);
console.log("gracias por participar 😄");