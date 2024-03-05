var deportes = { 
    conBalon: ["Fútbol", "Basketball", "Rugby"], 
    sinBalon: ["Boxeo, Natación, Trekking"]
};

var persona = {nombre: "Agustín", 
apellido: "Ceschin", 
estudios: {esPrpgramador: true}
};
persona.edad = 23;

var autos = {};
autos.marcas = ["Ford", "Chevrolet", "Audio", "BMW"];

delete autos.marcas;

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comida = {};

function comidas (propUno, propDos) {
    comida.propUno = ["Frutas", "Vegetales"];
    comida[propDos] = ["Carne", "Mariscos"];
}
comidas('Saludable', 'noSaludable');
console.log(comida);

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre'); // false

console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro); // [ autor, genero, año ]

console.log(todasLasPropiedades);

for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }

 //THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };

 
 
 