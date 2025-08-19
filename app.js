// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let datoIngresado = document.getElementById('amigo').value;
   
    if(datoIngresado == ""){
        alert("Ingrese un nombre");
       } else {
        amigos.push(datoIngresado);
        document.getElementById('amigo').value = "";
        actualizarListadeAmigos();
        console.log(amigos);
    }
}

//Función que limpia y llena la lista
function actualizarListadeAmigos() {

    //selecionamos el <ul> a travez de su ID
    let listaDeAmigos = document.getElementById("listaAmigos");

    //Limpiamos la lista actual antes de agregar nuevos elementos
    listaDeAmigos.innerHTML = '';

    //Creamos un cadena de teto vacia para ir acumulando el HTML
    let contenidoHTML = '';

    //Recorremos el array usando el ciclo for
    for(let i=0; i < amigos.length; i++){

        //obtenemos el nombre del amigo en la posición inicial
        let amigo = amigos[i];

        //concatenamos el elemneto <li> al final de la cadena
        contenidoHTML = contenidoHTML + `<li>${amigo}</li>`
    }

    // Agregamos el contenidoHTML al <ul>
    listaDeAmigos.innerHTML = contenidoHTML;
}

function sortearAmigo() {
    //Genero un indice aleatorio
    let indiceAlatorio = Math.floor(Math.random()*amigos.length);

    //Limpiamos la lista actual antes de agregar nuevos elementos
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = '';

    //Uso el indice aleatorio para selecionar un nombre
    let selecionaLu = document.getElementById("resultado");
    return resultado.innerHTML = `<li>¡${amigos[indiceAlatorio]}!</li>`;
    console.log("indiceAlatorio");

 
}
