var checkboxes = document.getElementsByName('criptografia')

if(checkboxes[0].checked){
    alert('primeiro clicado')
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

