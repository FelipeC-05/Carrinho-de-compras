function adicionar(produto){
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);
    
    qtd.innerHTML = Number(qtd.innerHTML) + 1;
    total.innerHTML = qtd.innerHTML * valor.innerHTML;

    console.log(qtd.innerHTML) + 1;
}

function retirar(produto){
    const qtd = document.getElementById('qtd_' + produto);
    const valor = document.getElementById('valor_' + produto);
    const total = document.getElementById('total_' + produto);
    
    qtd.innerHTML = Number(qtd.innerHTML) - 1;
    total.innerHTML = qtd.innerHTML * valor.innerHTML;

    console.log(qtd.innerHTML) - 1;
}