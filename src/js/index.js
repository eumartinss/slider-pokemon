//passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

//passo 2 - dar um jeito de identificar o clique do usiario na sera avançar
btnAvancar.addEventListener('click', function(){   

    if(cartaoAtual === cartoes.length - 1) return    
    
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado'); 

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

});

btnVoltar.addEventListener('click', function(){   
    
    if(cartaoAtual === 0)return;

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado'); 

});


 