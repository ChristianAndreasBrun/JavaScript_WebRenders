// - Variables
let canvas =  document.getElementById("canvas")
let ctx = canvas.getContext("2d")

// Metodos y Propiedads para Dibujar formas
// ctx.fillStyle = "#583097"
// ctx.fillRect(5,5,200,200)
// ctx.clearRect(15,15,80,80)

function draw() {
    ctx.fillStyle = "#583097"
    ctx.fillRect(5,5,200,200)
}

function erase() {
    ctx.clearRect(15,15,80,80)
}


// - Metodo: forEach
let nums = ["uno", "dos", "tres"]

let nombres = ["Pepe", "Antonio", "Lucia"]
nombres.forEach(function tuNombre(nombre) {
    // alert(nombre)
})

// - Metodo: Split
function splitDemo() {
    let cadena = "Hello World"
    let valores = cadena.split('l')
    alert(valores)
}
// splitDemo()

// - Declaracion de Variables
let nombre = "Pepe"
let apellido = "Gomez"
let nickname = "WildCat"

// - Objeto literal => namespacing
let persona = {
    nombre: "Pepe",
    apellido: "Gomez",
    nickname: "WildCat",
    saludo: function Hello() {
       alert(persona.nickname + " " + persona.apellido) 
    }
}
persona.saludo()

// - Funccion SetTimeout
// setTimeout(function, ms)


// - Metodo: Splice
let frutas = ["manzanas", "peras", "uvas"]
// Añade o elimina elementos de un Array
frutas.splice (2, 0, "limones", "kiwis")
// Devuele en el Array: Añade elemento/elementos => ["manzanas", "peras", "limones", "kiwis", "uvas"]

frutas.splice (2, 2)
// Devuelve en el Array: Borra elemento/elementos => ["manzanas", "peras", "uvas"]