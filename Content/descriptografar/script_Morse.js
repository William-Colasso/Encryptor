
function encriptar() {
    var codigo_morse = document.getElementById('codigo-morse')

    if (codigo_morse.checked) {
        morse()

    }
    
    function morse() {
        var text = document.getElementById('prompt_entrada').value

        var texto = String(text)
        texto = texto.toLowerCase()
        var prompt_saida = document.getElementById('prompt_saida')



        var tam = parseInt(texto.length)
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


