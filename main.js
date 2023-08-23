'use strict'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostra-todos-numeros')
botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)

function mostrarTodosNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')

    const ultimoIndice =  numeros.length
    for(let indice=0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[indice]
        container.appendChild(novoSpan)

    }  
}

const botaoMostrarTodosNumerosPares = document.getElementById('botao-mostrar-todos-numeros-pares')
botaoMostrarTodosNumeros.addEventListener("click", mostrarTodosNumerosPares)

function mostrarTodosNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}
