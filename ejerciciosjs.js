// ejercicio 1
let n1 = 1
let n2 = 1
resultados = n1+n2
console.log(resultados)

// ejercicio 2
let val1= 1
let val2= 2
let val3= 3
 if (val2>val1) {
    console.log("valor 2 es mayor que valor 1");
    
 } if (val3>val2) {
    console.log("valor 3 es mayor que valor 2");
 } else {
    console.log("es menor");
    
 }


// ejercicio 3
 let palabra = "palabra";

let resultado = 0;

for (let i = 0; palabra[i] !== undefined; i++) {
  resultado++;
}
console.log(resultado);



// ejercicio 4
let numero = 77;

if (numero % 2 == 0) {
    console.log("es un número par.");
} else {
    console.log("es un número impar.");
}

// ejercicio 5
let palabra2 = "papu"; 
let n = 5;       
   for (let i = 0; i < n; i++) {
    console.log(palabra2);
   }




// ejercicio 6
let num1 = 2;
let num2 = 6;

if (num1 < num2) {
  for (let i = num1 + 1; i < num2; i++) {
    console.log(i);
  }
} else if (num1 > num2) {
  for (let i = num1 - 1; i > num2; i--) {
    console.log(i);
  }
} else {
  console.log("No hay números entre medio");
}

// ejercicio 7
let valor1 = 5;
let valor2 = 20;

let inicio = Math.min(valor1, valor2);
let fin = Math.max(valor1, valor2);

for (let i = inicio + 1; i < fin; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// ejercicio 8
for (let i = 1; i < 100; i++) {
   if (i % 2 === 0 && i % 3 === 0) {
     console.log(i);
   }
 }


// ejercicio 9
 let numeros = [3, 7, 2, 5, 10];

let suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);

console.log("La suma es:", suma);

// ejercicio 10
let valores = [3, 7, 2, 8, 5, 10];

let totalPares = valores
  .filter(numero => numero % 2 === 0)
  .reduce((suma, actual) => suma + actual, 0);

console.log("La suma de los pares es:", totalPares);


// ejercicio 11
let texto = "bananirou";
let cuentaLetras = {};

for (let caracter of texto) {
  if (cuentaLetras[caracter]) {
    cuentaLetras[caracter]++;
  } else {
    cuentaLetras[caracter] = 1;
  }
}

console.log(cuentaLetras);

// ejercicio 12
let personas = [
   { nombre: "Juan", sexo: "Masculino", edad: 25 },
   { nombre: "Ana", sexo: "Femenino", edad: 30 },
   { nombre: "Carlos", sexo: "Masculino", edad: 22 },
   { nombre: "Laura", sexo: "Femenino", edad: 35 },
   { nombre: "Pedro", sexo: "Masculino", edad: 18 },
   { nombre: "María", sexo: "Femenino", edad: 28 }
 ];
 

 function calcularPromedioEdad(personas) {
   let sumaEdades = personas.reduce((suma, persona) => suma + persona.edad, 0);
   return sumaEdades / personas.length;
 }
 
 
 function mujerConMayorEdad(personas) {
   return personas.filter(p => p.sexo === "Femenino")
 .reduce((mayor, persona) => persona.edad > mayor.edad ? persona : mayor);
 }
 
 
 function hombreConMenorEdad(personas) {
   return personas.filter(p => p.sexo === "Masculino")
 .reduce((menor, persona) => persona.edad < menor.edad ? persona : menor);
 }
 

 function promedioEdadMujeres(personas) {
   let mujeres = personas.filter(p => p.sexo === "Femenino");
   let sumaEdadMujeres = mujeres.reduce((suma, persona) => suma + persona.edad, 0);
   return sumaEdadMujeres / mujeres.length;
 }
 
 
 let promedioEdad = calcularPromedioEdad(personas);
 let mujerMayorEdad = mujerConMayorEdad(personas);
 let hombreMenorEdad = hombreConMenorEdad(personas);
 let promedioEdadMujeresResultado = promedioEdadMujeres(personas); 

 console.log("Promedio de edad:", promedioEdad);
 console.log("Mujer con mayor edad:", mujerMayorEdad.nombre);
 console.log("Hombre con menor edad:", hombreMenorEdad.nombre);
 console.log("Promedio de edad de las mujeres:", promedioEdadMujeresResultado);

// ejercicio 14
 let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosDivisiblesPorDos = listaNumeros.filter(numero => numero % 2 === 0);

console.log(numerosDivisiblesPorDos);


// ejercicio 15
function obtenerDivisores(inicio, fin, divisor) {
   let numerosDivisibles = [];
   
   for (let i = inicio; i <= fin; i++) {
     if (i % divisor === 0) {
       numerosDivisibles.push(i);
     }
   }
   
   return numerosDivisibles;
 }
 

 let listaDivisibles = obtenerDivisores(1, 20, 3);
 console.log(listaDivisibles);  