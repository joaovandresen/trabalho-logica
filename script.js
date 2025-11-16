const computador = document.getElementById("computador");
computador.addEventListener("mouseover",ligar);
computador.addEventListener("mouseout",desligar);

function ligar(){

    computador.src = "on.jpg"; 
    document.body.style.background = "#00000ff"
}
function desligar(){
    computador.src = "off.jpg"; 
    document.body.style.background = "#000000ff"
}