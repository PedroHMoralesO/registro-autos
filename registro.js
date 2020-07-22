// DECLARANDO LAS VARIABLES
var autos = 0; // AUTOS INICIARA EN 0 PERO CAMBIARA AL ENTRAR EN LA FUNCION
var dato1; // TODOS LOS DATOS QUE SE AGREGARAN AL ARRAY: auto
var dato2;
var dato3;
var dato4;
var dato5;
var identificador=[]; // ESTE ARRAY GUARDARA LOS REGISTROS DE LOS AUTOS PARA LA CONSULTA
var ids; // ESTAS VARIABLES SON PARA GUARDAR EL CONTENIDO DE LA VARIABLE CONTADOR Y TRANSFORMARLA DE NUMERO A TEXTO
var ids2 =" "; // PARTE DE LAS VARIABLES PARA CONVERTIR A TEXTO Y SE INICIA CON UN ESPACIO VACIO
var contador = 0; // ESTA VARIABLE PERMITE GENERAR LOS FOLIOS SIN QUE SE REPITAN Y APARTE SE ACUMULAN

// DISPARADORES DE FUNCIONES, VINCULAN LOS BOTONES DE REGISTRO Y CONSULTA A LAS FUNCIONES CORRESPONDIENTES
document.getElementById("boton1").onclick = automata;
document.getElementById("boton2").onclick = request;

//  ESTA FUNCION GENERA LOS REGISTROS 
function automata(){
    autos = Number(document.getElementById("cars").value); // CON ESTO SE LE DA EL VALOR QUE AYAMOS ESCRITO EN EL INPUT
    
    for(let i = 1; i <= autos; i++){
        dato1 = prompt("Que marca es el Auto"); // CON AYUDA DEL CICLO FOR SE TOMAN LOS DATOS VIA INPUTS EMERGENTES LOS CUALES TE PREGUNTAN LOS DATOS NECESARIOS Y LOS GUARDAN EL LA VARIABLE
        dato2 = prompt("Que modelo es el Auto");
        dato3 = prompt("Que color es el Auto");
        dato4 = prompt("De que año es el Auto");
        dato5 = prompt("Cuales son las placas del Auto");
        console.log(i) // CODIGO SOLO PARA PRUEBAS
        contador++; // AQUI POR CADA CICLO SUMAMOS 1 AL CONTADOR QUE GENERARA LOS FOLIOS Y ASIGNARA EL LUGAR DEL ARRAY IDENTIFICADOR EN EL QUE GUARDAREMOS LOS DATOS
        identificador[contador] = new auto(dato1, dato2, dato3, dato4, dato5); // AQUI SE GUARDAN LOS DATOS EN EL ARRAY
        console.log(contador); // CODIGO SOLO PARA PRUEBAS
        console.log(identificador[contador]); // CODIGO SOLO PARA PRUEBAS
        ids=String(contador); //CONVERTIMOS LA VARIABLE CONTADOR EN TEXTO
        ids2=ids2+"  "+ids + " , "; // SE CONCATENAN LOS TEXTOS PARA MOSTRARLOS DESPUES
    }
    document.getElementById('resultado2').innerHTML="Tus ID son: "; // AL TERMINAR EL CICLO SE MUESTRA EL TEXTO EN EL HTML
    document.getElementById('resultado1').innerHTML=ids2; // MOSTRARA LOS IDS EN EL HTML
    ids2 = " ";
} 

// ESTA ES LA FUNCION CONSTRUCTORA LA CUAL CREA EL OBJETO, SE LE PASAN LOS DATOS GUARDADOS ANTERIORMENTE EN LAS VARIABLES
function auto(marca, modelo, color, annio, placas){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.annio = annio;
    this.placas = placas;
}
// ESTA FUNCION SE ENCARGA DE MOSTRAR LOS MENSAJES EN EL HTML Y DE REALIZAR LA CONSULTA DE LOS OBJETOS GUARDADOS
function request(){
    let temporal = Number(document.getElementById("search").value); // SE GENERA ESTA VARIABLE PARA CAPTURAR EL VALOR DEL IMPUT DE CONSULTA
    document.getElementById('resultado2').innerHTML="El resultado de tu consulta es: ";
    // CON AYUDA DE ESTE IF LOGRAREMOS EVALUAR SI SE HAN CAPTURADO AUTOS, SI EL CONTADOR ES 0 SIGNIFICA QUE NO Y POR LO TANTO NOS MANDARA ESTE MENSAJE
    if(contador === 0){
        document.getElementById('resultado1').innerHTML=" No hay registros, por favor registra primero tus automoviles "; 
    }
    // EN CASO DE QUE EN EL CAMPO DE CONSULTA PONGAMOS UN ID QUE NO ESTA, COMO EN ESTE CASO VAMOS DEL REGISTO 1 Y SIGUE DE 1 EN 1 SOLO PASARIA ESTE ERROR SI PONEMOS UN NUMERO MAYOR AL CONTADOR 
    else if(temporal > contador){
        document.getElementById('resultado1').innerHTML=" Ese registro no existe, revisalo e intenta de nuevo.";
    }
    // EN CASO DE QUE EL CONTADOR NO SEA 0 Y QUE EL VALOR QUE BUSCAMOS SEA = O MENOR AL CONTADOR BUSCARA EL REGISTRO EN EL ARRAY IDENTIFICADOR Y LO MOSTRARA EN EL HTML
    else{
        document.getElementById('resultado1').innerHTML= "MARCA: " + identificador[temporal].marca + " , MODELO: " + identificador[temporal].modelo + " , AÑO: " + identificador[temporal].annio + " , COLOR: " + identificador[temporal].color + " , PLACAS: " + identificador[temporal].placas;
    }
}
// ESTE PROGRAMA SOLO FUNCIONA MIENTRAS ESTE ACTIVA LA PAGINA, SI SE RECARGA SE PERDERA EL VALOR DE LAS VARIABLES Y RESETEARA LOS DATOS