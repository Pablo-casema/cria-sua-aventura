const avanca = document.querySelectorALL('.btn-proximo'); 

avanca.forEach(button => {
    button.addEvenTListener('click',function(){
        const atual = document.queryselector('.ativo');
        const proximoPasso = 'passo-'+ this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add('ativo');
        
    })
})