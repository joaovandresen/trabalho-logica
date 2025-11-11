const lampada = document.getElementById("lampada");

opcao1.addEventListener("mouseover",opcao1);
opcao2.addEventListener("mouseout",opcao2);
opcao3.addEventListener("mouseover",opcao3);
opcao4.addEventListener("mouseout", opcao4);

function opcao1(){
    lampada.src = "on.png";
    document.body.style.background = "#b1b1b1ff"
}
function opcao2(){
    lampada.src = "off.png";
    document.body.style.background = "#b1b1b1ff"
    
}
function opcao3(){
    opcao3.src = "imagem3.png"
    document.body.style.background = "#a5a5a5ff"
}
function opcao4(){
    opcao4.src = "imagem4.png"
    document.body.style.background = "#979797ff"
}
function opcao5(){
    opcao5.src = "imagem5.png"
    document.body.style.background = "#cfcfcfff"
}

