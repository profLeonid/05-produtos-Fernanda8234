'use strict'

function adicionarProduto() {
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')

    const span = document.createElement('span')
    span.textContent = produto.value
    span.className = 'bg-gray-100 px-8 py-1'

    lista.appendChild(span)
}