var listaDeCompras = [];
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga";

console.log(listaDeCompras.length);

var elementoDelArray = listaDeCompras[1];

console.log(elementoDelArray);

var colores = ["amarillo", "azul", "verde"];
colores.push("rojo"); // Agregar un al final del array
colores.unshift("morado"); // Agregar a principio del array
colores.pop(); // Eliminar el ultimo elemento
colores.shift(); // Eliminar el primero elemento

console.log(colores);

var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes("Dali");
console.log(incluyeDali);

var numeros = [ 6, 7, 8, 9, 10];

var cumplenCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplenCondicion);

var palabra = "Henri";
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);

palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

var numeros = [1, 2, 3, 4];
numeros.forEach((num) => console.log(num));
numeros.forEach((num) => {if (num === 3) {console.log(num)}});

var masUno = numeros.map((num) => {
    return num + 1;
});
console.log(masUno);

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Agustín');
}
console.log(arr);