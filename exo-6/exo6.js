// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

var team = {
    players: [
        {
            firstName: "pablo",
            lastName: "Sanchez",
            age: 11
        }
    ],
    games: [{
        opponent: "Broncos",
        teamPoints: 10,
        opponentPoints: 10
    }]
};

let addPlayer = (first, last, age) => {// injection d'un nouvel objet dans le tableau methode1
    const player = {}
    player.firstName = first;
    player.lastName = last;
    player.age = age;
    team.players.push(player);

};

let addGame = (oppo, tpoint, opoint) => {// injection d'un nouvel objet dans le tableau methode2
    team.games.push({
        opponent: oppo,
        teamPoints: tpoint,
        opponentPoints: opoint
    });

};


addPlayer('roger', 'beer', 20);// appel de la fonction pour crer un nouveau joueur 
addGame('france', 10, 10);// appel de la fonction pour crer un nouveau match 
addPlayer('smithers', 'waylon', 30);
addGame('berlgique', 20, 10);
addPlayer('bernard', 'bons', 10);
addGame('finlande', 10, 10);


// addition du score******************************************************************
var score = 0;
team.games.forEach(function (element) {
    score = element.teamPoints + score;
});
// moyenne du score ***************************************************************
var score1 = 0;
var moy = 0;
team.games.forEach(function (element) {
    moy = moy + 1;
    score1 = element.opponentPoints + score1;
    
});
var moyscore = score1 / moy;
// trie de l'age**********************************************************************
let trier = () => {
    var ager = 0;
    team.players.forEach(function (elemet) {//
        if (elemet.age > ager) {
            ager = elemet.age;
        };
    })
    return ager
};
/*var tab =[];
team.players.forEach(function (element) {
    
    tab.push(element.firstName);
    tab.sort();
});

console.log(tab);*/

//trier les joueurs par ordre alphabetique methode compressé********************************************************
console.log(team.players.sort(function(a, b){
return a.firstName.localeCompare (b.firstName)
}));

//trier les joueurs par ordre alphabetique methode etendu ********************************************************
function compare(a,b) {
    if (a.firstName < b.firstName)
      return -1;
    if (a.firstName > b.firstName)
      return 1;
    return 0;
  }


console.log(team.players.sort(compare));
console.log(trier());
console.log(moyscore);
console.log(score1);
console.log(score);
console.log(team.players);
console.log(team.games);

// afficher le nombre de voitures de Joe

// changer le nombre de salle de bains de Joe : il n'en possède au'une.

// Joe vient d'acquérir un garage changer la structure pour le refléter.