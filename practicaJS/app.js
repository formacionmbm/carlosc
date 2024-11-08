function toUpperCase(){
let texto=document.getElementById("texto").value;
    //Cambiamos el texto a mayúsculas
     document.getElementById("texto").value=texto.toUpperCase();
}

function toUpperCasePropioElemento(element){
     //Cambiamos el texto a mayúsculas
element.value=element.value.toUpperCase();
}


let element = document.getElementById("texto");
elemento.addEventListener("onkeyup",() => toUpperCasePropioElemento(this))