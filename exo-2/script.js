// you can write js here
console.log('exo-2');


var nom = prompt("si tu es pas inscrit quel est ton nom ?");
var inscrit = nom || 'default';
var raceNumber = 10;
var age = prompt("quel est ton age ?");

if (inscrit === nom) {

    raceNumber = raceNumber + 1000;
    console.log('Age: ' + age);
    console.log('Numero: ' + raceNumber);
}

if (inscrit === nom && age > 18) {

    console.log('You will race at 9:30 am');
}

else if (inscrit === nom || age > 18) {

    console.log('You will race at 11:00 am ');
    raceNumber = raceNumber + 1000;
    console.log('Numero: ' + raceNumber);
}

else if (age < 18 || inscrit === 'default' ) {

    console.log('You will race at 12:30 pm ');
    raceNumber = raceNumber + 1000;
    console.log('Numero: ' + raceNumber);
}

else {

    console.log('Go to see the registration desk');
}


