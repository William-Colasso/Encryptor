var fcript = document.getElementsByName('criptografia')
var element = document.getElementById('aes')
var fcripto = document.getElementsByClassName('seletor')



function testar(){
    if(fcript[0].checked){
        alert('Olá')
    }
    if(element.checked){
        alert('teste')
    }

    if(fcripto[0].checked){
        alert('teste')
    }
    else{
        alert('nao foi')
    }

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

