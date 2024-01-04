const INICIO = document.getElementById('btnbuscar');
const Radiost = document.getElementsByName('tipop');
const NUMERO = document.getElementById('txtin');
const dibujo = document.getElementById('consola');
const Aviso = document.getElementById('avisos');
var list;
var selecion = "";
function inicio() {
    Aviso.innerText = "";
    dibujo.innerText = "";
    crealista();
    if (comprobarlote && selecion != "") {
        console.log("compuebo si");
        dibujo.innerText = comprueboResultado();
    }
    else if (selecion == "") {
        Aviso.innerText = "SELECIONAR NUMERO TERMINACION O REINTEGRO";
    }{
        console.log("compuebo no");
        
    }
}



function crealista() {
    list = listapremios.split("\n");
}
function completo(numIntroducido) {
    console.log("completo");
    let pr = "";
    if (numIntroducido.length == 5) {
        for (let index = 0; index < list.length; index++) {
            let a = list[index].split(",");
            if (a[0] == numIntroducido) {
                pr += `Nº ${a[0]}, Vendido en ${a[1]}. Premio ${a[2]}\n`;
            }
         }
        
    }
    else Aviso.innerText = "Numero no compatible";
    if (pr == "") {
        Aviso.innerText = "ESE NUMERO NO TIENE PREMIO";
        return pr;
    }else return pr;
}
function terminacion(numIntroducido) {
    console.log("terminacion");
    let pr = "";
    if (numIntroducido.length == 2) {
        for (let index = 0; index < list.length; index++) {
            let a = list[index].split(",");
            
            if (a[0].substr(3, 4) == numIntroducido) {
                pr += `Nº ${a[0]}, Vendido en ${a[1]}. Premio ${a[2]}\n`;
            }
         }
    }
    else Aviso.innerText = "Numero no compatible";
    if (pr == "") {
        Aviso.innerText = "ESE NUMERO NO TIENE PREMIO";
        return pr;
    }else return pr;
}
function reintegro(numIntroducido) {
    console.log("reintegro");
    let pr = "";
    if (numIntroducido.length == 1) {
        for (let index = 0; index < list.length; index++) {
            let a = list[index].split(",");
            console.log(a[0].charAt(4));
            if (a[0].charAt(4) == numIntroducido) {
                pr += `Nº ${a[0]}, Vendido en ${a[1]}. Premio ${a[2]}\n`;
            }
        }
    }
    else Aviso.innerText = "Numero no compatible";
    if (pr == "") {
        Aviso.innerText = "ESE NUMERO NO TIENE PREMIO";
        return pr;
    }else return pr;
}

function comprueboResultado() {
    let premiados = "hola";
    let numIntroducido = NUMERO.value;
    switch (selecion) {
        case "C":
            premiados = completo(numIntroducido);
            break;
        case "R":
            premiados = reintegro(numIntroducido);
            break;
        case "T":
            premiados = terminacion(numIntroducido);
            break;
        default: console.log("selecione una opcion");
            break;
    }
    console.log(premiados);
    return premiados;
}
function comprobarlote() {
    console.log("comprobar " + NUMERO.length);
    if (isNaN(NUMERO.value) && NUMERO.length <= 5 && NUMERO.length > 0) {
        console.log("compruebo True");
        return true;
    }
    else {
        console.log("compruebo False");
        Aviso.innerText = "Numero no valido";
        return false;
}}




function tipobusqueda() {
    for (let index = 0; index < Radiost.length; index++) {
        if (Radiost[index].checked) {
            selecion = Radiost[index].value;
            console.log(selecion);
            
            break;
        }
        
    }
}


function radioscambio() {
    for (let index = 0; index < Radiost.length; index++) {
        Radiost[index].addEventListener('change',tipobusqueda);
    }
}


radioscambio();
INICIO.addEventListener('click',inicio);