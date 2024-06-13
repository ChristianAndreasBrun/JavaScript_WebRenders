// - Game Mechanism! : Tres en Raya -

// - Variables
let actualPlayer = "0"
let victory = false

// - Funcciones
function position(celda) {
    // alert("Estas aqui!")
    // - Comprueba si hay algo diferente a nada (!= "vacio")
    // if (celda.innerHTML != "") return   // => este "return" es parecido a un "break;"
    
    // - Condicion para dibujar en la celda con 0 o X con "if-else"
    // celda.innerHTML = actualPlayer
    // if (actualPlayer == "0") {
    //     actualPlayer = "X"
    // }
    // else {
    //     actualPlayer = "0"
    // }


    if(celda.innerHTML != "" || victory) return
    // - Optimiza la condicion con un operador ternario "? => if-else"
    celda.innerHTML = actualPlayer
    actualPlayer == "0" ? actualPlayer = "X" : actualPlayer = "0"

    checkBoard();
}


// condicion ? expr1 : expr2
// - Codicion para combrobar las filas del Tablero
function checkBoard() {

    // for() => Inicializacion; Codicion; Incremento
    for (let i = 0; i <= 2; i++) {
        // - Comprobar la primera fila
        // let uno = document.getElementById("0_" +i).innerHTML
        // let dos = document.getElementById("1_" +i).innerHTML
        // let tres = document.getElementById("1_" +i).innerHTML

        // if (uno == "") continue
        // if (uno == dos && uno == tres) {
        //     alert("Has Ganado!")
        // }

        // - Comprueba las fials (Optimizado)
        checkWinner(document.getElementById("0_" +i).innerHTML, 
        document.getElementById("1_" +i).innerHTML, 
        document.getElementById("2_" +i).innerHTML)
        
        // - Comprueba las columnas (Optimizado)
        checkWinner(document.getElementById(i+ "_0").innerHTML, 
        document.getElementById(i+ "_1").innerHTML, 
        document.getElementById(i+ "_2").innerHTML)
    }

    // - Comprueba la primera diagonal (Optimizado)
    checkWinner(document.getElementById("0_0").innerHTML, 
    document.getElementById("1_1").innerHTML, 
    document.getElementById("2_2").innerHTML)

    // - Comprueba la segunda diagonal (Optimizado)
    checkWinner(document.getElementById("2_0").innerHTML, 
    document.getElementById("1_1").innerHTML, 
    document.getElementById("0_2").innerHTML)


    // for (let i = 0; i <= 2; i++) {
    //     // - Comprobar la primera columna
    //     // let uno = document.getElementById(`${i}_0`).innerHTML
    //     let uno = document.getElementById(i+ "_0").innerHTML
    //     let dos = document.getElementById(i+ "_1").innerHTML
    //     let tres = document.getElementById(i+ "_2").innerHTML

    //     if (uno == "") continue
    //     if (uno == dos && uno == tres) {
    //         alert("Has Ganado!")
    //     }
    // }
    // // - Comprueba la primera diagonal
    // let unoD1 = document.getElementById("0_0").innerHTML
    // let dosD1 = document.getElementById("1_1").innerHTML
    // let tresD1 = document.getElementById("2_2").innerHTML
    // if (unoD1 != "" && unoD1 == dosD1 && unoD1 == tresD1) {
    //     alert("Has Ganado!")
    // }
    // // - Comprueba la segunda diagonal
    // let unoD2 = document.getElementById("2_0").innerHTML
    // let dosD2 = document.getElementById("1_1").innerHTML
    // let tresD2 = document.getElementById("0_2").innerHTML
    // if (unoD2 != "" && unoD2 == dosD2 && unoD2 == tresD2) {
    //     alert("Has Ganado!")
    // }
}


// - Codicion para combrobar en el Tablero si hay un Ganador
function checkWinner(uno, dos, tres) {
    if (uno != "" && uno == dos && uno == tres) {
        alert("HAS GANADO!")
        victory = true
    }
}