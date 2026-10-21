

// a. Sin retorno de valor
function saludar() {
  console.log("¡Hola, bienvenido!");
}

saludar();

// b. Sin retorno de valor template strings
function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`);
}

saludarPersona("Martín");

// c. Con retorno de valor 
function esMayorDeEdad(edad) {
  return edad >= 18;
}

let esMayor = esMayorDeEdad(20);
console.log(esMayor);


// --- 2. FUNCIONES DE FLECHA ---

// a. Conversión 

const esMayorDeEdadFlecha = (edad) => edad >= 18;

let esMayorFlecha = esMayorDeEdadFlecha(15);
console.log(esMayorFlecha);


const compararNumeros = (num1, num2) => {
  if (num1 < num2) {
    console.log(`El número ${num1} es menor que ${num2}`);
  } else if (num1 === num2) {
    console.log(`El número ${num1} es igual que ${num2}`);
  } else {
    console.log(`El número ${num1} es mayor que ${num2}`);
  }
};


for (let i = 3; i <= 7; i++) {
  compararNumeros(i, 5);
}


// --- 3. FUNCIONES CALLBACK ---

const suma = (a, b) => {
  console.log(`El resultado de la suma es ${a + b}`);
};

const resta = (a, b) => {
  console.log(`El resultado de la resta es ${a - b}`);
};


const operacion = (num1, num2, callback) => {
  if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)) {
    console.log("Debe ingresar solo números.");
    return;
  }
  callback(num1, num2);
};

// Pruebas de funcionamiento
operacion(10, 5, suma);
operacion(10, 5, resta);
operacion("diez", 5, suma);