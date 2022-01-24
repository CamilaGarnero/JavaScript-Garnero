//Condicionales
let numero = prompt ("Introduce el número del mes que quieres saber");
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Verano";
    alert("Es la estación de Verano");
}
else if( mes == 3 || mes == 4 || mes == 5){
    estacion = "Otoño";
    alert("Es la estación de Otoño");
}
else if( mes == 6 || mes == 7 || mes == 8){
    estacion = "Invierno";
    alert("Es la estación de Invierno");
}
else if ( mes == 9 || mes == 10 || mes == 11){
    estacion = "Primavera";
    alert("Es la estación de Primavera");
}else {
    estacion = "Valor Incorrecto";
}
console.log(estacion);

//Ciclo For
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue;
    }else {
        console.log(contador);
    }
}

//Ciclo While
let contador = 0;

while( contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del Ciclo")

//Ciclo Do...While
let contador = 0

do{
    console.log(contador);
    contador++;
}while(contador < 3);
console.log("Fin del Ciclo");