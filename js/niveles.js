/*
// Terminología para el juego
let dicionarioJuego = {
    0: 'escotilla',
    1: 'puntos',
    2: 'posicionOcupada',
    3: 'spaceCowbow',
    4: 'robotAzul',
    5: 'robotMorado',
    6: 'robotCeleste',
    7: 'robotVerde',
    8: 'robotMagenta',
    9: 'robotCoral',
}

// Diseño inicial del tablero
let tablero = [
    [2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 0, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2]
];

// Pasar el tablero al HTML 
function drawTablero() {

    output = "";
    let valorx;
    let valory;

    for(let y = 0; y < tablero[0].length; y++) {
        valory = y;
        output += "<div class='column'>"
        for(var x = 0; x < tablero.length; x++) {
            valorx = x;
            output += "<div class='"+dicionarioJuego[tablero[valorx][valory]]+"'></div>"
        }
        output += "</div>"
    }
    document.getElementById('tablero').innerHTML = output;
}


// INTERMEDIATE
// Nivel 11

// Dando nuevos valores a las unidades
let spaceCowbow = {
    x: 5,
    y: 5
}
let robotCoral = {
    x: 5,
    y: 1
}
let robotAzul = {
    x: 3,
    y: 2
}
let robotCeleste = {
    x: 2,
    y: 3
}
let robotVerde = {
    x: 4,
    y: 4
}

// Ocupando los espacios iniciales
tablero[spaceCowbow.y][spaceCowbow.x] = 2;
tablero[robotCoral.y][robotCoral.x] = 2;
tablero[robotAzul.y][robotAzul.x] = 2;
tablero[robotCeleste.y][robotCeleste.x] = 2;
tablero[robotVerde.y][robotVerde.x] = 2;

// Pasar el HTML el tablero Inicial
drawTablero();
drawSpaceCowbow();
drawRobotCoral();
drawRobotAzul();
drawRobotCeleste();
drawRobotVerde();
*/