let btnEncriptar = document.querySelector(".encriptador-izq-btn1");
let textoIzq = document.querySelector('.encriptador-izq-input-texto');
let textoEncriptado;
btnEncriptar.addEventListener("click",function(){
    document.getElementById("contenedor1").style.display = "none";
    document.getElementById("contenedor2").style.display = "flex";
    textoAEncriptar = textoIzq.value;
    encriptador(textoIzq.value);
    textoIzq.value = "";
})

function encriptador(textoAEncriptar){
    let resultado = "";
    for (let index = 0; index < textoAEncriptar.length; index++) {
        switch (textoAEncriptar[index]) {
            case 'e':
                resultado += "enter";
                break;
            case 'i':
                resultado += "imes";
                break;
            case 'a':
                resultado += "ai";
                break;
            case 'o':
                resultado += "ober";
                break;
            case 'u':
                resultado += "ufat";
                break;
            default:
                resultado += textoAEncriptar[index];
                break;
        }
    }
    document.querySelector('.encriptador-der-input-texto').value = resultado;
}

const btnCopiar = document.querySelector(".encriptador-der-btn");

btnCopiar.addEventListener('click',function(){
    let inputTexto = document.querySelector('.encriptador-der-input-texto');
    navigator.clipboard.writeText(inputTexto.value);
    alert(`Texto copiado ${inputTexto.value}`);
    inputTexto.value = '';
})

const btnDesencriptar = document.querySelector('.encriptador-izq-btn2');

btnDesencriptar.addEventListener('click',function(){
    document.getElementById("contenedor1").style.display = "none";
    document.getElementById("contenedor2").style.display = "flex";
    let textoADesencriptar = textoIzq.value;
    desencriptador(textoADesencriptar);
    textoIzq.value = ""; 
})

function desencriptador(textoADesencriptar){
    let resultado = textoADesencriptar;
    let array, regex;
    regex = /enter/g;
    resultado = cambiarTexto(resultado,regex,"enter",'e');
    // if(resultado.search(/enter/g) > 0){
    //     array = [...resultado.matchAll(/enter/g)];
    //     console.log(array);
    //     for (let i = 0; i < array.length; i++) {
    //         resultado = resultado.replace("enter", "e");
    //     }
    //     // console.log(resultado);
    // }
    regex = /imes/g;
    resultado = cambiarTexto(resultado,regex,"imes",'i');
    regex = /ai/g;
    resultado = cambiarTexto(resultado,regex,"ai",'a');
    regex = /ober/g;
    resultado = cambiarTexto(resultado,regex,"ober",'o');
    regex = /ufat/g;
    resultado = cambiarTexto(resultado,regex,"ufat",'u');
    document.querySelector('.encriptador-der-input-texto').value = resultado;
}


function cambiarTexto(texto,regex,palabra,letra){
    if (texto.search(regex) > 0) {
      const array = [...texto.matchAll(regex)];
      for (let i = 0; i < array.length; i++) {
        texto = texto.replace(palabra, letra);
        console.log(texto);
      }
    }
    return texto;
}