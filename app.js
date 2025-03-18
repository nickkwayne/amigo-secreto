//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesArray = [];



function adicionarAmigo() {
    let campo = document.getElementById('amigo').value;
    console.log(campo);

    if (campo !== '') {
        if (nomesArray.includes(campo)) {
            alert('Esse nome já foi adicionado!');
        } else {
            nomesArray.push(campo);
            atualizarLista();
        }
    } else {
        alert('Opa !! Você precisa adicionar um nome para iniciar');
    }
        limparCampo();
    }   

function sortearAmigo() {
    let sorteado = nomesArray[Math.floor(Math.random() * nomesArray.length)];

    if (nomesArray.length > 0) {
        document.getElementById('resultado').innerText = 'O amigo sorteado foi: ' + sorteado;
        nomesArray = nomesArray.filter(restante => restante != sorteado);
        atualizarLista();
    } else {
        alert('Todos os nomes já foram sorteados');
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function atualizarLista() {
    const listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML = ''; 

    for (let i = 0; i < nomesArray.length; i++) {
        const li = document.createElement('li');
        li.textContent = nomesArray[i];  
        listaElemento.appendChild(li);
    }
}

function limparLista() {
    nomesArray = [];
    document.getElementById('listaAmigos').innerText = 'Lista de Amigos: '
    document.getElementById('resultado').innerText = '';
}


function novoSorteio() {
    limparLista();
    alert('O jogo vai ser reiniciado !!');
}










