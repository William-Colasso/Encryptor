
function encriptar() {
    var codigo_morse = document.getElementById('codigo-morse')

    if (codigo_morse.checked) {
        morse()

    }

    function morse() {
        var texto = ".--- .- ...- .- / .-. ..- .. --"
        var fatiar = [""]
        var tam = texto.length
        var a = 0
        var text = ""

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
        alert(text)
    }





}


