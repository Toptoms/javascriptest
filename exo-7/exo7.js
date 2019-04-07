console.log("exo-7");

var typetraduit = {

    "car": "caisse",
    "house": "baraque",
    "game": "jeu",
    "videogame": "jeuvideo",
    "show": "spectacle"
};

/*for (var i=0; i < jsonDatas.length; i++) {
    var tableau = Object.keys(typetraduit);
    tableau.forEach(element1 => {
        if (jsonDatas[i].type === element1){
            jsonDatas[i].categorie = typetraduit[element1];// ajout d'une propriete dans l'objet 

        };
    });
};

/*jsonDatas.forEach(element0 => {
    var tableau = Object.keys(typetraduit);
    tableau.forEach(element1 => {
        if (element0.type === element1) {
            element0.categorie = typetraduit[element1];// ajout d'une propriete dans l'objet 

        };
    });
});*/

/*jsonDatas.forEach(element0 => {
    var tableau = Object.keys(typetraduit);
    let v = tableau.indexOf(element0.type)
    if (v > -1) {
        element0.type = typetraduit[tableau[v]];
    };
});*/

function show() {
      //trier les joueurs par ordre alphabetique methode compressé********************************************************
      if (document.getElementById("nom").checked == true) {
        jsonDatas.sort(function (a, b) {
            return a.name.localeCompare(b.name)
        });
    }
    
    var sel = document.getElementById("type");

    if (document.getElementById("stock").checked == true) {
        jsonDatas.forEach(element => {

            if (element.type === sel.value) {
                document.getElementById('result').innerHTML += '<br/>' + element.name + ' ' + element.type + ' ' + element.description + ' ' + element.price + ' ' + element.quantity;
            };
        });
    }

    else {
        jsonDatas.forEach(element => {

            if (element.type === sel.value && element.quantity > 0) {
                document.getElementById('result').innerHTML += '<br/>' + element.name + ' ' + element.type + ' ' + element.description + ' ' + element.price + ' ' + element.quantity;
            }
        });

    }
  
}



console.log(sel);
console.log(jsonDatas);