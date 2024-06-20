





function copy(){

    var texto_copiar = document.getElementById('prompt_saida')

    var texto_final = texto_copiar.toCopy.value

    navigator.clipboard.writeText(texto_final).then(function(){

        alert("copiado!")




    })



}






























const text_voltar = document.getElementById('voltar')

text_voltar.addEventListener('mouseenter', function(){
    text_voltar.style.transition = '0.2s'
    text_voltar.textContent ='V0!7@r'



})

text_voltar.addEventListener('mouseout', function(){
    text_voltar.style.transition = '0.3s'
    text_voltar.textContent ='Voltar'

})



























setInterval(() => {
    const elementoEscondido = document.getElementById('overflow_container');
    if(cifra_cesar.checked){
        elementoEscondido.classList.remove('falso_flow');
        elementoEscondido.classList.add('segundo_flow');

    }
    else{
        elementoEscondido.classList.remove('segundo_flow');
        elementoEscondido.classList.add('falso_flow');
    }
  }, 500);


