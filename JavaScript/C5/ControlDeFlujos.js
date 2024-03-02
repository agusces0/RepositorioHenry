function viajar(destino) {
    if (destino === "Brasil") {
        console.log("Gire a la izquierda")
    } else if (destino === "Argentina") {
        console.log("Gire a la izquierda")
    } else {
        console.log("Nos perdimos")
    }
}

viajar("2")

for (var i = 1 ; i <= 10 ; i++){
    console.log(i)
}

function puedeManejar(edad) {
    if (edad >= 18){

        console.log("True")
        
    } else { console.log("False") }
}

puedeManejar(20);