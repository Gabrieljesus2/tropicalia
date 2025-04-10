document.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
    const opcoesDeAcessbilidade=document.getElementById('opcoes-acessibilidade');
    
    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessbilidade.classList.toggle('apresenta-lista');
    
    const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true';
    
    botaoDeAcessibilidade.setAttribute('aria-esxpanded',!botaoSelecionado)

    })
const aumentaFonteBotao=document.getElementById('aumentar-fonte');
const diminuiFonteaBotao=document.getElementById('diminuir-fonte');

const alternaContraste=document.getElementById('alternar-contraste');

let tamanhoAtualFonte=1;

aumentaFonteBotao.addEventListener('click',function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize= '$(tamanhoAtualFonte) rem'
})

diminuiFonteaBotao.addEventListener('click',function(){
    tamanhoFonte-=0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'
})

alternaContraste.addEventListener ('click', function(){
    document.body.classList.toggle('alto-contraste')
})

 })

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });