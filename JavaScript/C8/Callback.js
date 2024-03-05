var devuelvoUsuario = function () {
    return "Agustín";
}

var devuelvoSaludo = function () {
    return "Hola";
};

var saludar = (cb1, cb2) => {
    return cb1, " ", cb2;
};

var salida = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(salida);