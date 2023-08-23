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
botaoMostrarTodosNumerosPares.addEventListener('click', mostrarTodosNumerosPares)

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
const botaoMostrarTodosNumerosImpares = document.getElementById('botao-mostrar-todos-numeros-impares')
botaoMostrarTodosNumerosImpares.addEventListener('click', mostrarTodosNumerosImpares)

function mostrarTodosNumerosImpares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros-impares')
    
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 2 == 1){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}
const botaoMostrarTodosNumerosMultiplos3 = document.getElementById('botao-mostrar-todos-numeros-m3')
botaoMostrarTodosNumerosMultiplos3.addEventListener('click', mostrarTodosNumerosMultiplos3)

function mostrarTodosNumerosMultiplos3(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros-m3')
    
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] %3 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}
const botaoMostrarTodosNumerosMultiplos34 = document.getElementById('botao-mostrar-todos-numeros-m34')
botaoMostrarTodosNumerosMultiplos34.addEventListener('click', mostrarTodosNumerosMultiplos34)

function mostrarTodosNumerosMultiplos34(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros-m34')
    
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 3 == 0 && numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}
const botaoMostrarTodosNumerosMultiplos3ou4 = document.getElementById('botao-mostrar-todos-numeros-m3ou4')
botaoMostrarTodosNumerosMultiplos3ou4.addEventListener('click', mostrarTodosNumerosMultiplos3ou4)

function mostrarTodosNumerosMultiplos3ou4(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros-m3ou4')
    
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 3 == 0 || numeros[indice] % 4 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}
const botaoMostrarTodosNumerosMultiplosproximo = document.getElementById('botao-mostrar-todos-numeros-proximo')
botaoMostrarTodosNumerosMultiplosproximo.addEventListener('click', mostrarTodosNumerosMultiplosproximo)

function mostrarTodosNumerosMultiplosproximo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros-proximo')
    
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 1
            container.appendChild(novoSpan)
        
    }
}
const botaoMostrarTodosNumerosMultiplosppar = document.getElementById('botao-mostrar-todos-numeros-ppar')
botaoMostrarTodosNumerosMultiplosppar.addEventListener('click', mostrarTodosNumerosMultiplosppar)

function mostrarTodosNumerosMultiplosppar(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros-ppar')
    
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
        if(numeros[indice] % 2 == 0 ){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) + 2
            container.appendChild(novoSpan)
         } else if(numeros[indice] % 2 != 0 ){
                const novoSpan = document.createElement('span')
                novoSpan.textContent = Number(numeros[indice]) + 1
                container.appendChild(novoSpan)
    }
  }
}
const botaoMostrarTodosNumerosMultiplosDobro = document.getElementById('botao-mostrar-todos-numeros-dobro')
botaoMostrarTodosNumerosMultiplosDobro.addEventListener('click', mostrarTodosNumerosMultiplosDobro)

function mostrarTodosNumerosMultiplosDobro(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros-dobro')
    
    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for(let indice=0; indice < ultimoIndice; indice++){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[indice]) * 2
            container.appendChild(novoSpan)
        
    }
}