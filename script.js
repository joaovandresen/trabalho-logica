const lampada = document.getElementById("lampada");

computador.addEventListener("mouseover",ligar);
computador.addEventListener("mouseout",desligar);

function acender(){
    lampada.src = "on.png";
    document.body.style.background = "#ffeb3b22"
}
function apagar(){
    lampada.src = "off.png";
    document.body.style.background = "#222"
    
}