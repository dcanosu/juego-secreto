let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);

function asignarTexteElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //let numeroDeUsuario = document.querySelector("input")
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTexteElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1 ? "vez" : "veces")}`)
        if(numeroDeUsuario === numeroSecreto){
            document.querySelector("#reiniciar").removeAttribute("disabled");
            //document.getElementById("reiniciar").removeAttribute("disabled");
        }
    } else {
        //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTexteElemento("p","El número secreto es menor");
        } else {
            asignarTexteElemento("p","El número secreto es mayor");
        }
    }   intentos++;
        limpiarCaja();
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector("#valorUsuario")
    //valorCaja.value = "";
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10) + 1; //lo multiplicamos por el número máximo y math floor para utilizar solo la parte decimal
    //si el número generado esta incluido en la lista y podemos utilizar el método includes
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1; //lo multiplicamos por el número máximo y math floor para utilizar solo la parte decimal
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTexteElemento("p","Ya se sortearon todos los números posibles")
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTexteElemento("h1", "Juego del número secreto"); 
    asignarTexteElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalos
    //generar el número aleatorio
    //inicializar el número intentos
    condicionesIniciales();
    //deshabilitar el botón nuevo juego
    document.querySelector("#reiniciar").setAttribute("disable","true");
}
//las convertimos en una función
//asignarTexteElemento("h1", "Juego del número secreto"); 
//asignarTexteElemento("p", "Indica un número del 1 al 10"); 
condicionesIniciales();

