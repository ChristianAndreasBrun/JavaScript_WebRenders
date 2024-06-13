// alert("Bienvenido a la pagina web")
// document.querySelector('.contador').innerHTML = 5

// LISTA DE EJECUCIONES:
// 1. Variable - Almacenar el valor del contador
// 2. Restaurar el contador a 0
// 3. Listen el click del boton
// 4. Incremetar el contador con cada click
// 5. Modificar el HTML del contador con el nuevo valor


// Variable
let count = 0

// Funccion de incremento
function increase() {
    if (count < 10) {
        count++
        document.querySelector('.contador').innerHTML = count
    }
    else {
        document.querySelector('.contador').innerHTML = "Aforo Completo"
    }
}
// Funccion de decremento
function decrement() {
    if (count > 0) {
        count--
        document.querySelector('.contador').innerHTML = count
    }
}
// Funcicon de restaurar
function reset() {
    count = 0
    document.querySelector('.contador').innerHTML = count
}