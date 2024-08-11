
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
    var prompt_saida = document.getElementById('prompt_saida')
    

    var numeros = document.getElementsByName('numbers')

    var numero
    for (let i = 0; i <= 25; i++) {
        if (numeros[i].checked) {
            numero = i + 1
            break
        }
    }

    const letraNumero = {
        'a': 1, 'á': 1, 'à': 1, 'ä': 1, 'b': 2, 'c': 3, 'ç': 3,
        'd': 4, 'e': 5, 'é': 5, 'è': 5, 'ë': 5, 'f': 6,
        'g': 7, 'h': 8, 'i': 9, 'í': 9, 'ì': 9, 'ï': 9,
        'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14,
        'o': 15, 'ó': 15, 'ò': 15, 'ö': 15, 'p': 16, 'q': 17,
        'r': 18, 's': 19, 't': 20, 'u': 21, 'ú': 21,
        'ù': 21, 'ü': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25,
        'z': 26, '!': '', '@': '', '#': '',
        '$': '', '%': '', '¨': '', '&': '', '*': '',
        '(': '', ')': '', '_': '', '-': '', '+': '', '´': '',
        '=': '', '[': '', '{': '', ']': '', '}': '',
        '\\': '', '|': '', ';': '', ':': '', '\'': '',
        '"': '', ',': '', '<': '', '.': '', '>': '',
        '/': '', '?': '', '`': '', '~': '', '§': '',
        'ª': '', 'º': '', '^': '', '0': '', '1': '', '2': '',
        '3': '', '4': '', '5': '', '6': '', '7': '', '8': '', '9': '',
        '¹': '', '²': '', '³': '', '£': '', '¬': ''
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
        prompt_saida.innerText = morseDecrypt(texto)

    }
    if (codigo_binario.checked) {
        prompt_saida.innerText = binarioDecrypt(texto)
    }
    if (cifra_cesar.checked) {
        prompt_saida.innerText = cesarDecrypt(texto, numero)
    }
    if (aes.checked) {

    }

    function binarioDecrypt(vetor) {
        let fatira2 = []

            // Step 1: Filter out non-binary characters from the input
            for (let i = 0; i < vetor.length; i++) {
                if (vetor[i] === "0" || vetor[i] === "1") {
                    fatira2.push(vetor[i])
                }
            }

            // Step 2: Divide the binary string into chunks of 8 bits
            let fatiar = []
            for (let i = 0; i < fatira2.length; i += 8) {
                let chunk = fatira2.slice(i, i + 8).join('')
                fatiar.push(chunk)
            }

        

        const binaryHash = {
            // Lowercase letters
            "01100001": "a", "01100010": "b", "01100011": "c", "01100100": "d",
            "01100101": "e", "01100110": "f", "01100111": "g", "01101000": "h",
            "01101001": "i", "01101010": "j", "01101011": "k", "01101100": "l",
            "01101101": "m", "01101110": "n", "01101111": "o", "01110000": "p",
            "01110001": "q", "01110010": "r", "01110011": "s", "01110100": "t",
            "01110101": "u", "01110110": "v", "01110111": "w", "01111000": "x",
            "01111001": "y", "01111010": "z",

            // Uppercase letters
            "01000001": "A", "01000010": "B", "01000011": "C", "01000100": "D",
            "01000101": "E", "01000110": "F", "01000111": "G", "01001000": "H",
            "01001001": "I", "01001010": "J", "01001011": "K", "01001100": "L",
            "01001101": "M", "01001110": "N", "01001111": "O", "01010000": "P",
            "01010001": "Q", "01010010": "R", "01010011": "S", "01010100": "T",
            "01010101": "U", "01010110": "V", "01010111": "W", "01011000": "X",
            "01011001": "Y", "01011010": "Z",

            // Digits
            "00110000": "0", "00110001": "1", "00110010": "2", "00110011": "3",
            "00110100": "4", "00110101": "5", "00110110": "6", "00110111": "7",
            "00111000": "8", "00111001": "9",

            // Special characters
            "00100000": " ", "00100001": "!", "00100010": "\"", "00100011": "#",
            "00100100": "$", "00100101": "%", "00100110": "&", "00100111": "'",
            "00101000": "(", "00101001": ")", "00101010": "*", "00101011": "+",
            "00101100": ",", "00101101": "-", "00101110": ".", "00101111": "/",
            "00111010": ":", "00111011": ";", "00111100": "<", "00111101": "=",
            "00111110": ">", "00111111": "?", "01000000": "@", "01011011": "[",
            "01011100": "\\", "01011101": "]", "01011110": "^", "01011111": "_",
            "01100000": "`", "01111011": "{", "01111100": "|", "01111101": "}"
        }



        let algo = "";
        for (let i = 0; i < fatiar.length; i++) {
            if (binaryHash.hasOwnProperty(fatiar[i])) {
                algo += binaryHash[fatiar[i]]
            }
        }
    
        return algo;
    }



    function cesarDecrypt(vetor, escolhido) {
        var escolhido
        var fatiar = [vetor.length]

        for (let i = 0; i < vetor.length; i++) {
            fatiar[i] = texto[i]
        }

        
        for (let a = 0; a <= vetor.length; a++) {

            fatiar[a] = letraNumero[fatiar[a]]

            if (fatiar[a] - escolhido < 1) {

                fatiar[a] += -escolhido + 26

                fatiar[a] = numeroLetra[fatiar[a]]
            }
            else if (fatiar[a] != undefined || fatiar[a] != " ") {
                fatiar[a] -= escolhido
                fatiar[a] = numeroLetra[fatiar[a]]
            } else {
                fatiar[a] = ""
            }


        }



        var algo = ""
        for (let e = 0; e < vetor.length; e++) {
            if (fatiar[e] == undefined) {
                algo += " "
            } else {
                algo = algo + fatiar[e] + ""
            }

        }
        return algo

    }

    function morseDecrypt(vetor) {





        var text = ""




        var fatiar = [vetor.length]

        for (let i = 0; i <= a; i++) {
            fatiar[i] +=vetor[i]
        }
        const morseToCharMap = {
            ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
            "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
            "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
            ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
            "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
            "--..": "z", ".----": "1", "..---": "2", "...--": "3", "....-": "4",
            ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9",
            "-----": "0", " / ": " ", ".": "é", ".-": "ã", ".-": "á",
            ".-": "à", ".-": "â", ".": "è", ".": "ê", "---": "ó",
            "---": "ò", "---": "õ", "---": "ô", "..": "í", "..": "ì",
            "..": "î", "..-": "ú", "..-": "ù", "..-": "û"
        }

        

        for (let i = 0; i <= a; i++) {
            text +=fatiar[i]
        }
        return text
    }





}


