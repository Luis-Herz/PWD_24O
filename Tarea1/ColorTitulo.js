const titulo1 = document.querySelector(".cabecera");

function cambiarColor(color){
    if (titulo1.style.color != color){
        titulo1.style.color = color;
    } else {
        titulo1.style.color = 'black';
    }
}

const globo = document.getElementById("globo");
let tamano = 15;
globo.addEventListener("click", function cambiaTam(){
    if(globo.style.fontSize >= "80px"){
        globo.textContent = "💥";
    } else {
        tamano = tamano + 10;
        globo.style.fontSize = tamano + "px";
        console.log(tamano);
    }
});

