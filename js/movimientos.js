/*
// Movimiento de las piezas
function drawSpaceCowbow () {
    document.getElementById('spaceCowbow').style.left = (spaceCowbow.x*50) + "px";
    document.getElementById('spaceCowbow').style.top = (spaceCowbow.y*50) + "px";
}
function drawRobotCoral () {
    document.getElementById('robotCoral').style.left = (robotCoral.x*50) + "px";
    document.getElementById('robotCoral').style.top = (robotCoral.y*50) + "px";
}
function drawRobotAzul () {
    document.getElementById('robotAzul').style.left = (robotAzul.x*50) + "px";
    document.getElementById('robotAzul').style.top = (robotAzul.y*50) + "px";
}
function drawRobotCeleste() {
    document.getElementById('robotCeleste').style.left = (robotCeleste.x*50) + "px";
    document.getElementById('robotCeleste').style.top = (robotCeleste.y*50) + "px";
}
function drawRobotVerde() {
    document.getElementById('robotVerde').style.left = (robotVerde.x*50) + "px";
    document.getElementById('robotVerde').style.top = (robotVerde.y*50) + "px";
}
*/
document.onkeydown = function(e){

    // Seleccionar Robot
    if (e.keyCode == 82){
        console.log(tablero);
        switch (selectedUnit) {
            case 'vacio':
                selectedUnit = 'Astronauta';
                console.log("cowbow seleccionado");
                break;
            case 'Astronauta':
                selectedUnit = 'Robot Coral';
                console.log("robot coral seleccionado");
                break;
            case 'Robot Coral':
                selectedUnit = 'Robot Azul';
                console.log("robot azul seleccionado");
                break;
            case 'Robot Azul':
                selectedUnit = 'Robot Morado';
                console.log("robot morado seleccionado");
                break;
            case 'Robot Morado':
                selectedUnit = 'Robot Celeste';
                console.log("robot celeste seleccionado");
                break;
            case 'Robot Celeste':
                selectedUnit = 'Robot Verde';
                console.log("robot verde seleccionado");
                break;
            case 'Robot Verde':
                selectedUnit = 'Astronauta';
                console.log("cowbow seleccionado");
                break;
            default:
                console.log("no entró a ningun case");
                break;
        }
    }

    // Cowbow Espacial
    if (selectedUnit == 'Astronauta') {
        console.log(selectedUnit);
        // Izquierda
        if (e.keyCode == 37){
            console.log("cowbow izquierda");
            // Desocupando la casilla x0
            tablero[spaceCowbow.y][spaceCowbow.x] = 1;
            // Moviendo la ficha
            while ((tablero[spaceCowbow.y][spaceCowbow.x-1] != 2) && spaceCowbow.x >= 0) {
                spaceCowbow.x--;
            }
            // Ocupando la casilla x1
            tablero[spaceCowbow.y][spaceCowbow.x] = 2;  
        }
        // Derecha
        if (e.keyCode == 39){
            console.log("cowbow derecha");
            // Desocupando la casilla x0
            tablero[spaceCowbow.y][spaceCowbow.x] = 1;
            // Moviendo la ficha
            while ((tablero[spaceCowbow.y][spaceCowbow.x+1] != 2) && spaceCowbow.x <= 5) {
                spaceCowbow.x++;
            }
            // Ocupando la casilla x1
            tablero[spaceCowbow.y][spaceCowbow.x] = 2;
        }
        // Arriba
        if (e.keyCode == 38){
            console.log("cowbow arriba");
            // Desocupando la casilla x0
            tablero[spaceCowbow.y][spaceCowbow.x] = 1;
            while ((tablero[spaceCowbow.y-1][spaceCowbow.x] != 2) && spaceCowbow.y >= 0) {
                spaceCowbow.y--;
            }
            // Ocupando la casilla x1
            tablero[spaceCowbow.y][spaceCowbow.x] = 2;
        }
        // Abajo
        if (e.keyCode == 40){
            console.log("cowbow abajo");
            // Desocupando la casilla x0
            tablero[spaceCowbow.y][spaceCowbow.x] = 1;
            // Moviendo la ficha
            while ((tablero[spaceCowbow.y+1][spaceCowbow.x] != 2) && spaceCowbow.y <= 5) {
                spaceCowbow.y++;
            }
            // Ocupando la casilla x1
            tablero[spaceCowbow.y][spaceCowbow.x] = 2;
        }
    }

    // RobotCoral
    if (selectedUnit == 'Robot Coral') {
        console.log(selectedUnit);
        // Izquierda
        if (e.keyCode == 37){
            console.log("robotCoral izquierda");
            // Desocupando la casilla x0
            tablero[robotCoral.y][robotCoral.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotCoral.y][robotCoral.x-1] != 2) && robotCoral.x >= 0) {
                robotCoral.x--;
            }
            // Ocupando la casilla x1
            tablero[robotCoral.y][robotCoral.x] = 2;
        }
        // Derecha
        if (e.keyCode == 39){
            console.log("robotCoral derecha");
            // Desocupando la casilla x0
            tablero[robotCoral.y][robotCoral.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotCoral.y][robotCoral.x+1] != 2) && robotCoral.x <= 5) {
                robotCoral.x++;
            }
            // Ocupando la casilla x1
            tablero[robotCoral.y][robotCoral.x] = 2;
        }
        // Arriba
        if (e.keyCode == 38){
            console.log("robotCoral arriba");
            // Desocupando la casilla x0
            tablero[robotCoral.y][robotCoral.x] = 1;
            while ((tablero[robotCoral.y-1][robotCoral.x] != 2) && robotCoral.y >= 0) {
                robotCoral.y--;
            }
            // Ocupando la casilla x1
            tablero[robotCoral.y][robotCoral.x] = 2;
        }
        // Abajo
        if (e.keyCode == 40){
            console.log("robotCoral abajo");
            // Desocupando la casilla x0
            tablero[robotCoral.y][robotCoral.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotCoral.y+1][robotCoral.x] != 2) && robotCoral.y <= 5) {
                robotCoral.y++;
            }
            // Ocupando la casilla x1
            tablero[robotCoral.y][robotCoral.x] = 2;
        }
    }

    // RobotAzul
    if (selectedUnit == 'Robot Azul') {
        console.log(selectedUnit);
        // Izquierda
        if (e.keyCode == 37){
            console.log("robotAzul izquierda");
            // Desocupando la casilla x0
            tablero[robotAzul.y][robotAzul.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotAzul.y][robotAzul.x-1] != 2) && robotAzul.x >= 0) {
                robotAzul.x--;
            }
            // Ocupando la casilla x1
            tablero[robotAzul.y][robotAzul.x] = 2;
        }
        // Derecha
        if (e.keyCode == 39){
            console.log("robotAzul derecha");
            // Desocupando la casilla x0
            tablero[robotAzul.y][robotAzul.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotAzul.y][robotAzul.x+1] != 2) && robotAzul.x <= 5) {
                robotAzul.x++;
            }
            // Ocupando la casilla x1
            tablero[robotAzul.y][robotAzul.x] = 2;
        }
        // Arriba
        if (e.keyCode == 38){
            console.log("robotAzul arriba");
            // Desocupando la casilla x0
            tablero[robotAzul.y][robotAzul.x] = 1;
            while ((tablero[robotAzul.y-1][robotAzul.x] != 2) && robotAzul.y >= 0) {
                robotAzul.y--;
            }
            // Ocupando la casilla x1
            tablero[robotAzul.y][robotAzul.x] = 2;
        }
        // Abajo
        if (e.keyCode == 40){
            console.log("robotAzul abajo");
            // Desocupando la casilla x0
            tablero[robotAzul.y][robotAzul.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotAzul.y+1][robotAzul.x] != 2) && robotAzul.y <= 5) {
                robotAzul.y++;
            }
            // Ocupando la casilla x1
            tablero[robotAzul.y][robotAzul.x] = 2;
        }
    }

    // RobotCeleste
    if (selectedUnit == 'Robot Celeste') {
        console.log(selectedUnit);
        // Izquierda
        if (e.keyCode == 37){
            console.log("robotCeleste izquierda");
            // Desocupando la casilla x0
            tablero[robotCeleste.y][robotCeleste.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotCeleste.y][robotCeleste.x-1] != 2) && robotCeleste.x >= 0) {
                robotCeleste.x--;
            }
            // Ocupando la casilla x1
            tablero[robotCeleste.y][robotCeleste.x] = 2;
        }
        // Derecha
        if (e.keyCode == 39){
            console.log("robotCeleste derecha");
            // Desocupando la casilla x0
            tablero[robotCeleste.y][robotCeleste.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotCeleste.y][robotCeleste.x+1] != 2) && robotCeleste.x <= 5) {
                robotCeleste.x++;
            }
            // Ocupando la casilla x1
            tablero[robotCeleste.y][robotCeleste.x] = 2;
        }
        // Arriba
        if (e.keyCode == 38){
            console.log("robotCeleste arriba");
            // Desocupando la casilla x0
            tablero[robotCeleste.y][robotCeleste.x] = 1;
            while ((tablero[robotCeleste.y-1][robotCeleste.x] != 2) && robotCeleste.y >= 0) {
                robotCeleste.y--;
            }
            // Ocupando la casilla x1
            tablero[robotCeleste.y][robotCeleste.x] = 2;
        }
        // Abajo
        if (e.keyCode == 40){
            console.log("robotCeleste abajo");
            // Desocupando la casilla x0
            tablero[robotCeleste.y][robotCeleste.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotCeleste.y+1][robotCeleste.x] != 2) && robotCeleste.y <= 5) {
                robotCeleste.y++;
            }
            // Ocupando la casilla x1
            tablero[robotCeleste.y][robotCeleste.x] = 2;
        }
    }

    // RobotCeleste
    if (selectedUnit == 'Robot Verde') {
        console.log(selectedUnit);
        // Izquierda
        if (e.keyCode == 37){
            console.log("robotVerde izquierda");
            // Desocupando la casilla x0
            tablero[robotVerde.y][robotVerde.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotVerde.y][robotVerde.x-1] != 2) && robotVerde.x >= 0) {
                robotVerde.x--;
            }
            // Ocupando la casilla x1
            tablero[robotVerde.y][robotVerde.x] = 2;
        }
        // Derecha
        if (e.keyCode == 39){
            console.log("robotVerde derecha");
            // Desocupando la casilla x0
            tablero[robotVerde.y][robotVerde.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotVerde.y][robotVerde.x+1] != 2) && robotVerde.x <= 5) {
                robotVerde.x++;
            }
            // Ocupando la casilla x1
            tablero[robotVerde.y][robotVerde.x] = 2;
        }
        // Arriba
        if (e.keyCode == 38){
            console.log("robotVerde arriba");
            // Desocupando la casilla x0
            tablero[robotVerde.y][robotVerde.x] = 1;
            while ((tablero[robotVerde.y-1][robotVerde.x] != 2) && robotVerde.y >= 0) {
                robotVerde.y--;
            }
            // Ocupando la casilla x1
            tablero[robotVerde.y][robotVerde.x] = 2;
        }
        // Abajo
        if (e.keyCode == 40){
            console.log("robotVerde abajo");
            // Desocupando la casilla x0
            tablero[robotVerde.y][robotVerde.x] = 1;
            // Moviendo la ficha
            while ((tablero[robotVerde.y+1][robotVerde.x] != 2) && robotVerde.y <= 5) {
                robotVerde.y++;
            }
            // Ocupando la casilla x1
            tablero[robotVerde.y][robotVerde.x] = 2;
        }
    }

    drawTablero();
    drawSpaceCowbow();
    drawRobotCoral();
    drawRobotAzul();
    drawRobotCeleste();
    drawRobotVerde();

}