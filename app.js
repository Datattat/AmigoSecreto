// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); 

    if (nombreAmigo === '') {
        alert('Nombre vacío');
        return; 
    }

    amigos.push(nombreAmigo);

    actualizarListaAmigos();

    inputAmigo.value = '';
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        console.log('No hay amigos para sortear');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    document.getElementById('listaAmigos').style.display = 'none';

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>EL amigo secreto sorteado es: ${amigoSorteado}</li>`;
}
