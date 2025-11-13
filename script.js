const computador = document.getElementById("computador");

function ligar(){

    computador.src = "on.jpg"; 
    document.body.style.background = "#00000022"
}
function desligar(){
    computador.src = "off.jpg"; 
    document.body.style.background = "#000000ff"
}