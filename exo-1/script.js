// you can write js here
console.log('hello from file');
var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");
var celsius = kelvin - 273;// la temperture celsius est toujours inferieur de 273 à kelvin
var fahrenheit = celsius * (9/5) + 32; // on reprend celsius 
console.log('Celsius '+ celsius)
console.log('Fahrenheit '+ fahrenheit)
console.log('Fahrenheit arrondi '+ Math.floor( fahrenheit))