const palabra = "HEROE"

//const prueba = /([A-Z])\p{M}/g.test(palabra)
const prueba = !/([ÁÉÍÓÚ])\w/g.test(palabra)

const palabraCambio = palabra.replace()

console.log(prueba);