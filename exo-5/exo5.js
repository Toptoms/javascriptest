// you can write js here

console.log('exo-5');

var input = prompt('que veux-tu dire aux baleines ? ');
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var resultArray1 = [];
var resultArray2 = [];
input = input.toLowerCase();

//methode double boucles avec un foreach §

for (var i = 0; i < input.length; i++) {

    vowels.forEach(function (element) {
        if (input[i] === element) {
            resultArray1.push(input[i]);
        };
    });
};

//methode avec indexOf !
var res = resultArray1.join('');
console.log('resulta1: ' + res.toUpperCase());

for (var i = 0; i < input.length; i++) {
    let v = vowels.indexOf(input[i]);// compare input[i] au tableau de vowels si c'est egale il indique l'index 

    if (v > -1) {// si la comparaison est egale l'index sera poisitif du coup on retient la lettre et on l'envoie dans le tableau
        resultArray2.push(input[i]);
    };
};

var res = resultArray2.join('');
console.log('resulta2: ' + res.toUpperCase());