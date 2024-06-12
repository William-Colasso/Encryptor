
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
var dsa  = document.getElementById('dsa')
var elgamal  = document.getElementById('elgamal')
var md5  = document.getElementById('md5')
var rc4 = document.getElementById('rc4')
var rsa  = document.getElementById('rsa')
var salsa20 = document.getElementById('salsa20')
var serpent = document.getElementById('serpent')
var sha1  = document.getElementById('sha1')
var sha2  = document.getElementById('sha2')
var sha3 = document.getElementById('sha3')
var _3des = document.getElementById('3des')


const text_voltar = document.getElementById('voltar')

text_voltar.addEventListener('mouseenter', function(){
    text_voltar.style.transition = '0.2s'
    text_voltar.textContent ='V0!7@r'



})

text_voltar.addEventListener('mouseout', function(){
    text_voltar.style.transition = '0.3s'
    text_voltar.textContent ='Voltar'

})

function morse(){
    var teste = "Ola"
    var tam = teste.length
    var char = []
    if(codigo_morse.checked){
        for(let i = 0; i < tam; i++){
            char[i] = teste[i]
            console.log(char[i])
        }
    }
}

function ler(){
    var text = document.getElementById('texto1').value

    var texto = String(text)
    texto= texto.toLowerCase()
    var paragrafo = document.getElementById('paragrafo')

    

    var tam = parseInt(texto.length)
    var fatiar = [tam]

    for(let i = 0; i < tam; i++){
        fatiar[i] = texto[i] 
    }

    for(let a = 0; a <= tam; a++){
        if(fatiar[a] == "a"){
            fatiar[a] = ".-"
        }
        else if(fatiar[a] == "b"){
            fatiar[a] = "-..."
        }
        else if(fatiar[a] == "c"){
            fatiar[a] = "-.-."
        }
        else if(fatiar[a] == "d"){
            fatiar[a] = "-.."
        }
        else if(fatiar[a] == "e"){
            fatiar[a] = "."
        }
        else if(fatiar[a] == "f"){
            fatiar[a] = "..-."
        }
        else if(fatiar[a] == "g"){
            fatiar[a] = "--."
        }
        else if(fatiar[a] == "h"){
            fatiar[a] = "...."
        }
        else if(fatiar[a] == "i"){
            fatiar[a] = ".."
        }
        else if(fatiar[a] == "j"){
            fatiar[a] = ".---"
        }
        else if(fatiar[a] == "k"){
            fatiar[a] = "-.-"
        }
        else if(fatiar[a] == "l"){
            fatiar[a] = ".-.."
        }
        else if(fatiar[a] == "m"){
            fatiar[a] = "--"
        }
        else if(fatiar[a] == "n"){
            fatiar[a] = "-."
        }
        else if(fatiar[a] == "o"){
            fatiar[a] = "---"
        }
        else if(fatiar[a] == "p"){
            fatiar[a] = ".--."
        }
        else if(fatiar[a] == "q"){
            fatiar[a] = "--.-"
        }
        else if(fatiar[a] == "r"){
            fatiar[a] = ".-."
        }
        else if(fatiar[a] == "s"){
            fatiar[a] = "..."
        }
        else if(fatiar[a] == "t"){
            fatiar[a] = "-"
        }
        else if(fatiar[a] == "u"){
            fatiar[a] = "..-"
        }
        else if(fatiar[a] == "v"){
            fatiar[a] = "...-"
        }
        else if(fatiar[a] == "w"){
            fatiar[a] = ".--"
        }
        else if(fatiar[a] == "x"){
            fatiar[a] = "-..-"
        }
        else if(fatiar[a] == "y"){
            fatiar[a] = "-.--"
        }
        else if(fatiar[a] == "z"){
            fatiar[a] = "--.."
        }
        else if(fatiar[a] == "1"){
            fatiar[a] = ".----"
        }
        else if(fatiar[a] == "2"){
            fatiar[a] = "..---"
        }
        else if(fatiar[a] == "3"){
            fatiar[a] = "...--"
        }
        else if(fatiar[a] == "4"){
            fatiar[a] = "....-"
        }
        else if(fatiar[a] == "5"){
            fatiar[a] = "....."
        }
        else if(fatiar[a] == "6"){
            fatiar[a] = "-...."
        }
        else if(fatiar[a] == "7"){
            fatiar[a] = "--..."
        }
        else if(fatiar[a] == "8"){
            fatiar[a] = "---.."
        }
        else if(fatiar[a] == "9"){
            fatiar[a] = "----."
        }
        else if(fatiar[a] == "0"){
            fatiar[a] = "-----"
        }
        else if(fatiar[a] == " "){
            fatiar[a] = " / "
        }
        else if(fatiar[a] == "é"){
            fatiar[a] = "."
        }
        else if(fatiar[a] == "ã"){
            fatiar[a] = ".-"
        }
        else if(fatiar[a] == "á"){
            fatiar[a] = ".-"
        }
        else if(fatiar[a] == "à"){
            fatiar[a] = ".-"
        }
        else if(fatiar[a] == "â"){
            fatiar[a] = ".-"
        }
        else if(fatiar[a] == "è"){
            fatiar[a]  = "."
        }
        else if(fatiar[a] == "ê"){
            fatiar[a] = "."
        }
        else if(fatiar[a] == "ó"){
            fatiar[a] = "---"
        }
        else if(fatiar[a] == "ò"){
            fatiar[a] = "---"
        }
        else if(fatiar[a] == "õ"){
            fatiar[a] = "---"
        }
        else if(fatiar[a] == "ô"){
            fatiar[a] = "---"
        }
        else if(fatiar[a] == "í"){
            fatiar[a] = ".."
        }
        else if(fatiar[a] == "ì"){
            fatiar[a] = ".."
        }
        else if(fatiar[a] == "î"){
            fatiar[a] = ".."
        }
        else if(fatiar[a] == "ú"){
            fatiar[a] = "..-"
        }
        else if(fatiar[a] == "ù"){
            fatiar[a] = "..-"
        }
        else if(fatiar[a] == "û"){
            fatiar[a] = "..-"
        }
        else{
            fatiar[a] = ""
        }
    }

    var algo = ""
    for(let e = 0; e < tam; e++){
        algo = algo+fatiar[e]+" "
    }
    paragrafo.innerText = algo
}























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


