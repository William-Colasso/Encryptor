
function encriptar() {


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
    if (codigo_binario.checked) {
        binario()
    }
    if (cifra_cesar.checked) {
        cesar()
    }

    function cesar() {
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

            fatiar[a] = Number(letraNumero[fatiar[a]])
            
            if((fatiar[a]+escolhido)>26){
                fatiar[a]+= escolhido-26
            }
            else{
                fatiar[a]+=escolhido
            }
            
        }
        for (let a = 0; a <= tam; a++) {

            fatiar[a] = numeroLetra[fatiar[a]]
            
        }

        

        var algo = ""
        for (let e = 0; e < tam; e++) {
            if(fatiar[e]==undefined){
                fatiar[e]= " "
            }
            algo = algo + fatiar[e] + ""
        }
        prompt_saida.innerText = algo

    }

    function binario() {

        var fatiar = [tam]

        for (let i = 0; i < tam; i++) {
            fatiar[i] = texto[i]
        }

        for (let a = 0; a <= tam; a++) {
            if (fatiar[a] == "a") {
                fatiar[a] = "01100001"
            }
            else if (fatiar[a] == "b") {
                fatiar[a] = "01100010"
            }
            else if (fatiar[a] == "c") {
                fatiar[a] = "01100011"
            }
            else if (fatiar[a] == "d") {
                fatiar[a] = "01100100"
            }
            else if (fatiar[a] == "e") {
                fatiar[a] = "01100101"
            }
            else if (fatiar[a] == "f") {
                fatiar[a] = "01100110"
            }
            else if (fatiar[a] == "g") {
                fatiar[a] = "01100111"
            }
            else if (fatiar[a] == "h") {
                fatiar[a] = "01101000"
            }
            else if (fatiar[a] == "i") {
                fatiar[a] = "01101001"
            }
            else if (fatiar[a] == "j") {
                fatiar[a] = "01101010"
            }
            else if (fatiar[a] == "k") {
                fatiar[a] = "01101011"
            }
            else if (fatiar[a] == "l") {
                fatiar[a] = "01101100"
            }
            else if (fatiar[a] == "m") {
                fatiar[a] = "01101101"
            }
            else if (fatiar[a] == "n") {
                fatiar[a] = "01101110"
            }
            else if (fatiar[a] == "o") {
                fatiar[a] = "01101111"
            }
            else if (fatiar[a] == "p") {
                fatiar[a] = "01110000"
            }
            else if (fatiar[a] == "q") {
                fatiar[a] = "01110001"
            }
            else if (fatiar[a] == "r") {
                fatiar[a] = "01110010"
            }
            else if (fatiar[a] == "s") {
                fatiar[a] = "01110011"
            }
            else if (fatiar[a] == "t") {
                fatiar[a] = "01110100"
            }
            else if (fatiar[a] == "u") {
                fatiar[a] = "01110101"
            }
            else if (fatiar[a] == "v") {
                fatiar[a] = "01110110"
            }
            else if (fatiar[a] == "w") {
                fatiar[a] = "01110111"
            }
            else if (fatiar[a] == "x") {
                fatiar[a] = "01111000"
            }
            else if (fatiar[a] == "y") {
                fatiar[a] = "01111001"
            }
            else if (fatiar[a] == "z") {
                fatiar[a] = "01111010"
            }
            else if (fatiar[a] == "1") {
                fatiar[a] = "00110001"
            }
            else if (fatiar[a] == "2") {
                fatiar[a] = "00110010"
            }
            else if (fatiar[a] == "3") {
                fatiar[a] = "00110011"
            }
            else if (fatiar[a] == "4") {
                fatiar[a] = "00110100"
            }
            else if (fatiar[a] == "5") {
                fatiar[a] = "00110101"
            }
            else if (fatiar[a] == "6") {
                fatiar[a] = "00110110"
            }
            else if (fatiar[a] == "7") {
                fatiar[a] = "00110111"
            }
            else if (fatiar[a] == "8") {
                fatiar[a] = "00111000"
            }
            else if (fatiar[a] == "9") {
                fatiar[a] = "00111001"
            }
            else if (fatiar[a] == "0") {
                fatiar[a] = "00110000"
            }
            else if (fatiar[a] == " ") {
                fatiar[a] = "00100000"
            }
            else if (fatiar[a] == "é") {
                fatiar[a] = "11101001"
            }
            else if (fatiar[a] == "ã") {
                fatiar[a] = "11100011"
            }
            else if (fatiar[a] == "á") {
                fatiar[a] = ".-"
            }
            else if (fatiar[a] == "à") {
                fatiar[a] = ".-"
            }
            else if (fatiar[a] == "â") {
                fatiar[a] = ".-"
            }
            else if (fatiar[a] == "è") {
                fatiar[a] = "."
            }
            else if (fatiar[a] == "ê") {
                fatiar[a] = "."
            }
            else if (fatiar[a] == "ó") {
                fatiar[a] = "---"
            }
            else if (fatiar[a] == "ò") {
                fatiar[a] = "---"
            }
            else if (fatiar[a] == "õ") {
                fatiar[a] = "---"
            }
            else if (fatiar[a] == "ô") {
                fatiar[a] = "---"
            }
            else if (fatiar[a] == "í") {
                fatiar[a] = ".."
            }
            else if (fatiar[a] == "ì") {
                fatiar[a] = ".."
            }
            else if (fatiar[a] == "î") {
                fatiar[a] = ".."
            }
            else if (fatiar[a] == "ú") {
                fatiar[a] = "..-"
            }
            else if (fatiar[a] == "ù") {
                fatiar[a] = "..-"
            }
            else if (fatiar[a] == "û") {
                fatiar[a] = "..-"
            }
            else {
                fatiar[a] = ""
            }
        }

        var algo = ""
        for (let e = 0; e < tam; e++) {
            algo = algo + fatiar[e] + " "
        }
        prompt_saida.innerText = algo
    }

    function morse() {


        var fatiar = [tam]

        for (let i = 0; i < tam; i++) {
            fatiar[i] = texto[i]
        }

        for (let a = 0; a <= tam; a++) {
            if (fatiar[a] == "a") {
                fatiar[a] = ".-"
            }
            else if (fatiar[a] == "b") {
                fatiar[a] = "-..."
            }
            else if (fatiar[a] == "c") {
                fatiar[a] = "-.-."
            }
            else if (fatiar[a] == "d") {
                fatiar[a] = "-.."
            }
            else if (fatiar[a] == "e") {
                fatiar[a] = "."
            }
            else if (fatiar[a] == "f") {
                fatiar[a] = "..-."
            }
            else if (fatiar[a] == "g") {
                fatiar[a] = "--."
            }
            else if (fatiar[a] == "h") {
                fatiar[a] = "...."
            }
            else if (fatiar[a] == "i") {
                fatiar[a] = ".."
            }
            else if (fatiar[a] == "j") {
                fatiar[a] = ".---"
            }
            else if (fatiar[a] == "k") {
                fatiar[a] = "-.-"
            }
            else if (fatiar[a] == "l") {
                fatiar[a] = ".-.."
            }
            else if (fatiar[a] == "m") {
                fatiar[a] = "--"
            }
            else if (fatiar[a] == "n") {
                fatiar[a] = "-."
            }
            else if (fatiar[a] == "o") {
                fatiar[a] = "---"
            }
            else if (fatiar[a] == "p") {
                fatiar[a] = ".--."
            }
            else if (fatiar[a] == "q") {
                fatiar[a] = "--.-"
            }
            else if (fatiar[a] == "r") {
                fatiar[a] = ".-."
            }
            else if (fatiar[a] == "s") {
                fatiar[a] = "..."
            }
            else if (fatiar[a] == "t") {
                fatiar[a] = "-"
            }
            else if (fatiar[a] == "u") {
                fatiar[a] = "..-"
            }
            else if (fatiar[a] == "v") {
                fatiar[a] = "...-"
            }
            else if (fatiar[a] == "w") {
                fatiar[a] = ".--"
            }
            else if (fatiar[a] == "x") {
                fatiar[a] = "-..-"
            }
            else if (fatiar[a] == "y") {
                fatiar[a] = "-.--"
            }
            else if (fatiar[a] == "z") {
                fatiar[a] = "--.."
            }
            else if (fatiar[a] == "1") {
                fatiar[a] = ".----"
            }
            else if (fatiar[a] == "2") {
                fatiar[a] = "..---"
            }
            else if (fatiar[a] == "3") {
                fatiar[a] = "...--"
            }
            else if (fatiar[a] == "4") {
                fatiar[a] = "....-"
            }
            else if (fatiar[a] == "5") {
                fatiar[a] = "....."
            }
            else if (fatiar[a] == "6") {
                fatiar[a] = "-...."
            }
            else if (fatiar[a] == "7") {
                fatiar[a] = "--..."
            }
            else if (fatiar[a] == "8") {
                fatiar[a] = "---.."
            }
            else if (fatiar[a] == "9") {
                fatiar[a] = "----."
            }
            else if (fatiar[a] == "0") {
                fatiar[a] = "-----"
            }
            else if (fatiar[a] == " ") {
                fatiar[a] = " / "
            }
            else if (fatiar[a] == "é") {
                fatiar[a] = "."
            }
            else if (fatiar[a] == "ã") {
                fatiar[a] = ".-"
            }
            else if (fatiar[a] == "á") {
                fatiar[a] = ".-"
            }
            else if (fatiar[a] == "à") {
                fatiar[a] = ".-"
            }
            else if (fatiar[a] == "â") {
                fatiar[a] = ".-"
            }
            else if (fatiar[a] == "è") {
                fatiar[a] = "."
            }
            else if (fatiar[a] == "ê") {
                fatiar[a] = "."
            }
            else if (fatiar[a] == "ó") {
                fatiar[a] = "---"
            }
            else if (fatiar[a] == "ò") {
                fatiar[a] = "---"
            }
            else if (fatiar[a] == "õ") {
                fatiar[a] = "---"
            }
            else if (fatiar[a] == "ô") {
                fatiar[a] = "---"
            }
            else if (fatiar[a] == "í") {
                fatiar[a] = ".."
            }
            else if (fatiar[a] == "ì") {
                fatiar[a] = ".."
            }
            else if (fatiar[a] == "î") {
                fatiar[a] = ".."
            }
            else if (fatiar[a] == "ú") {
                fatiar[a] = "..-"
            }
            else if (fatiar[a] == "ù") {
                fatiar[a] = "..-"
            }
            else if (fatiar[a] == "û") {
                fatiar[a] = "..-"
            }
            else {
                fatiar[a] = ""
            }
        }

        var algo = ""
        for (let e = 0; e < tam; e++) {
            algo = algo + fatiar[e] + " "
        }
        prompt_saida.innerText = algo
    }








}


