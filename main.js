'use strict'

function adicionarProduto() {
    const produto = document.getElementById('produto')
    const valor = produto.value
    
    if(valor == '' || !isNaN(valor)){
       alert('Erro: Digite um produto válido')
        return false 
    } else{
        const span = document.createElement('span')
        span.className = 'px-45 py-2'
        const nomeProduto = document.getElementById('produto').value
        span.textContent = `Produto: ${nomeProduto}`
        document.getElementById('lista').appendChild(span)
    }
}

function adicionarCodigo() {
    const codigo = document.getElementById('codigo')
    const valor = codigo.value
    
    if(valor == '' || isNaN(valor)){
       alert('Erro: Digite um número válido')
        return false 
    } else{
        const span = document.createElement('span')
        span.className = 'px-45 py-2'
        const nCod = document.getElementById('codigo').value
        span.textContent = `Código: ${nCod}`
        document.getElementById('lista').appendChild(span)
    }
}

function adicionarQuantidade() {
    const quantidade = document.getElementById('quantidade')
    const valor = quantidade.value
    
    if(valor == '' || isNaN(valor)){
       alert('Erro: Digite um número válido')
        return false 
    } else{
        const span = document.createElement('span')
        span.className = 'px-45 py-2'
        const nQnt = document.getElementById('quantidade').value
        span.textContent = `Quantidade: ${nQnt}`
        document.getElementById('lista').appendChild(span)
    }
}

function resetarLista() {
    // Apaga o conteúdo antigo da div para abrir espaço para o novo
    document.getElementById('lista').innerHTML = ""
}

function limparTudo() {
    // Seleciona o formulário pelo ID e reseta
    document.getElementById('produto').value = ""
    document.getElementById('codigo').value = ""
    document.getElementById('quantidade').value = ""
    
    document.getElementById('produto').focus()
}

function envio() {
    // Chama as funções de lógica
    adicionarProduto()
    adicionarCodigo()
    adicionarQuantidade()
    limparTudo()
}