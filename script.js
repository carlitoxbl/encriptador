function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLocaleLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");//la i es para que afecte tanto a mayusculas como a minusculas
    //la g es para que afecte toda la linea u oracion
    //la m es para que afecte todo el parafo
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    //la primera vez se deposita la vaiable texto en txtcifrado para que ella vaya guardando los cambios..osea en el primera guardara el reemplazo de las e y las guardara en txtCifrado y despues txtCifrado se reemplazaran las "o" y asi//
    document.getElementById("imgDer").style.display = "none";//para cuando se haga clic se borre la imagen de la caja de la caja
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;//para q aparezca en la caja de texto el resultado del input
    document.getElementById("copiar").style.display = "show";//esto lo coloco para que el boton solo aparezca si hay texto q copiar
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLocaleLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    //la i es para que afecte tanto a mayusculas como a minusculas
    //la g es para que afecte toda la linea u oracion
    //la m es para que afecte todo el parafo
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    //la primera vez se deposita la vaiable texto en txtcifrado para que ella vaya guardando los cambios..osea en el primera guardara el reemplazo de las e y las guardara en txtCifrado y despues txtCifrado se reemplazaran las "o" y asi
    document.getElementById("imgDer").style.display = "none";//para cuando se haga clic se borre la imagen de la caja de la caja
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;//para q aparezca en la caja de texto el resultado del input
    document.getElementById("copiar").style.display = "show";//esto lo coloco para que el boton solo aparezca si hay texto q copiar
    document.getElementById("copiar").style.display = "inherit";
}
function copiar(){
    var contenido = document.querySelector("#texto2");//*para capturar todo loque este en la caja de texto*/
    contenido.select();//para que seleccione todo el contenido que este en la caja de texto
    document.execCommand("copy");/*para copiar por ejemplo si se pone cut es cortar*/
    alert("se copio");
}
