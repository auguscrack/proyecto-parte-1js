alert("Stock de Juegos")

const juegos = []

let juegoAgregar
let nombre
let marca
let formato
let anio
let precio

class Juego {
    constructor(nombre, marca, formato, anio, precio) {
        this.nombre = nombre;
        this.marca = marca;
        this.formato = formato;
        this.año = anio;
        this.precio = precio;
    }
}

let cantidadJuegos = parseInt(prompt("¿Cuántos juegos desea agregar?"))

for(let i=0;i<cantidadJuegos;i++){
    nombre = prompt("Ingrese el nombre del juego")
    marca = prompt("Ingrese la marca del juego")
    formato = prompt("Ingrese el formato del juego")
    anio = parseInt(prompt("Ingrese el año del juego"))
    precio = parseInt(prompt("Ingrese el precio del juego"))
    juegoAgregar = new Juego(nombre,marca,formato,anio,precio)
    juegos.push(juegoAgregar)
    console.log(juegos)
}

let preguntar = prompt("¿Quiere agregar mas juegos?")
if (preguntar == "si") {

    let preguntarCuantos = parseInt(prompt("Diga en numeros cuantos juegos va a agregar"))

    for(let i = 0; i <= preguntarCuantos; i++) {
        nombre = prompt("Ingrese el nombre del juego")
        marca = prompt("Ingrese la marca del juego")
        formato = prompt("Ingrese el formato del juego")
        anio = parseInt(prompt("Ingrese el año del juego"))
        precio = parseInt(prompt("Ingrese el precio del juego"))
        juegoAgregar = new Juego(nombre,marca,formato,anio,precio)
        juegos.push(juegoAgregar)
        console.log(juegos)
    }

} else if (preguntar == "no") {
    let preguntarDos = prompt("¿Desea eliminar un juego?")

    if (preguntarDos == "no") {
        alert("Gracias vuelva pronto")
        console.log(juegos)

    } else if (preguntarDos == "si") {
        let juegoEliminar = prompt("Ingrese el nombre del juego que quiere eliminar")
        let nombreJuegos = juegos.map(elemento => elemento.nombre)
        let buscarJuego = nombreJuegos.indexOf(juegoEliminar)
        if (buscarJuego!=-1) {
            juegos.splice(buscarJuego, 1)
            console.log(juegos)
        } else {
            alert("Juego no encontrado")
        }
    }
}
console.log(juegos)