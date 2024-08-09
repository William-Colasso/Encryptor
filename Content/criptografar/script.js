    var aes = document.getElementById('aes')
    var blow_f = document.getElementById('blowfish')
    var codigo_binario = document.getElementById('codigo-binario')
    var codigo_morse = document.getElementById('codigo-morse')
    var cifra_cesar = document.getElementById('cifra-cesar')
    var cifra_playfair = document.getElementById('cifra-playfair')
    var cifra_substituicao = document.getElementById('cifra-substituicao')
    var cifra_transposicao = document.getElementById('cifra-transposicao')
    var cifra_vigenere = document.getElementById('cifra-vigenere')
    var des = document.getElementById('des')
    var diffie_hellman = document.getElementById('diffie-hellman')
    var dsa = document.getElementById('dsa')
    var elgamal = document.getElementById('elgamal')
    var letra_numero = document.getElementById('letra-numero')
    var md5 = document.getElementById('md5')
    var rc4 = document.getElementById('rc4')
    var rsa = document.getElementById('rsa')
    var salsa20 = document.getElementById('salsa20')
    var serpent = document.getElementById('serpent')
    var sha1 = document.getElementById('sha1')
    var sha2 = document.getElementById('sha2')
    var sha3 = document.getElementById('sha3')
    var _3des = document.getElementById('3des')
var texto_copiar = document.getElementById('prompt_saida').innerText
    var copy = document.getElementById("copy")




    async function copyToClipboard() {
        var texto_copiar = document.getElementById('prompt_saida').innerText
        var copy = document.getElementById("copy")
    
        try {
            await navigator.clipboard.writeText(texto_copiar)
            
            copy.innerHTML = "Copiado!"
            copy.style.color = "white"
            
            
            setTimeout(async () => {
                let clipboardContent = await navigator.clipboard.readText()
                if (clipboardContent !== texto_copiar) {
                    copy.innerHTML = "copiar"
                    copy.style.color = "#12a525"
                }
            }, 3000) 
        } catch (err) {
            console.error('Erro ao copiar texto: ', err)
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



























setInterval(() => {
    const elementoEscondido = document.getElementById('overflow_container');
    const elementoAuxiliar = document.getElementById('auxiliar');
    
    
    if(aes.checked){
        elementoAuxiliar.classList.remove('falso_flow')
        elementoAuxiliar.classList.add('verdadeiro_flow')
    }else{
        elementoAuxiliar.classList.remove('verdadeiro_flow')
        elementoAuxiliar.classList.add('falso_flow')
    }


    if(cifra_cesar.checked){
        elementoEscondido.classList.remove('falso_flow');
        elementoEscondido.classList.add('verdadeiro_flow');

    }
    else{
        elementoEscondido.classList.remove('verdadeiro_flow');
        elementoEscondido.classList.add('falso_flow');
    }



  }, 500);


