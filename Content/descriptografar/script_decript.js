
function decriptar() {
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
    var md5 = document.getElementById('md5')
    var rc4 = document.getElementById('rc4')
    var rsa = document.getElementById('rsa')
    var salsa20 = document.getElementById('salsa20')
    var serpent = document.getElementById('serpent')
    var sha1 = document.getElementById('sha1')
    var sha2 = document.getElementById('sha2')
    var sha3 = document.getElementById('sha3')
    var _3des = document.getElementById('3des')

    var text = document.getElementById('prompt_entrada').value
    var texto = String(text)
    texto = texto.toLowerCase()
    var prompt_saida = document.getElementById('prompt_saida')
    var tam = parseInt(texto.length)


    var numeros = document.getElementsByName('numbers')

    const letraNumero = {
        'a': 1, 'á': 1, 'à': 1,'ä':1, 'b': 2, 'c': 3,
    'd': 4, 'e': 5, 'é': 5, 'è': 5,'ë':5, 'f': 6,
    'g': 7, 'h': 8, 'i': 9, 'í': 9, 'ì': 9,'ï':9,
    'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14,
    'o': 15, 'ó': 15, 'ò': 15,'ö':15, 'p': 16, 'q': 17,
    'r': 18, 's': 19, 't': 20, 'u': 21, 'ú': 21,
    'ù': 21,'ü':21, 'v': 22, 'w': 23, 'x': 24, 'y': 25,
    'z': 26, '!': '', '@': '', '#': '',
    '$': '', '%': '', '¨': '', '&': '', '*': '',
    '(': '', ')': '', '_': '', '-': '', '+': '','´':'',
    '=': '', '[': '', '{': '', ']': '', '}': '',
    '\\': '', '|': '', ';': '', ':': '', '\'': '',
    '"': '', ',': '', '<': '', '.': '', '>': '',
    '/': '', '?': '', '`': '', '~': '', '§': '',
    'ª': '', 'º': '', '^': '', '0':'', '1':'','2':'',
    '3':'','4':'','5':'','6':'','7':'','8':'','9':'',
    '¹':'','²':'','³':'','£':'','¬':''
    }

    const numeroLetra = {
        1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E',
    6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J',
    11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O',
    16: 'P', 17: 'Q', 18: 'R', 19: 'S', 20: 'T',
    21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y',
    26: 'Z'
    }




    if (codigo_morse.checked) {
        morse()

    }

    if(codigo_binario.checked){
        binario()
    }
    if (cifra_cesar.checked) {
        cesar1()
    }

    function binario(){
        
    }

    

    function cesar1() {
        var auxi
        var escolhido = 0
        var fatiar = [tam]

        for (let i = 0; i < tam; i++) {
            fatiar[i] = texto[i]
        }

        for (let i = 0; i <= 25; i++) {
            if (numeros[i].checked) {
                escolhido = i + 1
                break
            }
        }

        for (let a = 0; a <= tam; a++) {

            fatiar[a] = letraNumero[fatiar[a]]
            
            if(fatiar[a]-escolhido<1){
                auxi = escolhido-fatiar[a]
                
                fatiar[a]=26-auxi
                fatiar[a] = numeroLetra[fatiar[a]]
            }
            else if(fatiar[a]!=" "){
                fatiar[a] = numeroLetra[fatiar[a]]
            }
            
            
        }

        

        var algo = ""
        for (let e = 0; e < tam; e++) {
            
            algo = algo + fatiar[e] + ""
        }
        prompt_saida.innerText = algo

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


