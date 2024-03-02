var suma = 0;
/*suma = suma + 1;
suma + suma + 1;
suma + suma + 2;
suma + suma + 3;
suma + suma + 4;

console.log(suma);*/

for (var i = 0; i < 5; i++) {
    suma = suma + i;
    console.log("Variable de iteración " + i);
}
console.log("Variable suma " + suma);

suma = 0;

while (suma < 3) {
    suma = suma + 1;
    console.log(suma);
}

switch (store) {
    case "Naranjas":
      console.log("El kilogramo de naranjas cuesta $0.59.");
      break;
    case "Manzanas":
      console.log("El kilogramo de manzanas cuesta $0.32.");
      break;
    case "Bananas":
      console.log("El kilogramo de bananas cuesta $0.48.");
      break;
    default:
        console.log("Lo lamentamos, por el momento no disponemos de " + store + ".");
}

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);