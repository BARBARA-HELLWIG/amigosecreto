let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Nombre no válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Nombre ya se encuentra en la lista.");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Tiene que haber un mínimo de dos jugadores.");
        return;
    }
    let seleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(`Tu amigo secreto es: ${seleccionado}`);
}

function mostrarResultado(texto) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 
    let li = document.createElement("li");
    li.textContent = texto;
    resultado.appendChild(li);
}

function volverJugar() {
    amigos = []; 
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = ""; 
}
