// - Objeto Graficos! -
let graficos = {
    canvas: document.getElementById("canvas"),
    sizeCuadro: 30,

    // - Dibuja Tablero
    drawBoard: function(ctx) {
        // let ctx = graficos.canvas.getContext("2d")    
        let actualY = 0
        game.tablero.forEach(function checkLine(line) {
            line = line.split('')
            let actualX = 0
            line.forEach(function checkChar(character) {
                if (character == "#") {
                    ctx.fillStyle = "black"
                    ctx.fillRect(actualX, actualY, graficos.sizeCuadro, graficos.sizeCuadro)
                }
                actualX += graficos.sizeCuadro
            })
            actualY += graficos.sizeCuadro
        })
    },

    // - Dibuja Serpiente y Fruta
    drawing: function(ctx, draw, color) {
        draw.forEach(function(parte) {
            let parteXloc = parte.x * graficos.sizeCuadro
            let parteYloc = parte.y * graficos.sizeCuadro
            ctx.fillStyle = color
            ctx.fillRect (parteXloc, parteYloc, graficos.sizeCuadro, graficos.sizeCuadro)
        })
    },

    // - Dibuja Juego
    drawGame: function() {
        let ctx = graficos.canvas.getContext("2d")
        ctx.clearRect(0, 0, graficos.canvas.width, graficos.canvas.height)
        graficos.drawBoard(ctx)
        graficos.drawing(ctx, game.fruit, "#CC2E48")
        graficos.drawing(ctx, snake.partes, "#2ECC2E")
    }
}

// - Objeto Game! -
let game = {
    tickCount: 0,
    timer: null,
    score: 0,

    tablero: 
    [
        "#######################",
        "#                     #",
        "#                     #",
        "#                     #",
        "#                     #",
        "#        #####        #",
        "#        #####        #",
        "#        #####        #",
        "#                     #",
        "#                     #",
        "#                     #",
        "#                     #",
        "#######################"
    ],

    fruit: 
    [
        {x:1, y:1}
    ],

    tick: function() {
        // - Cancelar el Timeout para no accelerar la serpiente
        window.clearTimeout(game.timer)
        game.tickCount++
        if (game.tickCount % 10 == 0) {
            game.newFruit()
        }
        let result = snake.mover()
        if (result == "gameover") {
            alert("Game Over : Score " + game.score)
            return
        }
        graficos.drawGame()
        game.timer = window.setTimeout("game.tick()", 500)
    },


    newFruit: function() {
        let randomY = Math.floor(Math.random() * game.tablero.length) + 0
        let randomX = Math.floor(Math.random() * game.tablero[randomY].length) + 0
        let randomPosition = {x: randomX, y: randomY}
        if (game.freePosition(randomPosition) && !game.isFruit(randomPosition)) {
            game.fruit.push(randomPosition)
        }
    },
    freePosition: function(position) {
        return game.tablero[position.y][position.x] == ' '
    },
    isWall: function(position) {
        return game.tablero[position.y][position.x] == '#'
    },
    isFruit: function(position) {
        for (let numFruit = 0; numFruit < game.fruit.length; numFruit++) {
            let fruit = game.fruit[numFruit]
            if (position.x == fruit.x && position.y == fruit.y) {
                game.fruit.splice(numFruit, 1)
                return true
            }
        }
        return false
    },
    isSnake: function(position) {
        for (let parteSnake = 0; parteSnake < snake.partes.length; parteSnake++) {
            let parte = snake.partes[parteSnake]
            if (position.x == parte.x && position.y == parte.y) {
                return true
            }
        }
        return false
    }
}


// - Objeto Snake! -
let snake = {
    partes: 
    [
        {x:4, y:2},
        {x:3, y:2},
        {x:2, y:2}
    ],
    direccion: "E",
    mover: function() {
        let position = snake.nextPosition()
        if (game.isWall(position) || game.isSnake(position)) {
            return "gameover"
        }
        if (game.freePosition(position)) {
            snake.partes.unshift(position)
            snake.partes.pop()
        }
        if (game.isFruit(position)) {
            snake.partes.unshift(position)
            game.score++
            // alert ("Fruta!!")
        }
    },
    nextPosition: function() {
        let cabeza = snake.partes[0]
        let objetivoX = cabeza.x
        let objetivoY = cabeza.y
        objetivoY = snake.direccion == "N" ? objetivoY -1: objetivoY
        objetivoY = snake.direccion == "S" ? objetivoY +1: objetivoY
        objetivoX = snake.direccion == "O" ? objetivoX -1: objetivoX
        objetivoX = snake.direccion == "E" ? objetivoX +1: objetivoX 
        return {x: objetivoX, y: objetivoY}
    },
}


// - Control del Juego! -
let gameControl = {
    startGame: function() {
        window.addEventListener("keydown", gameControl.processInput)
        game.tick()
    },
    processInput: function(control) {
        let tecla = control.key.toLowerCase()
        let direccionObjetivo = snake.direccion
        if (tecla == "w" && snake.direccion != "S") direccionObjetivo = "N"
        if (tecla == "s" && snake.direccion != "N") direccionObjetivo = "S"
        if (tecla == "a" && snake.direccion != "E") direccionObjetivo = "O"
        if (tecla == "d" && snake.direccion != "O") direccionObjetivo = "E"
        snake.direccion = direccionObjetivo
        // game.tick() 
    }
}


// - Funcciones de Llamada! -
gameControl.startGame()