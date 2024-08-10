
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
    
    var prompt_saida = document.getElementById('prompt_saida')
    var tam = parseInt(texto.length)

    var prompt_auxiliar = document.getElementById("prompt_auxiliar").value
    var typeAES = document.getElementsByName('typeAES')
    var numeros = document.getElementsByName('numbers')
    var numero 
    for (let i = 0; i <= 25; i++) {
        if (numeros[i].checked) {
            numero = i + 1
            break
        }
    }


    const letraNumero = {
        'a': 1, 'á': 1, 'à': 1,'ä':1, 'b': 2, 'c': 3,'ç':3,
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
        prompt_saida.innerText = morseEncrypt(texto)

    }
    if (codigo_binario.checked) {
        prompt_saida.innerText = binarioEncrypt(texto)
    }
    if (cifra_cesar.checked) {
        prompt_saida.innerText = cesarEncrypt(texto, numero)
    }
    if(aes.checked){
        prompt_saida.innerText = window.crypto.subtle.encrypt(AES)
    }

    function cesarEncrypt(vetor, escolhido) {
        var fatiar = [tam]

        for (let i = 0; i < tam; i++) {
            fatiar[i] = vetor[i]
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
        return algo

    }

    function binarioEncrypt(vetor) {

        var fatiar = [vetor.length]

        for (let a = 0; a < tam; a++) {
            fatiar[a] = texto[a]
        }

        const binaryHash = {
            // Letras em Caixa baixa
            "a": "01100001", "b": "01100010", "c": "01100011", "d": "01100100",
            "e": "01100101", "f": "01100110", "g": "01100111", "h": "01101000",
            "i": "01101001", "j": "01101010", "k": "01101011", "l": "01101100",
            "m": "01101101", "n": "01101110", "o": "01101111", "p": "01110000",
            "q": "01110001", "r": "01110010", "s": "01110011", "t": "01110100",
            "u": "01110101", "v": "01110110", "w": "01110111", "x": "01111000",
            "y": "01111001", "z": "01111010",
        
            // Letras em Caixa alta
            "A": "01000001", "B": "01000010", "C": "01000011", "D": "01000100",
            "E": "01000101", "F": "01000110", "G": "01000111", "H": "01001000",
            "I": "01001001", "J": "01001010", "K": "01001011", "L": "01001100",
            "M": "01001101", "N": "01001110", "O": "01001111", "P": "01010000",
            "Q": "01010001", "R": "01010010", "S": "01010011", "T": "01010100",
            "U": "01010101", "V": "01010110", "W": "01010111", "X": "01011000",
            "Y": "01011001", "Z": "01011010",
        
            // Algarismos
            "0": "00110000", "1": "00110001", "2": "00110010", "3": "00110011",
            "4": "00110100", "5": "00110101", "6": "00110110", "7": "00110111",
            "8": "00111000", "9": "00111001",
        
            // Caracteres Especiais
            " ": "00100000", "!": "00100001", "\"": "00100010", "#": "00100011",
            "$": "00100100", "%": "00100101", "&": "00100110", "'": "00100111",
            "(": "00101000", ")": "00101001", "*": "00101010", "+": "00101011",
            ",": "00101100", "-": "00101101", ".": "00101110", "/": "00101111",
            ":": "00111010", ";": "00111011", "<": "00111100", "=": "00111101",
            ">": "00111110", "?": "00111111", "@": "01000000", "[": "01011011",
            "\\": "01011100", "]": "01011101", "^": "01011110", "_": "01011111",
            "`": "01100000", "{": "01111011", "|": "01111100", "}": "01111101",
            "~": "01111110",
        
            // Caracteres Acentuados
            "é": "11101001", "ã": "11100011", "á": "01100001",
            "à": "01100001", "â": "01100001", "è": "01100101",
            "ê": "01100101", "ó": "01101111", "ò": "01101111",
            "õ": "01101111", "ô": "01101111", "í": "01101001",
            "ì": "01101001", "î": "01101001", "ú": "01110101",
            "ù": "01110101", "û": "01110101"
        }
        

        for (let a = 0; a < fatiar.length; a++) {
            if (binaryHash.hasOwnProperty(fatiar[a])) {
                fatiar[a] = binaryHash[fatiar[a]];
            } else {
                fatiar[a] = "" 
            }
        }

        var algo = ""
        for (let e = 0; e < tam; e++) {
            algo = algo + fatiar[e] + " "
        }
        return algo
    }

    function morseEncrypt(vetor) {


        var fatiar = [vetor.length]

        for (let a = 0; a < vetor.length; a++) {
            fatiar[a] = vetor[a]
        }

        const morseHash = {
            "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".",
            "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
            "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",
            "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-",
            "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--",
            "z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
            "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
            "0": "-----", " ": " / ", "é": ".", "ã": ".-", "á": ".-", 
            "à": ".-", "â": ".-", "è": ".", "ê": ".", "ó": "---", 
            "ò": "---", "õ": "---", "ô": "---", "í": "..", "ì": "..",
            "î": "..", "ú": "..-", "ù": "..-", "û": "..-"
        }

        for (let a = 0; a < fatiar.length; a++) {
            if (morseHash.hasOwnProperty(fatiar[a])) {
                fatiar[a] = morseHash[fatiar[a]];
            } else {
                fatiar[a] = "" 
            }
        }

        var algo = ""
        for (let a = 0; a < tam; a++) {
            algo = algo + fatiar[a] + " "
        }
        return algo
    }



}


