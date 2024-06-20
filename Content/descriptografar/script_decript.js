
function encriptar() {
    var aes = document.getElementById('aes')
    var blow_f = document.getElementById('blowfish')
    var codigo_binario = document.getElementById('codigo-binario')
    var cifra_cesar = document.getElementById('cifra-cesar')
    var cifra_playfair = document.getElementById('cifra-playfair')
    var cifra_substituicao = document.getElementById('cifra-substituicao')
    var cifra_transposicao = document.getElementById('cifra-transposicao')
    var cifra_vigenere = document.getElementById('cifra-vigenere')
    var des = document.getElementById('des')
    var diffie_hellman = document.getElementById('diffie-hellman')
    var dsa = document.getElementById('dsa')
    var elgamal = document.getElementById('elgamal')
    var md5 = document.getElementById('md5')
    var rc4 = document.getElementById('rc4')
    var rsa = document.getElementById('rsa')
    var salsa20 = document.getElementById('salsa20')
    var serpent = document.getElementById('serpent')
    var sha1 = document.getElementById('sha1')
    var sha2 = document.getElementById('sha2')
    var sha3 = document.getElementById('sha3')
    var _3des = document.getElementById('3des')

    if (codigo_morse.checked) {
        morse()

    }

    if(codigo_binario.checked){
        binario()
    }

    function binario(){
        
    }

      function morse() {

        var text1 = document.getElementById('prompt_entrada').value
        var texto = String(text1)
        var tam = parseInt(texto.length)
        var text = ""
        var prompt_saida = document.getElementById('prompt_saida')
        var a = 0


        

        var fatiar = [""]


        for (let i = 0; i < tam; i++) {
            if (texto[i] != " ") {
                fatiar[a] = "" + fatiar[a] + texto[i]
            }
            else if (texto[i] == " ") {
                a++
                fatiar[a] = ""
            }
        }
        for (let i = 0; i <= a; i++) {
            if (fatiar[i] == ".-") {
                fatiar[i] = "A"
            }
            else if (fatiar[i] == "-...") {
                fatiar[i] = "B"
            }
            else if (fatiar[i] == "-.-.") {
                fatiar[i] = "C"
            }
            else if (fatiar[i] == "-..") {
                fatiar[i] = "D"
            }
            else if (fatiar[i] == ".") {
                fatiar[i] = "E"
            }
            else if (fatiar[i] == "..-.") {
                fatiar[i] = "F"
            }
            else if (fatiar[i] == "--.") {
                fatiar[i] = "G"
            }
            else if (fatiar[i] == "....") {
                fatiar[i] = "H"
            }
            else if (fatiar[i] == "..") {
                fatiar[i] = "I"
            }
            else if (fatiar[i] == ".---") {
                fatiar[i] = "J"
            }
            else if (fatiar[i] == "-.-") {
                fatiar[i] = "K"
            }
            else if (fatiar[i] == ".-..") {
                fatiar[i] = "L"
            }
            else if (fatiar[i] == "--") {
                fatiar[i] = "M"
            }
            else if (fatiar[i] == "-.") {
                fatiar[i] = "N"
            }
            else if (fatiar[i] == "---") {
                fatiar[i] = "O"
            }
            else if (fatiar[i] == ".--.") {
                fatiar[i] = "P"
            }
            else if (fatiar[i] == "--.-") {
                fatiar[i] = "Q"
            }
            else if (fatiar[i] == ".-.") {
                fatiar[i] = "R"
            }
            else if (fatiar[i] == "...") {
                fatiar[i] = "S"
            }
            else if (fatiar[i] == "-") {
                fatiar[i] = "T"
            }
            else if (fatiar[i] == "..-") {
                fatiar[i] = "U"
            }
            else if (fatiar[i] == "...-") {
                fatiar[i] = "V"
            }
            else if (fatiar[i] == ".--") {
                fatiar[i] = "W"
            }
            else if (fatiar[i] == "-..-") {
                fatiar[i] = "X"
            }
            else if (fatiar[i] == "-.--") {
                fatiar[i] = "Y"
            }
            else if (fatiar[i] == "--..") {
                fatiar[i] = "Z"
            }
            else if (fatiar[i] == ".----") {
                fatiar[i] = "1"
            }
            else if (fatiar[i] == "..---") {
                fatiar[i] = "2"
            }
            else if (fatiar[i] == "...--") {
                fatiar[i] = "3"
            }
            else if (fatiar[i] == "....-") {
                fatiar[i] = "4"
            }
            else if (fatiar[i] == ".....") {
                fatiar[i] = "5"
            }
            else if (fatiar[i] == "-....") {
                fatiar[i] = "6"
            }
            else if (fatiar[i] == "--...") {
                fatiar[i] = "7"
            }
            else if (fatiar[i] == "---..") {
                fatiar[i] = "8"
            }
            else if (fatiar[i] == "----.") {
                fatiar[i] = "9"
            }
            else if (fatiar[i] == "-----") {
                fatiar[i] = "0"
            }
            else if (fatiar[i] == "/") {
                fatiar[i] = " "
            }
            else {
                fatiar[i] = ""
            }
        }
        for (let i = 0; i <= a; i++) {
            text = text + fatiar[i]
        }
        prompt_saida.innerText = text
    }





}


