var autos = 0;
var dato1;
var dato2;
var dato3;
var dato4;
var dato5;
var identificador=[];
var ids;
var ids2 =" ";


document.getElementById("boton1").onclick = automata;
document.getElementById("boton2").onclick = request;


function automata(autos){
    autos = Number(document.getElementById("cars").value);
    for(var i = 1; i <= autos; i++){
        dato1 = prompt("Que marca es el Auto");
        dato2 = prompt("Que modelo es el Auto");
        dato3 = prompt("Que color es el Auto");
        dato4 = prompt("De que año es el Auto");
        dato5 = prompt("Cuales son las placas del Auto");
        identificador[i-1] = new auto(dato1, dato2, dato3, dato4, dato5);
        console.log(identificador[i-1]);
        ids=String(i);
        ids2=ids2+" "+ids;
    }
    document.getElementById('resultado1').innerHTML=ids2;
} 


function auto(marca, modelo, color, annio, placas){
    this.marca = marca;
    this.modelo = modelo;
    this.modelo = color;
    this.annio = annio;
    this.placas = placas;
}

function request(){
    let temporal = Number(document.getElementById("search").value);
    document.getElementById('resultado2').innerHTML="El resultado de tu consulta es: ";
    if(ids2===" "){
        document.getElementById('resultado1').innerHTML=" No hay registros, por favor registra primero tus automoviles "; 
    } else{
        document.getElementById('resultado1').innerHTML= identificador[temporal-1].marca + " " + identificador[temporal-1].modelo + " " + identificador[temporal-1].annio + " " + identificador[temporal-1].placas;
    }
}