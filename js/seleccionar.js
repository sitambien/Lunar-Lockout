document.getElementById("spaceCowbow").addEventListener("click", function(){ selectedUnit = 'Astronauta'; drawSelector(); });
document.getElementById("robotCoral").addEventListener("click", function(){ selectedUnit = 'Robot Coral'; drawSelector(); });
document.getElementById("robotAzul").addEventListener("click", function(){ selectedUnit = 'Robot Azul'; drawSelector(); });
document.getElementById("robotVerde").addEventListener("click", function(){ selectedUnit = 'Robot Verde'; drawSelector(); });
document.getElementById("robotCeleste").addEventListener("click", function(){ selectedUnit = 'Robot Celeste'; drawSelector(); });

/*
function drawSelector() {

    output = "<p>La pieza seleccionada es: </br><span class='selector'>"+selectedUnit+"</span></p>";
    document.getElementById('selector').innerHTML = output;
 
}
*/

function drawSelector() {

    output = selectedUnit;
    document.getElementById('seleccionado').innerHTML = output;
 
}
