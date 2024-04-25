// EJERCICIOS ARRAYS PT2

// #1 CREA UNA LISTA QUE ALMACENE 10 NOMBRES COMPLETOS Y ORDENADOS ALFABETICAMENTE

let nombres = ["Juan Perez Garcia",
    "Maria Rodriguez Lopez",
    "Luis Martinez Fernandez",
    "Ana Gonzalez Sanchez",
    "Pedro Sanchez Gomez",
    "Laura Diaz Perez",
    "Carlos Fernandez Rodriguez",
    "Sofia Gomez Martinez",
    "Diego Lopez Gonzalez",
    "Elena Perez Fernandez"]

console.log(nombres.sort())

// #2 CREA UNA 

// #3 UTILIZA UN BUCLE FOR PARA SUMAR TODOS LOS ELEMENTOS DE UN ARRAY DE NÙMEROS.

let numeros = [1, 2, 3, 4, 5, 6, 7]
let suma = 0
numeros.forEach(numero => {
    suma += numero //es el acumulador.

});

console.log(suma)

// #4 ITERAR SOBRE LAS PROPIEDADES DE UN OBJETO UTILIZANDO UN BUCLE FOR..IN E IMPRIMIR SUS VALORES.

for (let key in numeros) {
    console.log(key)
}

// #5 UTILIZAR UN BUCLE FOR ..OF PARA SUMAR TODOS LOS NÙMEROS DE UN ARRAY.

for (let numero of numeros) {
    suma += numero
}
console.log(suma);

// #6 UTILIZAR EL MÈTODO FOR..EACH PARA IMPRIMIR EN LA CONSOLA TODOS LOS ELEMENTOS DE UN ARRAY DE STRINGS

nombres.forEach(nombre => {
    console.log(nombre)
});

// #7 UTILIZAR EL METODO MAP() PARA OBTENER UN NUEVO ARRAY CON CADA ELEMENTO DE UN ARRAY DE NUMEROS MULTIPLICADO POR 2

let resultado = numeros.map(numero => numero * 2)

console.log(resultado)

// #8 UTILIZAR EL MÈTODO FILTER() PARA OBTENER UN NUEVO ARRAY  CON SOLO LOS NUMEROS PARES DE UN ARRAY DADO

let numbersPares = numeros.filter(numero => numero % 2 == 0)

console.log(numbersPares)