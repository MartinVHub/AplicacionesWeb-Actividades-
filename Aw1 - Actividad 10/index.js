//  1. ESTRUCTURAS DE CONTROL CONDICIONALES 

let edad = 20;

if (edad >= 18) {
    console.log("Es mayor de edad");
} 
else {
    console.log("Es menor de edad");
}


let numero = 7;

if (numero % 2 === 0) {
    console.log("El número es par");
} 
else {
    console.log("El número es impar");
}


let nota = 8;

if (nota < 4) {
    console.log("Reprobado");
} 
else if (nota <= 7) {
    console.log("Aprobado");
} 
else {
    console.log("Excelente");
}


//  2. ESTRUCTURAS DE CONTROL BUCLES 


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 10; i >= 1; i--) {
    console.log(i);
}


for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}


for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log('El número ' + i + ' es par');
    } else {
        console.log('El número ' + i +'  es impar');
    }
}